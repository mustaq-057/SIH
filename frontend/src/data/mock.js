// ---- SUVIDHA AI mock data (frontend-only demo) ----

export const LANGUAGES = [
  'English','हिन्दी (Hindi)','বাংলা (Bengali)','தமிழ் (Tamil)','తెలుగు (Telugu)',
  'मराठी (Marathi)','ગુજરાતી (Gujarati)','ಕನ್ನಡ (Kannada)','മലയാളം (Malayalam)',
  'ਪੰਜਾਬੀ (Punjabi)','ଓଡ଼ିଆ (Odia)','অসমীয়া (Assamese)','اردو (Urdu)','संस्कृतम् (Sanskrit)',
  'कोंकणी (Konkani)','मैथिली (Maithili)','मणिपुरी (Manipuri)','नेपाली (Nepali)','बर्\u200dओ (Bodo)',
  'डोगरी (Dogri)','कॉशुर (Kashmiri)','संताली (Santali)','सिन्धी (Sindhi)'
];

export const SCHEME_BANNERS = [
  {
    title: ['AI-Driven Scheme', 'Matching for You'],
    lines: ['Built for marginalized entrepreneurs — SC/ST, OBC,', 'EBC, Divyangjan & Transgender business owners', 'Speak once — get matched, audited & bundled schemes'],
    badge: ['A personalised scheme stack for ', 'your business'],
    image: 'https://images.unsplash.com/photo-1641810290385-e6387a1ac187',
  },
  {
    title: ['Prime Minister', 'Vidyalaxmi Scheme'],
    lines: ['Empowering Yuva Shakti with quality education', 'Merit-based support for higher studies', 'Enabling students to pursue their dreams'],
    badge: ['Education support with ', '75%', ' govt. guarantee'],
    image: 'https://images.pexels.com/photos/31968811/pexels-photo-31968811.jpeg',
  },
  {
    title: ['PM-DAKSH', 'Skilling Scheme'],
    lines: ['Free skill development for SC / OBC / EBC', 'Certified training with placement support', 'Monthly stipend paid during training'],
    badge: ['Stipend of ', '\u20b93,000', ' + free certification'],
    image: 'https://images.pexels.com/photos/33925031/pexels-photo-33925031.jpeg',
  },
  {
    title: ['Stand-Up India', 'for Women & SC/ST'],
    lines: ['Support for greenfield enterprises', 'Dedicated hand-holding for entrepreneurs', 'Backed by NSFDC & MoSJE corporations'],
    badge: ['End-to-end support for ', 'new ventures'],
    image: 'https://images.unsplash.com/photo-1587538018365-2a1f8b544c08',
  },
  {
    title: ['NSFDC', 'Aajeevika Scheme'],
    lines: ['Livelihood support for Scheduled Caste families', 'Concessional finance for income activities', 'Marketing & self-employment assistance'],
    badge: ['Livelihood support up to ', '\u20b91.4L'],
    image: 'https://images.unsplash.com/photo-1521401415461-83e7162b8e64',
  },
  {
    title: ['ADIP Scheme', 'for Divyangjan'],
    lines: ['Assistive aids & appliances for Persons with Disability', 'Free fitment camps across districts', 'Restoring mobility and dignity'],
    badge: ['Free aids & appliances for ', 'Divyangjan'],
    image: 'https://images.pexels.com/photos/11091107/pexels-photo-11091107.jpeg',
  },
  {
    title: ['NBCFDC', 'SHG Livelihood'],
    lines: ['Empowering Backward Class Self-Help Groups', 'Micro-finance for women collectives', 'Skill upgradation & market linkage'],
    badge: ['Empowering ', 'Self-Help Groups'],
    image: 'https://images.unsplash.com/photo-1604331517254-54c781bad47c',
  },
];

