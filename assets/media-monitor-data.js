/* PRIED — Weekly Media Monitor detail-page data.
   Keyed by slug. Add a new entry here (and a matching "detail" slug on the
   WEEKLY_MM row in data.js) whenever a new issue should get the interactive
   detail page instead of linking straight to its PDF. */
const MEDIA_MONITOR_ISSUES = {
  '2026-09-14': {
    dateRange: "Sep 14th, 2026 – Sep 20th, 2026",
    pdf: "Weekly/Weekly Monitor - 14 Sep to 20 Sep 2026.pdf",
    totalHeadlines: 75,
    /* Other issues available to compare against in the "Compare" view. Add an entry here
       (keyed by the other issue's slug) whenever real sector-share data has been pulled
       from that week's PDF — only weeks listed here are selectable in the comparison dropdown. */
    comparisons: {
      '2026-09-07': {
        label: "Weekly Monitor - 07 Sep to 13 Sep 2026",
        dateRange: "Sep 7th, 2026 – Sep 13th, 2026",
        sectors: { "Coal": 0.00, "Oil and Gas": 50.00, "Renewable Energy": 6.00, "Energy and Finance": 30.00, "Climate Change": 14.00 }
      }
    },
    highlights: [
      { category: "Oil and Gas", text: "The Petroleum Minister, Ali Pervaiz Malik, warns that fuel prices could reach 1,000 rupees per litre if shortages emerge. Petrol prices in Pakistan have already risen by 50 per cent amid global oil market disruptions." },
      { category: "Energy and Finance", text: "The Ministry of Energy launches Pakistan's first 400MW electricity wheeling auction under the competitive power market. A total of 800MW is planned to be auctioned over the next five years." },
      { category: "Energy and Finance", text: "The Privatisation Commission proposes divesting 51 to 100 per cent shareholding and management control of each power distribution company (Disco). The EOI process has been completed for IESCO. Ten parties have been pre-qualified for FESCO and 11 are under evaluation for GEPCO." },
      { category: "Energy and Finance", text: "The Central Power Purchasing Agency (CPPA) seeks a 1.73 rupees per unit increase in electricity tariffs for August under the monthly fuel adjustment mechanism, including for K-Electric consumers." },
      { category: "Coal", text: "The All Pakistan Mine Owners' Association agrees to comply with sales tax requirements on locally produced coal and to implement the Federal Board of Revenue's digital invoicing system." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 60.27, color: "#1e6bb8",
        headlines: [
          { title: "PD proposes Rs75bn fuel relief scheme", source: "Business Recorder", date: "14 September, 2026", url: "https://www.brecorder.com/news/40439358/pd-proposes-rs75bn-fuel-relief-scheme" },
          { title: "PM launches relief scheme for bikes, 800cc vehicles", source: "Business Recorder", date: "14 September, 2026", url: "https://www.brecorder.com/news/40439354/pm-launches-relief-scheme-for-bikes-800cc-vehicles" },
          { title: "PLL warns KE of RLNG supply cut", source: "Business Recorder", date: "14 September, 2026", url: "https://www.brecorder.com/news/40439347/pll-warns-ke-of-rlng-supply-cut" },
          { title: "Govt raises petrol price by Rs4.42, diesel by Rs6.10", source: "Business Recorder", date: "14 September, 2026", url: "https://www.brecorder.com/news/40439446/govt-raises-petrol-price-by-rs442-diesel-by-rs610" },
          { title: "Subsidy for small vehicles amid sky-high fuel prices", source: "DAWN", date: "14 September, 2026", url: "https://www.dawn.com/news/2029787/subsidy-for-small-vehicles-amid-sky-high-fuel-prices" },
          { title: "Govt-JI talks on petroleum levy delayed till tomorrow", source: "DAWN", date: "14 September, 2026", url: "https://www.dawn.com/news/2029781/govt-ji-talks-on-petroleum-levy-delayed-till-tomorrow" },
          { title: "Govt details registration process for Rs100 petrol subsidy", source: "Express Tribune", date: "14 September, 2026", url: "https://tribune.com.pk/story/2629232/govt-details-registration-process-for-rs100-petrol-subsidy" },
          { title: "Rs76.73bn grant sought to implement scheme for 3 months", source: "The News", date: "14 September, 2026", url: "https://www.thenews.pk/print/1437347-rs76-73bn-grant-sought-to-implement-scheme-for-3-months" },
          { title: "PM launches petrol relief scheme amid rising oil prices", source: "The News", date: "14 September, 2026", url: "https://www.thenews.pk/print/1437346-pm-launches-petrol-relief-scheme-amid-rising-oil-prices" },
          { title: "The pricing of fuel—II", source: "Business Recorder", date: "15 September, 2026", url: "https://www.brecorder.com/news/40439469/the-pricing-of-fuel-ii" },
          { title: "PM waives SMS charges for fuel subsidy scheme", source: "Business Recorder", date: "15 September, 2026", url: "https://www.brecorder.com/news/40439520/pm-waives-sms-charges-for-fuel-subsidy-scheme" },
          { title: "JI rejects PM's fuel relief package as 'insufficient'", source: "DAWN", date: "15 September, 2026", url: "https://www.dawn.com/news/2030037/ji-rejects-pms-fuel-relief-package-as-insufficient" },
          { title: "Rethinking relief", source: "DAWN", date: "15 September, 2026", url: "https://www.dawn.com/news/2030055/rethinking-relief" },
          { title: "Govt approves Rs75b fuel relief", source: "Express Tribune", date: "15 September, 2026", url: "https://tribune.com.pk/story/2629309/govt-approves-rs75b-fuel-relief" },
          { title: "Day-to-day oil, gas matters do not require CCI nod", source: "Express Tribune", date: "15 September, 2026", url: "https://tribune.com.pk/story/2629310/day-to-day-oil-gas-matters-do-not-require-cci-nod" },
          { title: "Petrol dealers seek revision of fuel relief scheme", source: "The News", date: "15 September, 2026", url: "https://www.thenews.pk/print/1437388-petrol-dealers-seek-revision-of-fuel-relief-scheme" },
          { title: "Nationwide petrol relief roll-out: Dar directs payments to fuel stations within 24 hours", source: "Business Recorder", date: "16 September, 2026", url: "https://www.brecorder.com/news/40439683/nationwide-petrol-relief-roll-out-dar-directs-payments-to-fuel-stations-within-24-hours" },
          { title: "Petrol price up by Rs4.10, HSD's by Rs6.41", source: "Business Recorder", date: "16 September, 2026", url: "https://www.brecorder.com/news/40439671/petrol-price-up-by-rs410-hsds-by-rs641" },
          { title: "UGDC establishes national presence at Gastech expo", source: "Business Recorder", date: "16 September, 2026", url: "https://www.brecorder.com/news/40439711/ugdc-establishes-national-presence-at-gastech-expo" },
          { title: "Govt quells smart lockdown talk as fuel crisis bites", source: "Express Tribune", date: "16 September, 2026", url: "https://tribune.com.pk/story/2629586/govt-quells-smart-lockdown-talk-as-fuel-crisis-bites" },
          { title: "High prices choke LNG demand", source: "Express Tribune", date: "16 September, 2026", url: "https://tribune.com.pk/story/2629505/high-prices-choke-lng-demand" },
          { title: "JI rejects PM's relief package, gives final warning over petroleum levy", source: "The News", date: "16 September, 2026", url: "https://www.thenews.pk/print/1437619-ji-rejects-pm-s-relief-package-gives-final-warning-over-petroleum-levy" },
          { title: "Austerity measures", source: "Pakistan Today", date: "16 September, 2026", url: "https://www.pakistantoday.com.pk/2026/09/16/austerity-measures-3" },
          { title: "Relief on petrol price for optics only?", source: "Business Recorder", date: "17 September, 2026", url: "https://www.brecorder.com/news/40439811/relief-on-petrol-price" },
          { title: "Petrol price hiked by Rs6.88, HSD's by Rs5.62", source: "Business Recorder", date: "17 September, 2026", url: "https://www.brecorder.com/news/40439880/petrol-price-hiked-by-rs688-hsds-by-rs562" },
          { title: "Dealers await answers as fuel subsidy rollout begins", source: "DAWN", date: "17 September, 2026", url: "https://www.dawn.com/news/2030506/dealers-await-answers-as-fuel-subsidy-rollout-begins" },
          { title: "Managing the shock", source: "DAWN", date: "17 September, 2026", url: "https://www.dawn.com/news/2030554/managing-the-shock" },
          { title: "Ministry finds LPG price exploitation", source: "Express Tribune", date: "17 September, 2026", url: "https://tribune.com.pk/story/2629731/ministry-finds-lpg-price-exploitation" },
          { title: "PM announces cuts to fuel use, govt spending", source: "Business Recorder", date: "18 September, 2026", url: "https://www.brecorder.com/news/40440094/pm-announces-cuts-to-fuel-use-govt-spending" },
          { title: "Centre goes austere, with provinces set to decide today", source: "DAWN", date: "18 September, 2026", url: "https://www.dawn.com/news/2030799/centre-goes-austere-with-provinces-set-to-decide-today" },
          { title: "Fuel relief rollout hits teething problems", source: "DAWN", date: "18 September, 2026", url: "https://www.dawn.com/news/2030793/fuel-relief-rollout-hits-teething-problems" },
          { title: "LNG shortages hit Pakistan badly", source: "DAWN", date: "18 September, 2026", url: "https://www.dawn.com/news/2030754/lng-shortages-hit-pakistan-badly" },
          { title: "Diesel price rises by Rs3.47, petrol down by 43 paisa per litre for today", source: "The News", date: "18 September, 2026", url: "https://www.thenews.pk/print/1438037-diesel-price-rises-by-rs3-47-petrol-down-by-43-paisa-per-litre-for-today" },
          { title: "KP seeks gas for industries, LPG for forest protection", source: "The News", date: "18 September, 2026", url: "https://www.thenews.pk/print/1438017-kp-seeks-gas-for-industries-lpg-for-forest-protection" },
          { title: "PBC condemns daily increase in fuel prices", source: "The News", date: "18 September, 2026", url: "https://www.thenews.pk/print/1438010-pbc-condemns-daily-increase-in-fuel-prices" },
          { title: "Govt releases Rs25bn under fuel relief scheme", source: "The News", date: "18 September, 2026", url: "https://www.thenews.pk/print/1437883-govt-releases-rs25bn-under-fuel-relief-scheme" },
          { title: "Petroleum dealers assure full cooperation for PM's Fuel Relief Scheme", source: "Pakistan Today", date: "18 September, 2026", url: "https://www.pakistantoday.com.pk/2026/09/18/petroleum-dealers-assure-full-cooperation-for-pms-fuel-relief-scheme" },
          { title: "Petrol price reduced by Rs1.65 per litre, diesel's by 88 paise", source: "Business Recorder", date: "19 September, 2026", url: "https://www.brecorder.com/news/40440232/petrol-price-reduced-by-rs165-per-litre-diesels-by-88-paise" },
          { title: "PM widens fuel subsidy, eases weekly limits", source: "DAWN", date: "19 September, 2026", url: "https://www.dawn.com/news/2031027/pm-widens-fuel-subsidy-eases-weekly-limits" },
          { title: "'Financial strain poses threat to fuel supplies'", source: "Express Tribune", date: "19 September, 2026", url: "https://tribune.com.pk/story/2630115/financial-strain-poses-threat-to-fuel-supplies" },
          { title: "Fuel hikes push SPI into double digits", source: "Express Tribune", date: "19 September, 2026", url: "https://tribune.com.pk/story/2630107/fuel-hikes-push-spi-into-double-digits" },
          { title: "Govt scraps five-litre fuel limit per token under PM's petrol relief scheme", source: "The News", date: "19 September, 2026", url: "https://www.thenews.pk/story/1438287-govt-scraps-five-litre-fuel-limit-per-token-under-pms-petrol-relief-scheme" },
          { title: "Fuel relief scheme revised; SMS charges scrapped", source: "DAWN", date: "20 September, 2026", url: "https://www.dawn.com/news/2031242/fuel-relief-scheme-revised-sms-charges-scrapped" },
          { title: "Minister warns fuel price could hit Rs1,000 per litre if shortage emerges", source: "The News", date: "20 September, 2026", url: "https://www.thenews.pk/story/1438440-minister-warns-fuel-price-could-hit-rs1000-per-litre-if-shortage-emerges" }
        ]
      },
      {
        name: "Energy and Finance", pct: 27.40, color: "#8fbbe4",
        headlines: [
          { title: "Power market: from paper to practice", source: "Business Recorder", date: "15 September, 2026", url: "https://www.brecorder.com/news/40439467/power-market-from-paper-to-practice" },
          { title: "Power sector: Body discusses steps to improve investment, operating environment", source: "Business Recorder", date: "15 September, 2026", url: "https://www.brecorder.com/news/40439513/power-sector-body-discusses-steps-to-improve-investment-operating-environment" },
          { title: "Citizens flag debt, taxes, energy costs as top worries", source: "DAWN", date: "15 September, 2026", url: "https://www.dawn.com/news/2029997/citizens-flag-debt-taxes-energy-costs-as-top-worries" },
          { title: "Ministers sound alarm as energy crunch looms", source: "DAWN", date: "16 September, 2026", url: "https://www.dawn.com/news/2030288/ministers-sound-alarm-as-energy-crunch-looms" },
          { title: "Lesco's new load management outlines heavier nocturnal outages", source: "The News", date: "16 September, 2026", url: "https://www.thenews.pk/print/1437587-lesco-s-new-load-management-outlines-heavier-nocturnal-outages" },
          { title: "Minister floats virtual grid plan to fix power woes", source: "DAWN", date: "17 September, 2026", url: "https://www.dawn.com/news/2030507/minister-floats-virtual-grid-plan-to-fix-power-woes" },
          { title: "Power companies faulted for crippling outages", source: "Express Tribune", date: "17 September, 2026", url: "https://tribune.com.pk/story/2629759/power-companies-faulted-for-crippling-outages" },
          { title: "Foreign investment sought in energy infrastructure", source: "Express Tribune", date: "17 September, 2026", url: "https://tribune.com.pk/story/2629728/foreign-investment-sought-in-energy-infrastructure" },
          { title: "Govt plans Rs200bn power upgrade", source: "The News", date: "17 September, 2026", url: "https://www.thenews.pk/print/1437714-govt-plans-rs200bn-power-upgrade" },
          { title: "Minister floats virtual grid plan to fix power woes", source: "DAWN", date: "17 September, 2026", url: "https://www.dawn.com/news/2030507/minister-floats-virtual-grid-plan-to-fix-power-woes" },
          { title: "NA panel informed: PC plans 51-100pc divestment of each Disco", source: "Business Recorder", date: "18 September, 2026", url: "https://www.brecorder.com/news/40440084/na-panel-informed-pc-plans-51-100pc-divestment-of-each-disco" },
          { title: "Consumer Perception Survey: Discos directed to finalise methodology, criterion and schedule", source: "Business Recorder", date: "18 September, 2026", url: "https://www.brecorder.com/news/40440085/consumer-perception-survey-discos-directed-to-finalise-methodology-criterion-and-schedule" },
          { title: "Bids for power firms being evaluated", source: "DAWN", date: "18 September, 2026", url: "https://www.dawn.com/news/2030751/bids-for-power-firms-being-evaluated" },
          { title: "Gastech 2026 closes with $40bn in energy commitments", source: "The News", date: "18 September, 2026", url: "https://www.thenews.pk/print/1437892-gastech-2026-closes-with-40bn-in-energy-commitments" },
          { title: "Pakistan welcomes Turkish interest in DISCO privatisation", source: "Business Recorder", date: "18 September, 2026", url: "https://www.brecorder.com/news/40440167/pakistan-welcomes-turkish-interest-in-disco-privatisation" },
          { title: "Dar chairs meeting on power sector reforms", source: "Business Recorder", date: "19 September, 2026", url: "https://www.brecorder.com/news/40440221/dar-chairs-meeting-on-power-sector-reforms" },
          { title: "Dar stresses uninterrupted energy supplies in call with Iran's FM Araghchi", source: "The News", date: "19 September, 2026", url: "https://www.thenews.pk/story/1438274-dpm-dar-stresses-uninterrupted-energy-supplies-in-call-with-irans-fm-araghchi" },
          { title: "Power consumers may face Rs1.73/unit tariff hike", source: "DAWN", date: "20 September, 2026", url: "https://www.dawn.com/news/2031246/power-consumers-may-face-rs173unit-tariff-hike" },
          { title: "Govt launches 400MW auction under competitive power market", source: "Business Recorder", date: "20 September, 2026", url: "https://www.brecorder.com/news/40440363/govt-launches-400mw-auction-under-competitive-power-market" },
          { title: "Govt moves to 'quit' power purchase system with first-ever wheeling auction", source: "The News", date: "20 September, 2026", url: "https://www.thenews.pk/story/1438423-govt-moves-to-quit-power-purchase-system-with-first-ever-wheeling-auction" }
        ]
      },
      {
        name: "Renewable Energy", pct: 5.48, color: "#5b9ad4",
        headlines: [
          { title: "Strengthening the solar ecosystem", source: "DAWN", date: "14 September, 2026", url: "https://www.dawn.com/news/2029540/strengthening-the-solar-ecosystem" },
          { title: "EV tax clarity masks alarm over tariff policy", source: "Express Tribune", date: "15 September, 2026", url: "https://tribune.com.pk/story/2629311/ev-tax-clarity-masks-alarm-over-tariff-policy" },
          { title: "Sindh urged to prioritise people in clean energy shift", source: "Express Tribune", date: "19 September, 2026" },
          { title: "Call for community-centred clean energy transition in Sindh", source: "Business Recorder", date: "19 September, 2026", url: "https://www.brecorder.com/news/40440191/call-for-community-centred-clean-energy-transition-in-sindh" }
        ]
      },
      {
        name: "Climate Change", pct: 5.48, color: "#b3cfea",
        headlines: [
          { title: "Are parties prepared for COP31?", source: "The News", date: "14 September, 2026", url: "https://www.thenews.pk/print/1437221-are-parties-prepared-for-cop31" },
          { title: "Pakistan's position for COP31", source: "The News", date: "16 September, 2026", url: "https://www.thenews.pk/print/1437564-pakistan-s-position-for-cop31" },
          { title: "Climate resilience opens new livelihood avenues for Chitral women", source: "The News", date: "17 September, 2026", url: "https://www.thenews.pk/print/1437781-climate-resilience-opens-new-livelihood-avenues-for-chitral-women" },
          { title: "Environment paradox", source: "Express Tribune", date: "20 September, 2026", url: "https://tribune.com.pk/story/2630233/environment-paradox" }
        ]
      },
      {
        name: "Coal", pct: 1.37, color: "#0f3f70",
        headlines: [
          { title: "Coal mine owners say will ensure sales tax compliance, digital invoicing", source: "Business Recorder", date: "19 September, 2026", url: "https://www.brecorder.com/news/40440190/coal-mine-owners-say-will-ensure-sales-tax-compliance-digital-invoicing" }
        ]
      }
    ]
  }
};
