/* PRIED shared behavior — nav, reveals, detail-page rendering, filters.
   Loaded on every page after data.js. All page-specific logic is guarded
   by element existence, so this file is safe to run anywhere. */

/* ── SHARED NAV + DETAIL-PAGE ROUTING ── */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        const open = nav.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => {
          nav.classList.remove('nav-open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
    // Throttle to one update per frame and mark passive so scrolling stays smooth.
    let navTick = false;
    window.addEventListener('scroll', () => {
      if (navTick) return;
      navTick = true;
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        navTick = false;
      });
    }, { passive: true });

    // Highlight the nav item for the current page. Detail pages map to their
    // parent section (article→news, event→events, job→careers).
    const fileOf = href => (href || '').split('/').pop().split(/[?#]/)[0];
    const current = fileOf(location.pathname) || 'index.html';
    const parentSection = { 'article': 'news', 'event': 'events', 'job': 'careers' };
    const activeFile = parentSection[current] || current;

    nav.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', fileOf(a.getAttribute('href')) === activeFile);
    });
    // A dropdown trigger is active when any link in its submenu targets the active page.
    nav.querySelectorAll('.nav-item-dropdown').forEach(dd => {
      const trigger = dd.querySelector('.dropdown-trigger');
      if (!trigger) return;
      const inMenu = Array.from(dd.querySelectorAll('.dropdown-menu a'))
        .some(a => fileOf(a.getAttribute('href')) === activeFile);
      if (inMenu) trigger.classList.add('active');
    });
  }

  // Team profile expand
  document.querySelectorAll('.team-card').forEach(card => {
    const btn = card.querySelector('.tc-read-more');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = card.classList.toggle('expanded');
        btn.textContent = isExpanded ? 'Read Less ←' : 'Read Full Profile →';
      });
    }
  });

  // Render detail pages from ?slug= (renderers default to a fallback item)
  const slug = new URLSearchParams(location.search).get('slug') || '';
  if (document.getElementById('page-article') && typeof renderArticle === 'function') renderArticle(slug);
  if (document.getElementById('page-event') && typeof renderEvent === 'function') renderEvent(slug);
  if (document.getElementById('page-job') && typeof renderJob === 'function') renderJob(slug);

  // Reveal after all dynamic content (events grid, detail renders) is injected,
  // so dynamically-added .rv elements are observed too.
  triggerReveals();
});

    /* ── SCROLL REVEAL ── */
    function triggerReveals() {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); } });
      }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
      document.querySelectorAll('.page.active .rv').forEach(el => { el.classList.remove('on'); obs.observe(el); });
    }

    /* ── FILTER CHIPS (Studies) ── */
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chip.closest('.studies-filter-bar').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });

    /* ── SIDEBAR LINKS (Briefs) ── */
    document.querySelectorAll('.bs-link').forEach(link => {
      link.addEventListener('click', () => {
        link.closest('.bs-links').querySelectorAll('.bs-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    /* ── PAGINATION (Briefs) ── */
    (function () {
      const list = document.querySelector('#page-briefs .briefs-list');
      const pager = document.getElementById('briefsPagination');
      if (!list || !pager) return;
      const rows = Array.from(list.querySelectorAll('.brief-row'));
      const perPage = 8;
      const pageCount = Math.ceil(rows.length / perPage);
      let current = 1;

      function render(p, scroll) {
        current = Math.min(Math.max(p, 1), pageCount);
        rows.forEach((row, i) => {
          const show = i >= (current - 1) * perPage && i < current * perPage;
          row.style.display = show ? '' : 'none';
          row.style.borderRadius = '';
          if (show) row.classList.add('on');
        });
        // Round the outer corners of the first/last visible row on this page
        const visible = rows.filter(r => r.style.display !== 'none');
        if (visible.length) {
          visible[0].style.borderRadius = 'var(--r) var(--r) 0 0';
          visible[visible.length - 1].style.borderRadius = '0 0 var(--r) var(--r)';
        }
        pager.querySelectorAll('[data-p]').forEach(b => b.classList.toggle('active', +b.dataset.p === current));
        pager.querySelector('[data-nav="prev"]').disabled = current === 1;
        pager.querySelector('[data-nav="next"]').disabled = current === pageCount;
        if (scroll) document.querySelector('#page-briefs .briefs-layout').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      let html = '<button class="pg-btn pg-prev" data-nav="prev">← Prev</button>';
      for (let i = 1; i <= pageCount; i++) html += '<button class="pg-btn" data-p="' + i + '">' + i + '</button>';
      html += '<button class="pg-btn pg-next" data-nav="next">Next →</button>';
      pager.innerHTML = html;

      pager.addEventListener('click', e => {
        const btn = e.target.closest('button');
        if (!btn || btn.disabled) return;
        if (btn.dataset.nav === 'prev') render(current - 1, true);
        else if (btn.dataset.nav === 'next') render(current + 1, true);
        else if (btn.dataset.p) render(+btn.dataset.p, true);
      });

      render(1, false);
    })();

    /* ── CONTACT FORM ── */
    function handleContactSubmit(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
      .then(() => {
        document.querySelector('.contact-form').style.display = 'none';
        document.getElementById('cf-success').style.display = 'block';
      })
      .catch((error) => alert("There was an issue sending your message. Please try again."));
    }

    /* ── SHARE BUTTONS ── */
    document.querySelectorAll('.as-btn').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent((window.__articleTitle || 'PRIED — Policy Research Institute') + ' — PRIED');
        const actions = [
          () => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`),
          () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`),
          () => { navigator.clipboard.writeText(window.location.href); btn.textContent = '✓'; setTimeout(() => btn.textContent = '🔗', 1500); }
        ];
        if (actions[i]) actions[i]();
      });
    });

    /* ── SUBSCRIBE BUTTONS ── */
    document.querySelectorAll('.nsub-form button').forEach(btn => {
      btn.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.value && input.value.includes('@')) {
          this.textContent = '✓ Subscribed!';
          this.style.background = 'var(--gold)';
          input.value = '';
          setTimeout(() => { this.textContent = 'Subscribe'; this.style.background = ''; }, 3000);
        }
      });
    });

    /* ── ARTICLE DETAIL RENDER ── */
    function renderArticle(slug) {
      const a = ARTICLES[slug] || ARTICLES['crossroads'];
      const $ = id => document.getElementById(id);
      const plainTitle = a.title.replace(/<[^>]+>/g, '');
      window.__articleTitle = plainTitle;
      $('art-crumb').textContent = plainTitle;
      const hero = $('art-hero'); hero.src = a.img; hero.alt = plainTitle;
      $('art-tag').textContent = a.tag;
      $('art-date').textContent = a.date;
      const authorEl = $('art-author'), authorSep = $('art-author-sep');
      if (a.author) { authorEl.innerHTML = 'By <strong>' + a.author + '</strong>'; authorEl.style.display = ''; authorSep.style.display = ''; }
      else { authorEl.style.display = 'none'; authorSep.style.display = 'none'; }
      const src = $('art-source'), srcSep = $('art-source-sep');
      if (a.sourceName) {
        src.href = a.url; src.textContent = a.sourceName + ' ↗';
        src.style.display = ''; srcSep.style.display = '';
      } else { src.style.display = 'none'; srcSep.style.display = 'none'; }
      $('art-title').innerHTML = a.title;
      $('art-body').innerHTML = a.body.map(p => /^[“”]/.test(p) ? '<blockquote>' + p + '</blockquote>' : '<p>' + p + '</p>').join('');
      $('art-tags').innerHTML = (a.tags || []).map(t => '<span class="t-chip">' + t + '</span>').join('');
      const rel = (a.related || []).map(s => ARTICLES[s] && Object.assign({ slug: s }, ARTICLES[s])).filter(Boolean);
      $('art-related').innerHTML = rel.map(r =>
        '<div class="ra-card" data-article="' + r.slug + '"><div class="ra-img"><img src="' + r.img + '" alt="" loading="lazy" onerror="this.style.background=\'var(--cream)\'"></div><div class="ra-body"><div class="ra-tag">' + r.tag + ' · ' + r.date + '</div><h5>' + r.title.replace(/<[^>]+>/g, '') + '</h5></div></div>'
      ).join('');
      $('art-author-name').textContent = a.author || a.sourceName || 'PRIED';
      $('art-author-desc').textContent = a.authorDesc || (a.author
        ? 'Contributor covering energy, climate and policy in Pakistan.'
        : 'Coverage and analysis featured by PRIED — the Policy Research Institute for Equitable Development.');
      $('art-author-link').href = a.url;
    }

    /* ── EVENT DETAIL RENDER + EVENTS GRID ── */
    function renderEvent(slug) {
      const e = EVENTS[slug] || EVENTS['iran-war'];
      const $ = id => document.getElementById(id);
      $('ev-crumb').textContent = e.title;
      const hero = $('ev-hero'); hero.src = e.img; hero.alt = e.title;
      $('ev-tag').textContent = e.cat;
      if (e.date) { $('ev-date').textContent = e.date; $('ev-date').style.display = ''; $('ev-date-sep').style.display = ''; }
      else { $('ev-date').style.display = 'none'; $('ev-date-sep').style.display = 'none'; }
      if (e.loc) { $('ev-loc').textContent = e.loc; $('ev-loc').style.display = ''; $('ev-loc-sep').style.display = ''; }
      else { $('ev-loc').style.display = 'none'; $('ev-loc-sep').style.display = 'none'; }
      $('ev-title').textContent = e.title;
      $('ev-body').innerHTML = e.body.map(p => '<p>' + p + '</p>').join('');
      $('ev-tags').innerHTML = (e.tags || []).map(t => '<span class="t-chip">' + t + '</span>').join('');
      $('ev-detail-list').innerHTML =
        '<div>📅 <strong>Date:</strong> ' + (e.date || 'Not specified') + '</div>' +
        '<div>📍 <strong>Location:</strong> ' + (e.loc || 'Not specified') + '</div>' +
        '<div>🏷️ <strong>Type:</strong> ' + e.cat + '</div>';
      const rel = (e.related || []).map(s => EVENTS[s] && Object.assign({ slug: s }, EVENTS[s])).filter(Boolean);
      $('ev-related').innerHTML = rel.map(r =>
        '<div class="ra-card" data-event="' + r.slug + '"><div class="ra-img"><img src="' + r.img + '" alt="" loading="lazy" onerror="this.style.background=\'var(--cream)\'"></div><div class="ra-body"><div class="ra-tag">' + r.cat + (r.date ? ' · ' + r.date : '') + '</div><h5>' + r.title + '</h5></div></div>'
      ).join('');

      // Related Items accordion (Images, Videos, Media Coverage, Press Statements, Others)
      const RI = [
        { key: 'images', label: 'Images' },
        { key: 'videos', label: 'Videos' },
        { key: 'media', label: 'Media Coverage' },
        { key: 'press', label: 'Press Statements' },
        { key: 'others', label: 'Others' }
      ];
      const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      const firstWithContent = RI.find(c => (e[c.key] || []).length);
      const riHtml = RI.map(c => {
        const items = e[c.key] || [];
        const count = items.length;
        let inner;
        if (c.key === 'images') {
          inner = count
            ? '<div class="ri-gallery">' + items.map(u => '<a class="ri-img" data-full="' + esc(u) + '"><img src="' + esc(u) + '" alt="" loading="lazy" onerror="this.closest(\'.ri-img\').style.display=\'none\'"></a>').join('') + '</div>'
            : '<div class="ri-empty">No images available.</div>';
        } else if (c.key === 'videos') {
          inner = count
            ? items.map(it => '<div class="ri-video"><iframe src="' + esc(it.url) + '" title="' + esc(it.title) + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').join('')
            : '<div class="ri-empty">No videos available.</div>';
        } else {
          inner = count
            ? '<ul class="ri-links">' + items.map(it => '<li><a href="' + esc(it.url) + '" target="_blank" rel="noopener">↗ ' + esc(it.title) + '</a></li>').join('') + '</ul>'
            : '<div class="ri-empty">No items available.</div>';
        }
        const open = firstWithContent && c.key === firstWithContent.key;
        return '<div class="ri-item' + (open ? ' open' : '') + '">' +
          '<button type="button" class="ri-head">' + c.label + '<span class="ri-count">' + (count || '') + '</span><span class="ri-chev">▾</span></button>' +
          '<div class="ri-panel"><div class="ri-panel-inner">' + inner + '</div></div></div>';
      }).join('');
      document.getElementById('ev-related-items').innerHTML = '<h3 class="ev-ri-title">Related Items</h3><div class="ri-acc">' + riHtml + '</div>';

      window.__articleTitle = e.title;
    }

    function buildEventsGrid() {
      const grid = document.getElementById('eventsGrid');
      if (!grid) return;
      grid.innerHTML = EVENT_ORDER.map((slug, i) => {
        const e = EVENTS[slug];
        const d = ['rv', 'rv d1', 'rv d2'][i % 3];
        const meta = e.cat + (e.date ? ' · ' + e.date : '');
        const foot = e.date || e.loc || e.cat;
        const altSafe = e.title.replace(/"/g, '&quot;');
        return '<div class="study-card ' + d + '" data-event="' + slug + '">' +
          '<div class="study-card-img"><img src="' + e.img + '" alt="' + altSafe + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="study-card-img-placeholder" style="display:none"><span>' + e.emoji + '</span></div></div>' +
          '<div class="study-card-body"><div class="sc-type">' + meta + '</div><h3>' + e.title + '</h3>' +
          '<div class="sc-footer"><span class="sc-year">' + foot + '</span><span class="sc-dl">Read More →</span></div></div></div>';
      }).join('');
    }
    buildEventsGrid();

    /* Make any element with data-article / data-event / data-job navigate to its detail page */
    document.addEventListener('click', e => {
      if (e.target.closest('a, button')) return;
      const art = e.target.closest('[data-article]');
      if (art) { location.href = 'article?slug=' + art.getAttribute('data-article'); return; }
      const ev = e.target.closest('[data-event]');
      if (ev) { location.href = 'event?slug=' + ev.getAttribute('data-event'); return; }
      const job = e.target.closest('[data-job]');
      if (job) { location.href = 'job?slug=' + job.getAttribute('data-job'); }
    });

    /* ── RELATED ITEMS ACCORDION + IMAGE LIGHTBOX ── */
    /* Related Items: accordion toggle + image lightbox */
    document.addEventListener('click', e => {
      const head = e.target.closest('.ri-head');
      if (head) { head.closest('.ri-item').classList.toggle('open'); return; }
      const thumb = e.target.closest('.ri-img');
      if (thumb) {
        const lb = document.getElementById('riLightbox');
        document.getElementById('riLightboxImg').src = thumb.getAttribute('data-full');
        lb.classList.add('open');
        return;
      }
      if (e.target.closest('#riLightbox')) {
        document.getElementById('riLightbox').classList.remove('open');
        document.getElementById('riLightboxImg').src = '';
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        const lb = document.getElementById('riLightbox');
        if (lb) { lb.classList.remove('open'); }
      }
    });

    /* ── JOB DETAIL RENDER ── */
    function renderJob(slug) {
      const j = JOBS[slug] || JOBS['graphic-designer'];
      const $ = id => document.getElementById(id);
      $('job-crumb').textContent = j.title;
      $('job-title').textContent = j.title;
      $('job-type').textContent = j.type;
      $('job-loc').textContent = j.location;
      $('job-deadline').textContent = j.deadline;
      $('job-body').innerHTML = j.body.map(b => {
        if (b.h) return '<h3>' + b.h + '</h3>';
        if (b.ul) return '<ul>' + b.ul.map(li => '<li>' + li + '</li>').join('') + '</ul>';
        return '<p>' + b.p + '</p>';
      }).join('');
      const mail = $('job-apply-email');
      mail.textContent = j.apply;
      mail.href = 'mailto:' + j.apply + '?subject=' + encodeURIComponent(j.title);
      $('job-related').innerHTML = Object.keys(JOBS).filter(s => s !== slug).map(s => {
        const o = JOBS[s];
        return '<div class="ra-card" data-job="' + s + '"><div class="ra-body"><div class="ra-tag">' + o.location + ' · ' + o.type + '</div><h5>' + o.title + '</h5></div></div>';
      }).join('');
      window.__articleTitle = j.title;
    }

    /* ── MEDIA MONITORS: filter + pagination ── */
    (function () {
      const grid = document.getElementById('mmGrid');
      if (!grid) return;
      const pager = document.getElementById('mmPagination');
      const chips = document.querySelectorAll('#mm-filter .filter-chip');
      const esc = s => String(s).replace(/"/g, '&quot;');
      const weekly = WEEKLY_MM.map(r => ({ t: mmTitle(r[0]), y: (r[0].match(/20\d\d/) || [''])[0], img: r[1], pdf: r[2], type: 'Weekly Media Monitor', cat: 'weekly' }));
      const biweekly = BIWEEKLY_MM.map(r => ({ t: mmTitle(r[0]), y: (r[0].match(/20\d\d/) || [''])[0], img: r[1], pdf: r[2], type: 'Bi-Weekly Media Monitor', cat: 'biweekly' }));
      const six = SIXMONTH_MM.map(o => Object.assign({ type: 'Six-Monthly Media Monitor', cat: 'six' }, o));
      const all = weekly.concat(biweekly).concat(six);
      const search = document.getElementById('mmSearch');
      let filter = 'all', query = '', page = 1; const perPage = 15;

      function monCard(o) {
        return '<a class="study-card mon-card" href="' + o.pdf + '" target="_blank" rel="noopener">' +
          '<div class="study-card-img"><img src="' + o.img + '" alt="' + esc(o.t) + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="study-card-img-placeholder" style="display:none"><span>📰</span></div></div>' +
          '<div class="study-card-body"><div class="sc-type">' + o.type + '</div><h3>' + o.t + '</h3>' +
          '<div class="sc-footer"><span class="sc-year">' + (o.y || '') + '</span><span class="sc-dl">↓ PDF</span></div></div></a>';
      }
      function list() {
        let L = filter === 'all' ? all : all.filter(x => x.cat === filter);
        if (query) L = L.filter(x => x.t.toLowerCase().includes(query) || (x.y || '').includes(query));
        return L;
      }
      function render(scroll) {
        const L = list();
        const pc = Math.max(1, Math.ceil(L.length / perPage));
        if (page > pc) page = pc;
        if (!L.length) {
          grid.innerHTML = '<div class="mm-empty">No monitors match "' + esc(query) + '".</div>';
          pager.innerHTML = '';
          return;
        }
        const slice = L.slice((page - 1) * perPage, page * perPage);
        grid.innerHTML = slice.map(monCard).join('');
        let h = '<button class="pg-btn pg-prev" data-nav="prev">← Prev</button>';
        for (let i = 1; i <= pc; i++) h += '<button class="pg-btn' + (i === page ? ' active' : '') + '" data-p="' + i + '">' + i + '</button>';
        h += '<button class="pg-btn pg-next" data-nav="next">Next →</button>';
        pager.innerHTML = h;
        pager.querySelector('[data-nav="prev"]').disabled = page === 1;
        pager.querySelector('[data-nav="next"]').disabled = page === pc;
        if (scroll) { const fb = document.querySelector('#page-media-monitors .studies-filter-bar'); if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
      chips.forEach(c => c.addEventListener('click', () => {
        chips.forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        filter = c.dataset.mfilter; page = 1; render(false);
      }));
      if (search) search.addEventListener('input', () => {
        query = search.value.trim().toLowerCase(); page = 1; render(false);
      });
      pager.addEventListener('click', e => {
        const b = e.target.closest('button');
        if (!b || b.disabled) return;
        if (b.dataset.nav === 'prev') page--;
        else if (b.dataset.nav === 'next') page++;
        else if (b.dataset.p) page = +b.dataset.p;
        render(true);
      });
      render(false);
    })();

    /* ── ONGOING WORK TICKER (news page) ── */
    (function () {
      function startLoopScroll(container, rowSelector, speed) {
        const origItems = Array.from(container.querySelectorAll(rowSelector));
        if (origItems.length <= 1) return;
        const gap = parseFloat(getComputedStyle(container).rowGap) || 0;

        const strip = document.createElement('div');
        strip.style.cssText = 'display:flex;flex-direction:column;row-gap:' + gap + 'px;will-change:transform;';
        origItems.forEach(function (item) { strip.appendChild(item); });
        origItems.forEach(function (item) { strip.appendChild(item.cloneNode(true)); });
        container.appendChild(strip);
        container.style.overflowY = 'hidden';

        // Measure after one frame so text has fully rendered
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            const allItems = Array.from(strip.querySelectorAll(rowSelector));
            const vis = allItems.slice(0, 4);
            const clipH = vis.reduce(function (s, el) { return s + el.offsetHeight; }, 0) + gap * 3;
            container.style.height = (clipH || 240) + 'px'; // 240px fallback if still 0
            const fullH = origItems.reduce(function (s, el) { return s + el.offsetHeight + gap; }, 0) || 300;

            var pos = 0, paused = false, last = null;
            container.addEventListener('mouseenter', function () { paused = true; });
            container.addEventListener('mouseleave', function () { paused = false; last = null; });

            (function tick(ts) {
              if (!paused) {
                if (last !== null) {
                  pos += speed * (ts - last) / 1000;
                  if (pos >= fullH) pos -= fullH;
                  strip.style.transform = 'translateY(-' + pos.toFixed(2) + 'px)';
                }
                last = ts;
              }
              requestAnimationFrame(tick);
            })(performance.now());
          });
        });
      }

      // Defer until the container is actually visible (SPA — section may start hidden)
      var container = document.getElementById('ongoingWorkItems');
      if (!container) return;

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting) {
            io.disconnect();
            startLoopScroll(container, '.nside-item', 28);
          }
        }, { threshold: 0.1 });
        io.observe(container);
      } else {
        // Fallback for older browsers
        setTimeout(function () { startLoopScroll(container, '.nside-item', 28); }, 800);
      }
    })();