export const HERO_SLIDES = [
  {
    tagTop: 'Ministry of Social Justice & Empowerment',
    title: 'Every dream deserves a scheme',
    highlight: 'SUVIDHA AI',
    subtitle: 'Voice-first, rejection-proof access to welfare & business schemes for SC/ST, OBC, EBC, Divyangjan and Transgender entrepreneurs.',
    image: 'https://images.unsplash.com/photo-1604331517254-54c781bad47c'
  },
  {
    tagTop: 'Zero Typing • 22 Indian Languages',
    title: 'Just speak. We do the paperwork.',
    highlight: 'बोलिए, हम भर देंगे',
    subtitle: 'Tap the mic, say your business idea in your dialect, and let SUVIDHA match, audit and stack the right schemes.',
    image: 'https://images.unsplash.com/photo-1603578011446-4e8969bcbe71'
  },
  {
    tagTop: 'From Discovery to Disbursement',
    title: 'Stack skills, subsidy & credit together',
    highlight: 'Scheme Bundling',
    subtitle: 'We combine PM-DAKSH training, NSFDC capital and Stand-Up India credit into one guided journey.',
    image: 'https://images.unsplash.com/photo-1521401415461-83e7162b8e64'
  }
];

export const STATS = [
  { value: '2,400+', label: 'MoSJE Schemes Mapped', sub: 'Central + State' },
  { value: '22', label: 'Languages Supported', sub: 'Bhashini powered' },
  { value: '96%', label: 'Rejection Errors Caught', sub: 'Pre-submission audit' },
  { value: '30 sec', label: 'CSC Processing', sub: 'via QR bridge' }
];

export const PIPELINE = [
  { id:1, icon:'Mic', title:'Voice Interface', desc:'Speak your business intent in any regional dialect. Powered by Bhashini speech-to-text.' },
  { id:2, icon:'ScanText', title:'Document Audit', desc:'OCR extracts details from Aadhaar, Caste & Income certificates and flags mismatches.' },
  { id:3, icon:'ShieldCheck', title:'Deterministic Match', desc:'RAG + hard rules match your profile to official MoSJE eligibility matrices. No hallucinations.' },
  { id:4, icon:'Layers', title:'Scheme Stacking', desc:'Bundles compatible benefits — skill training + capital subsidy + micro-credit.' },
  { id:5, icon:'QrCode', title:'CSC Agent Bridge', desc:'One-click QR package for offline Jan Seva Kendras. Verified apply in 30 seconds.' }
];

export const CATEGORIES = [
  { icon:'Sprout', count:'318', name:'Agriculture & Rural', color:'#3f7d20' },
  { icon:'Landmark', count:'214', name:'Banking & Credit', color:'#c77d1a' },
  { icon:'Handshake', count:'186', name:'Business & Entrepreneurship', color:'#5b6470' },
  { icon:'GraduationCap', count:'402', name:'Education & Scholarships', color:'#c0392b' },
  { icon:'HeartPulse', count:'176', name:'Health & Wellness', color:'#16a085' },
  { icon:'Home', count:'128', name:'Housing & Shelter', color:'#2563eb' },
  { icon:'Scale', count:'64', name:'Rights & Legal Aid', color:'#a0522d' },
  { icon:'Accessibility', count:'240', name:'Divyangjan (PwD)', color:'#7c3aed' },
  { icon:'Users', count:'331', name:'Skills & Employment', color:'#d97706' },
  { icon:'Sparkles', count:'451', name:'Social Welfare & Empowerment', color:'#e14b2f' }
];

