/* PRIED shared data — articles, events, jobs, media monitors.
   Extracted from pried-inner-pages.html. No DOM access here. */

/* ── NEWS ARTICLES ── */
const PRIED_NEWS = 'https://www.priedpk.org/?post_type=news&p=';
const ARTICLES = {
  'scooty-ev': {
    title: "Scooty for the beti and EV for the biwi",
    tag: "Gender & Energy", date: "17 June 2026",
    author: "Zahra Naeem & Laiba Nayyab",
    url: "https://www.dawn.com/news/2008541", sourceName: "Dawn",
    img: "https://i.dawn.com/primary/2026/06/1711212592f22e0.webp",
    body: [
      `Two young women — Esha, 22, and Sana, 24 — chose electric scooters for practical reasons: eliminating fuel expenses (petrol costs have doubled to Rs12,000 monthly) and managing lighter machines that require no kickstart mechanics. For them, the switch to an electric two-wheeler was less about the environment and more about reclaiming time, money and a degree of independence.`,
      `Esha identifies three obstacles facing women who want to ride: upfront costs, social pressure ("what will people say"), and discomfort with female independence. She notes that "control only works when we're dependent." For women like her, the electric scooter is not just a vehicle — it is a negotiation with the household about who gets to move.`,
      `The federal PAVE initiative targets 116,000 electric bikes annually, yet only 5,409 units were distributed — roughly 4.5% of targets. Commercial banks approved merely 9% of EV loan applications. The policy promise and the delivery gap tell very different stories.`,
      `Nazia, a 30-year-old household helper, cannot access this technology at all. Battery durability concerns, lack of charging infrastructure, electricity costs and language barriers on device interfaces create insurmountable obstacles for low-income workers. EV subsidies funded by petrol levies disproportionately burden middle and lower-income consumers while benefiting more affluent buyers.`,
      `Rural women face exclusion as charging infrastructure concentrates in major cities. The article asks the central question: is Pakistan's EV transition a just transition, or just a transition — one that delivers mobility to those who already have options, while leaving behind those who need it most?`
    ],
    tags: ["Women", "EVs", "Electric Mobility", "Gender", "Energy Transition", "PAVE", "Mobility"],
    authorDesc: "Zahra Naeem and Laiba Nayyab are researchers at PRIED covering energy, gender and climate justice in Pakistan.",
    related: ["solar-gender", "net-metering", "distributed-solar"]
  },
  'crossroads': {
    title: "Pakistan at energy crossroads",
    tag: "Energy", date: "14 May 2026",
    author: "Muqaddas Ashiq & Rimsha Rehan",
    url: "https://www.brecorder.com/news/40421008", sourceName: "Business Recorder",
    img: "https://www.priedpk.org/wp-content/uploads/2026/05/energy-crossroads.gif",
    body: [
      `The energy shock triggered by the US-Israel war has reverberated across global markets with uncommon severity. For Pakistan, the disruption arrives at a particularly vulnerable moment. Summer brings a sharp surge in electricity demand driven by cooling needs, forcing the national grid to rapidly ramp up generation capacity.`
    ],
    tags: ["Energy Policy", "Pakistan", "US-Israel War", "Energy Transition", "Grid"],
    related: ["net-metering", "33gw", "sahiwal"]
  },
  'net-metering': {
    title: "Net metering: Who pays the price for Pakistan's new solar regime?",
    tag: "Solar Policy", date: "10 February 2026",
    author: "Manzoor Ahmed Alizai",
    url: PRIED_NEWS + '2111', sourceName: "Dawn",
    img: "https://www.priedpk.org/wp-content/uploads/2026/02/net-billing.jpg",
    body: [
      `The Pakistani government recently implemented a significant policy shift by replacing the existing net-metering system with a net-billing framework for solar consumers — known as prosumers. This change affects both current and prospective participants in the solar energy sector.`,
      `Authorities cited multiple justifications for this transition, including "the need to address the technical, financial and equity concerns" that have surfaced due to rapid solar expansion across the nation. A key modification involves the compensation rate for solar-generated electricity returned to the grid: the buyback rate has been substantially reduced from Rs26 per unit to Rs11 per unit.`,
      `This adjustment reflects market rates and may result in extended recovery periods and diminished financial gains for prosumers. The newly established export rate aligns with the government's average procurement costs for electricity from conventional power generation facilities.`,
      `As the regulator recalibrates buy-back rates, the tension between protecting the grid's finances and preserving the incentives that fuelled Pakistan's distributed solar boom remains unresolved — and it is ordinary solar investors who are left to absorb the difference.`
    ],
    tags: ["Net Metering", "Solar", "Prosumers", "Tariffs", "Policy"],
    related: ["solar-gender", "33gw", "taxing-solar"]
  },
  'solar-gender': {
    title: "Pakistan's solar shift has a <em>gender problem</em>",
    tag: "Gender & Energy", date: "24 December 2025",
    author: "Zahra Naeem",
    url: "https://www.dawn.com/news/1962618/pakistans-solar-shift-has-a-gender-problem", sourceName: "Dawn",
    img: "https://www.priedpk.org/wp-content/uploads/2025/12/2317433207e27f0.jpeg",
    body: [
      `In a quiet Rawalpindi neighbourhood, where the power grid often dictates the rhythm of life, one family has transitioned from stopgap solutions to a more sun-powered reality. Their journey into solar energy was not just a financial calculation, but a response to a two-decade fight with an unreliable power supply.`,
      `"It was one hour off and one hour on," recalls Rubab, a 40-year-old housewife and resident of the Marir Hassan neighbourhood. After struggling with frail UPS batteries for years, she finally invested in solar panels about a year and a half ago — at a high personal cost.`,
      `"I sold my gold to buy these solar panels for our home," she tells Dawn. "Women are expected to make these sacrifices for the household. Even my sister had to install solar on installments, that is the only way families like ours can afford it."`,
      `Rubab's experience highlights a critical but underexplored dimension of Pakistan's solar revolution: while the country is experiencing an unprecedented boom in distributed solar adoption — with studies estimating over 33GW installed nationwide — the benefits and decision-making around this energy transition are deeply gendered.`,
      `Research by PRIED and TransitionZero, which combined satellite imagery with national household survey data, has found that the solar revolution in Pakistan is happening at an unprecedented pace — but questions of who benefits, who decides, and who bears the cost remain unanswered in most policy discussions.`
    ],
    tags: ["Solar", "Gender & Energy", "Energy Access", "Distributed Solar"],
    authorDesc: "Zahra Naeem is a journalist and researcher covering energy, climate and gender in Pakistan. This article was originally published in Dawn.",
    related: ["33gw", "distributed-solar", "net-metering"]
  },
  'sahiwal': {
    title: "Sahiwal's Megawatts of Betrayal",
    tag: "Investigation", date: "26 October 2025",
    author: "Zahra Naeem & Hussain Assad",
    url: PRIED_NEWS + '1949', sourceName: "Dawn",
    img: "https://www.priedpk.org/wp-content/uploads/2025/10/sahiwal.jpg",
    body: [
      `Officials presented the Sahiwal coal-fired power plant as a transformative initiative in 2014. The 1,320-megawatt facility was marketed as "Pakistan's flagship energy project" that would resolve electricity deficiencies and improve conditions in central Punjab.`,
      `Local representatives promised villagers in 76-5R substantial benefits, characterising the opportunity as "once-in-a-generation" and emphasising China's substantial CPEC investment. Pledged outcomes included 3,700 construction positions, 1,600 permanent roles, technical training centres, girls' educational facilities, a hospital, improved road infrastructure, and complimentary electricity for the three most-affected villages.`,
      `However, authorities omitted critical information. They failed to disclose that established agricultural lands would transform into contaminated zones with coal residue and polluted water sources. Communities were not informed about the environmental consequences their children would face: respiratory difficulties, orchard deterioration, and declining groundwater levels.`,
      `Years on, this investigation traces the gap between those promises and the lived reality for the communities around the plant — from land and livelihoods to air quality and water. It documents how the promise of development has too often translated into loss for locals.`
    ],
    tags: ["Coal", "Sahiwal", "CPEC", "Investigation", "Community", "Environment"],
    related: ["coalmining-thar", "climate-justice", "thermal-power"]
  },
  '33gw': {
    title: "Study finds 33GW of solar panels already installed nationwide",
    tag: "Research Coverage", date: "31 October 2025",
    url: PRIED_NEWS + '1943', sourceName: "The News",
    img: "https://www.priedpk.org/wp-content/uploads/2025/10/33GW.jpg",
    body: [
      `Pakistan is experiencing significant growth in solar energy adoption, according to researchers and officials gathered at an event in Karachi. A newly released study indicates that approximately 33 gigawatts of solar photovoltaic capacity has been deployed throughout the nation.`,
      `The research, titled "Shouting from the Rooftops: Mapping Pakistan's Solar Power Revolution," was developed collaboratively by PRIED and TransitionZero, a London-based energy-transition organisation. The document examines solar installations across different regions, population segments, and industry sectors.`,
      `Participants at the launch event — including government representatives and lawmakers — emphasised that off-grid solar expansion represents "an unstoppable phenomenon" in Pakistan. However, they stressed the importance of directing this growth strategically "to enhance the sustainability, affordability and accessibility of electricity nationwide."`
    ],
    tags: ["Solar", "Research", "Distributed Solar", "TransitionZero", "Grid"],
    related: ["distributed-solar", "solarisation", "net-metering"]
  },
  'solarisation': {
    title: "Pakistan was experiencing unprecedented solarisation of its energy sector",
    tag: "Research", date: "30 October 2025",
    url: PRIED_NEWS + '1945', sourceName: "The News",
    img: "https://www.priedpk.org/wp-content/uploads/2025/10/pakistan-solar.webp",
    body: [
      `Pakistan has installed solar photovoltaic panels totalling 33 gigawatts of capacity throughout the nation, according to a study launched by PRIED in Karachi. The event featured the launch of "Shouting from the Rooftops: Mapping Pakistan's Solar Power Revolution," produced jointly by PRIED and TransitionZero.`,
      `Speakers at the launch emphasised that Pakistan's off-grid solar expansion has become "an unstoppable phenomenon," though they noted it requires proper direction to enhance electricity sustainability, affordability and accessibility nationwide.`,
      `The research is characterised as a significant resource for comprehending the scope and distribution of solar power development occurring across the country — and the urgent need for policy to catch up with what is happening on rooftops.`
    ],
    tags: ["Solar", "Energy Transition", "Grid", "Research"],
    related: ["33gw", "distributed-solar", "net-metering"]
  },
  'distributed-solar': {
    title: "Shedding light on Pakistan's distributed solar",
    tag: "Research", date: "October 2025",
    url: PRIED_NEWS + '1940', sourceName: "PRIED & TransitionZero",
    img: "https://www.priedpk.org/wp-content/uploads/2025/10/Gemi.jpg",
    body: [
      `Pakistan's solar sector has grown rapidly, with approximately 50 GW of panels imported as prices dropped and adoption increased. However, comprehensive installation data remained scarce. TransitionZero and PRIED addressed this through satellite imagery analysis combined with household survey research to create the first detailed distributed solar assessment.`,
      `The research indicates that "most of Pakistan's solar growth is happening outside the formal sector." TransitionZero's estimates place total installed capacity at roughly 29 GW, with 27.5 GW from distributed systems concentrated primarily in Punjab, with additional presence in Khyber Pakhtunkhwa and Sindh.`,
      `PRIED's survey findings show "33.35 GW of imported panels have been installed across residential, commercial, industrial, and agricultural sectors." This includes 19 GW of non-net-metered and 8.3 GW of off-grid systems. Residential adoption correlates with income levels, ranging from 38% among lower-income households to 88% among higher-income households, while agricultural adoption reaches 85% among small-scale farmers.`
    ],
    tags: ["Solar", "Distributed Solar", "Research", "Data", "TransitionZero"],
    related: ["33gw", "solarisation", "solar-gender"]
  },
  'climate-justice': {
    title: "Climate Justice: holding the green house elite accountable",
    tag: "Climate Justice", date: "3 April 2023",
    author: "Badar Alam",
    url: PRIED_NEWS + '891', sourceName: "UNDP Development Advocate Pakistan",
    img: "https://www.priedpk.org/wp-content/uploads/2023/06/Coalmining-In-Thar-01.jpg",
    body: [
      `The Thar desert in Pakistan contains massive lignite coal reserves — 175 billion tonnes, comparable in energy wealth to Gulf nations — yet its residents remain among Pakistan's poorest populations. The contrast captures a structural injustice at the heart of Pakistan's energy story.`,
      `Stark disparities in electricity consumption tell the same story: Bahrain residents use 17,844 kWh per capita annually, while Pakistanis consume only 399 kWh, with Thar residents using minimal electricity for basic household needs.`,
      `Climate justice addresses two interconnected issues. First, wealthy populations disproportionately consume fossil fuels and emit greenhouse gases, causing climate disruption that predominantly affects impoverished communities. Second, affluent nations bear responsibility for "taking extra responsibility for fighting this crisis" while prioritising vulnerable populations' needs.`,
      `The data is stark: "the wealthiest one percent of the world's population has produced more than twice as much carbon emissions as the poorest half." The World Bank projects 86 million Sub-Saharan Africans may be displaced by 2050, despite that region producing only 2% of greenhouse emissions. South Asia faces potential displacement of 40 million people within 25 years.`
    ],
    tags: ["Climate Justice", "Loss & Damage", "Coal", "Thar", "Equity"],
    authorDesc: "Muhammad Badar Alam is the Chief Executive of PRIED. This article was published in UNDP's Development Advocate Pakistan journal.",
    related: ["coalmining-thar", "sahiwal", "letting-go-coal"]
  },
  'gas-crisis': {
    title: "Gas crisis: causes and remedies",
    tag: "Analysis", date: "1 January 2023",
    author: "Azhar Lashari",
    url: PRIED_NEWS + '437', sourceName: "The News",
    img: "https://www.priedpk.org/wp-content/uploads/2023/01/Gas-crisiscauses-and-remedies.png",
    body: [
      `Pakistan ranks 21st globally in natural gas consumption and currently faces severe supply shortages. The demand exceeds 2.5 billion cubic feet per day while supply stands around 1.7 bcfd, creating a deficit of 1.35 bcfd distributed between major utilities.`,
      `Demand for gas is rapidly increasing — particularly in power, residential and fertiliser sectors — due to subsidised pricing, while domestic reserves have declined from 23.9 to 13.6 trillion cubic feet between 2006 and 2020.`,
      `Pakistan initiated LNG imports from Qatar in 2012, with a multi-billion dollar 16-year deal signed in 2016. Imports surged from 19.8 million MMBTU in 2015 to 348.6 million MMBTU by 2020, with costs rising from $151 million to $2.559 billion. The Russia-Ukraine conflict further disrupted LNG markets, making procurement increasingly difficult.`,
      `The piece advocates for renewable energy investment, noting that "cost of power generation through LNG was as high as Rs 16/KWh whereas solar and wind technologies cost just Rs 6/KWh." Local reserves will deplete within 10–12 years, yet Pakistan continues expanding gas infrastructure rather than pursuing alternatives.`
    ],
    tags: ["Gas", "LNG", "Energy Security", "Policy", "Renewables"],
    authorDesc: "Azhar Ali Lashari is Director & Project Lead at PRIED.",
    related: ["lng-renewables", "planning-power", "cutting-losses"]
  },
  'planning-power': {
    title: "Planning power",
    tag: "Opinion", date: "1 January 2023",
    author: "Shaheera Tahir",
    url: PRIED_NEWS + '395', sourceName: "The News",
    img: "https://www.priedpk.org/wp-content/uploads/2023/01/Planning-Power.png",
    body: [
      `Pakistan's energy sector relies heavily on reactive crisis management rather than strategic planning. This approach has caused environmental damage, harmed communities, and left the nation vulnerable to external supply chain disruptions, resulting in a dysfunctional system with an expensive energy mix dependent on imported fossil fuels.`,
      `Pakistan's circular debt has surpassed Rs2.5 trillion, demonstrating widespread system inefficiencies. "A long-term system-oriented planning centred at sustainable energy resources such as solar and wind is direly needed," with emphasis on systems-based approaches for harnessing renewable potential.`,
      `Variable renewable energy (VRE) resources remain underutilised despite Pakistan's significant potential. Only six percent of installed capacity comes from VRE, with over 150 stalled projects totalling 8 GW. Solar and wind represent the most economical generation options, costing Rs6–7/kWh compared to thermal fuels ranging from Rs16–35/kWh.`,
      `Adopting comprehensive system-cost approaches would reveal renewables' genuine economic advantages while reducing electricity prices, carbon emissions, and energy vulnerability. European studies demonstrate that balancing costs at lower VRE penetration remain negligible.`
    ],
    tags: ["Power Planning", "IGCEP", "Policy", "Circular Debt", "VRE"],
    authorDesc: "Shaheera Tahir is Program Manager, Research at PRIED.",
    related: ["reduced-ambitions", "cutting-losses", "gas-crisis"]
  },
  'coalmining-thar': {
    title: "Coalmining In Thar Spells Disaster For Locals",
    tag: "Investigation", date: "23 March 2022",
    author: "Azhar Lashari",
    url: PRIED_NEWS + '361', sourceName: "The Friday Times",
    img: "https://www.priedpk.org/wp-content/uploads/2022/11/Coalmining-In-Thar.png",
    body: [
      `Coal mining development in Thar's coalfields prioritises economic growth while dismissing environmental and human costs as acceptable externalities. Since coal power projects began in Thar Coalfield Block-II, hundreds of families have faced forced displacement from ancestral lands without alternative livelihood options.`,
      `Mining operations have restricted access to farmlands and pastures while causing severe groundwater depletion and contamination. Dewatering activities for mining have lowered water levels in five villages by three to four feet, creating acute scarcity.`,
      `Coal extraction requires draining three aquifer layers beneath the surface. The extracted water contains "heavy metals like arsenic, copper and lead," posing serious public health and ecosystem risks. Two reservoirs at Gorrano and Dukar Chaou store this contaminated wastewater, yet lack protective geo-membrane lining, causing seepage that has polluted wells across thirteen villages.`,
      `Beyond reservoir disposal, coal companies have dumped wastewater in grazing areas, killing livestock and rendering wells toxic. Local communities report vegetation die-off affecting winter livestock fodder and increased malaria prevalence from mosquito breeding in contaminated water sources.`
    ],
    tags: ["Coal", "Thar", "Community", "Investigation", "Water", "Environment"],
    authorDesc: "Azhar Ali Lashari is Director & Project Lead at PRIED.",
    related: ["coal-companies-thar", "climate-justice", "sahiwal"]
  },
  'thermal-power': {
    title: "Thermal power in times of stagflation",
    tag: "Analysis", date: "2022",
    url: PRIED_NEWS + '360', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/11/Thermal-Power-In-Times.png",
    body: [
      `With the rupee under pressure and fuel-import bills soaring, Pakistan's heavy reliance on imported-fuel thermal power has become a macroeconomic liability. This analysis links energy choices to the country's wider economic distress.`,
      `In an era of stagflation, doubling down on costly thermal generation deepens the crisis — while domestic renewables offer a hedge against imported inflation and provide a path toward energy security.`
    ],
    tags: ["Thermal Power", "Economy", "Imports", "Renewables"],
    related: ["cutting-losses", "gas-crisis", "lng-renewables"]
  },
  'letting-go-coal': {
    title: "Letting go of Coal",
    tag: "Opinion", date: "2022",
    url: PRIED_NEWS + '359', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/11/Letting-Go-Of-Coal.png",
    body: [
      `As the world moves to phase out coal, Pakistan faces a choice about how much further to expand its coal fleet. The economic and climate case for new coal has all but collapsed.`,
      `Letting go of coal is not just an environmental imperative but a financial one — sparing the country from stranded assets and locked-in fuel costs for decades.`
    ],
    tags: ["Coal", "Phaseout", "Climate", "Stranded Assets"],
    related: ["phasing-out-coal", "climate-justice", "reduced-ambitions"]
  },
  'phasing-out-coal': {
    title: "Opinion: Is Pakistan really phasing out coal?",
    tag: "Opinion", date: "18 January 2021",
    author: "Haneea Isaad",
    url: PRIED_NEWS + '214', sourceName: "The Third Pole",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Opinion-Is.png",
    body: [
      `Prime Minister Imran Khan announced a coal moratorium in December 2020 at the Climate Ambition Summit, marking the fifth anniversary of the Paris Climate Agreement. While this garnered international praise, significant implementation details remain unclear regarding timeline, transition mechanisms, and the treatment of existing versus planned facilities.`,
      `Pakistan's energy strategy has relied heavily on coal-based generation, with substantial Chinese investment through CPEC projects. The corridor encompasses 17 priority energy initiatives totalling 11.1 GW capacity, with three-quarters representing coal-fired plants backed by approximately USD 8.7 billion in insured debt from major Chinese financial institutions.`,
      `Coal already represents a substantial portion of Pakistan's generation mix: 2019–20 saw 19% of power generation coming from just four coal-fired CPEC plants. Cancelling coal projects would require extensive renegotiation of government power purchase contracts, a complexity demonstrated by ongoing difficulties with 47 independent power producers.`,
      `The Prime Minister's proposal to explore Coal-to-Liquid and Coal-to-Gas alternatives raises environmental concerns. These processes demand substantial water and energy resources. The article advocates instead for battery storage and hybrid renewable energy systems as more sustainable alternatives.`
    ],
    tags: ["Coal", "Phaseout", "Policy", "CPEC", "Climate"],
    related: ["letting-go-coal", "reduced-ambitions", "climate-justice"]
  },
  'energy-paradox': {
    title: "The paradox of energy transition",
    tag: "Analysis", date: "6 July 2021",
    author: "Naila Saleh",
    url: PRIED_NEWS + '213', sourceName: "The Daily Times",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Taxing-solar-panels-1.png",
    body: [
      `Pakistan has publicly endorsed renewable energy advancement ahead of COP 26. This commitment appears across multiple frameworks including the Nationally Determined Contribution, Net Metering Regulation 2015, and the Alternative Renewable Energy Policy (AREP, 2019), which established a goal of "30 percent of non-hydro renewable energy by 2030."`,
      `However, significant contradictions undermine these initiatives. The National SDG Framework targets 25 percent renewable share in total energy consumption; AREP targets 30 percent renewable generation capacity by 2030; yet the revised IGCEP projects only 10 percent solar and wind capacity by 2030. These misaligned objectives create confusion about Pakistan's decarbonisation strategy.`,
      `Technical studies confirm that scaling solar and wind capacity alongside hydropower investments is both feasible and advantageous for emissions reduction and cost efficiency. However, fragmented oversight and uncoordinated planning continue prioritising fossil fuels.`,
      `Successfully transitioning to renewable energy requires systemic coordination across government levels, legal frameworks, and stakeholder engagement. Pakistan must align policies with actions and establish institutional coherence to capture the closing window for climate goals.`
    ],
    tags: ["Energy Transition", "Solar", "Policy", "AREP", "IGCEP"],
    authorDesc: "Naila Saleh is Technical Advisor at PRIED and Project Manager at Agora Energiewende.",
    related: ["taxing-solar", "reduced-ambitions", "net-metering"]
  },
  'pakistan-energy-transition': {
    title: "Pakistan and energy transition",
    tag: "Analysis", date: "May 2022",
    url: PRIED_NEWS + '212', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Pakistan-And-Energy.png",
    body: [
      `Where does Pakistan stand in the global shift to clean energy? This piece maps the country's starting point — its fuel mix, institutions and financing constraints — and the path it must travel toward a low-carbon power system.`,
      `It frames the energy transition not as a distant aspiration but as an immediate opportunity to cut costs, improve security and reduce emissions simultaneously.`
    ],
    tags: ["Energy Transition", "Renewables", "Policy", "Pakistan"],
    related: ["energy-paradox", "reduced-ambitions", "solarisation"]
  },
  'reduced-ambitions': {
    title: "Reduced ambitions for renewable energy",
    tag: "Renewable Energy", date: "May 2022",
    url: PRIED_NEWS + '205', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Reduced-Ambitions-For.png",
    body: [
      `Despite ambitious headline targets, Pakistan's actual renewable-energy commitments have repeatedly been scaled back in planning documents. This analysis tracks the gap between stated ambition and the numbers in official plans.`,
      `Diluted renewable targets risk locking the country into expensive fossil generation, and planning must treat clean energy as the least-cost option it has become.`
    ],
    tags: ["Renewables", "IGCEP", "Targets", "Policy"],
    related: ["planning-power", "pakistan-energy-transition", "energy-paradox"]
  },
  'cutting-losses': {
    title: "Cutting losses",
    tag: "Analysis", date: "May 2022",
    url: PRIED_NEWS + '204', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Cutting-Losses.png",
    body: [
      `Transmission and distribution losses, theft and under-recovery drain billions from Pakistan's power sector every year. This piece examines where the losses come from and why they keep feeding the circular-debt spiral.`,
      `Cutting these losses — through metering, governance reform and targeted investment — is among the cheapest and fastest ways to stabilise the sector's finances.`
    ],
    tags: ["Circular Debt", "DISCOs", "Losses", "Reform"],
    related: ["planning-power", "thermal-power", "gas-crisis"]
  },
  'coal-companies-thar': {
    title: "Coal mining companies in Thar violating Environment Protection Act",
    tag: "Investigation", date: "May 2022",
    url: PRIED_NEWS + '196', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Coal-Mining-Companies-In-Thar.png",
    body: [
      `Analysts allege that coal-mining operations in Thar have been dumping saline and contaminated water in ways that threaten clean wells and local water sources — in apparent breach of the Sindh Environment Protection Act, the National Water Policy 2018 and generation licences issued by NEPRA.`,
      `The report sets out the concerns over water contamination and weak enforcement, and the implications for communities whose survival depends on Thar's already-scarce groundwater.`
    ],
    tags: ["Coal", "Thar", "Water", "Environment", "Regulation"],
    related: ["coalmining-thar", "climate-justice", "sahiwal"]
  },
  'lng-renewables': {
    title: "LNG vs renewables",
    tag: "Analysis", date: "May 2022",
    url: PRIED_NEWS + '195', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/LNG-vs-renewables.png",
    body: [
      `Pakistan's energy planners face a fork in the road: lock in more imported LNG, or accelerate domestic renewables. This analysis compares the two paths on cost, security and exposure to volatile global markets.`,
      `With LNG prices spiking, renewables increasingly win on economics as well as climate — making the case for a decisive tilt away from imported gas.`
    ],
    tags: ["LNG", "Renewables", "Energy Security", "Imports"],
    related: ["gas-crisis", "thermal-power", "pakistan-energy-transition"]
  },
  'taxing-solar': {
    title: "Taxing solar panels",
    tag: "Solar Policy", date: "May 2022",
    url: PRIED_NEWS + '193', sourceName: "PRIED",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Taxing-solar-panels.png",
    body: [
      `Proposals to tax solar panels and equipment risk undercutting the very transition Pakistan says it wants. This piece weighs the short-term revenue logic against the long-term cost of slowing solar adoption.`,
      `Penalising clean energy at the border is self-defeating in a country where rooftop solar is easing pressure on the grid and on household bills alike.`
    ],
    tags: ["Solar", "Taxation", "Policy", "Renewables"],
    related: ["energy-paradox", "net-metering", "reduced-ambitions"]
  }
};


