/* PRIED — Weekly Media Monitor detail-page data.
   Keyed by slug. Add a new entry here (and a matching "detail" slug on the
   WEEKLY_MM row in data.js) whenever a new issue should get the interactive
   detail page instead of linking straight to its PDF. */
/* Compact headline rows: [title, source, date, url]. A missing url renders as an unlinked item. */
function mmRows(rows) { return rows.map(([title, source, date, url]) => ({ title, source, date, url })); }

const MEDIA_MONITOR_ISSUES = {
  '2026-10-19': {
    dateRange: "Oct 19th, 2026 – Oct 25th, 2026",
    pdf: "Weekly/Weekly Monitor - 19 Oct to 25 Oct 2026.pdf",
    highlights: [
      { category: "Renewable Energy", text: "Prime Minister Shehbaz Sharif approves the draft Auto Policy 2026–31, which lowers vehicle import tariffs, incentivises electric vehicle adoption and aims to increase the global competitiveness of the local auto industry." },
      { category: "Coal", text: "The National Electric Power Regulatory Authority (Nepra) faces pressure to reject a further extension of Port Qasim Electric Power Company's interim coal procurement arrangement, since fresh bidding can potentially lower power generation costs." },
      { category: "Energy and Finance", text: "Chinese power projects under the China-Pakistan Economic Corridor (CPEC) are owed 498 billion rupees by the Central Power Purchasing Agency-Guarantee (CPPA-G), including 79 billion rupees owed to Port Qasim Electric Power Company and around 80 billion rupees to the Sahiwal coal-fired power plant." },
      { category: "Energy and Finance", text: "The Power and Petroleum Divisions inform the National Assembly that power-sector circular debt rose by 34 billion rupees to 1.675 trillion rupees, and gas-sector circular debt increased by 344 billion rupees to 3.631 trillion rupees, by June 2026." },
      { category: "Oil and Gas", text: "The Petroleum Division urges the government to approve the import of 22 LNG cargoes worth nearly 2 billion dollars for November 2026 to February 2027, warning that a delay could force gas cuts to industry, power and fertiliser sectors during peak winter demand." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 49.15, color: "#1e6bb8",
        headlines: mmRows([
          ["PSO clears renewed SPA with PARCO?", "Business Recorder", "19 October, 2026", "https://www.brecorder.com/news/40444861/pso-clears-renewed-spa-with-parco"],
          ["LPG stakeholders seek daily pricing amid soaring rates", "DAWN", "19 October, 2026", "https://www.dawn.com/news/2038194/lpg-stakeholders-seek-daily-pricing-amid-soaring-rates"],
          ["Govt cuts petrol price by Rs5.16, diesel by Rs7.69 per litre", "Business Recorder", "19 October, 2026", "https://www.brecorder.com/news/40444964/govt-cuts-petrol-price-by-rs516-diesel-by-rs769-per-litre"],
          ["Reforms discussed to make gas sector viable", "DAWN", "20 October, 2026", "https://www.dawn.com/news/2038418/reforms-discussed-to-make-gas-sector-viable"],
          ["Gas deregulation plan heads to PM", "Express Tribune", "20 October, 2026", "https://tribune.com.pk/story/2635773/gas-deregulation-plan-heads-to-pm"],
          ["Govt cuts petrol price by Rs5.16, diesel by Rs7.69", "Pakistan Today", "20 October, 2026", "https://www.pakistantoday.com.pk/2026/10/20/govt-cuts-petrol-price-by-rs516-diesel-by-rs769"],
          ["POL: Strong earnings, mixed production", "Business Recorder", "21 October, 2026", "https://www.brecorder.com/news/40445152/pol-strong-earnings-mixed-production"],
          ["LPG hits record Rs600 a kg amid shortages", "DAWN", "21 October, 2026", "https://www.dawn.com/news/2038646/lpg-hits-record-rs600-a-kg-amid-shortages"],
          ["Refinery margins slashed further", "Express Tribune", "21 October, 2026", "https://tribune.com.pk/story/2635985/refinery-margins-slashed-further"],
          ["SNGPL fixes gas supply faults in Peshawar", "The News", "21 October, 2026", "https://www.thenews.pk/print/1444145-sngpl-fixes-gas-supply-faults-in-peshawar"],
          ["Govt reduces petrol price by Rs2.71, raises diesel's Re0.31 per litre", "Business Recorder", "21 October, 2026", "https://www.brecorder.com/news/40445292/govt-reduces-petrol-price-by-rs271-raises-diesels-re031-per-litre"],
          ["Govt raises petrol price by Rs0.88, diesel by Rs0.53 per litre", "Pakistan Today", "21 October, 2026", "https://profit.pakistantoday.com.pk/2026/10/21/govt-raises-petrol-price-by-rs088-diesel-by-rs053-per-litre"],
          ["Govt mulls $2b LNG import decision", "Express Tribune", "22 October, 2026", "https://tribune.com.pk/story/2636186/govt-mulls-2b-lng-import-decision"],
          ["LPG prices hit Rs580/kg amid gas shortages", "Express Tribune", "22 October, 2026", "https://tribune.com.pk/story/2636253/lpg-prices-hit-rs580kg-amid-gas-shortages"],
          ["Second Qatar LNG cargo offers relief to strained gas supply", "The News", "22 October, 2026", "https://www.thenews.pk/print/1444424-second-qatar-lng-cargo-offers-relief-to-strained-gas-supply"],
          ["Govt raises diesel price by Rs1.64, cuts petrol by Rs1.60 per litre", "Business Recorder", "22 October, 2026", "https://www.brecorder.com/news/40445476/govt-raises-diesel-price-by-rs164-cuts-petrol-by-rs160-per-litre"],
          ["Jamaat, govt to hold talks on petroleum levy", "DAWN", "23 October, 2026", "https://www.dawn.com/news/2039149/jamaat-govt-to-hold-talks-on-petroleum-levy"],
          ["LPG crisis deepens as OGRA delays op", "Express Tribune", "23 October, 2026", "https://tribune.com.pk/story/2636417/lpg-crisis-deepens-as-ogra-delays-op"],
          ["Qualified expert sought for gas firm", "Express Tribune", "23 October, 2026", "https://tribune.com.pk/story/2636397/qualified-expert-sought-for-gas-firm"],
          ["OGDC starts gas, condensate production from Bitrism East-1 Well in Sindh", "The News", "23 October, 2026", "https://www.thenews.pk/print/1444473-ogdc-starts-gas-condensate-production-from-bitrism-east-1-well-in-sindh"],
          ["Petrol price maintained; HSD's hiked by Rs1.91", "Business Recorder", "24 October, 2026", "https://www.brecorder.com/news/40445734/petrol-price-maintained-hsds-hiked-by-rs191"],
          ["LPG shortage worsens after supply issues", "Business Recorder", "24 October, 2026", "https://www.brecorder.com/news/40445724/lpg-shortage-worsens-after-supply-issues"],
          ["Fuel dealers urge consumers to avoid 'panic buying'", "DAWN", "24 October, 2026", "https://www.dawn.com/news/2039363/fuel-dealers-urge-consumers-to-avoid-panic-buying"],
          ["Govt insists supply 'stable' as fuel fears echo in Senate", "DAWN", "24 October, 2026", "https://www.dawn.com/news/2039366/govt-insists-supply-stable-as-fuel-fears-echo-in-senate"],
          ["JI launches third phase of protest campaign against petroleum levy", "Express Tribune", "24 October, 2026", "https://tribune.com.pk/story/2636598/ji-launches-third-phase-of-protest-campaign-against-petroleum-levy"],
          ["Fuel fears dominate Senate as winter looms", "Express Tribune", "24 October, 2026", "https://tribune.com.pk/story/2636649/fuel-fears-dominate-senate-as-winter-looms"],
          ["High fuel prices add to households' woes", "Express Tribune", "24 October, 2026", "https://tribune.com.pk/story/2636748/high-fuel-prices-add-to-households-woes"],
          ["LPG dealers' strike leaves consumers scrambling for cooking fuel", "Express Tribune", "24 October, 2026", "https://tribune.com.pk/story/2636747/lpg-dealers-strike-leaves-consumers-scrambling-for-cooking-fuel"],
          ["31,000 consumers denied petrol subsidy", "Express Tribune", "24 October, 2026", "https://tribune.com.pk/story/2636735/31000-consumers-denied-petrol-subsidy"]
        ])
      },
      {
        name: "Energy and Finance", pct: 27.12, color: "#8fbbe4",
        headlines: mmRows([
          ["CPEC power projects await Rs498bn dues from CPPA-G", "Business Recorder", "19 October, 2026", "https://www.brecorder.com/news/40444862/cpec-power-projects-await-rs498bn-dues-from-cppa-g"],
          ["SEPCO Board opts for regular CEO despite PD's concerns", "Business Recorder", "19 October, 2026", "https://www.brecorder.com/news/40444863/sepco-board-opts-for-regular-ceo-despite-pds-concerns"],
          ["Power tariff for computers", "Pakistan Today", "19 October, 2026", "https://www.pakistantoday.com.pk/2026/10/19/power-tariff-for-computers"],
          ["Govt unveils hi-tech system to manage loadshedding", "DAWN", "19 October, 2026", "https://www.dawn.com/news/2038438/govt-unveils-hi-tech-system-to-manage-loadshedding"],
          ["Power sector circular debt rises to Rs1,675bn, gas Rs3,631bn, NA told", "The News", "20 October, 2026", "https://www.thenews.pk/print/1444040-power-sector-circulardebt-rises-to-rs1-675bn-gas-rs3-631bn-na-told"],
          ["Iesco urges consumers to avoid construction near power lines", "The News", "20 October, 2026", "https://www.thenews.pk/print/1443925-iesco-urges-consumers-to-avoid-construction-near-power-lines"],
          ["PPIB holds talks with stakeholders: USD2.3bn project to deploy 16.2m AMI meters envisaged", "Business Recorder", "21 October, 2026", "https://www.brecorder.com/news/40445205/ppib-holds-talks-with-stakeholders-usd23bn-project-to-deploy-162m-ami-meters-envisaged"],
          ["Power firm draws flak for seeking tariff hike", "Express Tribune", "21 October, 2026", "https://tribune.com.pk/story/2635987/power-firm-draws-flak-for-seeking-tariff-hike"],
          ["Iesco privatisation draws interest from 10 domestic, international investors", "The News", "21 October, 2026", "https://www.thenews.pk/story/1438604-iesco-privatisation-draws-interest-from-10-domestic-international-investors"],
          ["Attention must be sustained", "Business Recorder", "22 October, 2026", "https://www.brecorder.com/news/40445306/attention-must-be-sustained"],
          ["Power theft", "Business Recorder", "22 October, 2026", "https://www.brecorder.com/news/40445304/power-theft"],
          ["Distribution networks: PC proposes power sector restructuring", "Business Recorder", "22 October, 2026", "https://www.brecorder.com/news/40445398/distribution-networks-pc-proposes-power-sector-restructuring"],
          ["DISCOs, ZTBL and State Life privatization: PC advances key transactions, approves major decisions", "Business Recorder", "23 October, 2026", "https://www.brecorder.com/news/40445559/discos-ztbl-and-state-life-privatization-pc-advances-key-transactions-approves-major-decisions"],
          ["Pakistan pre-qualifies 10 bidders for Iesco", "The News", "23 October, 2026", "https://www.thenews.pk/print/1444620-pakistan-pre-qualifies-10-bidders-for-iesco"],
          ["Leghari warns Discos against arbitrary billing", "DAWN", "24 October, 2026"],
          ["DISCOs warned over detection bills", "Express Tribune", "24 October, 2026", "https://tribune.com.pk/story/2636643/discos-warned-over-detection-bills"]
        ])
      },
      {
        name: "Renewable Energy", pct: 13.56, color: "#5b9ad4",
        headlines: mmRows([
          ["Solar is our saviour, capacity charge our drain", "Express Tribune", "19 October, 2026", "https://tribune.com.pk/story/2635596/solar-is-our-saviour-capacity-charge-our-drain"],
          ["China proposes export controls on solar-manufacturing technologies", "Express Tribune", "19 October, 2026", "https://tribune.com.pk/story/2635576/china-proposes-export-controls-on-solar-manufacturing-technologies"],
          ["Draft auto policy sent to cabinet", "DAWN", "21 October, 2026", "https://www.dawn.com/news/2038648/draft-auto-policy-sent-to-cabinet"],
          ["PM okays 1% sales tax on battery EVs", "Express Tribune", "21 October, 2026", "https://tribune.com.pk/story/2635989/pm-okays-1-sales-tax-on-battery-evs"],
          ["Pakistan plans tax relief for electric vehicles, higher levies on petrol cars under new auto policy", "Pakistan Today", "21 October, 2026", "https://profit.pakistantoday.com.pk/2026/10/20/pakistan-plans-tax-relief-for-electric-vehicles-higher-levies-on-petrol-cars-under-new-auto-policy"],
          ["NA told: Govt plans 3,000 EV charging facilities", "Business Recorder", "23 October, 2026", "https://www.brecorder.com/news/40445540/na-told-govt-plans-3000-ev-charging-facilities"],
          ["Govt outlines new energy vehicles policy in NA", "The News", "23 October, 2026", "https://www.thenews.pk/print/1444621-govt-outlines-new-energy-vehicles-policy-in-na"],
          ["Geely enters Pakistan through Bestway Group, unveils three NEVs", "Business Recorder", "24 October, 2026", "https://www.brecorder.com/news/40445757/geely-enters-pakistan-through-bestway-group-unveils-three-nevs"]
        ])
      },
      {
        name: "Climate Change", pct: 6.78, color: "#b3cfea",
        headlines: mmRows([
          ["Mangrove loss raises flood, erosion risks along Karachi coast", "DAWN", "19 October, 2026", "https://www.dawn.com/news/2038190/mangrove-loss-raises-flood-erosion-risks-along-karachi-coast"],
          ["Climate exodus", "DAWN", "19 October, 2026", "https://www.dawn.com/news/2038152/climate-exodus"],
          ["Pakistan needs $565b by 2035 to meet climate targets amid financing crunch", "Pakistan Today", "21 October, 2026", "https://www.pakistantoday.com.pk/2026/10/21/pakistan-needs-dollar565b-by-2035-to-meet-climate-targets-amid-financing-crunch"],
          ["UNIDO plans to mobilise $40m for Sindh's climate-resilient uplift", "The News", "23 October, 2026", "https://www.thenews.pk/print/1444574-unido-plans-to-mobilise-40m-for-sindh-s-climate-resilient-uplift"]
        ])
      },
      {
        name: "Coal", pct: 3.39, color: "#0f3f70",
        headlines: mmRows([
          ["Experts urge govt to explore metallurgical coal potential", "Business Recorder", "20 October, 2026", "https://www.brecorder.com/news/40444958/experts-urge-govt-to-explore-metallurgical-coal-potential"],
          ["Nepra faces dilemma over PQEPCL's coal procurement extension", "Business Recorder", "23 October, 2026", "https://www.brecorder.com/news/40445553/nepra-faces-dilemma-over-pqepcls-coal-procurement-extension"]
        ])
      }
    ]
  },
  '2026-10-12': {
    dateRange: "Oct 12th, 2026 – Oct 18th, 2026",
    pdf: "Weekly/Weekly Monitor - 12 Oct to 18 Oct 2026.pdf",
    highlights: [
      { category: "Energy and Finance", text: "The Power Division projects a fuel cost adjustment (FCA) of 2.56 rupees per unit for September 2026, adding 32.7 billion rupees to November electricity bills." },
      { category: "Energy and Finance", text: "The Central Power Purchasing Agency (CPPA) says the average fuel cost of electricity generation increased by 37.5 per cent year-on-year to 10.02 rupees per unit in September. The increase came as LNG and nuclear power generation declined, while the use of expensive imported coal and high-speed diesel increased." },
      { category: "Oil and Gas", text: "Pakistan plans to import 22 LNG cargoes worth approximately 1.29 billion dollars from November 2026 to February 2027." },
      { category: "Energy and Finance", text: "Exporters oppose proposed 5–10 per cent electricity tariff increases by distribution companies (DISCOs), warning that higher fixed charges and pass-through costs will undermine Pakistan's export competitiveness." },
      { category: "Energy and Finance", text: "The Federation of Pakistan Chambers of Commerce and Industry (FPCCI) urges NEPRA to reject 268 billion rupees in disputed prior-year tariff adjustments claimed by DISCOs." },
      { category: "Climate Change", text: "Fair Finance Pakistan (FFP) says seven major banks have weak climate and biodiversity policies, with coverage at just 13.8 per cent for climate and 26.8 per cent for biodiversity, despite the State Bank of Pakistan's efforts to address climate risks in the banking sector." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 53.49, color: "#1e6bb8",
        headlines: mmRows([
          ["Pakistan seeks Libyan crude as it diversifies oil supplies amid Middle East supply disruptions", "Business Recorder", "12 October, 2026", "https://www.brecorder.com/news/40443789/pakistan-seeks-libyan-crude-as-it-diversifies-oil-supplies-amid-middle-east-supply-disruptions"],
          ["The oil price — Pakistan and the US", "Business Recorder", "12 October, 2026", "https://www.brecorder.com/news/40443718/the-oil-price-pakistan-and-the-us"],
          ["Fuel costs keep squeezing household budgets", "Express Tribune", "12 October, 2026", "https://tribune.com.pk/story/2634334/fuel-costs-keep-squeezing-household-budgets"],
          ["Fuel costs raise food prices", "Express Tribune", "12 October, 2026", "https://tribune.com.pk/story/2634370/fuel-costs-raise-food-prices"],
          ["Govt decreases petrol price by Rs2.93, increases diesel's by Re0.61 per litre", "Business Recorder", "12 October, 2026", "https://www.brecorder.com/news/40443836/govt-decreases-petrol-price-by-rs293-increases-diesels-by-re061-per-litre"],
          ["When an oil shock becomes a time shock", "Pakistan Today", "12 October, 2026", "https://www.pakistantoday.com.pk/2026/10/12/when-an-oil-shock-becomes-a-time-shock"],
          ["Privatizing gas", "Pakistan Today", "12 October, 2026", "https://www.pakistantoday.com.pk/2026/10/12/privatizing-gas"],
          ["Pakistan cuts petrol by Re0.66, raises diesel by Re0.52 per litre", "Pakistan Today", "12 October, 2026", "https://www.pakistantoday.com.pk/2026/10/12/pakistan-cuts-petrol-by-re066-raises-diesel-by-re052-per-litre"],
          ["Economy holds up amid oil shock", "DAWN", "13 October, 2026", "https://www.dawn.com/news/2036754/economy-holds-up-amid-oil-shock"],
          ["LNG imports to cost over $1b in winter", "Express Tribune", "13 October, 2026", "https://tribune.com.pk/story/2634542/lng-imports-to-cost-over-1b-in-winter"],
          ["Govt seeks 15-year Saudi oil facility", "Express Tribune", "14 October, 2026", "https://tribune.com.pk/story/2634682/govt-seeks-15-year-saudi-oil-facility"],
          ["JI urges parliament to abolish petroleum levy", "Express Tribune", "14 October, 2026", "https://tribune.com.pk/story/2634705/ji-urges-parliament-to-abolish-petroleum-levy"],
          ["Govt raises petrol price by Rs1.20, decreases diesel's by Re0.17 per litre", "Business Recorder", "14 October, 2026", "https://www.brecorder.com/news/40444216/govt-raises-petrol-price-by-rs120-decreases-diesels-by-re017-per-litre"],
          ["Petrol price set at Rs393.86, HSD at Rs396.65 per litre under latest revision", "The News", "15 October, 2026", "https://www.thenews.pk/print/1443046-petrol-price-set-at-rs393-86-hsd-at-rs396-65-per-litre-under-latest-revision"],
          ["Governor calls for uninterrupted gas supply to KP", "The News", "15 October, 2026", "https://www.thenews.pk/print/1442953-governor-calls-for-uninterrupted-gas-supply-to-kp"],
          ["Extraction & POL price fixing", "Business Recorder", "16 October, 2026", "https://www.brecorder.com/news/40444436/extraction-amp-pol-price-fixing"],
          ["Govt cuts petrol price by Rs3.63, increases diesel's by Re0.31 per litre", "Business Recorder", "16 October, 2026", "https://www.brecorder.com/news/40444404/govt-cuts-petrol-price-by-rs363-increases-diesels-by-re031-per-litre"],
          ["PM rejects LPG auction sans legal cover, policy", "DAWN", "16 October, 2026", "https://www.dawn.com/news/2037473/pm-rejects-lpg-auction-sans-legal-cover-policy"],
          ["Two firms ink MoU for Rs20bn gas investment", "DAWN", "16 October, 2026", "https://www.dawn.com/news/2037472/two-firms-ink-mou-for-rs20bn-gas-investment"],
          ["September FPA capped at Rs2.56/unit", "Express Tribune", "16 October, 2026", "https://tribune.com.pk/story/2635096/september-fpa-capped-at-rs256unit"],
          ["Refineries produce 92,482 tonnes of LPG in July-August", "The News", "16 October, 2026", "https://www.thenews.pk/print/1443071-refineries-produce-92-482-tonnes-of-lpg-in-july-august"],
          ["Govt moves to curb LPG hoarding ahead of winter", "DAWN", "18 October, 2026", "https://www.dawn.com/news/2037906/govt-moves-to-curb-lpg-hoarding-ahead-of-winter"],
          ["No gas queues, no shortage: FinMin", "Express Tribune", "18 October, 2026", "https://tribune.com.pk/story/2635410/no-gas-queues-no-shortage-finmin"]
        ])
      },
      {
        name: "Energy and Finance", pct: 34.88, color: "#8fbbe4",
        headlines: mmRows([
          ["Rs268bn power tariff burden on consumers opposed", "DAWN", "12 October, 2026", "https://www.dawn.com/news/2036506/rs268bn-power-tariff-burden-on-consumers-opposed"],
          ["Thieves steal conductors of 24 power poles in Sibi", "DAWN", "12 October, 2026", "https://www.dawn.com/news/2036503/thieves-steal-conductors-of-24-power-poles-in-sibi"],
          ["Cheap at noon, dear at night", "Business Recorder", "13 October, 2026", "https://www.brecorder.com/news/40443907/cheap-at-noon-dear-at-night"],
          ["Malik calls for stronger Saudi energy cooperation", "Express Tribune", "13 October, 2026", "https://tribune.com.pk/story/2634490/malik-calls-for-stronger-saudi-energy-cooperation"],
          ["Old claims, new tariffs", "Business Recorder", "14 October, 2026", "https://www.brecorder.com/news/40444038/old-claims-new-tariffs"],
          ["Pakistan eyes US energy imports, Boeing aircraft financing", "Business Recorder", "14 October, 2026", "https://www.brecorder.com/news/40444153/pakistan-eyes-us-energy-imports-boeing-aircraft-financing"],
          ["DISCOs tariffs: Export industries oppose proposed hike", "Business Recorder", "15 October, 2026", "https://www.brecorder.com/news/40444301/discos-tariffs-export-industries-oppose-proposed-hike"],
          ["Allocation of functions: PPMC-NGC dispute again lands on power regulator's table", "Business Recorder", "15 October, 2026", "https://www.brecorder.com/news/40444308/allocation-of-functions-ppmc-ngc-dispute-again-lands-on-power-regulators-table"],
          ["Lawmakers, govt differ over Discos' privatization", "DAWN", "15 October, 2026", "https://www.dawn.com/news/2037237/lawmakers-govt-differ-over-discos-privatisation"],
          ["Retired Lt Gen Zafar Iqbal made SAPM on energy", "DAWN", "15 October, 2026", "https://www.dawn.com/news/2037218/retired-lt-gen-zafar-iqbal-made-sapm-on-energy"],
          ["Restructuring of regulatory bodies soon", "Express Tribune", "15 October, 2026", "https://tribune.com.pk/story/2634887/restructuring-of-regulatory-bodies-soon"],
          ["Power users face Rs33bn FCA hit in Nov bills", "DAWN", "16 October, 2026", "https://www.dawn.com/news/2037506/power-users-face-rs33bn-fca-hit-in-nov-bills"],
          ["SPI stays in double digits on costly fuel", "Express Tribune", "17 October, 2026", "https://tribune.com.pk/story/2635304/spi-stays-in-double-digits-on-costly-fuel"],
          ["Hyd's crumbling power network puts lives at risk", "Express Tribune", "17 October, 2026", "https://tribune.com.pk/story/2635273/hyds-crumbling-power-network-puts-lives-at-risk"],
          ["Pakistan has enough energy supplies to last through Nov: Aurangzeb", "Business Recorder", "18 October, 2026", "https://www.brecorder.com/news/40444766/pakistan-has-enough-energy-supplies-to-last-through-nov-aurangzeb"]
        ])
      },
      {
        name: "Climate Change", pct: 6.98, color: "#b3cfea",
        headlines: mmRows([
          ["Rich nations must pay climate debt", "Express Tribune", "12 October, 2026", "https://tribune.com.pk/story/2634308/rich-nations-must-pay-climate-debt"],
          ["Minister for joint efforts to cope with climate challenge", "The News", "13 October, 2026", "https://www.thenews.pk/print/1442612-minister-for-joint-efforts-to-cope-with-climate-challenge"],
          ["Banks ignore climate in project financing", "DAWN", "14 October, 2026", "https://www.dawn.com/news/2037007/banks-ignore-climate-in-project-financing"]
        ])
      },
      {
        name: "Renewable Energy", pct: 2.33, color: "#5b9ad4",
        headlines: mmRows([
          ["Electric buses JV: Pakistani firm signs MoU with Chinese co", "Business Recorder", "15 October, 2026", "https://www.brecorder.com/news/40444298/electric-buses-jv-pakistani-firm-signs-mou-with-chinese-co"]
        ])
      },
      {
        name: "Coal", pct: 2.33, color: "#0f3f70",
        headlines: mmRows([
          ["Expensive fuel pushes Sept power costs up 37.5pc", "DAWN", "17 October, 2026", "https://www.dawn.com/news/2037776/expensive-fuel-pushes-sept-power-costs-up-375pc"]
        ])
      }
    ]
  },
  '2026-10-05': {
    dateRange: "Oct 5th, 2026 – Oct 11th, 2026",
    pdf: "Weekly/Weekly Monitor - 05 Oct to 11 Oct 2026.pdf",
    highlights: [
      { category: "Climate Change", text: "Pakistan's Deputy Permanent Representative to the UN, Usman Jadoon, called for 300 billion dollars in climate finance, tripled adaptation funding and a fully capitalised Loss and Damage Fund, plus cooperation on shared waters and debt reform." },
      { category: "Coal", text: "Sindh Engro Coal Mining Company (SECMC) started the Phase-III expansion of Thar Block-II, raising coal output from 7.6 million to 11.2 million tonnes per year, aiming to save 220 million dollars in fuel imports and 15 billion rupees in power costs." },
      { category: "Energy and Finance", text: "The IMF requested more data before approving a new industrial tariff that raises monthly capacity charges to 7,000–8,000 rupees but cuts off-peak rates to improve grid use." },
      { category: "Energy and Finance", text: "NEPRA reviewed the 22.98 rupees per unit discounted tariff for industry and agriculture. Supply costs exceed the tariff, shifting the burden to other consumers and raising sustainability concerns." },
      { category: "Energy and Finance", text: "The Privatisation Commission pre-qualified nine parties, including Turkish and Pakistani firms, to bid for a 51–100 per cent stake and management control of GEPCO." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 38.30, color: "#1e6bb8",
        headlines: mmRows([
          ["'Govt providing relief despite rising fuel prices'", "Express Tribune", "5 October, 2026", "https://tribune.com.pk/story/2633024/govt-providing-relief-despite-rising-fuel-prices"],
          ["3 Qatar LNG cargoes this month", "The News", "6 October, 2026", "https://www.thenews.pk/print/1441324-3-qatar-lng-cargoes-this-month"],
          ["Ogra allows four refineries to export 195,000 tonnes of furnace oil in October", "The News", "6 October, 2026", "https://www.thenews.pk/print/1441176-ogra-allows-four-refineries-to-export-195-000-tonnes-of-furnace-oil-in-october"],
          ["Govt raises petrol by Rs1.19, cuts diesel by Rs1.91 per litre", "Business Recorder", "6 October, 2026", "https://www.brecorder.com/news/40442927/govt-raises-petrol-by-rs119-cuts-diesel-by-rs191-per-litre"],
          ["PM orders winter gas load plan amid LNG shortages", "DAWN", "7 October, 2026", "https://www.dawn.com/news/2035292/pm-orders-winter-gas-load-plan-amid-lng-shortages"],
          ["PM directs proactive steps for winter gas load management, uninterrupted imports", "The News", "7 October, 2026", "https://www.thenews.pk/print/1441489-pm-directs-proactive-steps-for-winter-gas-load-management-uninterrupted-imports"],
          ["Govt hikes petrol price by Rs1.82, cuts diesel by Re0.91 per litre", "Business Recorder", "7 October, 2026", "https://www.brecorder.com/news/40443120/govt-hikes-petrol-price-by-rs182-cuts-diesel-by-re091-per-litre"],
          ["OMC sales rise, but core demand remains weak", "Business Recorder", "8 October, 2026", "https://www.brecorder.com/news/40443182/omc-sales-rise-but-core-demand-remains-weak"],
          ["Pakistan, Qatar agree to review LNG deal", "Express Tribune", "8 October, 2026", "https://tribune.com.pk/story/2633567/pakistan-qatar-agree-to-review-lng-deal"],
          ["LNG from Qatar to reach Pakistan in 3-5 days", "The News", "8 October, 2026", "https://www.thenews.pk/print/1441671-lng-from-qatar-to-reach-pakistan-in-3-5-days"],
          ["RLNG supply constraints: KE warns of 'load management' during peak hours", "Business Recorder", "9 October, 2026", "https://www.brecorder.com/news/40443470/rlng-supply-constraints-ke-warns-of-load-management-during-peak-hours"],
          ["Govt cuts petrol price by Re0.66, raises diesel by Re0.52 per litre", "Business Recorder", "9 October, 2026", "https://www.brecorder.com/news/40443304/govt-cuts-petrol-price-by-re066-raises-diesel-by-re052-per-litre"],
          ["Govt says petroleum levy non-tax revenue", "Express Tribune", "9 October, 2026", "https://tribune.com.pk/story/2633803/govt-says-petroleum-levy-non-tax-revenue"],
          ["PM says fuel subsidy scheme will continue", "Express Tribune", "10 October, 2026", "https://tribune.com.pk/story/2633996/pm-says-fuel-subsidy-scheme-will-continue"],
          ["Fuel subsidy beneficiaries cross 10m", "DAWN", "10 October, 2026", "https://www.dawn.com/news/2036074/fuel-subsidy-beneficiaries-cross-10m"],
          ["Petrol price cut by 66 paise, HSD's hiked by 52 paise", "Business Recorder", "10 October, 2026", "https://www.brecorder.com/news/40443524/petrol-price-cut-by-66-paise-hsds-hiked-by-52-paise"],
          ["Costly food, petroleum fuel weekly inflation", "DAWN", "10 October, 2026", "https://www.dawn.com/news/2036045/costly-food-petroleum-fuel-weekly-inflation"],
          ["JI links meeting with PM to petroleum levy cut pledge", "DAWN", "11 October, 2026", "https://www.dawn.com/news/2036251/ji-links-meeting-with-pm-to-petroleum-levy-cut-pledge"]
        ])
      },
      {
        name: "Energy and Finance", pct: 36.17, color: "#8fbbe4",
        headlines: mmRows([
          ["When imported energy becomes the risk", "Business Recorder", "5 October, 2026", "https://www.brecorder.com/news/40442608/when-imported-energy-becomes-the-risk"],
          ["Nuclear power output rises 4pc to record high", "DAWN", "5 October, 2026", "https://www.dawn.com/news/2034850/nuclear-power-output-rises-4pc-to-record-high"],
          ["Burdened by the power bill", "DAWN", "5 October, 2026", "https://www.dawn.com/news/2034765/burdened-by-the-power-bill"],
          ["GEPCO sell-off: Nine parties pre-qualified by PC board", "Business Recorder", "6 October, 2026", "https://www.brecorder.com/news/40442843/gepco-sell-off-nine-parties-pre-qualified-by-pc-board"],
          ["Power sector losses drag state-owned entities' profits", "DAWN", "6 October, 2026", "https://www.dawn.com/news/2035050/power-sector-losses-drag-state-owned-entities-profits"],
          ["Nine parties prequalify for Gepco", "DAWN", "6 October, 2026", "https://www.dawn.com/news/2035046/nine-parties-prequalify-for-gepco"],
          ["Govt concedes marginal power tariff surges", "DAWN", "6 October, 2026", "https://www.dawn.com/news/2035047/govt-concedes-marginal-power-tariff-surges"],
          ["NEPRA reviews incremental consumption package", "Express Tribune", "6 October, 2026", "https://tribune.com.pk/story/2633172/nepra-reviews-incremental-consumption-package"],
          ["Nepra weighs ending Rs22.98 power package as costs soar", "The News", "6 October, 2026", "https://www.thenews.pk/print/1441178-nepra-weighs-ending-rs22-98-power-package-as-costs-soar"],
          ["Power loom sector reels under imports, rising costs", "DAWN", "7 October, 2026", "https://www.dawn.com/news/2035310/power-loom-sector-reels-under-imports-rising-costs"],
          ["IMF holds back clearance for industry power tariff plan", "DAWN", "8 October, 2026", "https://www.dawn.com/news/2035544/imf-holds-back-clearance-for-industry-power-tariff-plan"],
          ["Discos' sell-off faces investor trust deficit", "DAWN", "8 October, 2026", "https://www.dawn.com/news/2035520/discos-sell-off-faces-investor-trust-deficit"],
          ["The cheapest megawatt Pakistan isn't producing", "Business Recorder", "9 October, 2026", "https://www.brecorder.com/news/40443438/the-cheapest-megawatt-pakistan-isnt-producing"],
          ["NEPRA raises power tariff by Rs1.11", "Express Tribune", "9 October, 2026", "https://tribune.com.pk/story/2633801/nepra-raises-power-tariff-by-rs111"],
          ["K-Electric hints at load management as 'extreme' measure during evening, night peak hours", "Express Tribune", "10 October, 2026", "https://tribune.com.pk/story/2633971/k-electric-hints-at-load-management-as-extreme-measure-during-evening-night-peak-hours"],
          ["Nepra clears use-of-system charges for competitive power market", "DAWN", "10 October, 2026", "https://www.dawn.com/news/2036102/nepra-clears-use-of-system-charges-for-competitive-power-market"],
          ["PESCO loses court challenge in electric shock case", "Express Tribune", "11 October, 2026", "https://tribune.com.pk/story/2634167/pesco-loses-court-challenge-in-electric-shock-case"]
        ])
      },
      {
        name: "Climate Change", pct: 17.02, color: "#b3cfea",
        headlines: mmRows([
          ["Climate change threatens Kalash life", "Express Tribune", "5 October, 2026", "https://tribune.com.pk/story/2633031/climate-change-threatens-kalash-life"],
          ["Climate experts warn of slow progress in Karachi Climate Action Plan", "The News", "5 October, 2026", "https://www.thenews.pk/print/1441096-climate-experts-warn-of-slow-progress-in-karachi-climate-action-plan"],
          ["Climate ministry reviews Dawlance shift to ozone-safe refrigerator technology", "The News", "6 October, 2026", "https://www.thenews.pk/print/1441190-climate-ministry-reviews-dawlance-shift-to-ozone-safe-refrigerator-technology"],
          ["Climate change driving child marriages and teen pregnancies, says NGO", "The News", "6 October, 2026"],
          ["Pakistan's carbon border test", "Business Recorder", "7 October, 2026", "https://www.brecorder.com/news/40442968/pakistans-carbon-border-test"],
          ["Investment hinges on economic stability", "Express Tribune", "7 October, 2026", "https://tribune.com.pk/story/2633365/investment-hinges-on-economic-stability"],
          ["Zero waste goes to COP31", "The News", "7 October, 2026", "https://www.thenews.pk/print/1441378-zero-waste-goes-to-cop31"],
          ["Pakistan urges UN action on climate finance", "DAWN", "8 October, 2026", "https://www.dawn.com/news/2035526/pakistan-urges-un-action-on-climate-finance"]
        ])
      },
      {
        name: "Renewable Energy", pct: 6.38, color: "#5b9ad4",
        headlines: mmRows([
          ["Competitiveness hinges on affordable, sustainable energy", "Express Tribune", "5 October, 2026", "https://tribune.com.pk/story/2633000/competitiveness-hinges-on-affordable-sustainable-energy"],
          ["60GW later, batteries come knocking", "Business Recorder", "6 October, 2026", "https://www.brecorder.com/news/40442797/60gw-later-batteries-come-knocking"],
          ["Solar Pakistan 2026 inaugurated", "Business Recorder", "10 October, 2026", "https://www.brecorder.com/news/40443495/solar-pakistan-2026-inaugurated"]
        ])
      },
      {
        name: "Coal", pct: 2.13, color: "#0f3f70",
        headlines: mmRows([
          ["Thar coalmine begins third expansion", "Express Tribune", "6 October, 2026", "https://tribune.com.pk/story/2633176/thar-coalmine-begins-third-expansion"]
        ])
      }
    ]
  },
  '2026-09-28': {
    dateRange: "Sep 28th, 2026 – Oct 4th, 2026",
    pdf: "Weekly/Weekly Monitor - 28 Sep to 04 Oct 2026.pdf",
    highlights: [
      { category: "Climate Change", text: "The World Bank says Pakistan needs 565.7 billion dollars by 2035 to cut emissions 50 per cent, citing a major climate finance gap and limited fiscal space." },
      { category: "Energy and Finance", text: "The federal government informed the IMF it will recover 110 billion rupees in provincial power arrears through NFC deductions." },
      { category: "Energy and Finance", text: "CPPA seeks 1.73 rupees per unit extra in October bills, adding 25 billion rupees due to costlier RLNG and coal and lower hydel and nuclear output." },
      { category: "Energy and Finance", text: "NEPRA proposed grid-sharing charges for high-rises with 500+ kVA transformers, and allowed industries up to 15 MW via multiple connections." },
      { category: "Oil and Gas", text: "Petrol rose 2.10 rupees per litre and HSD 30 paisa for Oct 3–5, to 392.76 and 399.64 rupees, driven by higher import costs and IFEM." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 38.64, color: "#1e6bb8",
        headlines: mmRows([
          ["A temporary breather in RLNG import", "Business Recorder", "28 September, 2026", "https://www.brecorder.com/news/40441497/a-temporary-breather-in-rlng-import"],
          ["Petrol subsidy: Govt likely to continue scheme for 10 months", "Business Recorder", "28 September, 2026", "https://www.brecorder.com/news/40441533/petrol-subsidy-govt-likely-to-continue-scheme-for-10-months"],
          ["Fuel relief scheme records 4.79m redemptions in 10 days", "The News", "28 September, 2026", "https://www.thenews.pk/print/1439807-fuel-relief-scheme-records-4-79m-redemptions-in-10-days"],
          ["Govt decreases petrol by Rs1.49, diesel by Rs2.73 for Sept 30", "Express Tribune", "29 September, 2026", "https://tribune.com.pk/story/2632106/govt-decreases-petrol-by-rs149-diesel-by-rs273-for-sept-30"],
          ["Govt decreases diesel price by Rs2.73, petrol by Rs1.49 per litre", "Business Recorder", "29 September, 2026", "https://www.brecorder.com/news/40441820/govt-decreases-diesel-price-by-rs273-petrol-by-rs149-per-litre"],
          ["Petrol price cut by Rs1.49, HSD's by Rs2.73", "Business Recorder", "30 September, 2026", "https://www.brecorder.com/news/40441904/petrol-price-cut-by-rs149-hsds-by-rs273"],
          ["PINSTECH, OGDCL sign contract", "Business Recorder", "30 September, 2026", "https://www.brecorder.com/news/40441868/pinstech-ogdcl-sign-contract"],
          ["Power sector may be allowed LNG import", "Express Tribune", "30 September, 2026", "https://tribune.com.pk/story/2632137/power-sector-may-be-allowed-lng-import"],
          ["Petrol price hiked by Re0.88 per litre, HSD cut by Rs1.88", "The News", "30 September, 2026", "https://www.thenews.pk/story/1427144-petroleum-rates-in-pakistan-today"],
          ["LPG gets 8pc costlier ahead of winter", "DAWN", "1 October, 2026", "https://www.dawn.com/news/2033865/lpg-gets-8pc-costlier-ahead-of-winter"],
          ["Govt cuts diesel price by Rs1.89, petrol by 14 paisa per litre", "The News", "1 October, 2026", "https://www.thenews.pk/print/1440433-govt-cuts-diesel-price-by-rs1-89-petrol-by-14-paisa-per-litre"],
          ["Govt hikes petrol by Rs3.26, cuts diesel price by Rs1.01 per litre", "Business Recorder", "1 October, 2026", "https://www.brecorder.com/news/40442202/govt-hikes-petrol-by-rs326-cuts-diesel-price-by-rs101-per-litre"],
          ["IMF praises oil crisis handling, urges gas sector reforms", "DAWN", "2 October, 2026", "https://www.dawn.com/news/2034157/imf-praises-oil-crisis-handling-urges-gas-sector-reforms"],
          ["Petrol subsidy puts govt, IMF at odds", "Express Tribune", "2 October, 2026", "https://tribune.com.pk/story/2632503/petrol-subsidy-puts-govt-imf-at-odds"],
          ["Petrol price hiked by Rs2.10, HSD's by 30 paise", "Business Recorder", "3 October, 2026", "https://www.brecorder.com/news/40442427/petrol-price-hiked-by-rs210-hsds-by-30-paise"],
          ["OMC sales up 6pc", "DAWN", "3 October, 2026", "https://www.dawn.com/news/2034338/omc-sales-up-6pc"],
          ["LPG price surge sparks public anger", "Express Tribune", "3 October, 2026", "https://tribune.com.pk/story/2632698/lpg-price-surge-sparks-public-anger"]
        ])
      },
      {
        name: "Energy and Finance", pct: 34.09, color: "#8fbbe4",
        headlines: mmRows([
          ["Darkness boils over as power protest turns fiery", "Express Tribune", "28 September, 2026", "https://tribune.com.pk/story/2631773/darkness-boils-over-as-power-protest-turns-fiery"],
          ["High-rises: NEPRA floats grid-sharing charges", "Express Tribune", "28 September, 2026", "https://tribune.com.pk/story/2631760/high-rises-nepra-floats-grid-sharing-charges"],
          ["News Analysis: Pakistan selling Discos, investors also pricing the risk", "The News", "28 September, 2026", "https://www.thenews.pk/print/1439899-pakistan-selling-discos-investors-also-pricing-the-risk"],
          ["Senate panel seeks halt to Discos sell-off", "DAWN", "29 September, 2026", "https://www.dawn.com/news/2033430/senate-panel-seeks-halt-to-discos-sell-off"],
          ["Hearing today: Nepra to consider Rs1.73/unit hike for August FCA", "Business Recorder", "29 September, 2026", "https://www.brecorder.com/news/40441693/hearing-today-nepra-to-consider-rs173unit-hike-for-august-fca"],
          ["Punjab mulling participation in 400MW wheeling auction", "Business Recorder", "30 September, 2026", "https://www.brecorder.com/news/40441870/punjab-mulling-participation-in-400mw-wheeling-auction"],
          ["Electricity users face Rs25bn extra fuel cost", "DAWN", "30 September, 2026", "https://www.dawn.com/news/2033658/electricity-users-face-rs25bn-extra-fuel-cost"],
          ["Power tariff hike may add Rs29.5b burden", "Express Tribune", "30 September, 2026", "https://tribune.com.pk/story/2632164/power-tariff-hike-may-add-rs295b-burden"],
          ["LESCO executive engineer shot dead", "Express Tribune", "1 October, 2026", "https://tribune.com.pk/story/2632376/lesco-executive-engineer-shot-dead"],
          ["Energy shock keeps inflation elevated", "Business Recorder", "2 October, 2026", "https://www.brecorder.com/news/40442252/energy-shock-keeps-inflation-elevated"],
          ["Assessing regulatory effectiveness of Pakistan's power sector", "Business Recorder", "3 October, 2026", "https://www.brecorder.com/news/40442482/assessing-regulatory-effectiveness-of-pakistans-power-sector"],
          ["Pakistan seeks to deepen energy ties with Russia", "Express Tribune", "3 October, 2026", "https://tribune.com.pk/story/2632713/pakistan-seeks-to-deepen-energy-ties-with-russia"],
          ["Provinces' feedback on IEP sought", "Express Tribune", "3 October, 2026", "https://tribune.com.pk/story/2632672/provinces-feedback-on-iep-sought"],
          ["Govt may deduct Rs110b from NFC", "Express Tribune", "3 October, 2026", "https://tribune.com.pk/story/2632667/govt-may-deduct-rs110b-from-nfc"],
          ["Govt sets bold DISCO sale deadline", "Express Tribune", "4 October, 2026", "https://tribune.com.pk/story/2632865/govt-sets-bold-disco-sale-deadline"]
        ])
      },
      {
        name: "Climate Change", pct: 15.91, color: "#b3cfea",
        headlines: mmRows([
          ["Over 60 Glof-prone lakes emerge in less than two months", "DAWN", "28 September, 2026", "https://www.dawn.com/news/2033138/over-60-glof-prone-lakes-emerge-in-less-than-two-months"],
          ["Who will finance Pakistan's climate future?", "DAWN", "28 September, 2026", "https://www.dawn.com/news/2033097/who-will-finance-pakistans-climate-future"],
          ["Pakistan, IMF officially open talks on EFF, climate programme reviews", "The News", "29 September, 2026", "https://www.thenews.pk/story/1440133-pakistan-imf-officially-open-talks-on-eff-climate-programme-reviews"],
          ["Climate risks call for transparent fiscal framework: PPP senator", "DAWN", "30 September, 2026", "https://www.dawn.com/news/2033647/climate-risks-call-for-transparent-fiscal-framework-ppp-senator"],
          ["Sindh records country's biggest rainfall deficit", "Express Tribune", "1 October, 2026", "https://tribune.com.pk/story/2632341/sindh-records-countrys-biggest-rainfall-deficit"],
          ["Lahore's ozone warning", "DAWN", "2 October, 2026", "https://www.dawn.com/news/2034183/lahores-ozone-warning"],
          ["Ozone depletion", "Express Tribune", "2 October, 2026", "https://tribune.com.pk/story/2632492/ozone-depletion"]
        ])
      },
      {
        name: "Renewable Energy", pct: 9.09, color: "#5b9ad4",
        headlines: mmRows([
          ["EV boom reshaping local market", "Express Tribune", "28 September, 2026", "https://tribune.com.pk/story/2631742/ev-boom-reshaping-local-market"],
          ["Punjab's solar boom looks like progress", "Pakistan Today", "28 September, 2026", "https://www.pakistantoday.com.pk/2026/09/28/punjabs-solar-boom-looks-like-progress"],
          ["Friesland Campina Engro installs 450kW solar system with battery storage at dairy farm", "The News", "1 October, 2026", "https://www.thenews.pk/print/1440332-friesland-campina-engro-installs-450kw-solar-system-with-battery-storage-at-dairy-farm"],
          ["'Let's go solar!' But how do we get there?", "DAWN", "2 October, 2026", "https://www.dawn.com/news/2033969/lets-go-solar-but-how-do-we-get-there"]
        ])
      },
      {
        name: "Coal", pct: 2.27, color: "#0f3f70",
        headlines: mmRows([
          ["China's coal past and solar present are colliding in Pakistan", "The News", "2 October, 2026", "https://www.thenews.pk/print/1440493-china-s-coal-past-and-solar-present-are-colliding-in-pakistan"]
        ])
      }
    ]
  },
  '2026-09-21': {
    dateRange: "Sep 21st, 2026 – Sep 27th, 2026",
    pdf: "Weekly/Weekly Monitor - 21 Sep to 27 Sep 2026.pdf",
    highlights: [
      { category: "Energy and Finance", text: "The Cabinet Committee on Energy (CCOE) reported power-sector circular debt reached 1.798 trillion rupees by June 2026. K-Electric's 171 billion-rupee non-payment blocked a potential 175 billion-rupee reduction." },
      { category: "Energy and Finance", text: "The Independent System and Market Operator (ISMO) launched Pakistan's first 400MW competitive power wheeling auction under CTBCM. A total of 800MW will be auctioned over five years." },
      { category: "Climate Change", text: "Finance Minister Muhammad Aurangzeb called for faster access to international climate financing, stressing the need to turn Pakistan's climate commitments into investable projects." },
      { category: "Oil and Gas", text: "Petroleum Minister Ali Pervaiz Malik warned petrol prices could reach 1,000 rupees per litre if a fuel shortage emerges. The government expects a domestic crude oil discovery by October." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 44.90, color: "#1e6bb8",
        headlines: mmRows([
          ["Malik says govt ensuring uninterrupted fuel supply", "Business Recorder", "21 September, 2026", "https://www.brecorder.com/news/40440438/malik-says-govt-ensuring-uninterrupted-fuel-supply"],
          ["PM's Special Fuel Relief Scheme: Over 2.2m people registered, says Tarar", "Business Recorder", "21 September, 2026", "https://www.brecorder.com/news/40440439/pms-special-fuel-relief-scheme-over-22m-people-registered-says-tarar"],
          ["Footprints: Tales from the fuel queue", "DAWN", "21 September, 2026", "https://www.dawn.com/news/2031445/footprints-tales-from-the-fuel-queue"],
          ["No respite for fuel consumers in Pakistan", "Express Tribune", "21 September, 2026", "https://tribune.com.pk/story/2630463/no-respite-for-fuel-consumers-in-pakistan"],
          ["Fuel could hit Rs1,000 per litre if shortage emerges: petroleum minister", "The News", "21 September, 2026", "https://www.thenews.pk/print/1438574-fuel-could-hit-rs1-000-per-litre-if-shortage-emerges-petroleum-minister"],
          ["The petrol subsidy arithmetic", "The News", "21 September, 2026", "https://www.thenews.pk/print/1438444-the-petrol-subsidy-arithmetic"],
          ["LNG buyers, sellers target supply diversity", "Express Tribune", "22 September, 2026", "https://tribune.com.pk/story/2630656/lng-buyers-sellers-target-supply-diversity"],
          ["SNGPL ensures full-pressure gas supply in Rawalpindi during scheduled hours", "The News", "22 September, 2026", "https://www.thenews.pk/print/1438693-sngpl-ensures-full-pressure-gas-supply-in-rawalpindi-during-scheduled-hours"],
          ["Govt secures second Qatar LNG cargo in September", "The News", "22 September, 2026", "https://www.thenews.pk/print/1438609-govt-secures-second-qatar-lng-cargo-in-september"],
          ["Govt cuts diesel price by Rs4.21, petrol by Rs1.93 per litre", "Business Recorder", "24 September, 2026", "https://www.brecorder.com/news/40440878/govt-cuts-diesel-price-by-rs421-petrol-by-rs193-per-litre"],
          ["JI keeps long march option open over petrol levy", "DAWN", "24 September, 2026", "https://www.dawn.com/news/2032216/ji-keeps-long-march-option-open-over-petrol-levy"],
          ["Fuel levy poses bigger inflation risks", "Express Tribune", "24 September, 2026", "https://tribune.com.pk/story/2631066/fuel-levy-poses-bigger-inflation-risks"],
          ["PM Shehbaz says IMF raises no serious concerns over Rs100 fuel subsidy after meeting Georgieva at UNGA", "Express Tribune", "24 September, 2026", "https://tribune.com.pk/story/2631052/pm-says-imf-raises-no-serious-concerns-over-rs100-subsidy-after-meeting-georgieva-at-unga"],
          ["Second Qatari LNG cargo reaches Pakistan, berths at PGPL terminal", "The News", "24 September, 2026", "https://www.thenews.pk/print/1438994-second-qatari-lng-cargo-reaches-pakistan-berths-at-pgpl-terminal"],
          ["High dollar returns on Faisalabad-Peshawar oil pipeline raise eyebrows", "DAWN", "25 September, 2026", "https://www.dawn.com/news/2032468/high-dollar-returns-on-faisalabad-peshawar-oil-pipeline-raise-eyebrows"],
          ["Four refineries sign $5bn upgrade pacts", "DAWN", "25 September, 2026", "https://www.dawn.com/news/2032467/four-refineries-sign-5bn-upgrade-pacts"],
          ["Ogra cuts RLNG prices", "DAWN", "25 September, 2026", "https://www.dawn.com/news/2032466/ogra-cuts-rlng-prices"],
          ["Austerity steps to save only Rs17b", "Express Tribune", "25 September, 2026", "https://tribune.com.pk/story/2631257/austerity-steps-to-save-only-rs17b"],
          ["Oil refineries ink plant upgrade agreements", "Express Tribune", "25 September, 2026", "https://tribune.com.pk/story/2631260/oil-refineries-ink-plant-upgrade-agreements"],
          ["Meeting reviews fuel relief payments", "Express Tribune", "25 September, 2026", "https://tribune.com.pk/story/2631262/meeting-reviews-fuel-relief-payments"],
          ["4.79m tokens redeemed: Fuel relief scheme registration reaches 5.9m mark", "Business Recorder", "26 September, 2026", "https://www.brecorder.com/news/40441290/479m-tokens-redeemed-fuel-relief-scheme-registration-reaches-59m-mark"],
          ["Petrol price up by Rs2.02, HSD's down by Rs3.59", "Business Recorder", "26 September, 2026", "https://www.brecorder.com/news/40441296/petrol-price-up-by-rs202-hsds-down-by-rs359"]
        ])
      },
      {
        name: "Energy and Finance", pct: 32.65, color: "#8fbbe4",
        headlines: mmRows([
          ["Govt begins to move out of power business", "Business Recorder", "21 September, 2026", "https://www.brecorder.com/news/40440442/govt-begins-to-move-out-of-power-business"],
          ["Govt invites bids for 'competitive' power capacity auction", "DAWN", "21 September, 2026", "https://www.dawn.com/news/2031441/govt-invites-bids-for-competitive-power-capacity-auction"],
          ["Pakistan ushers in new era of competitive electricity trading", "The News", "21 September, 2026", "https://www.thenews.pk/print/1438575-pakistan-ushers-in-new-era-of-competitive-electricity-trading"],
          ["Power keeps getting pricier", "Business Recorder", "22 September, 2026", "https://www.brecorder.com/news/40440581/power-keeps-getting-pricier"],
          ["10 parties in race to acquire Iesco", "DAWN", "22 September, 2026", "https://www.dawn.com/news/2031715/10-parties-in-race-to-acquire-iesco"],
          ["FPCCI urges cuts in energy tariffs, taxes to boost business competitiveness", "The News", "22 September, 2026", "https://www.thenews.pk/print/1438621-fpcci-urges-cuts-in-energy-tariffs-taxes-to-boost-business-competitiveness"],
          ["Power privatization moves ahead", "Pakistan Today", "23 September, 2026", "https://www.pakistantoday.com.pk/2026/09/23/power-privatization-moves-ahead"],
          ["DISCO privatisation: Lessons from K-Electric", "Business Recorder", "24 September, 2026", "https://www.brecorder.com/news/40440936/disco-privatisation-lessons-from-k-electric"],
          ["Nepra notifies KE base tariff at Rs32.37 per unit", "DAWN", "24 September, 2026", "https://www.dawn.com/news/2032223/nepra-notifies-ke-base-tariff-at-rs3237-per-unit"],
          ["Discos to undergo technical audit over theft, losses", "DAWN", "24 September, 2026", "https://www.dawn.com/news/2032251/discos-to-undergo-technical-audit-over-theft-losses"],
          ["Technical audit of DISCOs to identify power theft", "Express Tribune", "24 September, 2026", "https://tribune.com.pk/story/2631071/technical-audit-of-discos-to-identify-power-theft"],
          ["5MW hydropower project planned at Chashma", "Express Tribune", "24 September, 2026", "https://tribune.com.pk/story/2631077/5mw-hydropower-project-planned-at-chashma"],
          ["Power regulator upholds 19pc KE tariff cut, but customers won't benefit", "The News", "24 September, 2026", "https://www.thenews.pk/print/1438989-power-regulator-upholds-19pc-ke-tariff-cut-but-customers-won-t-benefit"],
          ["Iesco imposes over Rs8.5m fines", "The News", "25 September, 2026", "https://www.thenews.pk/print/1439244-iesco-imposes-over-rs8-5m-fines"],
          ["Pakistan September inflation seen easing but energy pressures persist", "Business Recorder", "26 September, 2026", "https://www.brecorder.com/news/40441339/pakistan-september-inflation-seen-easing-but-energy-pressures-persist"],
          ["CCOE weighs debt reduction", "Express Tribune", "27 September, 2026", "https://tribune.com.pk/story/2631575/ccoe-weighs-debt-reduction"]
        ])
      },
      {
        name: "Renewable Energy", pct: 14.29, color: "#5b9ad4",
        headlines: mmRows([
          ["Fauji Cement to install battery storage, solar power at two plants", "Business Recorder", "22 September, 2026", "https://www.brecorder.com/news/40440663/fauji-cement-to-install-battery-storage-solar-power-at-two-plants"],
          ["SDPI unveils battery storage roadmap", "DAWN", "22 September, 2026", "https://www.dawn.com/news/2031710/sdpi-unveils-battery-storage-roadmap"],
          ["Aurangzeb highlights Pakistan's climate vulnerability, calls for faster climate financing at UNGA", "Express Tribune", "22 September, 2026", "https://tribune.com.pk/story/2630747/aurangzeb-highlights-pakistans-climate-vulnerability-calls-for-faster-climate-financing-at-unga"],
          ["PU CEES gets 100 KW solar PV system", "The News", "22 September, 2026", "https://www.thenews.pk/print/1438675-pu-cees-gets-100-kw-solar-pv-system"],
          ["Stakeholders deliberate on a phased transition to clean electricity by 2040", "Business Recorder", "25 September, 2026", "https://www.brecorder.com/news/40441177/stakeholders-deliberate-on-a-phased-transition-to-clean-electricity-by-2040"],
          ["Solar system manufacturing urged", "Express Tribune", "26 September, 2026", "https://tribune.com.pk/story/2631469/solar-system-manufacturing-urged"],
          ["The high cost of Balochistan's solar transition", "Express Tribune", "27 September, 2026", "https://tribune.com.pk/story/2631555/the-high-cost-of-balochistans-solar-transition"]
        ])
      },
      {
        name: "Climate Change", pct: 8.16, color: "#b3cfea",
        headlines: mmRows([
          ["Talk climate in rupees, not rainfall", "Express Tribune", "21 September, 2026", "https://tribune.com.pk/story/2630426/talk-climate-in-rupees-not-rainfall"],
          ["Rate of glacier area loss increases to 4.9%", "Express Tribune", "23 September, 2026", "https://tribune.com.pk/story/2630939/rate-of-glacier-area-loss-increases-to-49"],
          ["Pakistan in uncharted waters as 'super El Nino' multiplies threats", "DAWN", "24 September, 2026", "https://www.dawn.com/news/2032217/pakistan-in-uncharted-waters-as-super-el-nino-multiplies-threats"],
          ["Climate commitments must translate into tangible results, says Aurangzeb", "Business Recorder", "25 September, 2026", "https://www.brecorder.com/news/40441193/climate-commitments-must-translate-into-tangible-results-says-aurangzeb"]
        ])
      },
      { name: "Coal", pct: 0.00, color: "#0f3f70", headlines: [] }
    ]
  },
  '2026-09-14': {
    dateRange: "Sep 14th, 2026 – Sep 20th, 2026",
    pdf: "Weekly/Weekly Monitor - 14 Sep to 20 Sep 2026.pdf",
    totalHeadlines: 73,
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
  },
  '2026-09-07': {
    dateRange: "Sep 7th, 2026 – Sep 13th, 2026",
    pdf: "Weekly/Weekly Monitor - 07 Sep to 13 Sep 2026.pdf",
    highlights: [
      { category: "Oil and Gas", text: "The Pakistan Bureau of Statistics reported SPI inflation rose to 8.62 per cent year-on-year in the week ended 10 September, driven by higher petrol, diesel and LPG prices." },
      { category: "Oil and Gas", text: "The federal government raised petrol by 5.02 rupees and HSD by 5.28 rupees per litre, fixing rates at 375.82 and 403.32 rupees for three days from 12 September." },
      { category: "Energy and Finance", text: "Nepra approved an 11-year power plan requiring 58 billion dollars in investment, while deferring 900 million dollars of battery storage pending further study." },
      { category: "Energy and Finance", text: "British International Investment (BII) expressed interest in Pakistan's power transmission sector and utility-scale battery storage, as the government plans to add 3,000MW of storage." }
    ],
    sectors: [
      {
        name: "Oil and Gas", pct: 50.00, color: "#1e6bb8",
        headlines: mmRows([
          ["Fire safety crackdown puts fuel stations on the block", "Express Tribune", "7 September, 2026", "https://tribune.com.pk/story/2627865/fire-safety-crackdown-puts-fuel-stations-on-the-block"],
          ["Prolonged power outages: PLL reissues LNG tender for 12th-16th cargo window", "Business Recorder", "7 September, 2026", "https://www.brecorder.com/news/40438239/prolonged-power-outages-pll-reissues-lng-tender-for-12th-16th-cargo-window"],
          ["The pricing of fuel", "Business Recorder", "8 September, 2026", "https://www.brecorder.com/news/40438355/the-pricing-of-fuel"],
          ["SNGPL faces serious liquidity crunch amid delay in release of Rs174bn", "Business Recorder", "8 September, 2026", "https://www.brecorder.com/news/40438402/sngpl-faces-serious-liquidity-crunch-amid-delay-in-release-of-rs174bn"],
          ["Petrol up Rs12.9, diesel Rs3.72 per litre for today", "The News", "8 September, 2026", "https://www.thenews.pk/print/1436263-petrol-up-rs12-9-diesel-rs3-72-per-litre-for-today"],
          ["Ogra allows three refineries to export 150,000 tonnes of furnace oil", "The News", "9 September, 2026", "https://www.thenews.pk/print/1436300-ogra-allows-three-refineries-to-export-150-000-tonnes-of-furnace-oil"],
          ["Govt hikes petrol by Rs5.58/litre, diesel by Rs4.18/litre for today", "The News", "9 September, 2026", "https://www.thenews.pk/print/1436425-govt-hikes-petrol-by-rs5-58-litre-diesel-by-rs4-18-litre-for-today"],
          ["Oil sector rejects new price formula", "Express Tribune", "9 September, 2026", "https://tribune.com.pk/story/2628194/oil-sector-rejects-new-price-formula"],
          ["Petrol hike pushes goods freight rates up 5%", "Express Tribune", "9 September, 2026", "https://tribune.com.pk/story/2628263/petrol-hike-pushes-goods-freight-rates-up-5-percent"],
          ["JI sets Sept 10 deadline for petroleum levy withdrawal", "DAWN", "9 September, 2026", "https://www.dawn.com/news/2028464/ji-sets-sept-10-deadline-for-petroleum-levy-withdrawal"],
          ["OGDCL, MARI-backed Lundali-1 well starts gas production in Sindh", "Business Recorder", "9 September, 2026", "https://www.brecorder.com/news/40438614/ogdcl-mari-backed-lundali-1-well-starts-gas-production-in-sindh"],
          ["Petrol, HSD: Daily pricing adjustment", "Business Recorder", "10 September, 2026", "https://www.brecorder.com/news/40438732/petrol-hsd-daily-pricing-adjustment"],
          ["Gas consumers to pay extra Rs46b", "Express Tribune", "10 September, 2026", "https://tribune.com.pk/story/2628418/gas-consumers-to-pay-extra-rs46b"],
          ["Govt raises price of diesel by Rs6.72, petrol Rs3.40 per litre", "The News", "10 September, 2026", "https://www.thenews.pk/print/1436607-govt-raises-price-of-diesel-by-rs6-72-petrol-rs3-40-per-litre"],
          ["Petroleum pricing: Only hard choices remain", "Business Recorder", "11 September, 2026", "https://www.brecorder.com/news/40438951/petroleum-pricing-only-hard-choices-remain"],
          ["Vessel carrying Qatari LNG arrives at Port Qasim", "DAWN", "11 September, 2026", "https://www.dawn.com/news/2029001/vessel-carrying-qatari-lng-arrives-at-port-qasim"],
          ["Govt asked to review PDL, daily pricing", "DAWN", "11 September, 2026", "https://www.dawn.com/news/2029000/govt-asked-to-review-pdl-daily-pricing"],
          ["Petrol, diesel prices rise by Rs3.05 and Rs5.37 per litre", "Pakistan Today", "11 September, 2026", "https://www.pakistantoday.com.pk/2026/09/11/petrol-diesel-prices-rise-by-rs305-and-rs537-per-litre"],
          ["Petrol price up by Rs5.02, HSD's by Rs5.28", "Business Recorder", "12 September, 2026", "https://www.brecorder.com/news/40439119/petrol-price-up-by-rs502-hsds-by-rs528"],
          ["Sept 27 protest fuels opposition unity drive", "Express Tribune", "12 September, 2026", "https://tribune.com.pk/story/2628880/sept-27-protest-fuels-opposition-unity-drive"],
          ["Fuel spike lifts SPI to 8.62% YoY", "Express Tribune", "12 September, 2026", "https://tribune.com.pk/story/2628844/fuel-spike-lifts-spi-to-862-yoy"],
          ["Fuel relief scheme: How to get Rs100/litre petrol subsidy?", "Business Recorder", "13 September, 2026", "https://www.brecorder.com/news/40439296/fuel-relief-scheme-how-to-get-rs100litre-petrol-subsidy"],
          ["Reduction in petroleum levy demanded", "Express Tribune", "13 September, 2026", "https://tribune.com.pk/story/2628961/reduction-in-petroleum-levy-demanded"],
          ["ECC's decision sought on petroleum rights", "Express Tribune", "13 September, 2026", "https://tribune.com.pk/story/2628957/eccs-decision-sought-on-petroleum-rights"],
          ["Crippling fuel tax burden", "Express Tribune", "13 September, 2026", "https://tribune.com.pk/story/2628940/crippling-fuel-tax-burden"]
        ])
      },
      {
        name: "Energy and Finance", pct: 30.00, color: "#8fbbe4",
        headlines: mmRows([
          ["Energy sector reforms required", "Business Recorder", "7 September, 2026", "https://www.brecorder.com/news/40438210/energy-sector-reforms-required"],
          ["Pakistan and Asia's energy security: lessons from US-Iran conflict", "Business Recorder", "7 September, 2026", "https://www.brecorder.com/news/40438335/pakistan-and-asias-energy-security-lessons-from-us-iran-conflict"],
          ["The looming winter energy crisis", "Business Recorder", "8 September, 2026", "https://www.brecorder.com/news/40438368/the-looming-winter-energy-crisis"],
          ["Nepra clears key hurdle to competitive power market", "DAWN", "8 September, 2026", "https://www.dawn.com/news/2028259/nepra-clears-key-hurdle-to-competitive-power-market"],
          ["Power tariff raised by Rs0.52 per unit", "Express Tribune", "8 September, 2026", "https://tribune.com.pk/story/2628027/power-tariff-raised-by-rs052-per-unit"],
          ["Competitive power market gets nod", "Express Tribune", "8 September, 2026", "https://tribune.com.pk/story/2627999/competitive-power-market-gets-nod"],
          ["Nepra clears power wheeling charges", "The News", "8 September, 2026", "https://www.thenews.pk/print/1436262-nepra-clears-power-wheeling-charges"],
          ["September power bills: Adjustment pains a plenty", "Business Recorder", "9 September, 2026", "https://www.brecorder.com/news/40438562/september-power-bills-adjustment-pains-a-plenty"],
          ["ISMO starts data collection for IGCEP 2027", "Business Recorder", "10 September, 2026", "https://www.brecorder.com/news/40438780/ismo-starts-data-collection-for-igcep-2027"],
          ["Suki Kinari Hydropower Project: Nepra objects to proposed tariff modification", "Business Recorder", "11 September, 2026", "https://www.brecorder.com/news/40438969/suki-kinari-hydropower-project-nepra-objects-to-proposed-tariff-modification"],
          ["Minister orders probe into delay in completion of hydel projects", "The News", "11 September, 2026", "https://www.thenews.pk/print/1436722-minister-orders-probe-into-delay-in-completion-of-hydel-projects"],
          ["British firm expresses interest in Pakistan power transmission", "The News", "11 September, 2026", "https://www.thenews.pk/print/1436649-british-firm-expresses-interest-in-pakistan-power-transmission"],
          ["PM places two-hour cap on power load-shedding", "Business Recorder", "12 September, 2026", "https://www.brecorder.com/news/40439130/pm-places-two-hour-cap-on-power-load-shedding"],
          ["Nepra okays $58bn 11-year power plan amid reservations", "DAWN", "12 September, 2026", "https://www.dawn.com/news/2029253/nepra-okays-58bn-11-year-power-plan-amid-reservations"],
          ["ECC's advice sought to cancel Jura Energy's rights", "DAWN", "13 September, 2026", "https://www.dawn.com/news/2029578/eccs-advice-sought-to-cancel-jura-energys-rights"]
        ])
      },
      {
        name: "Climate Change", pct: 14.00, color: "#b3cfea",
        headlines: mmRows([
          ["Japan to provide $16.4m for flood protection in Sindh", "DAWN", "8 September, 2026", "https://www.dawn.com/news/2028278/japan-to-provide-164m-for-flood-protection-in-sindh"],
          ["'Clean-air finance must target outcomes'", "DAWN", "8 September, 2026", "https://www.dawn.com/news/2028277/clean-air-finance-must-target-outcomes"],
          ["Climate change and the glacier challenge", "Pakistan Today", "8 September, 2026", "https://www.pakistantoday.com.pk/2026/09/08/climate-change-and-the-glacier-challenge"],
          ["Where the green doesn't grow", "The News", "9 September, 2026", "https://www.thenews.pk/print/1436312-where-the-green-doesn-t-grow"],
          ["No time for climate complacency", "Business Recorder", "10 September, 2026", "https://www.brecorder.com/news/40438733/no-time-for-climate-complacency"],
          ["Forecast: official unpreparedness", "Express Tribune", "13 September, 2026", "https://www.brecorder.com/news/40439194/forecast-official-unpreparedness"],
          ["Climate policy misses mental health", "Express Tribune", "13 September, 2026", "https://tribune.com.pk/story/2628951/climate-policy-misses-mental-health"]
        ])
      },
      {
        name: "Renewable Energy", pct: 6.00, color: "#5b9ad4",
        headlines: mmRows([
          ["Interview with Huma Yahya Khattak – CEO, EV Technologies: 'Electric two-wheelers are an economic and energy-security priority'", "Business Recorder", "7 September, 2026", "https://www.brecorder.com/news/40438213/interview-with-huma-yahya-khattak-ceo-ev-technologies-electric-two-wheelers-are-an-economic-and-energy-security-priority"],
          ["Tax relief for EVs", "Pakistan Today", "10 September, 2026", "https://www.pakistantoday.com.pk/2026/09/10/tax-relief-for-evs"],
          ["Flawed NEV incentive", "DAWN", "12 September, 2026", "https://www.dawn.com/news/2029306/flawed-nev-incentive"]
        ])
      },
      { name: "Coal", pct: 0.00, color: "#0f3f70", headlines: [] }
    ]
  }
};

/* The latest five weekly issues, newest first — these get the "Compare" options and the
   archive slider on the detail page. When a new issue lands: add its entry to
   MEDIA_MONITOR_ISSUES above, put its slug at the front here and drop the last slug.
   The detail page is still in progress and is NOT linked from the public listing: WEEKLY_MM
   rows in data.js have no 4th "slug" item, so cards open the PDF. Add the slug there only
   when the new UI goes live. */
const MEDIA_MONITOR_LATEST = ['2026-10-19', '2026-10-12', '2026-10-05', '2026-09-28', '2026-09-21'];