export const FAQS = [
  { q:'Do I need to type or write in English?', a:'No. SUVIDHA AI is zero-typing. Tap the microphone and speak in your own language or dialect — Hindi, Tamil, Marathi, Bengali and 18 more. The system handles the rest.' },
  { q:'How does SUVIDHA prevent application rejection?', a:'Before submission, our OCR audit reads your Aadhaar, caste and income certificates, and cross-checks them for mismatches (like a name spelling difference between Aadhaar and your bank passbook) that usually cause bank rejections.' },
  { q:'What is scheme stacking?', a:'Instead of showing one loan, SUVIDHA bundles compatible benefits. For example it can combine PM-DAKSH skill training + stipend with NSFDC / Stand-Up India micro-credit so you get end-to-end support.' },
  { q:'What if I cannot complete the application online?', a:'SUVIDHA generates a CSC Operator QR code. Show it at any Jan Seva Kendra / Common Service Centre and the operator can process your verified application in under 30 seconds.' },
  { q:'Is my data safe?', a:'Yes. Documents are processed for verification only. SUVIDHA follows Government of India GIGW 3.0 and data protection guidelines.' },
  { q:'Which ministries and schemes are covered?', a:'The portal focuses on Ministry of Social Justice & Empowerment (MoSJE) schemes across NSFDC, NSKFDC, NBCFDC, PM-DAKSH, and integrated Central + State welfare programmes.' }
];

export const TESTIMONIALS = [
  { name:'Sunita Devi', role:'Handloom Weaver, Varanasi', img:'https://images.pexels.com/photos/37145167/pexels-photo-37145167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', quote:'I spoke in Bhojpuri and it found me a weaving subsidy plus a skill stipend. The QR helped the CSC uncle finish everything.' },
  { name:'Ramesh Kumar', role:'Young Entrepreneur, Patna', img:'https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=srgb&fm=jpg&q=85', quote:'It caught a spelling mismatch in my bank passbook before I applied. That single flag saved my loan from rejection.' },
  { name:'Lakshmi Bai', role:'Artisan, Madurai', img:'https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?crop=entropy&cs=srgb&fm=jpg&q=85', quote:'Bundling training with capital was new to me. I got both, not just a loan I could not use.' },
  { name:'Gurpreet Singh', role:'Farmer & Trader, Ludhiana', img:'https://images.pexels.com/photos/14120649/pexels-photo-14120649.jpeg', quote:'No typing, no forms. I just talked. Best thing the government has built for people like us.' }
];

export const SAMPLE_TRANSCRIPT = {
  raw: 'मुझे अपना छोटा सिलाई का काम शुरू करना है, मेरे पास थोड़ी जगह है पर पैसे और ट्रेनिंग चाहिए।',
  translated: 'I want to start my own small tailoring business. I have a little space but I need capital and training.',
  intent: 'Micro-enterprise • Tailoring / Textiles',
  needs: ['Skill Training', 'Capital Subsidy', 'Working-Capital Loan']
};

export const SAMPLE_PROFILE = {
  name: 'Sunita Devi',
  category: 'SC (Scheduled Caste)',
  gender: 'Female',
  age: 34,
  state: 'Uttar Pradesh',
  annualIncome: '₹1,10,000',
  occupation: 'Aspiring Tailoring Entrepreneur'
};

export const DOC_TYPES = [
  { id:'aadhaar', name:'Aadhaar Card', hint:'Identity & address', icon:'IdCard' },
  { id:'caste', name:'Caste Certificate', hint:'Category verification', icon:'FileBadge' },
  { id:'income', name:'Income Certificate', hint:'Income eligibility', icon:'ReceiptIndianRupee' },
  { id:'bank', name:'Bank Passbook', hint:'Disbursement account', icon:'BookText' }
];

export const AUDIT_RESULT = {
  extracted: [
    { field:'Name', aadhaar:'Sunita Devi', bank:'Suneeta Devi', status:'mismatch' },
    { field:'Date of Birth', aadhaar:'14-06-1991', bank:'14-06-1991', status:'ok' },
    { field:'Category', caste:'Scheduled Caste', status:'ok' },
    { field:'Annual Income', income:'₹1,10,000', status:'ok' }
  ],
  flags: [
    { type:'error', title:'Name spelling mismatch', detail:'Aadhaar shows "Sunita Devi" but Bank Passbook shows "Suneeta Devi". Banks reject on this. Suggested fix: request a name-correction at your branch or use the name-affidavit route.' },
    { type:'ok', title:'Category & income verified', detail:'Caste and income certificates are consistent and within eligibility thresholds.' }
  ]
};