/* ── EVENTS ── */
const PRIED_EVENT = 'https://www.priedpk.org/?post_type=event&p=';
const EVENTS = {
  'iran-war': {
    title: "Pakistan's just-energy transition and climate agenda in the time of war in Iran",
    cat: "Consultation", date: "April 2026", loc: "Islamabad", emoji: "🤝",
    img: "https://www.priedpk.org/wp-content/uploads/2026/04/2.jpeg", url: PRIED_EVENT + '2222',
    body: [
      `The ongoing war in and around Iran and the consequent disruption of critical energy supply routes have exposed Pakistan's deep structural dependence on imported fossil fuels such as oil, coal and liquified natural gas (LNG). With rising fuel prices in international markets, increased fuel import bills and their mounting pressure on foreign exchange reserves as well as the serious challenges these factors are posing to Pakistan's energy supplies and energy security, the conflict has intensified the countries vulnerabilities—rising energy prices supply concerns, driving inflation that disproportionately impacting lower-income households and renewing interest among policymakers to mine more indigenous coal and use it for power generation.`,
      `Rather than being a temporary shock, the war and its impacts reflects broader systemic challenge: that Pakistan has an energy model that is both economically unsustainable and geopolitically fragile. At the same time, it has created an urgency to rethink the country's energy and climate trajectories, raising questions about energy security, energy affordability and a sustainable and just energy transition. Importantly, the crisis also underscores the country's climate imperative: continued reliance on fossil fuels not only deepens economic vulnerability but locks us into high-emission energy consumption, undermining our climate commitments and increasing our exposure to future carbon-related trade and financial risks.`
    ],
    tags: ["Energy Security", "Just Transition", "Climate", "Iran War", "Fossil Fuels"],
    related: ["green-loans", "world-bank", "net-metering"],
    images: ["https://www.priedpk.org/wp-content/uploads/2026/04/2.jpeg", "https://www.priedpk.org/wp-content/uploads/2026/04/4.jpeg", "https://www.priedpk.org/wp-content/uploads/2026/04/6.jpeg", "https://www.priedpk.org/wp-content/uploads/2026/04/8.jpeg", "https://www.priedpk.org/wp-content/uploads/2026/04/10.jpeg", "https://www.priedpk.org/wp-content/uploads/2026/04/12.jpeg", "https://www.priedpk.org/wp-content/uploads/2026/04/14.jpeg"],
    videos: [], media: [],
    press: [
      { title: "Pakistan should use Iran war-driven energy crisis to accelerate renewables: experts — Business Recorder", url: "https://www.brecorder.com/news/40415624/pakistan-should-use-iran-war-driven-energy-crisis-to-accelerate-renewables-experts" },
      { title: "Govt to keep supporting decentralised solarisation in Pakistan, says Dr Shezra — The Nation", url: "https://www.nation.com.pk/10-Apr-2026/govt-keep-supporting-decentralised-solarisation-pakistan-says-dr-shezra" },
      { title: "Seminar calls for solar push to counter energy shocks from Gulf conflict — The News", url: "https://www.thenews.pk/print/1409103-seminar-calls-for-solar-push-to-counter-energy-shocks-from-gulf-conflict" }
    ],
    others: []
  },
  'green-loans': {
    title: "A consultation on facilitating green loans for sustainable energy transition in Pakistan",
    cat: "Consultation", date: "2023", loc: "", emoji: "🤝",
    img: "https://www.priedpk.org/wp-content/uploads/2023/12/Artboard-2.png", url: PRIED_EVENT + '1119',
    body: [
      `In recent times, renewable energy and green alternatives have become cheaper and better in quality, making them more feasible to replace fossil fuels. This is especially true for Electric Vehicles (EVs) and Distributed Solar Photovoltaic (DSPV) systems. Finance plays a crucial role in making the transition to these green technologies, however the process of obtaining funds is extremely challenging and complex for the adopters. There are disagreements and complications between financial institutions and 'borrowers' who are seeking to get financing thereby creating multitude of challenges.`,
      `These challenges, along with the high cost of green products, pose significant barriers for the adopters who want to switch to these sustainable technologies. To make this shift happen smoothly and affordably, we need smart financial strategies. The lack of accessible financing further increases in financially restricted contexts, causing risks of exclusion, inequality, and inefficient outcomes. Similarly, challenges in capital availability, lack of foreign investments, and poor infrastructure also restrict the scale up of these technologies.`,
      `A project led by PRIED, with the support of Agora Energiewende, has been extensively analysing these barriers with the objective to provide proposals for refinement, as to accelerate DSPV and EV uptake in Pakistan. By shedding light on these challenges, the aim of this consultative workshop is to initiate the much-needed discourse around a facilitative financing facility for green products in Pakistan.`
    ],
    tags: ["Green Finance", "Solar", "EVs", "Energy Transition"],
    related: ["net-metering", "rooftop-financing", "iran-war"],
    images: ["https://www.priedpk.org/wp-content/uploads/2023/12/Artboard-2.png", "https://www.priedpk.org/wp-content/uploads/2023/12/Artboard-9.png", "https://www.priedpk.org/wp-content/uploads/2023/12/Artboard-6.png", "https://www.priedpk.org/wp-content/uploads/2023/12/Artboard-7.png"],
    videos: [], media: [], press: [], others: []
  },
  'karachi-electricity': {
    title: "Energy experts discuss various aspects of Karachi's electricity crisis at multi-stakeholder dialogue",
    cat: "Panel Discussion", date: "2023", loc: "Karachi", emoji: "🎙️",
    img: "https://www.priedpk.org/wp-content/uploads/2023/09/DSC_7075-scaled.jpg", url: PRIED_EVENT + '981',
    body: [
      `Pakistan needs to have sustained and consistent energy policies to provide cheap and reliable electricity to its people, said Abu Bakar Ahmed, secretary of Sindh government's energy department at a panel discussion held in Karachi on Tuesday. "Since 1947, we have been lurching from one ad hoc measure to the next and never thought of doing long term planning in the energy sector," he said during his concluding remarks on the occasion.`,
      `This lack of long term planning means that a lot of energy in the country is being produced with very costly sources such as furnace oil and gas, he said. "The biggest problem in using renewable energy sources such as solar panels is their high capital cost. Unless, we are able to either import solar panels cheaply or we start producing them within Pakistan, we cannot uses these renewable energy sources effectively and economically," he added.`,
      `The panel discussion was organised by Policy Research Institute for Equitable Development (PRIED), a think tank based in Islamabad around its research report titled Fostering Solar PVs in High Research study R01. The study is based on a household survey conducted in several parts of Karachi last year, aimed at providing solutions against loadshedding in Karachi's high loss feeder areas.`,
      `Manzoor Ahmed Alizai, one of the lead authors of the study, told the participants of the panel discussion that we need tailor-made solutions and business model that can cater to the needs of those communities in Karachi that cannot afford the costly energy being provided to them and have not access to money required for installing solar panels on their own. "The government, therefore, needs to finance the capital costs required for the installation of these solar panels," he said. "This makes a compelling case for the solarization of high loss feeders as this can help the electricity demand locally, reduce transmission and distribution losses and help the authorities address the problem of electricity theft in Karachi's high loss feeders," he added.`,
      `The panel discussion put together participants from across Karachi's population and included senior government officers, civil society activists, community representatives, academicians and researchers, political leaders and K-Electric officials. They highlighted various aspects of the electricity crisis in Karachi and emphasized the need for finding innovative solutions to address that crisis. Most of them endorsed the study's finding that solarization was the most feasible and most sustainable option among those solutions and, therefore, needs to be prioritized at an urgent pace.`
    ],
    tags: ["Karachi", "Solar", "High-Loss Feeders", "K-Electric"],
    related: ["net-metering", "rooftop-financing", "world-bank"],
    images: ["https://www.priedpk.org/wp-content/uploads/2023/09/DSC_7075-scaled.jpg", "https://www.priedpk.org/wp-content/uploads/2023/09/DSC_7070-scaled.jpg", "https://www.priedpk.org/wp-content/uploads/2023/09/DSC_7236-1-scaled.jpg", "https://www.priedpk.org/wp-content/uploads/2023/09/DSC_7105-scaled.jpg", "https://www.priedpk.org/wp-content/uploads/2023/09/DSC_7082-scaled.jpg"],
    videos: [],
    media: [{ title: "Media coverage (PDF)", url: "pdfs/Media-Coverage.docx.pdf" }],
    press: [{ title: "Press Release (PDF)", url: "pdfs/Press-release.docx.pdf" }],
    others: [{ title: "Fostering Solar PV in High-Loss Feeders — Research Study (PDF)", url: "pdfs/PRIED-Fostering-Solar-PV-in-High-Research-study-R01.pdf" }]
  },
  'net-metering': {
    title: "Energy experts call for solar net-metering to enhance Pakistan's electricity system",
    cat: "Webinar", date: "September 14, 2022", loc: "Karachi · Lahore · Islamabad", emoji: "💻",
    img: "https://img.youtube.com/vi/-TcmivZV_vI/hqdefault.jpg", url: PRIED_EVENT + '257',
    body: [
      `Karachi, Lahore, and Islamabad, September 14, 2022: Energy experts say that power consumers in Pakistan have a huge opportunity to reduce their electricity bills by installing solar power panels on their rooftops and connecting them with the national grid. Through a system called net-metering, the government pays consumers the price of electricity that their solar panels inject into the grid, these experts say. This not only reduces the electricity bills of these consumers but also helps the government decrease power shortages, experts add. But, the experts point out, that this opportunity is not being fully utilized because of the financial barriers that the consumers face in installing solar panels.`,
      `The experts were speaking at a webinar on 'Net-metering in Pakistan: Potential, Challenges and Way Forward', held on Wednesday by Policy Research Institute for Equitable Development (PRIED). Naila Saleh, Project Manager, Agora EW, and Technical Advisor, PRIED, said net-metering can advance renewable energy uptake in Pakistan and reduce dependency on unreliable power supply. "Distributed solar photovoltaic [PV] systems can shift electricity generation from fossil fuels and supply more affordable energy than the grid does. Yet, the overall growth in netmetered systems in the past seven years remains insignificant in Pakistan," Saleh said. She added that easy financing is critical to adopt capital-intensive technologies such as solar PV, which have a high upfront cost but lower operating costs.`,
      `"Limited adoption of State Bank's 2016 concessionary financial scheme for solar PV and its restricted access to a larger section of the society is a key barrier to its wide-scale diffusion," she said. Atif Pervez, Battery Research Lead at NanoXplore Inc., Canada, said battery energy storage that is integrated into a renewable energy setup is important to enhance grid reliability and resilience while facilitating decarbonization. "Regular grid failures and rolling blackouts due to energy crisis are common in Pakistan. Battery storage, coupled with solar panels can provide low maintenance and low carbon footprint solution during continuous power outages," Pervez added. Ameena Sohail, Managing Partner at Precision Advocates and Consultants, emphasized the need to practice a 'non-discriminative' distribution of power to all consumers. She suggested including customer service regulations in net-metering licenses and incentivizing power distribution companies (DISCOs) to resolve supply chain issues and delays in meter installations.`,
      `Discussing the challenges faced by DISCOs, Amjad Aslam, Deputy Manager Regulations, Peshawar Electric Supply Company shared the major obstacles in the slow uptake of new net metering connections. He said that a lack of technical training, legacy power infrastructure, non-uniform standards of net metering equipment and revenue erosion act as the main hurdles.`
    ],
    tags: ["Net Metering", "Solar PV", "Financing", "Battery Storage"],
    related: ["rooftop-financing", "green-loans", "imf-gst"],
    images: [],
    videos: [{ title: "Energy experts call for solar net-metering", url: "https://www.youtube.com/embed/-TcmivZV_vI" }],
    media: [],
    press: [{ title: "Press Release — Net Metering in Pakistan: Potential, Challenges and Way Forward (PDF)", url: "pdfs/PRESS-RELEASE-Net-Metering-in-Pakistan-Potential-Challenges-and-Way-Forward-1.pdf" }],
    others: []
  },
  'rooftop-financing': {
    title: "Limited financing schemes restricting domestic users to install rooftop solar systems: study",
    cat: "Webinar", date: "September 27, 2021", loc: "Islamabad", emoji: "💻",
    img: "https://www.priedpk.org/wp-content/uploads/2022/05/Image-1.jpg", url: PRIED_EVENT + '217',
    body: [
      `Islamabad, September 27, 2021: A recent study shows that a major hurdle in the installation of home-based rooftop solar systems is arranging money for them. Its authors say that the demand and need for these solar systems is rising constantly but difficulties in financing them are hindering their diffusion in areas where they are needed the most.`,
      `The study titled 'Unlocking the Economic Potential of Rooftop Solar PV in Pakistan', carried out by Rural Development Policy Institute (RDPI), was launched in a webinar on Thursday. The study highlights the potential of rooftop solar PV in Pakistan and shows the unequal picture of solar financing landscape along with several barriers restricting rooftop solar drive.`,
      `While presenting the findings of the study, Naila Saleh—author of the study and Project Lead at RDPI–said, "Financing is critically important for transition towards capital intensive technologies such as solar PV characterized by high upfront cost." Speaking about the concessionary financing scheme introduced by State Bank of Pakistan (SBP) to promote rooftop solar systems, she said that restricted lending under the scheme and difficulties in acquiring finance due to stringent securitization has limited the scheme's scope.`,
      `Research Associate at RDPI and study's co-author, Talha Rashid, spoke about the need to introduce operating expenses business model (OPEX) in Pakistan, which currently not even a single solar company is using at domestic level. He said that the growth of rooftop solar can increase rapidly through adopting OPEX – a system in which the developer owns the solar project and the consumer only has to pay for the energy generated.`,
      `Syed Aqeel Jafri, Director Policy, Alternative Energy Development Board (AEDB) said that several measures had already been taken to promote rooftop solar, which includes certification of solar vendors and revisions in net-metering regulations. He added that AEDB envisions greening the power sector through renewable power generation. Musa Khan Durrani, Head of Strategic Alliances, SkyElectric Pvt. Ltd. and GM Business Development, Saif Group, said it was essential that SBP pushes commercial banks to pursue solar financing by aligning incentive structure vis-a-vis other SBP schemes and through active monitoring. He stressed on the need to engage distribution companies, along with power purchase agreement financers or banks, to provide OPEX model services to customers.`,
      `Asad Mahmood, Manager Technical/Company Secretary, National Energy Efficiency & Conservation said, "Currently, majority end-users in Pakistan have 1-phase meters, whereas net-metering applies only to 3-phase meters. This is a binding constraint that is restricting distributed generation participation by the majority. Most solar vendors are also not providing after sales services, causing dissatisfaction of solar PV consumers. Customized solutions is also something vendors mostly don't look into." Zarak Khan from State Bank of Pakistan also participated in the webinar as one of the panelists.`
    ],
    tags: ["Rooftop Solar", "Financing", "State Bank", "OPEX"],
    related: ["net-metering", "green-loans", "caucus-meeting"],
    images: ["https://www.priedpk.org/wp-content/uploads/2022/05/Image-1.jpg", "https://www.priedpk.org/wp-content/uploads/2022/05/Image-6.jpg"],
    videos: [{ title: "Virtual launch of research study 'Unlocking the Economic Potential of Rooftop Solar PV in Pakistan'", url: "https://www.youtube.com/embed/iickpQgWHxk" }],
    media: [{ title: "Business Recorder", url: "https://www.brecorder.com/news/40123804" }],
    press: [],
    others: [
      { title: "Summary of Study — English (PDF)", url: "pdfs/Summary-of-Study-Unlocking-the-Economic-Potential-of-Rooftop-Solar-PV-in-Pakistan-FJ.pdf" },
      { title: "Summary of Study — Urdu (PDF)", url: "pdfs/Summary-of-Study-Urdu.pdf" },
      { title: "Research Study — Unlocking the Economic Potential of Rooftop Solar PV in Pakistan (PDF)", url: "pdfs/Research-study-Unlocking-the-Economic-Potential-of-Rooftop-Solar-PV-in-Pakistan.pdf" }
    ]
  },
  'caucus-meeting': {
    title: "Parliamentarians discuss need to launch awareness campaigns on clean energy sources at third caucus meeting",
    cat: "Caucus Meeting", date: "October 6, 2021", loc: "Islamabad", emoji: "🏛️",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80", url: PRIED_EVENT + '216',
    body: [
      `ISLAMABAD: Members of the proposed parliamentary caucus on clean energy met for the third time on October 6, 2021 in Islamabad to discuss the objectives of the caucus, where the participants underlined the need to launch awareness campaigns on clean and green sources of energy while focusing on transition to alternative sources keeping in view the best practices followed by various countries.`,
      `The meeting was organized by Sustainable Development Policy Institute (SDPI) and Rural Development Policy Institute (RDPI) to facilitate the debate on the proposed parliamentary caucus for energy transition in Pakistan. Previously another meeting was held in August, where members of the parliamentary caucus discussed the importance of green parliamentary caucus for combating climate crisis and facilitating Pakistan in its transition to clean energy resources.`,
      `In the second meeting, Dr. Abid Suleri, Executive Director of SDPI, made a detailed presentation on various aspects of climate change and how some of the countries were dealing with the problem. He suggested different ways Pakistan could learn to play its role in reducing carbon emissions and improving the quality of environment.`,
      `He also suggested that Pakistan, in the COP-26 to be held in Glasgow, should urge the developed countries to assist developing countries financially and technologically in order to roll back their coal-based power projects. Dr. Suleri further said that Pakistan was the least emitter of carbon and least polluter of the environment but still among the top 10 vulnerable countries to climate change calamities. That is one immediate reasons why a parliamentary caucus on clean and green energy should be formed, he stressed, adding that the caucus is of much relevance and importance. He underlined the importance of the parliamentary caucus by highlighting its main objectives and also suggested that we need a robust campaign for generating funds for the green transition.`,
      `Munawara Bibi Baloch, Pakistan Tehrik-e-Insaf (PTI) Member National Assembly (MNA) from Balochistan, said that they, members of the caucus, needed to think beyond party lines and work collectively for transition to clean energy. "We need to fully capitalize on the existing natural resource base and develop community level clean energy transition models," she said stressing the importance of well thought-out policies and laws regarding the transition to clean energy. "The laws when made after proper debate can generate, facilitate and streamline finances and coordination among various stake holders," she said.`,
      `Senator Zeeshan Khanzada, also from PTI, suggested to take this campaign and initiative to the province and district levels. "We need to incentivize and subsidize the domestic installation of solar panels and make this transition easy and cheap especially for rural areas," he said, stressing the need to capitalize on the full potential of the small hydro power projects.`,
      `Senator Haji Hidayat Ullah Khan of Awami National Party (ANP) also endorsed the suggestion to launch a robust campaign for the protection of the environment before introducing policies and laws. He said it was the right time to shift from coal and fuel-based energy resources to alternative and clean energy. He urged the parliamentarians to think and act beyond party lines and vested electoral interests because it is a responsibility we owe to the coming generation.`,
      `Romina Khursheed Alam of Pakistan Muslim League Nawaz (PML – N), Member National Assembly (MNA), suggested setting up a young parliamentarians' forum where they should be provided with all the technical support to launch campaigns and take practical steps towards the clean energy transition. "We need to engage and support the local entrepreneurs who are working on alternative energy resources at community and village level," she said adding that the government should provide targeted subsidy on solar panel installations especially for domestic use and agriculture purposes e.g., installation of tube wells for irrigation.`,
      `Riaz Fatyana, a PTI MNA, informed that they already had a task force working on this issue. "Presently, we have only 6% renewable energy in the national grid whereas the target of the incumbent government is to take it to 20% by 2030. The developed and technologically advanced countries are either rolling back or have transitioned their coal-based plants into alternative sources," he said. Fatyana said the country had enough laws for clean energy and transition to renewable energy. "What we need to do is to launch awareness campaigns to sensitize the public," he said stressing the need to implement local and indigenous solutions to the alternative energy and conservation of water.`,
      `Nafeesa Shah, Pakistan Peoples Party MNA, suggested setting up an office for the members of the caucus at the parliament secretariat with the help of the government. She urged the government to provide support and resources for this. "It is a good omen that the parliamentarians are getting to know things about climate change and the need for transition to renewable energy sources", she said making a case for improving the governance structure and allocation of finances and funds. "We need to take the ownership of the caucus. We can't achieve the desired results if we don't do that," she said emphasizing the need for a consistent forum or a committee to facilitate the caucus for finalizing TORs and action plan.`,
      `Zille Humma, PTI MNA, said it was the need of the hour to invest in the renewable energy and alternative energy sources. "We can generate electricity from hydro sources in Khyber-Pakhtunkhwa, solar sources can be exploited in Punjab and Baluchistan and wind energy can be utilized in Sindh," she said adding that we needed to protect our environment through collective endeavor and campaigning. "Experts' opinions are very important to make this transition sustainable. Awareness can play a key role in this transition. First, we should provide people with a viable alternative before urging them to abandon the fossil fuel or coal-based energy sources," she further said.`,
      `Nausheen Hamed of PTI said that we need to generate discussion on the existing legislations first. She said that parliamentary action and its modalities also need to be made clear. She also stressed on budgetary demands for the clean energy transition. Shahida Rehmani, PPP MNA, said the climate change and the need for alternative energy resources were important issues requiring special attention. "Water and energy are getting rare in Pakistan, so it needs to be taken into serious consideration, especially by the parliamentarians," she said while highlighting the importance of the parliamentary caucus.`,
      `Aliya Hamza, PTI MNA, also emphasized the need for climate effective polices and need to propagate them. She said that we need to shift from LNG to solar energy and take a lead in the transition. Senator Sana Jamali said participation of the youth in the energy transition is key in coping with the climate change impacts. He said: "We need to work collectively, beyond party consideration for the conservation of water and the transition to clean and green energy. Being from Baluchistan which is most vulnerable to climate change in terms of droughts, we can better understand the importance of safe drinking water and continuous supply of electricity."`,
      `Shaza Fatima, PML-N MNA, said that we need to engage experts on green transition to formulate new policies and bring amendments in the existing laws, by making them more practicable. We also need to engage our constituencies or public in the transition to clean energy. She suggested on holding public hearings with academia and university graduates on the topic. "The more we advertise it, the more sensitivity we will produce among the public," she said, adding that we need policy for the procurement of the tech and solar panel to make this transition robust. She also said that we also need to introduce energy efficient infrastructure/buildings based on sustainable energy consumption patterns. Awareness campaign would play a key role in making the public aware of the coal and fossil fuel energy sources. She advocated for small and local level solutions for energy needs especially for household use.`
    ],
    tags: ["Parliament", "Clean Energy", "Policy", "Awareness"],
    related: ["net-metering", "rooftop-financing", "world-bank"],
    images: [], videos: [], media: [], press: [], others: []
  },
  'world-bank': {
    title: "Experts urge World Bank not to sabotage green energy transition of Pakistan's energy sector",
    cat: "Panel Discussion", date: "March 22, 2022", loc: "Karachi · Lahore · Islamabad", emoji: "🎙️",
    img: "https://www.priedpk.org/wp-content/uploads/2023/02/Moderator.jpg", url: PRIED_EVENT + '201',
    body: [
      `KARACHI, LAHORE and ISLAMABAD, March 22, 2022: The World Bank has attracted severe criticism for its role in pushing Pakistan's energy sector into debt and sabotaging its transition into clean energy. Experts associated with at least two international think tanks believe that the bank's support for Thar coal power project will help them soon become the largest source of air pollutants, such as mercury and CO2, in South Asia.`,
      `Sharing the findings of their research studies, these experts shed light on the World Bank's role in Pakistan's energy and environmental crisis at an online panel discussion held on Tuesday. The webinar was organised by the Alliance for Climate Justice & Clean Energy (ACJCE), a coalition of think tanks and civil society organisations working on energy transition in Pakistan.`,
      `Discussing her research study, Heike Mainhardt, Senior Advisor at Urgewald, a Germany-based non-profit organisation, said the World Bank's technical assistance in Pakistan provided a road map to attract investors into country's coal sector from 2009 to 2012. "Arguably, the Bank's most important actions were tariff policy reforms that made new coal power investments in Pakistan the world's most profitable. As a result, Pakistan is tied to very high capacity payments for coal power, leading to high subsidies and consumer tariffs," she said. Heiki added that it is the World Bank's responsibility to help Pakistan re-direct its power sector development from coal to renewable energy.`,
      `Fran Witt, Campaigns Lead at Recourse, a Netherlands-based not-for-profit organisation, discussed the research study co-published by Recourse and Alternative Law Collective (ALC), a Pakistan-based firm. She said that the World Bank's Development Policy Finance (DPF) for Pakistan's energy sector amounted to $1.4billion from 2020 to 2021 and therefore, has a huge impact on energy policy and investment. She suggested that all fossil fuels must be included on the Excluded Expenditures list for DPF, through which the World Bank can support the Pakistani government to build its energy from Pakistan's sustainable renewable energy sources instead of relying on expensive coal or LNG imports.`,
      `Zain Moulvi, Director Research at ALC, said that the World Bank's tacit support of Thar coal and its damaging DPF loan conditionality demonstrates the complex mechanisms through which it can instigate crises in Pakistan's energy sector. "The Thar coal projects will significantly raise electricity tariffs and have already caused massive displacement and loss of livelihood in Thar. They are further projected to cause up to 29,000 air pollution-related deaths," Zain said. He added that the Bank's flagship PACE project – supposedly meant to facilitate Pakistan's transition to cheap and clean energy – has instead forced the country to plan its energy mix around costly, socially and environmentally destructive fossil fuels and large hydro projects.`,
      `Appreciating the research studies' authors for shedding light on international financial institutions' support for dirty and costly projects in Pakistan and elsewhere in the Global South, Ahsan Kamal, Lecturer at Quaid-i-Azam University said, "Despite claims of being a leader in knowledge and investment for development, the World Bank has a long history of ignoring definitive research that shows coal, gas and large hydropower projects damaging to the environment, humans, and economy," he said.`
    ],
    tags: ["World Bank", "Coal", "Thar", "Climate Finance"],
    related: ["imf-gst", "thar-water", "karachi-electricity"],
    images: ["https://www.priedpk.org/wp-content/uploads/2023/02/Moderator.jpg", "https://www.priedpk.org/wp-content/uploads/2023/02/Heike-Mainhardt-.jpg", "https://www.priedpk.org/wp-content/uploads/2023/02/Fran-Witt-presentation.jpg", "https://www.priedpk.org/wp-content/uploads/2023/02/Ahsan-Kamal.jpg", "https://www.priedpk.org/wp-content/uploads/2023/02/Zains-presentation-.jpg"],
    videos: [{ title: "Demystifying the Bank's role in the energy and environmental crisis", url: "https://www.youtube.com/embed/HHwP52l1wYA" }],
    media: [], press: [],
    others: [
      { title: "World Bank and Pakistan's Energy Transition — Presentation (PPTX)", url: "https://www.priedpk.org/wp-content/uploads/2023/02/World-Bank-and-Pakistans-Energy-Transition-Presentation-Final-.pptx" },
      { title: "Fran Witt — World Bank presentation (PPTX)", url: "https://www.priedpk.org/wp-content/uploads/2023/02/Fran-Witt-WB-presentation.pptx" }
    ]
  },
  'imf-gst': {
    title: "Civil society demands IMF to revoke GST on renewable energy technologies",
    cat: "Media Briefing", date: "February 1, 2022", loc: "Karachi · Lahore · Islamabad", emoji: "📰",
    img: "https://img.youtube.com/vi/f00kdb4GhA4/hqdefault.jpg", url: PRIED_EVENT + '200',
    body: [
      `KARACHI, LAHORE and ISLAMABAD, February 1, 2022: Demanding the government to revoke imposition of general sales tax on solar panels and electric vehicles, a civil society group striving to promote renewable energy has asked the International Monetary Fund (IMF) to play a responsible part in developing socially just and environmental friendly financing solutions in Pakistan.`,
      `Alliance for Climate Justice and Clean Energy (ACJCE) has made these demands in a letter written to the IMF board ahead of its meeting for Pakistan's sixth review, following the recent imposition of 20% GST on solar panels in Pakistan. ACJCE shared details of the letter in a media briefing held on Tuesday, where the speakers assailed the tax imposition and discussed its repercussions.`,
      `Speaking at the briefing, Zain Moulvi, Associate at Alternative Law Collective, said that the hastily passed mini budget is a grim reminder of how IMF's policies and lending practices can sabotage Pakistan's social and environmental planning. "The new IMF-backed fiscal reforms include heavy taxes on solar panels, wind turbines and electric vehicles, which are likely to cripple the renewable energy market," he said. Moulvi emphasized that the renewables are Pakistan's biggest hope for cheap electricity, adding that these taxes are inconsistent with Pakistan's Alternative and Renewable Energy and National Electric Vehicle policies".`,
      `Haneea Isaad, Research Associate at Institute for Energy Economics and Financial Analysis, discussed the financial impacts of the added taxation. "At present, the latest tariffs given out by National Electric Power Regulatory Authority for utility scale solar/wind power indicate a levelized cost of generation of Rs. 6-7/KWh. This range holds true for residential/commercial rooftop photovoltaic installations too. Imposing the added tax can significantly raise the costs for these projects," she said. Isaad emphasized such decisions will hurt investor's confidence, while small and mid-size enterprises and off-grid and lower-income households will be the most affected segment as the added taxes will increase costs.`,
      `Waqas Moosa, Member Executive Committee of Pakistan Solar Association (PSA), revealed that solar deployments in Pakistan are expected to fall by at least 20% in 2022 as solar equipment's cost will increase by around 20% due to the added taxes. "Consumers who are unable to shift to solar due to higher cost will end up paying an extra Rs. 175 billion in electricity costs over 20 years," PSA representative said. He questioned whether putting the extra cost on solar panels is worth it as the expected revenue from one year of GST is only about Rs. 16 billion to Rs. 20 billion. "For each solar solution not deployed, fossil-fuel based power sources will instead be used over the next 20 years, which is the life of solar equipment," he said.`,
      `Research Analyst at Renewables First, Mustafa Amjad, pointed out that the government is contradicting its own mantra of a green Pakistan by taxing these technologies. "Presently, local development for solar panel and renewable energy technologies is negligible in Pakistan. At such a crucial stage, where both these industries require fiscal support, such taxation will damage the development of renewable energy, as well as Pakistan's electric vehicle market," he said. The government, he said, is jeopardizing the take-off promised for these technologies. Amjad said, "These increased costs would ultimately be transferred to the consumer and result in higher tariff rates."`,
      `Transportation already accounts for 43% of the airborne emissions in the country and the EV Policy states that the "initial years of EV penetration in Pakistan are not possible without governmental support." The policy also argues that the "initial incentives, tax breaks and benefits will pay for itself with the savings in fuel import bill, reduction in emission related expenses, usage of idle electricity capacity and income from charging revenues", estimating annual savings of around PKR 110 Billion per year for the first five years of the policy.`
    ],
    tags: ["IMF", "GST", "Solar", "EVs", "Taxation"],
    related: ["world-bank", "net-metering", "rooftop-financing"],
    images: [],
    videos: [{ title: 'Media briefing on "Imposition of general sales tax on solar panels and electric vehicles"', url: "https://www.youtube.com/embed/f00kdb4GhA4" }],
    media: [
      { title: "Dawn", url: "https://www.dawn.com/news/1672743" },
      { title: "Express Tribune", url: "https://tribune.com.pk/story/2341511/reversal-of-tax-on-evs-solar-panels-demanded?amp=1" },
      { title: "The News", url: "https://www.thenews.com.pk/print/929197-taxing-solar-panels" },
      { title: "Such TV", url: "https://www.suchtv.pk/business/item/111245-reversal-of-tax-on-evs-solar-panels-demanded.html" }
    ],
    press: [],
    others: [
      { title: "ACJCE letter to the IMF on renewables taxation (PDF)", url: "pdfs/ACJCE-letter-to-the-IMF-on-renewables-Taxation.pdf" },
      { title: "ACJCE Presentation — Environmental Impacts of the IMF-Backed Tax Reforms (PPTX)", url: "https://www.priedpk.org/wp-content/uploads/2023/02/ACJCE-Presentation-ENVIRONMENTAL-Impacts-of-the-IMF-Backed-TAX-reforms.pptx" }
    ]
  },
  'thar-water': {
    title: "Coal mining companies in Thar violating Environment Protection Act by dumping toxic water in clean wells: analysts",
    cat: "Webinar", date: "March 25, 2022", loc: "Karachi · Lahore · Islamabad · Thar", emoji: "💻",
    img: "https://img.youtube.com/vi/VLohWxj5NiE/hqdefault.jpg", url: PRIED_EVENT + '198',
    body: [
      `Karachi, Lahore, Islamabad, March 25, 2022: Coal-inflicted miseries of Tharis have started to complicate as their dug wells are now increasingly becoming contaminated due to the toxic waste being discharged by the mining and thermal power companies. Groundwater degradation in Thar, a painful occurrence after coal-induced displacement, dispossession and destitution, was a violation of certain environmental laws of the country, stated the experts.`,
      `This was revealed in a webinar titled 'Coal-induced Water Woes of Tharis' held on Friday by Alliance for Climate Justice & Clean Energy (ACJCE), a coalition of think tanks and civil society organisations working on energy transition in Pakistan. A short documentary was also screened at the webinar, highlighting the ground reality and magnitude of water-related issues in Thar.`,
      `Giving an insight into the problems being created by coal mining companies in Thar, Azhar Lashari from Policy Research Institute for Equitable Development said, "The coal rush in Thar has been depleting and poisoning the precarious groundwater resources of the region and making lives of locals miserable. Percolation of toxic water from Gorano and Dukar Chaou reservoirs, lowering water table around mining sites and dumping of wastewater in farmlands have been posing a serious threat to the ecosystem and public health," he said.`,
      `Lashari added that while the water level of the dug-wells is depleting in some villages, the sweet water of the dug-wells surrounding the wastewater reservoirs is becoming toxic. "The incidents of malarial fever and livestock casualties have significantly increased in the area," he added.`,
      `Muhammad Abdul Rafay from Alternative Law Collective said that the testimonies of Tharis reveal illegalities being committed by coal mining and power generation companies. "The release of contaminated water into agricultural and grazing lands by the companies and its reinjection into underground aquifers violates the Sindh Environment Protection Act, the National Water Policy 2018 and their generation licenses issued by National Electric Power Regulatory Authority," he said. Rafay added that Pakistan's superior courts have repeatedly held such practices a violation of the constitutional right to life and a breach of public trust.`,
      `Two representatives from the Thar community also discussed the water-related difficulties they have been facing in the region. Rani Bheel, a female affected resident of Bitra Village, Block-II, said that the coal companies were releasing poisonous water openly with no regard to human life. "This is also harming our livestock. More than 50 buffaloes and cows, 70 plus camels and over 500 goats and sheep have died from drinking poisonous water," she added. Bheel further said that the clean water wells becoming saline because of the toxic water has added to the troubles of the women, as they have to arrange potable water for their households from remote places.`,
      `Sharing the harmful impacts of the dams built by these companies in the area, Ameer Hassan, an office-bearer of Thar Samaji Tehreek, said that 20 dug-wells have become saline after the development of Gorano Dam. The local community representatives shared that more than 50 children living in the villages near Gorano Dam have died in the last few years from mosquito-borne diseases spread due to toxic water.`
    ],
    tags: ["Thar", "Coal", "Water", "Environment", "Community"],
    related: ["world-bank", "karachi-electricity", "caucus-meeting"],
    images: [],
    videos: [{ title: "Webinar on 'Coal-induced water woes of Tharis'", url: "https://www.youtube.com/embed/VLohWxj5NiE" }],
    media: [], press: [], others: []
  },
  'kapco': {
    title: "Repurposing Pakistan's Aging Thermal Power Plants: Pathways to Solar Integration and Grid Stability",
    cat: "Webinar", date: "2025", loc: "Islamabad", emoji: "⚡",
    img: "https://www.priedpk.org/wp-content/uploads/2025/02/2-1.jpg",
    url: PRIED_EVENT + '1957',
    body: [
      `Pakistan faces an energy infrastructure challenge: aging, inefficient thermal power plants that are no longer viable yet remain critical for grid stability. Facilities like KAPCO and TPS Muzaffargarh operate beyond their design life, with high generation costs and significant carbon footprints.`,
      `PRIED's research initiative examined the feasibility of converting these fossil-fuel stations into large-scale solar installations — leveraging existing land, grid connections, and infrastructure already in place. The study, titled "Repurposing Pakistan's Aging Thermal Power Plants: Pathways to Solar Integration and Grid Stability," combined financial assessments with decommissioning evaluations.`,
      `The analysis examined component salvage, dismantling expenses, land reuse opportunities, and international best practices. Results indicated that decommissioning costs are "far outweighed by the economic and environmental benefits" — including payback periods of just 1–2.4 years, an 80% reduction in generation costs, and millions of tons of prevented CO₂ emissions.`,
      `The study recommends integrating repurposing frameworks into Pakistan's generation planning, promoting green financing instruments, and developing phased retirement strategies for aging fossil fuel plants as a practical pathway to grid decarbonisation.`
    ],
    tags: ["KAPCO", "Thermal Power", "Repurposing", "Solar", "Grid", "Decarbonisation"],
    related: ["world-bank", "green-loans", "iran-war"],
    images: [],
    videos: [],
    media: [],
    press: [],
    others: [{ title: "KAPCO Study — Repurposing Pakistan's Aging Thermal Power Plants (PDF)", url: "pdfs/KAPCO-Study.pdf" }]
  },
  'grm': {
    title: "Making people heard: Grievances Redressal Mechanism for Tharparkar's Coalfields",
    cat: "Consultation", date: "21 August 2025", loc: "Press Club, Hyderabad", emoji: "🤝",
    img: "Events/GRM event/0060F5C8-7721-4477-BBC6-7C219820E318.jpg",
    url: PRIED_EVENT + '0',
    body: [
      `Grievances Redressal Mechanisms (GRMs) are essential tools for ensuring that communities affected by large-scale infrastructure and development projects can voice their concerns and access fair remedies. In Tharparkar, communities living near coal power plants face many serious grievances, including air and water pollution, forced land acquisition and displacement, inadequate compensation for lost land and livelihoods, lightning strikes and loss of lives and livestock, lack of consultation, health hazards and disruptions to social structures.`,
      `Many of these issues have remained unresolved primarily because GRMs in Tharparkar are not just inaccessible, unresponsive and non-inclusive — they are sometimes also non-existent.`,
      `To address these challenges, PRIED developed a draft GRM based on field work in Tharparkar and an expert consultative session. This draft is intended as a stepping stone to develop a GRM for those affected by coal development that is locally grounded, inclusive and accessible, with an emphasis on building strong engagement with affected communities as well as establishing trust between the government, coal developers and community-based organisations.`,
      `PRIED launched the GRM draft and presented it to the communities most affected by coal mining and power generation, as well as to government officials and power plant operators — paving the way towards a sustainable and inclusive process of developing Thar's indigenous resources.`
    ],
    tags: ["GRM", "Thar", "Coal", "Community", "Grievance Redressal", "Coalfields"],
    related: ["thar-water", "coalmining-thar", "world-bank"],
    images: [
      "Events/GRM event/0060F5C8-7721-4477-BBC6-7C219820E318.jpg",
      "Events/GRM event/2BDBB73E-6100-4F67-8D52-90D33E946498.jpg",
      "Events/GRM event/4E15D4ED-9090-47A0-A0D9-CBDB2F770B94.jpg",
      "Events/GRM event/6445CF48-7C72-4C35-BE02-68EF37EB87AE.jpg",
      "Events/GRM event/7B424112-7FF0-400E-B46E-82FC7713AA20.jpg",
      "Events/GRM event/BD88C9A8-C152-4FCF-9C76-5CF1DBA7CB84.jpg",
      "Events/GRM event/BE4FC12C-FBB2-4468-803F-AFA224031DFE.jpg",
      "Events/GRM event/CD3848A9-7CB1-4934-BE75-B4BE546ECF96.jpg"
    ],
    videos: [],
    media: [{ title: "Effective grievance redressal mechanism missing in Thar coalfields — Dawn", url: "https://www.dawn.com/news/1937001/effective-grievance-redressal-mechanism-missing-in-thar-coalfields-study" }],
    press: [],
    others: []
  },
  'pre-budget-2025': {
    title: "Pre-Budget Dialogue 2025: Rethinking Economic Policy for a Just Energy Transition",
    cat: "Panel Discussion", date: "20 May 2025", loc: "Kehkashan-I, Serena Hotel, Islamabad", emoji: "🎙️",
    img: "Events/Pre-budget event/1748250604669.jpeg",
    url: PRIED_EVENT + '0',
    body: [
      `As Pakistan prepared its 2025-26 budget, its energy sector came under the spotlight like never before. Energy prices, an unsustainable circular debt, the untenable cost of maintaining an inefficient power transmission and distribution system, and the heavy financial burden of importing oil, gas and coal are only a few of the issues that budget makers grappled with.`,
      `The government had taken several steps: reducing energy prices to spur grid electricity demand; renegotiating agreements with independent power producers (IPPs) to curtail capacity payments; and starting a process of privatising electricity distribution companies (DISCOs). There were also reports that the government might levy a carbon tax, and plans to obtain a new IMF Resilience and Sustainability Facility (RSF) loan — both carrying serious financial implications for the energy sector.`,
      `The Sustainable Development Policy Institute (SDPI) and PRIED joined hands to organise a one-day dialogue on the energy-economy nexus, with a special focus on Pakistan's transition to renewable energy and all its fiscal, economic, social and environmental consequences. Participants deliberated on how a just energy transition can address the energy sector's economic ailments and help Pakistan fight the escalating climate crisis.`,
      `The dialogue aimed to: inform budget-making with actionable policy recommendations; redefine public spending priorities from generation toward grid modernisation and renewable energy access in underserved regions; promote a just energy transition that benefits communities negatively affected by energy policies; strengthen policy coherence by aligning fiscal requirements with improved energy governance; and catalyse private sector involvement in solarisation, EVs, mini-grids and other green technologies.`
    ],
    tags: ["Budget", "Energy Transition", "Economy", "SDPI", "IMF", "Just Transition", "Circular Debt"],
    related: ["gas-crisis", "planning-power", "iran-war"],
    images: [
      "Events/Pre-budget event/1748250604669.jpeg",
      "Events/Pre-budget event/1748250604855.jpeg",
      "Events/Pre-budget event/1748250605721.jpeg",
      "Events/Pre-budget event/1748250605954.jpeg",
      "Events/Pre-budget event/1748250606010.jpeg",
      "Events/Pre-budget event/1748250606105.jpeg",
      "Events/Pre-budget event/1748250606114.jpeg",
      "Events/Pre-budget event/1748250606122.jpeg",
      "Events/Pre-budget event/1748250606128-2.jpeg",
      "Events/Pre-budget event/1748250606128.jpeg",
      "Events/Pre-budget event/1748250606415.jpeg",
      "Events/Pre-budget event/1748250606456.jpeg",
      "Events/Pre-budget event/1748250607054.jpeg"
    ],
    videos: [],
    media: [{ title: "Pre-Budget Dialogue 2025 — Dawn", url: "https://www.dawn.com/news/1912243" }],
    press: [],
    others: []
  },
  'rural-electrification': {
    title: "Rural Electrification in Balochistan: Challenges to Meet Nushki District's Electricity Demand",
    cat: "Research Launch", date: "3 September 2025", loc: "Qamar Board Room, Ramada by Wyndham Islamabad", emoji: "💡",
    img: "Events/Rural Electrification/IMG-20250904-WA0017.jpg",
    url: PRIED_EVENT + '0',
    body: [
      `Understanding real-time household energy needs is a critical yet often overlooked step in energy planning, particularly in underserved rural regions. In Pakistan, inadequate demand forecasting and data scarcity have historically led to inefficient infrastructure planning, unreliable grid supply, and deepening energy poverty — especially in remote areas of Balochistan.`,
      `To address this gap, PRIED undertook a comprehensive household energy demand assessment in six rural settlements of Balochistan's Nushki district. By integrating primary data collected through on-ground household surveys with publicly available secondary datasets, PRIED employed a scenario-based modelling approach using the Low Emissions Analysis Platform (LEAP) to assess baseline energy consumption, identify energy sources in use, and project future demand under different development trajectories — including Business-as-Usual, CPEC-induced growth, and an Optimistic Electrification scenario aligned with Pakistan's national clean energy goals.`,
      `The study reveals that despite high electrification rates shown on paper, most households in Nushki receive unreliable electricity (2–3 hours per day) and remain heavily dependent on traditional biomass for cooking and heating. By quantifying these problems and modelling how electricity demand may evolve in the surveyed areas of the district, the research makes a compelling case for data-driven, decentralised electrification solutions tailored to actual household energy needs.`,
      `PRIED shared these findings with relevant stakeholders at a public event in Islamabad, bringing together policymakers, development partners, and community representatives to discuss pathways to reliable, affordable and clean electricity access for Balochistan's rural communities.`
    ],
    tags: ["Rural Electrification", "Balochistan", "Nushki", "Energy Access", "LEAP", "Demand Assessment"],
    related: ["distributed-solar", "33gw", "thar-water"],
    images: [
      "Events/Rural Electrification/IMG-20250904-WA0017.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0018.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0019.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0020.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0021.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0022.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0023.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0024.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0025.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0026.jpg",
      "Events/Rural Electrification/IMG-20250904-WA0027.jpg"
    ],
    videos: [],
    media: [],
    press: [],
    others: []
  },
  'industrial-electrification': {
    title: "A Consultation on Pakistan's Energy Demand: Residential and Industrial Electrification Pathways",
    cat: "Consultation", date: "30 December 2025", loc: "Boardroom 2, Roomy Signature Hotel, Islamabad", emoji: "⚡",
    img: "Events/Roadmap for industrial electrification in Pakistan/WhatsApp Image 2026-06-20 at 5.46.22 PM.jpeg",
    url: PRIED_EVENT + '0',
    body: [
      `Pakistan's energy transition depends not just on expanding renewable supply but on understanding where and how electricity demand is actually growing. PRIED organised this consultation to explore residential and industrial electrification pathways — examining how household appliance shifts, EV uptake, and industrial process electrification will reshape the country's load profile over the coming decade.`,
      `Participants from government, industry, academia and civil society deliberated on the financial, technical and policy barriers to electrification, and on what mix of grid expansion, distributed generation and demand-side management is needed to serve both urban and rural consumers equitably.`,
      `The consultation drew on PRIED's research into Pakistan's evolving energy demand, with a focus on ensuring that the shift to clean electricity benefits all segments of society — not just those already well connected to the grid.`
    ],
    tags: ["Electrification", "Industrial", "Residential", "Energy Demand", "Pathways"],
    related: ["rural-electrification", "distributed-solar", "planning-power"],
    images: [
      "Events/Roadmap for industrial electrification in Pakistan/WhatsApp Image 2026-06-20 at 5.46.22 PM.jpeg",
      "Events/Roadmap for industrial electrification in Pakistan/WhatsApp Image 2026-06-20 at 5.46.22 PM (1).jpeg",
      "Events/Roadmap for industrial electrification in Pakistan/WhatsApp Image 2026-06-20 at 5.46.22 PM (3).jpeg",
      "Events/Roadmap for industrial electrification in Pakistan/WhatsApp Image 2026-06-20 at 5.46.22 PM (4).jpeg",
      "Events/Roadmap for industrial electrification in Pakistan/WhatsApp Image 2026-06-20 at 5.46.23 PM.jpeg"
    ],
    videos: [], media: [], press: [],
    others: [{ title: "A Roadmap for Industrial Electrification in Pakistan (PDF)", url: "pdfs/A-EW_Roadmap_for_industrial_electrification_in_Pakistan_WEB.pdf" }]
  },
  'offshore-wind-consultation': {
    title: "Harnessing Pakistan's Energy Potential: Overcoming Challenges in Offshore Wind and Residential Gas Sectors",
    cat: "Consultation", date: "30 October 2024", loc: "Islamabad", emoji: "🌊",
    img: "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.46 PM.jpeg",
    url: PRIED_EVENT + '0',
    body: [
      `Pakistan's coastline holds significant offshore wind potential, yet the sector remains largely untapped due to regulatory, financial and technical constraints. At the same time, the residential gas sector faces mounting pressure from depleting domestic reserves, rising import costs and the need for a managed transition toward cleaner cooking and heating fuels.`,
      `This multi-stakeholder consultation brought together energy experts, government officials, private sector representatives and civil society to examine the barriers to offshore wind development and to chart pathways for a sustainable transformation of the residential gas sector.`,
      `Held from 2:00 pm to 5:00 pm, the session explored policy and regulatory reforms needed to attract offshore wind investment, the economics of gas-to-electric transitions in households, and how Pakistan can sequence these shifts to maintain energy security and affordability for consumers throughout the transition.`
    ],
    tags: ["Offshore Wind", "Residential Gas", "Consultation", "Energy Transition", "Policy"],
    related: ["lng-renewables", "planning-power", "offshore-wind-study"],
    images: [
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.46 PM.jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.48 PM.jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM.jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (1).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (2).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (3).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (4).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (5).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (6).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (7).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (8).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (9).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (10).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (11).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (12).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (13).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (14).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (15).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (16).jpeg",
      "Events/Stakeholder consultation offshore wind and residential gas sector/WhatsApp Image 2026-06-20 at 5.37.49 PM (17).jpeg"
    ],
    videos: [], media: [], press: [],
    others: [{ title: "Pakistan's Offshore Wind Potential (PDF)", url: "pdfs/Pakistans-Offshore-Wind-Potential.pdf" }]
  },
  'offshore-wind-study': {
    title: "Study Launch: Harnessing Pakistan's Energy Potential — Overcoming Challenges in Offshore Wind and Residential Gas Sectors",
    cat: "Study Launch", date: "1 November 2024", loc: "Islamabad", emoji: "📄",
    img: "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.43 PM.jpeg",
    url: PRIED_EVENT + '0',
    body: [
      `PRIED launched its research study on Pakistan's offshore wind and residential gas sectors, presenting findings on the country's largely untapped offshore wind potential and the fiscal, technical and social challenges involved in transitioning the residential gas sector toward cleaner alternatives.`,
      `The study examines the regulatory landscape, grid integration requirements and investment conditions needed to unlock offshore wind development, while also modelling the household-level implications of reducing residential gas subsidies and accelerating the shift to electric cooking and heating.`,
      `The launch event brought together policymakers, sector regulators, development finance institutions and civil society to discuss the study's recommendations — including phased tariff reforms, targeted social protection for low-income gas consumers, and the policy enablers required to attract private investment in offshore wind.`
    ],
    tags: ["Offshore Wind", "Residential Gas", "Study Launch", "Research", "Energy Transition"],
    related: ["offshore-wind-consultation", "lng-renewables", "gas-crisis"],
    images: [
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.43 PM.jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.44 PM.jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.44 PM (1).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.44 PM (2).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.44 PM (3).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.44 PM (4).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM.jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (1).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (2).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (3).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (4).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (5).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (6).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (7).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (8).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.45 PM (9).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.46 PM.jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.46 PM (1).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.46 PM (2).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.46 PM (3).jpeg",
      "Events/Study launch offshore wind and residential gas sectors/WhatsApp Image 2026-06-20 at 5.38.46 PM (4).jpeg"
    ],
    videos: [], media: [], press: [],
    others: [{ title: "Pakistan's Offshore Wind Potential (PDF)", url: "pdfs/Pakistans-Offshore-Wind-Potential.pdf" }]
  },
  'thunder-lightning': {
    title: "Thunder & Lightning: Exploring the Link Between Lightning Strikes and Coal",
    cat: "Study Launch", date: "9 January 2025", loc: "Karachi", emoji: "⛈️",
    img: "Events/Thunder and lightening/WhatsApp Image 2026-06-20 at 5.49.11 PM.jpeg",
    url: PRIED_EVENT + '0',
    body: [
      `Pakistan's Thar region has witnessed a troubling rise in lightning-related fatalities and livestock deaths in communities living near open-cast coal mines. PRIED's study investigates whether large-scale surface coal mining alters local meteorological conditions in ways that increase the frequency and intensity of lightning strikes.`,
      `By combining historical lightning data, satellite imagery of mine expansion and community testimony, the research examines the intersection of industrial coal development and changing environmental hazards — and what this means for the safety of Thari communities who were not consulted when these projects were approved.`,
      `The study was launched in Karachi to raise awareness among policymakers, environmental regulators and the media about an under-reported consequence of coal extraction, and to call for rigorous environmental impact assessments that account for such localised climate and safety effects.`
    ],
    tags: ["Thunder", "Lightning", "Coal", "Thar", "Environment", "Safety"],
    related: ["thar-water", "coalmining-thar", "coal-companies-thar"],
    images: [
      "Events/Thunder and lightening/WhatsApp Image 2026-06-20 at 5.49.11 PM.jpeg",
      "Events/Thunder and lightening/WhatsApp Image 2026-06-20 at 5.49.12 PM.jpeg",
      "Events/Thunder and lightening/WhatsApp Image 2026-06-20 at 5.49.12 PM (1).jpeg",
      "Events/Thunder and lightening/WhatsApp Image 2026-06-20 at 5.49.12 PM (2).jpeg"
    ],
    videos: [], media: [], press: [],
    others: [{ title: "Thunder and Lightning: Exploring the Link Between Lightning Strikes and Coal (PDF)", url: "pdfs/Thunder-and-lightning-Exploring-the-link-between-lightning-strikes-and-coal.pdf" }]
  },
  'black-gold': {
    title: "The Real Price of Black Gold: How Coal Development in Thar is Disrupting Lives and Livelihoods",
    cat: "Study Launch", date: "16 October 2024", loc: "Indus Hotel, Hyderabad", emoji: "⛏️",
    img: "Events/Study launch Black gold/WhatsApp Image 2026-06-20 at 5.53.17 PM (1).jpeg",
    url: PRIED_EVENT + '0',
    body: [
      `Thar's coal reserves have been promoted as a pathway to Pakistan's energy security, but the communities living in and around the coalfields tell a different story. PRIED's study examines the social, economic and environmental costs of coal development in Tharparkar — from forced displacement and loss of farmland to contaminated water and disrupted livelihoods.`,
      `By putting the actual experiences of affected Thari communities at the centre of the analysis, the research quantifies what coal development has cost the people it was supposed to benefit — and argues that these costs have been systematically ignored in the project approvals, impact assessments and compensation frameworks that govern the coalfields.`,
      `The study was launched in Hyderabad to bring its findings directly to the communities most affected, as well as to Sindh government officials, civil society organisations and journalists covering Thar — making the case for meaningful community consent, transparent grievance mechanisms and equitable benefit-sharing as preconditions for any further coal expansion.`
    ],
    tags: ["Coal", "Thar", "Livelihoods", "Displacement", "Black Gold", "Community"],
    related: ["grm", "coalmining-thar", "thar-water"],
    images: [
      "Events/Study launch Black gold/WhatsApp Image 2026-06-20 at 5.53.17 PM (1).jpeg",
      "Events/Study launch Black gold/WhatsApp Image 2026-06-20 at 5.53.17 PM (2).jpeg",
      "Events/Study launch Black gold/WhatsApp Image 2026-06-20 at 5.53.17 PM (3).jpeg",
      "Events/Study launch Black gold/WhatsApp Image 2026-06-20 at 5.53.17 PM (4).jpeg"
    ],
    videos: [], media: [], press: [],
    others: [{ title: "Coal Power and Livelihood Disruptions in Thar (PDF)", url: "pdfs/Coal-Power-and-Livelihood-Disruptions-in-Thar.pdf" }]
  }
};
const EVENT_ORDER = ['iran-war', 'industrial-electrification', 'pre-budget-2025', 'rural-electrification', 'grm', 'kapco', 'thunder-lightning', 'offshore-wind-study', 'offshore-wind-consultation', 'black-gold', 'green-loans', 'karachi-electricity', 'net-metering', 'rooftop-financing', 'caucus-meeting', 'world-bank', 'imf-gst', 'thar-water'];