export const MATCHED_SCHEMES = [
  { id:'pmdaksh', name:'PM-DAKSH', ministry:'MoSJE', type:'Skill Training', benefit:'Free skilling + ₹3,000 stipend', eligibility:100, tag:'Training', desc:'Skill development & upskilling for SC/OBC/EBC/Safai Karamchari with a monthly stipend during training.' },
  { id:'nsfdc', name:'NSFDC Micro-Credit', ministry:'MoSJE', type:'Capital Subsidy', benefit:'Up to ₹1,40,000 term loan', eligibility:96, tag:'Capital', desc:'Concessional finance for income-generating activities for Scheduled Caste individuals below the double poverty line.' },
  { id:'standup', name:'Stand-Up India', ministry:'DFS + MoSJE', type:'Bank Loan', benefit:'₹10L–₹1Cr composite loan', eligibility:88, tag:'Credit', desc:'Bank loans for SC/ST & women entrepreneurs to set up greenfield enterprises.' },
  { id:'mudra', name:'PM MUDRA (Shishu)', ministry:'DFS', type:'Bank Loan', benefit:'Up to ₹50,000 collateral-free', eligibility:82, tag:'Credit', desc:'Collateral-free micro loans for small manufacturing, trading and service units.' }
];

export const RECOMMENDED_STACK = {
  title: 'Your Recommended Scheme Stack',
  schemes: ['pmdaksh','nsfdc','standup'],
  totalValue: '₹1,43,000 + Skilling',
  note: 'Deterministically bundled — start with PM-DAKSH training (stipend), then use NSFDC micro-credit for equipment, and Stand-Up India for scale-up capital.'
};

export const CSC_CENTRES = [
  { name:'Jan Seva Kendra — Sigra', dist:'Varanasi, UP', distance:'1.2 km', open:true },
  { name:'CSC e-Governance — Bhelupur', dist:'Varanasi, UP', distance:'2.8 km', open:true },
  { name:'Common Service Centre — Cantt', dist:'Varanasi, UP', distance:'4.1 km', open:false }
];

export const TRACKING = [
  { step:'Package Generated', done:true, time:'Today, 10:24 AM' },
  { step:'CSC Operator Verified', done:true, time:'Today, 10:41 AM' },
  { step:'Submitted to MoSJE Portal', done:false, time:'Pending' },
  { step:'Sanction & Disbursement', done:false, time:'Pending' }
];


// ---- Full scheme catalogue (Explorer + Detail pages) ----
export const BENEFICIARY_GROUPS = ['SC', 'ST', 'OBC', 'EBC', 'PwD (Divyangjan)', 'Transgender', 'Women', 'Safai Karamchari'];

export const STATES = ['All India', 'Uttar Pradesh', 'Bihar', 'Maharashtra', 'Tamil Nadu', 'West Bengal', 'Karnataka', 'Gujarat', 'Rajasthan', 'Punjab', 'Madhya Pradesh'];

export const SCHEME_CATEGORIES = ['Skills & Employment', 'Business & Entrepreneurship', 'Education & Scholarships', 'Social Welfare & Empowerment', 'Health & Wellness', 'Housing & Shelter', 'Divyangjan (PwD)'];