/* ── JOBS ── */
const JOBS = {
  'graphic-designer': {
    title: "Graphic Designer",
    location: "Islamabad", type: "Full-time", deadline: "31 May 2026", apply: "hrpried@priedpk.org",
    body: [
      { p: `We are hiring a full-time Graphic Designer with a background in Design or Visual Communication to join our Media Communications team. This role offers an exciting opportunity to contribute to the visual identity of a research-driven organization committed to climate justice and a just energy transition through creative, impactful, and data-informed design.` },
      { h: "Key Responsibilities" },
      {
        ul: [
          `Create innovative and engaging visualizations for research publications, campaigns and events.`,
          `Design engaging and innovative data-based graphics, charts and images for research publications, campaigns and events.`,
          `Design engaging social media content aligned with organizational goals and objectives.`,
          `Develop user-friendly UI/UX designs for digital platforms.`,
          `Design reports and documents with strong visual coherence and clarity.`,
          `Produce print materials for events, outreach, and publications.`
        ]
      },
      { h: "Qualifications &amp; Skills" },
      {
        ul: [
          `Minimum Bachelor's degree (Master's preferred) in Design or a related field.`,
          `Three to five years of professional experience in digital and print design.`,
          `Strong portfolio demonstrating versatility in visual storytelling, brand design, and layout.`,
          `Ability to work collaboratively in a fast-paced, research-oriented environment.`,
          `Proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign, etc.).`,
          `Sound understanding of design principles, typography, colour theory, and layout techniques.`
        ]
      },
      { h: "Job Details" },
      { ul: [`Position Type: Full-time`, `Location: Islamabad`, `Salary: Market competitive`] }
    ]
  },
  'modeling-forecasting-specialist': {
    title: "Modeling and Forecasting Specialist",
    location: "Islamabad", type: "Full-time", deadline: "31 May 2026", apply: "info@priedpk.org",
    body: [
      { p: `PRIED is seeking a Modeling and Forecasting Specialist to develop pathways for Pakistan's low-carbon, just energy transition — modelling the interaction between energy technology shifts, energy finance, and greenhouse gas emission trajectories.` },
      { h: "Key Responsibilities" },
      {
        ul: [
          `Develop pathways for low-carbon transition, evaluating the interaction between energy technology shifts, availability of energy finance, and greenhouse gas (GHG) emission trajectories.`,
          `Model various pathways towards a just energy transition, particularly focusing on decentralized solarization hybridized with battery energy storage systems.`,
          `Develop robust scenarios that consider carbon pricing and levies, renewable energy and battery storage penetration, transition pathways, and shifts in global climate and energy finance and policies.`,
          `Evaluate the financial and economic parameters of energy projects and their associated climatic and socioenvironmental impacts.`,
          `Quantify the impact of climate change, such as extreme weather and hydrological shifts, on Pakistan's power sector.`,
          `Aggregate and analyze primary and secondary climate-related and power-related datasets from official sources to facilitate research and analysis.`,
          `Manage the preparation and submission of detailed techno-economic and environmental feasibility studies and assessment reports for power projects and associated infrastructure.`,
          `Liaise with stakeholders, including government bodies, energy departments, environmental agencies, and relevant ministries, and present the findings of the studies carried out at PRIED publicly.`,
          `Any other tasks assigned by the management and the supervisor.`
        ]
      },
      { h: "Qualifications" },
      {
        ul: [
          `Bachelor's or Master's degree in Energy Economics, Environmental Engineering, Atmospheric Sciences, or Climate Science.`,
          `Minimum of 4 years of relevant experience, with a focus on energy efficiency, renewable energy, resource conservation, and energy and climate modeling, and prior experience with GIS software for spatial climate analysis.`,
          `In-depth understanding of power sector expansion models and plans used by the government for power sector long-term planning.`,
          `Understanding of the IPCC Shared Socioeconomic Pathways (SSPs) and the 2006 IPCC guidelines.`,
          `Experience with national and international environmental and energy policies and regulations is a plus.`
        ]
      }
    ]
  },
  'data-analyst': {
    title: "Data Analyst / Econometrician",
    location: "Islamabad", type: "Full-time", deadline: "31 May 2026", apply: "info@priedpk.org",
    body: [
      { p: `PRIED is looking for a highly skilled and publicly motivated data analyst who can work on subjects related to energy and climate sectors. If you have a strong educational background in data analytics and have a serious interest in economy, energy, climate and finance, please send your CV to us.` },
      { p: `The work will require the ability to analyze policy changes and quick developments in the energy and climate sectors. The ideal candidate should have strong experience in data analytics and familiarity with all the relevant software. They should also be able to work in team settings and develop discussion papers, policy briefs, presentations, and other research materials on short notice.` },
      { p: `If you are passionate about public interest and keen to explore and analyze financial and statistical trends in the energy and climate sectors, you are exactly the person we are looking for!` },
      { h: "Key Responsibilities" },
      {
        ul: [
          `Plan and implement field surveys and data collection activities for PRIED's energy and climate-related projects.`,
          `Design and develop sampling design and survey methodology in coordination with PRIED's other staff members.`,
          `Carry out data cleaning, processing, and organization of raw primary data for research and analysis.`,
          `Conduct descriptive and advanced statistical analysis of the primary survey data.`,
          `Identify trends, patterns, and insights from datasets relevant to PRIED's research and advocacy objectives.`,
          `Prepare visually appealing and easily comprehensible tables, charts, summaries, and presentations to communicate findings effectively.`,
          `Actively contribute towards the drafting of research reports, briefs, and presentations alongside the research team.`,
          `Ensure data quality during fieldwork and post-collection stages.`,
          `Any other tasks assigned by the management and the supervisor.`
        ]
      },
      { h: "Qualifications" },
      {
        ul: [
          `Bachelor's or Master's degree in Economics, Statistics, Data Sciences/Analytics or a related field.`,
          `Familiarity with econometric tools, survey design methodologies, data analysis and data visualization.`
        ]
      }
    ]
  }
};


/* ── MEDIA MONITORS data + title helper ── */
const SIXMONTH_MM = [
  { t: "Six-Monthly Media Monitor (Nov 2025–Apr 2026)", y: "2026", img: "cover/Thumbnails-11.jpg.jpeg", pdf: "Weekly/Six Monthly - Nov 2025 to Apr 2026.pdf" },
  { t: "Six-Monthly Media Monitor (May–Oct 2025)", y: "2026", img: "https://www.priedpk.org/wp-content/uploads/2026/01/Thumbnails-07-scaled.jpg", pdf: "pdfs/MM-6-months.pdf" },
  { t: "Six-Monthly Media Monitor (Nov 2024–April 2025)", y: "2025", img: "https://www.priedpk.org/wp-content/uploads/2025/07/november-to-april.jpg", pdf: "pdfs/November-1st-2024-April-30th-2025.pdf" },
  { t: "Six-Monthly Media Monitor (May–Oct 2024)", y: "2024", img: "https://www.priedpk.org/wp-content/uploads/2024/11/media.jpg", pdf: "pdfs/Six-Month-Media-Monitor.pdf" },
  { t: "Six-Monthly Media Monitor (Nov 2023–April 2024)", y: "2024", img: "https://www.priedpk.org/wp-content/uploads/2024/10/six.jpg", pdf: "pdfs/Six-Month-Media-Monitor-Powerlines-in-Pakistan-The-media-coverage-of-the-energy-sector.pdf" },
  { t: "Six-Monthly Media Monitor (May–Oct 2023)", y: "2024", img: "https://www.priedpk.org/wp-content/uploads/2024/01/six-month-monitor-R02.png", pdf: "pdfs/Six-month-media-monitor-May-to-October-R04.pdf" },
  { t: "Six-Monthly Media Monitor (Jan–June 2023)", y: "2023", img: "https://www.priedpk.org/wp-content/uploads/2023/08/Screenshot-2023-08-21-at-1.05.36-PM.png", pdf: "pdfs/Six-month-media-monitor-R05-icons-head.pdf" }
];