export const SCHEMES = [
  {
    id: 'pmdaksh', name: 'PM-DAKSH', ministry: 'MoSJE', category: 'Skills & Employment',
    groups: ['SC', 'OBC', 'EBC', 'Safai Karamchari'], states: ['All India'], type: 'Skill Training',
    benefit: 'Free skilling + ₹3,000 monthly stipend',
    tagline: 'Skill development & upskilling with a stipend during training.',
    desc: 'The Pradhan Mantri Dakshता Aur Kushalta Sampann Hitgrahi (PM-DAKSH) Yojana provides free, certified skill-development training to artisans, marginalised youth and Safai Karamcharis, along with a monthly stipend during the programme and post-training placement support.',
    eligibility: ['Belongs to SC / OBC / EBC / DNT or is a Safai Karamchari', 'Aged 18–45 years', 'Annual family income within the notified ceiling', 'Not availing a similar skilling stipend elsewhere'],
    benefits: ['Free skill-development & upskilling courses', 'Monthly stipend of up to ₹3,000 during training', 'Government-recognised certification', 'Placement & self-employment assistance'],
    documents: ['Aadhaar Card', 'Caste / Category Certificate', 'Income Certificate', 'Bank Passbook', 'Passport-size photograph'],
    steps: ['Speak your goal on SUVIDHA and get auto-matched', 'Verify your documents through the AI audit', 'Choose a training centre & course', 'Show the CSC QR pass to confirm enrolment'],
  },
  {
    id: 'nsfdc', name: 'NSFDC Aajeevika Micro-Credit', ministry: 'MoSJE', category: 'Business & Entrepreneurship',
    groups: ['SC'], states: ['All India'], type: 'Concessional Finance',
    benefit: 'Livelihood support up to ₹1,40,000',
    tagline: 'Concessional finance for income-generating activities.',
    desc: 'The National Scheduled Castes Finance & Development Corporation (NSFDC) extends concessional finance and skill-cum-livelihood support to Scheduled Caste persons living below the notified income limit, for self-employment and income-generating activities.',
    eligibility: ['Belongs to a Scheduled Caste', 'Family income within the double-poverty-line ceiling', 'Aged 18 years or above', 'Has a viable income-generating activity'],
    benefits: ['Concessional term finance for equipment & working capital', 'Lower interest than commercial credit', 'Skill upgradation support', 'Marketing & self-employment guidance'],
    documents: ['Aadhaar Card', 'Caste Certificate', 'Income Certificate', 'Bank Passbook', 'Project / activity plan'],
    steps: ['Get matched via SUVIDHA voice discovery', 'Complete the pre-submission document audit', 'Prepare the auto-filled application package', 'Process it through a channelising agency / CSC'],
  },
  {
    id: 'standup', name: 'Stand-Up India', ministry: 'DFS + MoSJE', category: 'Business & Entrepreneurship',
    groups: ['SC', 'ST', 'Women'], states: ['All India'], type: 'Bank Facilitation',
    benefit: 'Support of ₹10L–₹1Cr for new ventures',
    tagline: 'Support for greenfield enterprises by SC/ST & women.',
    desc: 'Stand-Up India facilitates bank support of ₹10 lakh to ₹1 crore to at least one Scheduled Caste / Scheduled Tribe borrower and one woman borrower per bank branch for setting up a greenfield enterprise in manufacturing, services or trading.',
    eligibility: ['SC / ST or woman entrepreneur aged 18+', 'Setting up a first-time (greenfield) enterprise', 'For non-individual enterprises, 51% held by SC/ST or woman', 'Not in default with any bank / institution'],
    benefits: ['Composite facilitation of ₹10 lakh to ₹1 crore', 'Dedicated hand-holding support', 'Guidance on skilling, mentoring & margin money', 'Digital application tracking'],
    documents: ['Aadhaar Card', 'Caste Certificate (SC/ST)', 'Business plan / project report', 'Address & identity proof', 'Bank Passbook'],
    steps: ['Describe your enterprise idea by voice', 'Audit your KYC & category documents', 'Generate the facilitation package', 'Submit at a partner branch via CSC QR'],
  },
  {
    id: 'vidyalaxmi', name: 'PM Vidyalaxmi', ministry: 'MoE + MoSJE', category: 'Education & Scholarships',
    groups: ['SC', 'ST', 'OBC', 'EBC'], states: ['All India'], type: 'Education Support',
    benefit: 'Education support with 75% govt. guarantee',
    tagline: 'Empowering Yuva Shakti with quality higher education.',
    desc: 'PM Vidyalaxmi provides merit-based education support to meritorious students so that they can pursue quality higher education, backed by a substantial government credit guarantee that reduces the burden of security.',
    eligibility: ['Admitted to a recognised quality higher-education institution', 'Meets the merit criteria of the scheme', 'Family income within the notified ceiling', 'Indian national'],
    benefits: ['Education support with a 75% government guarantee', 'Reduced security burden for students', 'Support across recognised institutions', 'Simple, guided application'],
    documents: ['Aadhaar Card', 'Admission letter', 'Marksheets', 'Income Certificate', 'Bank Passbook'],
    steps: ['Tell SUVIDHA your course & institution', 'Verify your academic & income documents', 'Get the auto-filled support package', 'Complete it with a CSC operator'],
  },
  {
    id: 'adip', name: 'ADIP Scheme', ministry: 'DEPwD, MoSJE', category: 'Divyangjan (PwD)',
    groups: ['PwD (Divyangjan)'], states: ['All India'], type: 'Assistive Aids',
    benefit: 'Free aids & appliances for Divyangjan',
    tagline: 'Assistive aids & appliances to restore mobility & dignity.',
    desc: 'The Assistance to Disabled Persons (ADIP) scheme provides durable, scientifically-manufactured, modern aids and appliances to persons with disabilities — free of cost or at subsidised rates — through fitment camps across districts.',
    eligibility: ['Person with a disability certified at 40% or above', 'Monthly income within the notified ceiling', 'Has not received the same aid in the last stipulated period', 'Recommended by a medical officer'],
    benefits: ['Free / subsidised assistive aids & appliances', 'District-level fitment camps', 'Post-fitment support', 'Restored mobility and independence'],
    documents: ['Aadhaar Card', 'Disability Certificate (UDID)', 'Income Certificate', 'Passport-size photograph'],
    steps: ['Describe your need on SUVIDHA', 'Verify UDID & income documents', 'Locate the nearest fitment camp', 'Confirm via the CSC QR pass'],
  },
  {
    id: 'nbcfdc-shg', name: 'NBCFDC SHG Livelihood', ministry: 'MoSJE', category: 'Social Welfare & Empowerment',
    groups: ['OBC', 'Women'], states: ['All India'], type: 'Micro-Finance',
    benefit: 'Empowering Self-Help Groups',
    tagline: 'Micro-finance & skilling for Backward Class collectives.',
    desc: 'The National Backward Classes Finance & Development Corporation (NBCFDC) supports Self-Help Groups and women collectives from Backward Classes with micro-finance, skill upgradation and market linkage for sustainable livelihoods.',
    eligibility: ['Member of an OBC household', 'Part of a registered Self-Help Group', 'Family income within the notified ceiling', 'Engaged in a livelihood activity'],
    benefits: ['Micro-finance for SHGs & women collectives', 'Skill upgradation programmes', 'Market linkage & marketing support', 'Lower-cost credit than commercial sources'],
    documents: ['Aadhaar Card', 'OBC Certificate', 'SHG registration proof', 'Income Certificate', 'Bank Passbook'],
    steps: ['Speak on behalf of your SHG', 'Audit the group KYC documents', 'Generate the group application package', 'Process through a channelising agency / CSC'],
  },
  {
    id: 'nskfdc', name: 'NSKFDC Safai Karamchari', ministry: 'MoSJE', category: 'Social Welfare & Empowerment',
    groups: ['Safai Karamchari', 'SC'], states: ['All India'], type: 'Rehabilitation & Finance',
    benefit: 'Livelihood & dignity for sanitation workers',
    tagline: 'Finance, skilling & rehabilitation for Safai Karamcharis.',
    desc: 'The National Safai Karamcharis Finance & Development Corporation (NSKFDC) provides concessional finance, skill development and rehabilitation support to Safai Karamcharis, manual scavengers and their dependents for alternative, dignified livelihoods.',
    eligibility: ['Safai Karamchari, manual scavenger or dependent', 'Aged 18 years or above', 'Family income within the notified ceiling', 'Seeking an alternative livelihood'],
    benefits: ['Concessional finance for self-employment', 'Free skill-development training', 'Rehabilitation & one-time assistance', 'Health & sanitation-worker welfare support'],
    documents: ['Aadhaar Card', 'Occupation / identification proof', 'Income Certificate', 'Bank Passbook'],
    steps: ['Describe your situation by voice', 'Verify identity & income documents', 'Choose finance or skilling support', 'Complete via a CSC operator'],
  },
  {
    id: 'transgender-garima', name: 'Garima Greh & Support', ministry: 'MoSJE', category: 'Social Welfare & Empowerment',
    groups: ['Transgender'], states: ['All India'], type: 'Welfare & Shelter',
    benefit: 'Shelter, skilling & identity support',
    tagline: 'Dignified shelter, skilling and livelihood for the transgender community.',
    desc: 'This umbrella support provides transgender persons with shelter (Garima Greh), skill development, healthcare linkage, a National Portal identity certificate and livelihood assistance to enable dignified, self-reliant lives.',
    eligibility: ['Self-identifies as a transgender person', 'Indian national aged 18+ (shelter also for others as notified)', 'Seeking shelter, skilling or livelihood support'],
    benefits: ['Access to Garima Greh shelter homes', 'Transgender identity certificate (National Portal)', 'Skill development & livelihood support', 'Healthcare & counselling linkage'],
    documents: ['Aadhaar Card (if available)', 'Self-declaration of identity', 'Passport-size photograph', 'Bank Passbook (for benefits)'],
    steps: ['Speak your need on SUVIDHA in any language', 'Complete a light identity verification', 'Get matched to shelter / skilling / finance', 'Confirm through a CSC operator'],
  },
  {
    id: 'mudra', name: 'PM MUDRA (Shishu)', ministry: 'DFS', category: 'Business & Entrepreneurship',
    groups: ['SC', 'ST', 'OBC', 'Women', 'EBC'], states: ['All India'], type: 'Micro-Finance',
    benefit: 'Up to ₹50,000 collateral-free',
    tagline: 'Collateral-free micro finance for small units.',
    desc: 'Under the Shishu category of the Pradhan Mantri MUDRA Yojana, small manufacturing, trading and service units can access collateral-free micro finance of up to ₹50,000 to start or grow their activity.',
    eligibility: ['Running or starting a non-farm micro enterprise', 'Requirement of up to ₹50,000 (Shishu)', 'Aged 18 years or above', 'Not a defaulter with any bank'],
    benefits: ['Collateral-free finance up to ₹50,000', 'Simple documentation', 'For manufacturing, trading & services', 'MUDRA / RuPay card facility'],
    documents: ['Aadhaar Card', 'Business activity proof', 'Address & identity proof', 'Bank Passbook'],
    steps: ['Describe your micro-business by voice', 'Verify KYC documents', 'Generate the application package', 'Submit at a bank branch via CSC QR'],
  },
  {
    id: 'pmay', name: 'PM Awas Yojana (Support)', ministry: 'MoHUA + MoSJE', category: 'Housing & Shelter',
    groups: ['SC', 'ST', 'OBC', 'EBC', 'Women'], states: ['All India'], type: 'Housing Support',
    benefit: 'Support for a pucca home',
    tagline: 'Housing support for eligible marginalised families.',
    desc: 'Eligible marginalised families can receive housing support to build or upgrade to a pucca home, with priority for SC/ST, women-headed and other vulnerable households.',
    eligibility: ['Belongs to an eligible marginalised / EWS-LIG household', 'Does not own a pucca house', 'Family income within the notified ceiling', 'Not availed housing support earlier'],
    benefits: ['Financial support for a pucca home', 'Priority for women & marginalised households', 'Linked sanitation & utility benefits', 'Guided, paperless application'],
    documents: ['Aadhaar Card', 'Income Certificate', 'Caste Certificate (if applicable)', 'Bank Passbook', 'Land / plot proof'],
    steps: ['Tell SUVIDHA your housing need', 'Verify income & land documents', 'Prepare the auto-filled package', 'Complete via the CSC bridge'],
  },
];