const WEEKLY_MM = [
  ["Weekly Monitor - 08 Jun to 14 Jun 2026", "https://www.priedpk.org/wp-content/uploads/2026/06/8-14.jpeg", "Weekly/Weekly Monitor - 08 Jun to 14 Jun 2026.pdf"],
  ["Weekly Monitor - 01 Jun to 07 Jun 2026", "https://www.priedpk.org/wp-content/uploads/2026/06/1-7-.jpeg", "Weekly/Weekly Monitor - 01 Jun to 07 Jun 2026.pdf"],
  ["Weekly Monitor - 25 May to 31 May 2026", "https://www.priedpk.org/wp-content/uploads/2026/06/25-31-May.jpeg", "Weekly/Weekly Monitor - 25 May to 31 May 2026.pdf"],
  ["Weekly Monitor - 18 May to 24 May 2026", "https://www.priedpk.org/wp-content/uploads/2026/05/May-18-24.jpeg", "Weekly/Weekly Monitor - 18 May to 24 May 2026.pdf"],
  ["Weekly Monitor - 11 May to 17 May 2026", "https://www.priedpk.org/wp-content/uploads/2026/05/11-17-May.jpeg", "Weekly/Weekly Monitor - 11 May to 17 May 2026.pdf"],
  ["Weekly Monitor - 04 May to 10 May 2026", "https://www.priedpk.org/wp-content/uploads/2026/05/4-10-May.jpeg", "Weekly/Weekly Monitor - 04 May to 10 May 2026.pdf"],
  ["Weekly Monitor - 27 Apr to 03 May 2026", "https://www.priedpk.org/wp-content/uploads/2026/05/27-03.jpeg", "Weekly/Weekly Monitor - 27 Apr to 03 May 2026.pdf"],
  ["Weekly Monitor - 20 Apr to 26 Apr 2026", "https://www.priedpk.org/wp-content/uploads/2026/05/20-28.jpeg", "Weekly/Weekly Monitor - 20 Apr to 26 Apr 2026.pdf"],
  ["Weekly Monitor - 13 Apr to 19 Apr 2026", "https://www.priedpk.org/wp-content/uploads/2026/04/13-19-.jpeg", "Weekly/Weekly Monitor - 13 Apr to 19 Apr 2026.pdf"],
  ["Weekly Monitor - 06 Apr to 12 Apr 2026", "https://www.priedpk.org/wp-content/uploads/2026/04/6-12-apr.jpeg", "Weekly/Weekly Monitor - 06 Apr to 12 Apr 2026.pdf"],
  ["Weekly Monitor - 30 Mar to 05 Apr 2026", "https://www.priedpk.org/wp-content/uploads/2026/04/30-05-apr.jpeg", "Weekly/Weekly Monitor - 30 Mar to 05 Apr 2026.pdf"],
  ["Weekly Monitor - 23 Mar to 29 Mar 2026", "https://www.priedpk.org/wp-content/uploads/2026/04/23-29-mar.jpeg", "Weekly/Weekly Monitor - 23 Mar to 29 Mar 2026.pdf"],
  ["Weekly Monitor - 16 Mar to 22 Mar 2026", "https://www.priedpk.org/wp-content/uploads/2026/03/Mar-16-22.jpeg", "Weekly/Weekly Monitor - 16 Mar to 22 Mar 2026.pdf"],
  ["Weekly Monitor - 09 Mar to 15 Mar 2026", "https://www.priedpk.org/wp-content/uploads/2026/03/March-9-15.jpeg", "Weekly/Weekly Monitor - 09 Mar to 15 Mar 2026.pdf"],
  ["Weekly Monitor - 02 Mar to 08 Mar 2026", "https://www.priedpk.org/wp-content/uploads/2026/03/March-2-8.jpeg", "Weekly/Weekly Monitor - 02 Mar to 08 Mar 2026.pdf"],
  ["Weekly Monitor - 23 Feb to 01 Mar 2026", "https://www.priedpk.org/wp-content/uploads/2026/03/Feb-23-1Mar.jpeg", "Weekly/Weekly Monitor - 23 Feb to 01 Mar 2026.pdf"],
  ["Weekly Monitor - 16 Feb to 22 Feb 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/16-22.jpeg", "Weekly/Weekly Monitor - 16 Feb to 22 Feb 2026.pdf"],
  ["Weekly Monitor - 09 Feb to 15 Feb 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/9-feb-15-feb.jpeg", "Weekly/Weekly Monitor - 09 Feb to 15 Feb 2026.pdf"],
  ["Weekly Monitor - 02 Feb to 08 Feb 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/2-Feb-8-Feb-2026-01.png", "Weekly/Weekly Monitor - 02 Feb to 08 Feb 2026.pdf"],
  ["Weekly Monitor - 26 Jan to 01 Feb 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/January-26th-Feb-1st-2026-01.png", "Weekly/Weekly Monitor - 26 Jan to 01 Feb 2026.pdf"],
  ["Weekly Monitor - 19 Jan to 25 Jan 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/19-January-25-January-2026-01.png", "Weekly/Weekly Monitor - 19 Jan to 25 Jan 2026.pdf"],
  ["Weekly Monitor - 12 Jan to 18 Jan 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/12-jan-18-jan-01.png", "Weekly/Weekly Monitor - 12 Jan to 18 Jan 2026.pdf"],
  ["Weekly Monitor - 05 Jan to 11 Jan 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/5-jan-11-jan-01.png", "Weekly/Weekly Monitor - 05 Jan to 11 Jan 2026.pdf"],
  ["Weekly Monitor - 29 Dec 2025 to 04 Jan 2026", "https://www.priedpk.org/wp-content/uploads/2026/02/29-Dec-4-Jan-01.png", "Weekly/Weekly Monitor - 29 Dec 2025 to 04 Jan 2026.pdf"],
  ["Weekly Monitor - 22 Dec to 28 Dec 2025", "https://www.priedpk.org/wp-content/uploads/2026/02/22-Dec-28-Dec-01.png", "Weekly/Weekly Monitor - 22 Dec to 28 Dec 2025.pdf"],
  ["Weekly Monitor - 15 Dec to 21 Dec 2025", "https://www.priedpk.org/wp-content/uploads/2026/02/15-Dec-21-Dec-01.png", "Weekly/Weekly Monitor - 15 Dec to 21 Dec 2025.pdf"],
  ["Weekly Monitor - 08 Dec to 14 Dec 2025", "https://www.priedpk.org/wp-content/uploads/2026/02/8-Dec-14-Dec-01.png", "Weekly/Weekly Monitor - 08 Dec to 14 Dec 2025.pdf"],
  ["Weekly Monitor - 01 Dec to 07 Dec 2025", "https://www.priedpk.org/wp-content/uploads/2026/02/01-Dec-07-Dec-01.png", "Weekly/Weekly Monitor - 01 Dec to 07 Dec 2025.pdf"],
  ["Weekly Monitor - 24 Nov to 30 Nov 2025", "https://www.priedpk.org/wp-content/uploads/2026/02/24-NOV-30-NOV-01.png", "Weekly/Weekly Monitor - 24 Nov to 30 Nov 2025.pdf"],
  ["Weekly Monitor - 17 Nov to 23 Nov 2025", "https://www.priedpk.org/wp-content/uploads/2026/02/17-NOV-23-NOV-01.png", "Weekly/Weekly Monitor - 17 Nov to 23 Nov 2025.pdf"],
  ["Weekly Monitor - 10 Nov to 16 Nov 2025", "https://www.priedpk.org/wp-content/uploads/2025/11/Nov-10-16.png", "Weekly/Weekly Monitor - 10 Nov to 16 Nov 2025.pdf"],
  ["Weekly Monitor - 03 Nov to 09 Nov 2025", "https://www.priedpk.org/wp-content/uploads/2025/11/Nov-3rd-9ths.png", "Weekly/Weekly Monitor - 03 Nov to 09 Nov 2025.pdf"],
  ["Weekly Monitor - 27 Oct to 02 Nov 2025", "https://www.priedpk.org/wp-content/uploads/2025/11/oct-27-2nd.png", "Weekly/Weekly Monitor - 27 Oct to 02 Nov 2025.pdf"],
  ["Weekly Monitor - 20 Oct to 26 Oct 2025", "https://www.priedpk.org/wp-content/uploads/2025/11/oct-20-26.png", "Weekly/Weekly Monitor - 20 Oct to 26 Oct 2025.pdf"],
  ["Weekly Monitor - 13 Oct to 19 Oct 2025", "https://www.priedpk.org/wp-content/uploads/2025/10/October-13th-October-19th.png", "Weekly/Weekly Monitor - 13 Oct to 19 Oct 2025.pdf"],
  ["Weekly Monitor - 06 Oct to 12 Oct 2025", "https://www.priedpk.org/wp-content/uploads/2025/11/oct-6-12.png", "Weekly/Weekly Monitor - 06 Oct to 12 Oct 2025.pdf"],
  ["Weekly Monitor - 29 Sep to 05 Oct 2025", "https://www.priedpk.org/wp-content/uploads/2025/10/Sep-29th-oct-05th.jpg", "Weekly/Weekly Monitor - 29 Sep to 05 Oct 2025.pdf"],
  ["Weekly Monitor - 22 Sep to 28 Sep 2025", "https://www.priedpk.org/wp-content/uploads/2025/10/Sep-22-Sep-28-2025.jpg", "Weekly/Weekly Monitor - 22 Sep to 28 Sep 2025.pdf"],
  ["Weekly Monitor - 15 Sep to 21 Sep 2025", "https://www.priedpk.org/wp-content/uploads/2025/09/Sep-15th-Sep-21st.png", "Weekly/Weekly Monitor - 15 Sep to 21 Sep 2025.pdf"],
  ["Weekly Monitor - 08 Sep to 14 Sep 2025", "https://www.priedpk.org/wp-content/uploads/2025/09/8th-Sept-14th-Sep-2025.png", "Weekly/Weekly Monitor - 08 Sep to 14 Sep 2025.pdf"],
  ["Weekly Monitor - 01 Sep to 07 Sep 2025", "https://www.priedpk.org/wp-content/uploads/2025/09/Thumbnail.png", "Weekly/Weekly Monitor - 01 Sep to 07 Sep 2025.pdf"],
  ["Weekly Monitor - 25 Aug to 31 Aug 2025", "https://www.priedpk.org/wp-content/uploads/2025/09/August-25th-August-31st.png", "Weekly/Weekly Monitor - 25 Aug to 31 Aug 2025.pdf"],
  ["Weekly Monitor - 18 Aug to 24 Aug 2025", "https://www.priedpk.org/wp-content/uploads/2025/08/August-18th-August-24th.png", "Weekly/Weekly Monitor - 18 Aug to 24 Aug 2025.pdf"],
  ["Weekly Monitor - 11 Aug to 17 Aug 2025", "https://www.priedpk.org/wp-content/uploads/2025/08/august-11th-August-17th.png", "Weekly/Weekly Monitor - 11 Aug to 17 Aug 2025.pdf"],
  ["Weekly Monitor - 04 Aug to 10 Aug 2025", "https://www.priedpk.org/wp-content/uploads/2025/08/August-4d-2025.jpg", "Weekly/Weekly Monitor - 04 Aug to 10 Aug 2025.pdf"],
  ["Weekly Monitor - 28 Jul to 03 Aug 2025", "https://www.priedpk.org/wp-content/uploads/2025/08/July-28th-August-3rd-2025.jpg", "Weekly/Weekly Monitor - 28 Jul to 03 Aug 2025.pdf"],
  ["Weekly Monitor - 21 Jul to 27 Jul 2025", "https://www.priedpk.org/wp-content/uploads/2025/07/July-21st-july-27th.jpg", "Weekly/Weekly Monitor - 21 Jul to 27 Jul 2025.pdf"],
  ["Weekly Monitor - 14 Jul to 20 Jul 2025", "https://www.priedpk.org/wp-content/uploads/2025/07/July-14th-20th-July-2025.jpg", "Weekly/Weekly Monitor - 14 Jul to 20 Jul 2025.pdf"],
  ["Weekly Monitor - 07 Jul to 13 Jul 2025", "https://www.priedpk.org/wp-content/uploads/2025/07/July-07th-July-13th.jpg", "Weekly/Weekly Monitor - 07 Jul to 13 Jul 2025.pdf"],
  ["Weekly Monitor - 30 Jun to 06 Jul 2025", "https://www.priedpk.org/wp-content/uploads/2025/07/June-30th-july-06th-2025.jpg", "Weekly/Weekly Monitor - 30 Jun to 06 Jul 2025.pdf"],
  ["Weekly Monitor - 23 Jun to 29 Jun 2025", "https://www.priedpk.org/wp-content/uploads/2025/07/June-23rd-June-29th.jpg", "Weekly/Weekly Monitor - 23 Jun to 29 Jun 2025.pdf"],
  ["Weekly Monitor - 16 Jun to 22 Jun 2025", "https://www.priedpk.org/wp-content/uploads/2025/06/June-16th-June-22nd.jpg", "Weekly/Weekly Monitor - 16 Jun to 22 Jun 2025.pdf"],
  ["Weekly Monitor - 09 Jun to 15 Jun 2025", "https://www.priedpk.org/wp-content/uploads/2025/06/June-9th-15th-June-2025.jpg", "Weekly/Weekly Monitor - 09 Jun to 15 Jun 2025.pdf"],
  ["Weekly Monitor - 02 Jun to 08 Jun 2025", "https://www.priedpk.org/wp-content/uploads/2025/06/02-June-08-June-2025.jpg", "Weekly/Weekly Monitor - 02 Jun to 08 Jun 2025.pdf"],
  ["Weekly Monitor - 26 May to 01 Jun 2025", "https://www.priedpk.org/wp-content/uploads/2025/06/May-12th-May-18th-copy.jpg", "Weekly/Weekly Monitor - 26 May to 01 Jun 2025.pdf"],
  ["Weekly Monitor - 19 May to 25 May 2025", "https://www.priedpk.org/wp-content/uploads/2025/05/May-19th-May-25th.jpg", "Weekly/Weekly Monitor - 19 May to 25 May 2025.pdf"],
  ["Weekly Monitor - 12 May to 18 May 2025", "https://www.priedpk.org/wp-content/uploads/2025/05/May-12th-May-18th1.jpg", "Weekly/Weekly Monitor - 12 May to 18 May 2025.pdf"],
  ["Weekly Monitor - 05 May to 11 May 2025", "https://www.priedpk.org/wp-content/uploads/2025/05/May-05th-May-11th.jpg", "Weekly/Weekly Monitor - 05 May to 11 May 2025.pdf"],
  ["Weekly Monitor - 28 Apr to 04 May 2025", "https://www.priedpk.org/wp-content/uploads/2025/05/Apr-28th-May-04th.jpg", "Weekly/Weekly Monitor - 28 Apr to 04 May 2025.pdf"],
  ["Weekly Monitor - 21 Apr to 27 Apr 2025", "https://www.priedpk.org/wp-content/uploads/2025/05/Apr-21st-Apr-27th.jpg", "Weekly/Weekly Monitor - 21 Apr to 27 Apr 2025.pdf"],
  ["Weekly Monitor - 14 Apr to 20 Apr 2025", "https://www.priedpk.org/wp-content/uploads/2025/04/Apr-14th-Apr-20th.jpg", "Weekly/Weekly Monitor - 14 Apr to 20 Apr 2025.pdf"],
  ["Weekly Monitor - 07 Apr to 13 Apr 2025", "https://www.priedpk.org/wp-content/uploads/2025/04/Apr-07th-Apr-13th.jpg", "Weekly/Weekly Monitor - 07 Apr to 13 Apr 2025.pdf"],
  ["Weekly Monitor - 31 Mar to 06 Apr 2025", "https://www.priedpk.org/wp-content/uploads/2025/04/Mar-31st-Apr-06th.jpg", "Weekly/Weekly Monitor - 31 Mar to 06 Apr 2025.pdf"],
  ["Weekly Monitor - 24 Mar to 30 Mar 2025", "https://www.priedpk.org/wp-content/uploads/2025/04/24th-30th-Mar-2025.jpg", "Weekly/Weekly Monitor - 24 Mar to 30 Mar 2025.pdf"],
  ["Weekly Monitor - 17 Mar to 23 Mar 2025", "https://www.priedpk.org/wp-content/uploads/2025/03/mar-17th-mar-23rd.jpg", "Weekly/Weekly Monitor - 17 Mar to 23 Mar 2025.pdf"],
  ["Weekly Monitor - 10 Mar to 16 Mar 2025", "https://www.priedpk.org/wp-content/uploads/2025/03/mar-10th-mar-16th.jpg", "Weekly/Weekly Monitor - 10 Mar to 16 Mar 2025.pdf"],
  ["Weekly Monitor - 03 Mar to 09 Mar 2025", "https://www.priedpk.org/wp-content/uploads/2025/03/Mar-3rd-Mar-9th-2025.jpg", "Weekly/Weekly Monitor - 03 Mar to 09 Mar 2025.pdf"],
  ["Weekly Monitor - 24 Feb to 02 Mar 2025", "https://www.priedpk.org/wp-content/uploads/2025/03/Feb-24th-Mar-2nd.jpg", "Weekly/Weekly Monitor - 24 Feb to 02 Mar 2025.pdf"],
  ["Weekly Monitor - 17 Feb to 23 Feb 2025", "https://www.priedpk.org/wp-content/uploads/2025/02/feb-17th-Feb-23rd.jpg", "Weekly/Weekly Monitor - 17 Feb to 23 Feb 2025.pdf"],
  ["Weekly Monitor - 10 Feb to 16 Feb 2025", "https://www.priedpk.org/wp-content/uploads/2025/02/Feb-10th-Feb-16th.jpg", "Weekly/Weekly Monitor - 10 Feb to 16 Feb 2025.pdf"],
  ["Weekly Monitor - 03 Feb to 09 Feb 2025", "https://www.priedpk.org/wp-content/uploads/2025/02/Feb-3rd-Feb-9th.jpg", "Weekly/Weekly Monitor - 03 Feb to 09 Feb 2025.pdf"],
  ["Weekly Monitor - 27 Jan to 02 Feb 2025", "https://www.priedpk.org/wp-content/uploads/2025/02/Jan-27th-2nd-Feb.jpg", "Weekly/Weekly Monitor - 27 Jan to 02 Feb 2025.pdf"],
  ["Weekly Monitor - 20 Jan to 26 Jan 2025", "https://www.priedpk.org/wp-content/uploads/2025/02/Jan-20th-26th-Jan_.jpg", "Weekly/Weekly Monitor - 20 Jan to 26 Jan 2025.pdf"],
  ["Weekly Monitor - 13 Jan to 19 Jan 2025", "https://www.priedpk.org/wp-content/uploads/2025/01/Weekly-Media-Monitor-Jan-13-–-Jan-19-2025-thumbnail.jpg", "Weekly/Weekly Monitor - 13 Jan to 19 Jan 2025.pdf"],
  ["Weekly Monitor - 06 Jan to 12 Jan 2025", "https://www.priedpk.org/wp-content/uploads/2025/01/Jan-6th-12th-Jan.jpg", "Weekly/Weekly Monitor - 06 Jan to 12 Jan 2025.pdf"],
  ["Weekly Monitor - 30 Dec 2024 to 05 Jan 2025", "https://www.priedpk.org/wp-content/uploads/2025/01/Dec-30th-2024-Jan-05th20251.jpg", "Weekly/Weekly Monitor - 30 Dec 2024 to 05 Jan 2025.pdf"],
  ["Weekly Monitor - 23 Dec to 29 Dec 2024", "https://www.priedpk.org/wp-content/uploads/2025/01/Dec-23-29-Dec.jpg", "Weekly/Weekly Monitor - 23 Dec to 29 Dec 2024.pdf"],
  ["Weekly Monitor - 16 Dec to 22 Dec 2024", "https://www.priedpk.org/wp-content/uploads/2024/12/Dec-16-22-Dec.jpg", "Weekly/Weekly Monitor - 16 Dec to 22 Dec 2024.pdf"],
  ["Weekly Monitor - 09 Dec to 15 Dec 2024", "https://www.priedpk.org/wp-content/uploads/2024/12/Dec-09-15-Dec_.jpg", "Weekly/Weekly Monitor - 09 Dec to 15 Dec 2024.pdf"],
  ["Weekly Monitor - 02 Dec to 08 Dec 2024", "https://www.priedpk.org/wp-content/uploads/2024/12/Dec-02-08-Dec_.jpg", "Weekly/Weekly Monitor - 02 Dec to 08 Dec 2024.pdf"],
  ["Weekly Monitor - 25 Nov to 01 Dec 2024", "https://www.priedpk.org/wp-content/uploads/2024/12/Nov-25-Dec-01.jpg", "Weekly/Weekly Monitor - 25 Nov to 01 Dec 2024.pdf"],
  ["Weekly Monitor - 18 Nov to 24 Nov 2024", "https://www.priedpk.org/wp-content/uploads/2024/12/Nov-18th-24th1.jpg", "Weekly/Weekly Monitor - 18 Nov to 24 Nov 2024.pdf"],
  ["Weekly Monitor - 11 Nov to 17 Nov 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/Nov-11th-17th.jpg", "Weekly/Weekly Monitor - 11 Nov to 17 Nov 2024.pdf"],
  ["Weekly Monitor - 04 Nov to 10 Nov 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/Nov-4th-10th.jpg", "Weekly/Weekly Monitor - 04 Nov to 10 Nov 2024.pdf"],
  ["Weekly Monitor - 28 Oct to 03 Nov 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/OCT-28-Nov-03.jpg", "Weekly/Weekly Monitor - 28 Oct to 03 Nov 2024.pdf"],
  ["Weekly Monitor - 21 Oct to 27 Oct 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/October-21-27.jpg", "Weekly/Weekly Monitor - 21 Oct to 27 Oct 2024.pdf"],
  ["Weekly Monitor - 14 Oct to 20 Oct 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/October-14-20.jpg", "Weekly/Weekly Monitor - 14 Oct to 20 Oct 2024.pdf"],
  ["Weekly Monitor - 07 Oct to 13 Oct 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/October-7-13.jpg", "Weekly/Weekly Monitor - 07 Oct to 13 Oct 2024.pdf"],
  ["Weekly Monitor - 30 Sep to 06 Oct 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/Sep-30-Oct-06.jpg", "Weekly/Weekly Monitor - 30 Sep to 06 Oct 2024.pdf"],
  ["Weekly Monitor - 23 Sep to 29 Sep 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/September-23-29.jpg", "Weekly/Weekly Monitor - 23 Sep to 29 Sep 2024.pdf"],
  ["Weekly Monitor - 16 Sep to 22 Sep 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/September-16-22.jpg", "Weekly/Weekly Monitor - 16 Sep to 22 Sep 2024.pdf"],
  ["Weekly Monitor - 09 Sep to 15 Sep 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/September-9-15.jpg", "Weekly/Weekly Monitor - 09 Sep to 15 Sep 2024.pdf"],
  ["Weekly Monitor - 02 Sep to 08 Sep 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/September-2-8.jpg", "Weekly/Weekly Monitor - 02 Sep to 08 Sep 2024.pdf"],
  ["Weekly Monitor - 26 Aug to 01 Sep 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/Aug-26-01-Sep.jpg", "Weekly/Weekly Monitor - 26 Aug to 01 Sep 2024.pdf"],
  ["Weekly Monitor - 19 Aug to 25 Aug 2024", "https://www.priedpk.org/wp-content/uploads/2024/11/Aug-19-25.jpg", "Weekly/Weekly Monitor - 19 Aug to 25 Aug 2024.pdf"],
  ["Weekly Monitor - 12 Aug to 18 Aug 2024", "https://www.priedpk.org/wp-content/uploads/2024/09/Aug-12-18.png", "Weekly/Weekly Monitor - 12 Aug to 18 Aug 2024.pdf"],
  ["Weekly Monitor - 05 Aug to 11 Aug 2024", "https://www.priedpk.org/wp-content/uploads/2024/09/Aug-5-11.png", "Weekly/Weekly Monitor - 05 Aug to 11 Aug 2024.pdf"],
  ["Weekly Monitor - 29 Jul to 04 Aug 2024", "https://www.priedpk.org/wp-content/uploads/2024/08/June-Aug-29-4.png", "Weekly/Weekly Monitor - 29 Jul to 04 Aug 2024.pdf"],
  ["Weekly Monitor - 22 Jul to 28 Jul 2024", "https://www.priedpk.org/wp-content/uploads/2024/08/July-22-28.png", "Weekly/Weekly Monitor - 22 Jul to 28 Jul 2024.pdf"],
  ["Weekly Monitor - 15 Jul to 21 Jul 2024", "https://www.priedpk.org/wp-content/uploads/2024/08/Jult-15-21.png", "Weekly/Weekly Monitor - 15 Jul to 21 Jul 2024.pdf"],
  ["Weekly Monitor - 08 Jul to 14 Jul 2024", "Weekly/covers/July-8-14-800x1159.png", "Weekly/Weekly Monitor - 08 Jul to 14 Jul 2024.pdf"],
  ["Weekly Monitor - 01 Jul to 07 Jul 2024", "Weekly/covers/July-1st-7th-800x1159.png", "Weekly/Weekly Monitor - 01 Jul to 07 Jul 2024.pdf"],
  ["Weekly Monitor - 24 Jun to 30 Jun 2024", "Weekly/covers/June-24h-30th-800x1159.png", "Weekly/Weekly Monitor - 24 Jun to 30 Jun 2024.pdf"],
  ["Weekly Monitor - 17 Jun to 23 Jun 2024", "Weekly/covers/June-17-23-800x1159.png", "Weekly/Weekly Monitor - 17 Jun to 23 Jun 2024.pdf"],
  ["Weekly Monitor - 10 Jun to 16 Jun 2024", "Weekly/covers/June-10-16-800x1159.png", "Weekly/Weekly Monitor - 10 Jun to 16 Jun 2024.pdf"],
  ["Weekly Monitor - 03 Jun to 09 Jun 2024", "Weekly/covers/june-3-9-800x1159.png", "Weekly/Weekly Monitor - 03 Jun to 09 Jun 2024.pdf"],
  ["Weekly Monitor - 27 May to 02 Jun 2024", "Weekly/covers/May-June_-800x1159.png", "Weekly/Weekly Monitor - 27 May to 02 Jun 2024.pdf"],
  ["Weekly Monitor - 20 May to 26 May 2024", "Weekly/covers/may-20-26-800x1159.png", "Weekly/Weekly Monitor - 20 May to 26 May 2024.pdf"],
  ["Weekly Monitor - 13 May to 19 May 2024", "Weekly/covers/may-13-19-800x1159.png", "Weekly/Weekly Monitor - 13 May to 19 May 2024.pdf"],
  ["Weekly Monitor - 06 May to 12 May 2024", "Weekly/covers/May-06-12-800x1159.png", "Weekly/Weekly Monitor - 06 May to 12 May 2024.pdf"],
  ["Weekly Monitor - 29 Apr to 05 May 2024", "Weekly/covers/april-29-may-5th-800x1159.png", "Weekly/Weekly Monitor - 29 Apr to 05 May 2024.pdf"],
  ["Weekly Monitor - 22 Apr to 28 Apr 2024", "Weekly/covers/April-22nd-28th-800x1159.png", "Weekly/Weekly Monitor - 22 Apr to 28 Apr 2024.pdf"],
  ["Weekly Monitor - 15 Apr to 21 Apr 2024", "Weekly/covers/April-15-21-800x1159.png", "Weekly/Weekly Monitor - 15 Apr to 21 Apr 2024.pdf"],
  ["Weekly Monitor - 08 Apr to 14 Apr 2024", "Weekly/covers/April-08-14-800x1159.png", "Weekly/Weekly Monitor - 08 Apr to 14 Apr 2024.pdf"],
  ["Weekly Monitor - 01 Apr to 07 Apr 2024", "Weekly/covers/April-1st-7th-800x1159.jpg", "Weekly/Weekly Monitor - 01 Apr to 07 Apr 2024.pdf"],
  ["Weekly Monitor - 25 Mar to 31 Mar 2024", "Weekly/covers/march-25-31-800x1159.png", "Weekly/Weekly Monitor - 25 Mar to 31 Mar 2024.pdf"],
  ["Weekly Monitor - 18 Mar to 24 Mar 2024", "Weekly/covers/march-18th-24th-800x1159.png", "Weekly/Weekly Monitor - 18 Mar to 24 Mar 2024.pdf"],
  ["Weekly Monitor - 11 Mar to 17 Mar 2024", "Weekly/covers/march-11th-17th-800x1159.png", "Weekly/Weekly Monitor - 11 Mar to 17 Mar 2024.pdf"],
  ["Weekly Monitor - 04 Mar to 10 Mar 2024", "Weekly/covers/march-4th-10-800x1159.png", "Weekly/Weekly Monitor - 04 Mar to 10 Mar 2024.pdf"],
  ["Weekly Monitor - 26 Feb to 03 Mar 2024", "Weekly/covers/feb-26-mar-3rd-800x1159.png", "Weekly/Weekly Monitor - 26 Feb to 03 Mar 2024.pdf"],
  ["Weekly Monitor - 19 Feb to 25 Feb 2024", "Weekly/covers/Feb-19-25th-800x1159.png", "Weekly/Weekly Monitor - 19 Feb to 25 Feb 2024.pdf"],
  ["Weekly Monitor - 12 Feb to 18 Feb 2024", "Weekly/covers/Feb-12th-18th-800x1159.png", "Weekly/Weekly Monitor - 12 Feb to 18 Feb 2024.pdf"],
  ["Weekly Monitor - 05 Feb to 11 Feb 2024", "Weekly/covers/Feb-5th-11-800x1159.png", "Weekly/Weekly Monitor - 05 Feb to 11 Feb 2024.pdf"],
  ["Weekly Monitor - 29 Jan to 04 Feb 2024", "Weekly/covers/Jan-Feb-2024-800x1159.png", "Weekly/Weekly Monitor - 29 Jan to 04 Feb 2024.pdf"],
  ["Weekly Monitor - 22 Jan to 28 Jan 2024", "Weekly/covers/January-22-28-800x1159.png", "Weekly/Weekly Monitor - 22 Jan to 28 Jan 2024.pdf"],
  ["Weekly Monitor - 15 Jan to 21 Jan 2024", "Weekly/covers/January-15-21-800x1159.png", "Weekly/Weekly Monitor - 15 Jan to 21 Jan 2024.pdf"],
  ["Weekly Monitor - 08 Jan to 15 Jan 2024", "Weekly/covers/January-8th-14th-800x1159.png", "Weekly/Weekly Monitor - 08 Jan to 15 Jan 2024.pdf"],
  ["Weekly Monitor - 08 Jan to 14 Jan 2024", "Weekly/covers/January-8th-14th-800x1159.png", "Weekly/Weekly Monitor - 08 Jan to 14 Jan 2024.pdf"],
  ["Weekly Monitor - 01 Jan to 07 Jan 2024", "Weekly/covers/January-1st-7th-800x1159.png", "Weekly/Weekly Monitor - 01 Jan to 07 Jan 2024.pdf"],
  ["Weekly Monitor - 25 Dec to 31 Dec 2023", "Weekly/covers/December-25th-31st-800x1159.png", "Weekly/Weekly Monitor - 25 Dec to 31 Dec 2023.pdf"],
  ["Weekly Monitor - 18 Dec to 24 Dec 2023", "Weekly/covers/December-18th-24th-800x1159.png", "Weekly/Weekly Monitor - 18 Dec to 24 Dec 2023.pdf"],
  ["Weekly Monitor - 11 Dec to 17 Dec 2023", "Weekly/covers/December-11th-17copy-800x1159.png", "Weekly/Weekly Monitor - 11 Dec to 17 Dec 2023.pdf"],
  ["Weekly Monitor - 04 Dec to 10 Dec 2023", "Weekly/covers/December-4th-10-800x1159.png", "Weekly/Weekly Monitor - 04 Dec to 10 Dec 2023.pdf"],
  ["Weekly Monitor - 27 Nov to 05 Dec 2023", "Weekly/covers/Nov-26-3rd-dec-800x1159.png", "Weekly/Weekly Monitor - 27 Nov to 05 Dec 2023.pdf"],
  ["Weekly Monitor - 20 Nov to 27 Nov 2023", "Weekly/covers/November-20th-27_-800x1159.png", "Weekly/Weekly Monitor - 20 Nov to 27 Nov 2023.pdf"],
  ["Weekly Monitor - 20 Nov to 26 Nov 2023", "Weekly/covers/November-20th-26-800x1159.png", "Weekly/Weekly Monitor - 20 Nov to 26 Nov 2023.pdf"],
  ["Weekly Monitor - 13 Nov to 19 Nov 2023", "Weekly/covers/November-13th-19-800x1159.png", "Weekly/Weekly Monitor - 13 Nov to 19 Nov 2023.pdf"],
  ["Weekly Monitor - 06 Nov to 12 Nov 2023", "Weekly/covers/November-6th-12-800x1159.png", "Weekly/Weekly Monitor - 06 Nov to 12 Nov 2023.pdf"],
  ["Weekly Monitor - 30 Oct to 05 Nov 2023", "Weekly/covers/oct-oct-5th_-800x1159.png", "Weekly/Weekly Monitor - 30 Oct to 05 Nov 2023.pdf"],
  ["Weekly Monitor - 23 Oct to 29 Oct 2023", "Weekly/covers/oct-23rd-29th-800x1159.png", "Weekly/Weekly Monitor - 23 Oct to 29 Oct 2023.pdf"],
  ["Weekly Monitor - 16 Oct to 22 Oct 2023", "Weekly/covers/oct-16th-22nd-800x1159.png", "Weekly/Weekly Monitor - 16 Oct to 22 Oct 2023.pdf"],
  ["Weekly Monitor - 09 Oct to 15 Oct 2023", "Weekly/thumbnails/Weekly Monitor - 09 Oct to 15 Oct 20231.jpg", "Weekly/Weekly Monitor - 09 Oct to 15 Oct 2023.pdf"],
  ["Weekly Monitor - 02 Oct to 08 Oct 2023", "Weekly/covers/Oct-2nd-8th-800x1159.png", "Weekly/Weekly Monitor - 02 Oct to 08 Oct 2023.pdf"],
  ["Weekly Monitor - 25 Sep to 01 Oct 2023", "Weekly/covers/September-25-Sep-Oct-1-800x1159.png", "Weekly/Weekly Monitor - 25 Sep to 01 Oct 2023.pdf"],
  ["Weekly Monitor - 18 Sep to 24 Sep 2023", "Weekly/covers/September-18th-24th-copy-800x1159.png", "Weekly/Weekly Monitor - 18 Sep to 24 Sep 2023.pdf"],
  ["Weekly Monitor - 11 Sep to 17 Sep 2023", "Weekly/covers/September-11th-17th-800x1159.jpg", "Weekly/Weekly Monitor - 11 Sep to 17 Sep 2023.pdf"],
  ["Weekly Monitor - 03 Sep to 10 Sep 2023", "Weekly/covers/September-3rd-to-10th-800x1159.jpg", "Weekly/Weekly Monitor - 03 Sep to 10 Sep 2023.pdf"],
  ["Weekly Monitor - 28 Aug to 03 Sep 2023", "Weekly/covers/Aug-sep-28-3rd-800x1159.png", "Weekly/Weekly Monitor - 28 Aug to 03 Sep 2023.pdf"],
  ["Weekly Monitor - 21 Aug to 27 Aug 2023", "Weekly/covers/August-21st-27th-800x1159.png", "Weekly/Weekly Monitor - 21 Aug to 27 Aug 2023.pdf"],
  ["Weekly Monitor - 14 Aug to 20 Aug 2023", "Weekly/covers/August-14th-20th_-800x1159.png", "Weekly/Weekly Monitor - 14 Aug to 20 Aug 2023.pdf"],
  ["Weekly Monitor - 07 Aug to 13 Aug 2023", "Weekly/covers/August-7th-13th-800x1159.png", "Weekly/Weekly Monitor - 07 Aug to 13 Aug 2023.pdf"],
  ["Weekly Monitor - 01 Aug to 07 Aug 2023", "Weekly/covers/August-1st-6th-800x1159.png", "Weekly/Weekly Monitor - 01 Aug to 07 Aug 2023.pdf"],
  ["Weekly Monitor - 17 Jul to 23 Jul 2023", "Weekly/covers/july-17th-23-800x1159.png", "Weekly/Weekly Monitor - 17 Jul to 23 Jul 2023.pdf"],
  ["Weekly Monitor - 10 Jul to 16 Jul 2023", "Weekly/covers/july-10th-16th-800x1159.jpg", "Weekly/Weekly Monitor - 10 Jul to 16 Jul 2023.pdf"],
  ["Weekly Monitor - 03 Jul to 09 Jul 2023", "Weekly/thumbnails/Weekly Monitor - 03 Jul to 09 Jul 20231.jpg", "Weekly/Weekly Monitor - 03 Jul to 09 Jul 2023.pdf"],
  ["Weekly Monitor - 26 Jun to 02 Jul 2023", "Weekly/covers/June-26th-2nd-800x1159.jpg", "Weekly/Weekly Monitor - 26 Jun to 02 Jul 2023.pdf"],
  ["Weekly Monitor - 19 Jun to 25 Jun 2023", "Weekly/covers/June-19th-25TH-800x1159.jpg", "Weekly/Weekly Monitor - 19 Jun to 25 Jun 2023.pdf"],
  ["Weekly Monitor - 12 Jun to 18 Jun 2023", "Weekly/covers/June-12-18-800x1159.jpg", "Weekly/Weekly Monitor - 12 Jun to 18 Jun 2023.pdf"],
  ["Weekly Monitor - 29 May to 04 Jun 2023", "Weekly/covers/may-29-4th-june-800x1159.jpg", "Weekly/Weekly Monitor - 29 May to 04 Jun 2023.pdf"],
  ["Weekly Monitor - 22 May to 28 May 2023", "Weekly/covers/may-22-28-1-800x1159.jpg", "Weekly/Weekly Monitor - 22 May to 28 May 2023.pdf"],
  ["Weekly Monitor - 15 May to 21 May 2023", "Weekly/covers/15th-21th-may_-800x1159.png", "Weekly/Weekly Monitor - 15 May to 21 May 2023.pdf"],
  ["Weekly Monitor - 08 May to 14 May 2023", "Weekly/covers/8th-14th-may-copy-800x1159.jpg", "Weekly/Weekly Monitor - 08 May to 14 May 2023.pdf"],
  ["Weekly Monitor - 01 May to 07 May 2023", "Weekly/covers/1st-7th-may-800x1159.jpg", "Weekly/Weekly Monitor - 01 May to 07 May 2023.pdf"],
  ["Weekly Monitor - 24 Apr to 30 Apr 2023", "Weekly/covers/april-24-23-800x1159.jpg", "Weekly/Weekly Monitor - 24 Apr to 30 Apr 2023.pdf"],
  ["Weekly Monitor - 17 Apr to 23 Apr 2023", "Weekly/covers/april-17th-23-800x1159.jpg", "Weekly/Weekly Monitor - 17 Apr to 23 Apr 2023.pdf"],
  ["Weekly Monitor - 10 Apr to 16 Apr 2023", "Weekly/covers/april-10th-16-800x1159.jpg", "Weekly/Weekly Monitor - 10 Apr to 16 Apr 2023.pdf"],
  ["Weekly Monitor - 03 Apr to 09 Apr 2023", "Weekly/covers/April-3rd-9th-800x1159.jpg", "Weekly/Weekly Monitor - 03 Apr to 09 Apr 2023.pdf"],
  ["Weekly Monitor - 27 Mar to 02 Apr 2023", "Weekly/covers/march-27-april-2nd-800x1159.jpg", "Weekly/Weekly Monitor - 27 Mar to 02 Apr 2023.pdf"],
  ["Weekly Monitor - 20 Mar to 26 Mar 2023", "Weekly/thumbnails/Weekly Monitor - 20 Mar to 26 Mar 20231.jpg", "Weekly/Weekly Monitor - 20 Mar to 26 Mar 2023.pdf"]
];

const BIWEEKLY_MM = [
  ["Bi-Weekly Monitor - 13 Mar to 19 Mar 2023", "Weekly/covers/march-13th-19th-800x1159.jpg", "Weekly/Bi-Weekly Monitor - 13 Mar to 19 Mar 2023.pdf"],
  ["Bi-Weekly Monitor - 01 Mar to 12 Mar 2023", "Weekly/covers/March-2023-1st-1215-28-800x1159.jpg", "Weekly/Bi-Weekly Monitor - 01 Mar to 12 Mar 2023.pdf"],
  ["Bi-Weekly Monitor - 14 Feb to 28 Feb 2023", "Weekly/covers/fEBRUARY-202315-28-800x1159.jpg", "Weekly/Bi-Weekly Monitor - 14 Feb to 28 Feb 2023.pdf"],
  ["Bi-Weekly Monitor - 01 Feb to 13 Feb 2023", "Weekly/covers/fEBRUARY-2023-800x1159.png", "Weekly/Bi-Weekly Monitor - 01 Feb to 13 Feb 2023.pdf"],
  ["Bi-Weekly Monitor - 15 Jan to 31 Jan 2023", "Bi-Weekly/6.jpeg?v=3", "Weekly/Bi-Weekly Monitor - 15 Jan to 31 Jan 2023.pdf"],
  ["Bi-Weekly Monitor - 01 Jan to 14 Jan 2023", "Bi-Weekly/5.jpeg?v=3", "Weekly/Bi-Weekly Monitor - 01 Jan to 14 Jan 2023.pdf"],
  ["Bi-Weekly Monitor - 15 Dec to 31 Dec 2022", "Bi-Weekly/4.jpeg?v=3", "Weekly/Bi-Weekly Monitor - 15 Dec to 31 Dec 2022.pdf"],
  ["Bi-Weekly Monitor - 01 Dec to 14 Dec 2022", "Bi-Weekly/3.jpeg?v=3", "Weekly/Bi-Weekly Monitor - 01 Dec to 14 Dec 2022.pdf"],
  ["Bi-Weekly Monitor - 15 Nov to 30 Nov 2022", "Bi-Weekly/2.jpeg?v=3", "Weekly/Bi-Weekly Monitor - 15 Nov to 30 Nov 2022.pdf"],
  ["Bi-Weekly Monitor - 01 Nov to 14 Nov 2022", "Bi-Weekly/1.jpeg?v=3", "Weekly/Bi-Weekly Monitor - 01 Nov to 14 Nov 2022.pdf"]
];

function mmTitle(label) {
  const MONTHS = {
    jan: 'January', feb: 'February', mar: 'March', apr: 'April', may: 'May',
    jun: 'June', jul: 'July', aug: 'August', sep: 'September', oct: 'October',
    nov: 'November', dec: 'December'
  };
  // Normalise: en/em dashes → hyphen, strip ordinal suffixes (1st→1), strip noise
  let s = label.replace(/[–—]/g, '-').replace(/[_\s]+/g, '-')
    .replace(/(\d+)(st|nd|rd|th)/gi, '$1')
    .replace(/\.indd$/i, '').replace(/-R0\d+/ig, '')
    .replace(/^Weekly-?media-?monitor-?/i, '');
  const parts = s.split(/-+/).filter(Boolean);
  const tokens = [];
  for (const p of parts) {
    if (/^\d{4}$/.test(p)) { tokens.push({ type: 'y', v: p }); continue; }
    const n = p.match(/^(\d+)$/);
    if (n) { tokens.push({ type: 'd', v: parseInt(n[1]) }); continue; }
    const pl = p.toLowerCase();
    for (const [abbr, full] of Object.entries(MONTHS)) {
      if (pl === abbr || (pl.startsWith(abbr) && pl.length >= 3)) {
        tokens.push({ type: 'm', v: full }); break;
      }
    }
  }
  const years = tokens.filter(t => t.type === 'y').map(t => t.v);
  const days = tokens.filter(t => t.type === 'd').map(t => t.v);
  const months = tokens.filter(t => t.type === 'm').map(t => t.v);
  const d1 = days[0], m1 = months[0], d2 = days[1] !== undefined ? days[1] : null, m2 = months[1] || months[0];
  const y1 = years[0] || '', y2 = years[1] || '';
  if (d1 !== undefined && m1 && d2 !== null && y1) {
    return y2 && y2 !== y1
      ? `${d1} ${m1} ${y1} – ${d2} ${m2} ${y2}`
      : `${d1} ${m1} – ${d2} ${m2} ${y1}`;
  }
  if (d1 !== undefined && m1 && y1) return `${d1} ${m1} ${y1}`;
  return label.replace(/[-_]+/g, ' ').replace(/\b[a-z]/g, c => c.toUpperCase()) || 'Weekly Media Monitor';
}
