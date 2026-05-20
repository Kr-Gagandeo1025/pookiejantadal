export const taglines = [
  { strong: "3 saal ki mehnat.", text: " Ek raat mein barbad kar di — paper leak ne. Hum cockroach nahi hain. Hum builders hain." },
  { strong: "Engineer hoon. 2 saal se unemployed hoon.", text: " Vacancy nikli thi. Abhi bhi nahi bhari. Aur kitna wait karein?" },
  { strong: "NEET diya. System ne cheata kiya.", text: " Merit meri thi. Result unka tha. Nav Bharat Nirman — hum jawab maangenge." },
  { strong: "Kisaan ka beta hoon.", text: " IIT nikal ke bhi iss desh mein future nazar nahi aata. Ye naya Bharat banana padega. Hume khud." },
  { strong: "Gig worker hoon.", text: " 70 ghante kaam karta hoon. Ek accident aaya toh sab khatam. Koi nahi poochh-ta. Ab hum poochhein ge." },
];

export const issues = [
  { n: "01", t: "PAPER LEAK EPIDEMIC", d: "NEET 2026 cancelled. SSC, BPSC, UPPSC — every exam is a crime scene. Non-bailable offence, 10-year minimum sentence, independent authority.", tag: "Exam Integrity", votes: 2847 },
  { n: "02", t: "YOUTH UNEMPLOYMENT", d: "40% of graduates aged 15-25 unemployed. Degree premium has collapsed. Education no longer guarantees economic mobility.", tag: "Employment", votes: 2341 },
  { n: "03", t: "GIG WORKER EXPLOITATION", d: "80% work 10+ hours daily. 99% report health issues. Zero minimum wage. Zero insurance. Zero appeal rights against deactivation.", tag: "Labour Rights", votes: 1923 },
  { n: "04", t: "INSTITUTIONAL CORRUPTION", d: "Ministers arrested. Judges raided. IPS officers helping criminals. All three pillars of democracy compromised simultaneously.", tag: "Governance", votes: 3102 },
  { n: "05", t: "AGNIPATH BETRAYAL", d: "4 years of service. No pension. No guaranteed job. The state asked for sacrifice and gave insecurity in return.", tag: "Defence Youth", votes: 1654 },
  { n: "06", t: "STUDENT MENTAL HEALTH", d: "Depression, anxiety, self-harm at record levels. Exam pressure, unemployment fear, and zero institutional support systems.", tag: "Health", votes: 1432 },
  { n: "07", t: "DIGITAL DIVIDE", d: "Rural students cannot access mock tests or quality coaching online. Urban students dominate merit lists. Geography punishes potential.", tag: "Digital Access", votes: 1187 },
  { n: "08", t: "RURAL LABOUR CRISIS", d: "Proposed bill replacing MGNREGA threatens crores of rural youth without a guaranteed equivalent safety net.", tag: "Rural Labour", votes: 987 },
  { n: "09", t: "EDUCATION MAFIA", d: "Coaching institutes charge ₹1-5 lakh. Paper leaks normalise corruption. Parents invest life savings into a rigged system.", tag: "Education", votes: 1765 },
  { n: "10", t: "TRUST COLLAPSE", d: "When merit is defeated by corruption, faith in institutions collapses. India's crisis is moral, not just administrative.", tag: "Governance", votes: 2231 },
];

export const states = [
  { n: "Uttar Pradesh", priority: true, seats: "403 seats → 100", issues: ["UPPSC & police exam paper leaks", "Sugarcane farmer payment delays", "Teacher recruitment scams"] },
  { n: "Bihar", priority: true, seats: "243 seats → 60", issues: ["BPSC exam irregularities", "Brain drain — zero industry", "Flood relief corruption"] },
  { n: "West Bengal", priority: true, seats: "294 seats → 73", issues: ["SSC teacher recruitment scam", "Political violence against youth", "Post-election intimidation"] },
  { n: "Delhi", priority: true, seats: "70 seats → 17", issues: ["Gig worker rights crisis", "Air quality & student health", "DDA housing corruption"] },
  { n: "Maharashtra", priority: true, seats: "288 seats → 72", issues: ["Vidarbha farmer suicide crisis", "BMC infrastructure corruption", "IT sector layoffs in Pune"] },
  { n: "Karnataka", priority: true, seats: "224 seats → 56", issues: ["Employment polarisation debate", "North Karnataka deficit", "Startup ecosystem inequality"] },
  { n: "Rajasthan", priority: true, seats: "200 seats → 50", issues: ["REET teacher recruitment scam", "Coaching city exploitation", "Gig worker law vs reality"] },
  { n: "Jharkhand", priority: true, seats: "81 seats → 20", issues: ["Tribal youth mining displacement", "JPSC delays & corruption", "Youth out-migration crisis"] },
  { n: "Punjab", priority: true, seats: "117 seats → 29", issues: ["Drug crisis among rural youth", "Farmer debt crisis", "Illegal migration — donkey flights"] },
  { n: "Telangana", priority: true, seats: "119 seats → 30", issues: ["IT sector layoffs in Hyderabad", "Farmer distress outside Hyderabad", "Caste in recruitment"] },
  { n: "Madhya Pradesh", priority: false, seats: "230 seats", issues: ["Vyapam legacy corruption", "Tribal rights", "Smart city irregularities"] },
  { n: "Gujarat", priority: false, seats: "182 seats", issues: ["GIDC land acquisition", "Youth employment in MSMEs", "Coastal fishing rights"] },
  { n: "Tamil Nadu", priority: false, seats: "234 seats", issues: ["NEET impact on state students", "Cauvery water politics", "IT park inequality"] },
  { n: "Andhra Pradesh", priority: false, seats: "175 seats", issues: ["State bifurcation dues pending", "Polavaram project delays", "Youth migration to Hyderabad"] },
  { n: "Kerala", priority: false, seats: "140 seats", issues: ["Youth unemployment despite literacy", "Gulf migration dependency", "Land reform stagnation"] },
  { n: "Haryana", priority: false, seats: "90 seats", issues: ["Government job demand violence", "Khap panchayat impunity", "Women safety in rural areas"] },
];

export const wings = [
  { tag: "Wing 1 — Tech Force", n: "Engineers Wing", s: "IIT · NIT · State engineering colleges", w: "Engineers, CS graduates, tech workers", is: ["Brain drain — IITians leaving India", "IT sector mass layoffs 2024-25", "Startup ecosystem access inequality", "Agniveer impact on technical corps"], a: '"India Engineering Employment Index" — state-wise, published annually.', btn: "Join Tech Force" },
  { tag: "Wing 2 — Health Force", n: "Doctors Wing", s: "NEET aspirants · MBBS · PG doctors", w: "Medical students and practicing doctors", is: ["NEET 2026 paper leak — 2M aspirants", "Shortage of government hospitals", "Rural posting incentive absent", "PG seat scarcity vs specialist need"], a: '"Medical India Report" — seats vs population per district.', btn: "Join Health Force" },
  { tag: "Wing 3 — Legal Force", n: "Lawyers Wing", s: "Young advocates · Law students", w: "Law students and junior advocates", is: ["Judicial delays — cases pending 10+ years", "Internship exploitation in law firms", "Lower judiciary vacancies — lakhs unfilled", "Legal aid gap for rural communities"], a: "Free RTI filing and legal aid for all NBN members — ongoing.", btn: "Join Legal Force" },
  { tag: "Wing 4 — Kisan Yuva", n: "Farmers Youth Wing", s: "Children of farmers · Agri students", w: "Farm families and agri youth", is: ["MSP guarantee — legal right demanded", "Sugarcane payment delays 12-18 months", "Farm loan waivers bypass small farmers", "Forced youth migration from agriculture"], a: "State-wise farmer distress reports + block-level Kisan Sunwais quarterly.", btn: "Join Kisan Yuva" },
  { tag: "Wing 5 — UPSC/PSC Cell", n: "Civil Services Wing", s: "UPSC · State PSC · SSC · Railway", w: "All competitive exam aspirants", is: ["Paper leaks destroying years of prep", "Vacancy to filling — years of gap", "Coaching fees — ₹2 to 5 lakh yearly", "Pattern changes without advance notice"], a: '"Exam Calendar & Risk Tracker" before every major national exam.', btn: "Join UPSC Cell" },
  { tag: "Wing 6 — Student Force", n: "NEET / JEE Wing", s: "Class 11-12 · Coaching · Repeat aspirants", w: "School students and exam repeaters", is: ["NEET/JEE paper leaks year after year", "Coaching cost — ₹1 to 4 lakh yearly", "Limited seats vs millions competing", "Mental health crisis — exam suicides"], a: "Free study material + mental health helpline partnership — live now.", btn: "Join Student Force" },
];

export const feedItems = [
  { cat: "State · Uttar Pradesh", t: "UPPSC PRELIMS PAPER LEAKED AGAIN — THIRD TIME IN 5 YEARS", d: "I have documentary evidence that the question paper was circulating on Telegram 18 hours before the exam. Filed an RTI today. Awaiting response.", state: "Uttar Pradesh", votes: 342, type: "state" },
  { cat: "Profession · Engineer", t: "IIT BOMBAY GRADUATE — UNEMPLOYED FOR 14 MONTHS", d: "Graduated with 8.4 CGPA. 200+ applications. 3 interview calls. The disconnect between education quality and job market is not my failure — it is a policy failure.", state: "Maharashtra", votes: 891, type: "profession" },
  { cat: "College · IIT Delhi", t: "PLACEMENT OFFICE HIDING ACTUAL EMPLOYMENT DATA", d: "Our placement office refuses to publish salary data by company. Filed RTI with MHRD. They have 30 days to respond. Will publish whatever comes.", state: "Delhi", votes: 567, type: "college" },
  { cat: "State · Bihar", t: "BPSC RESULT DELAYED 3 YEARS — 200,000 CANDIDATES WAITING", d: "I appeared for BPSC 68th combined exam in 2022. It is now 2026. Still no final result. Meanwhile the qualifying age is passing. Who is responsible?", state: "Bihar", votes: 1203, type: "state" },
  { cat: "Profession · Doctor", t: "GOVERNMENT HOSPITAL IN NALGONDA — 1 DOCTOR FOR 40,000 PATIENTS", d: "Posted after MBBS as part of mandatory rural service. One doctor. No equipment. No medicines. No support. The rural health posting system is a punishment, not a service.", state: "Telangana", votes: 445, type: "profession" },
  { cat: "College · Patna University", t: "HOSTEL FEE TRIPLED WITHOUT GOVERNING BODY APPROVAL", d: "Our university increased hostel fees by 300% citing infrastructure development. No construction has happened. Filed RTI on fee utilisation. Chapter meeting called.", state: "Bihar", votes: 289, type: "college" },
];

export const chapters = [
  { n: "IIT Delhi Chapter", c: "New Delhi, Delhi", m: "47 members" },
  { n: "Patna University Chapter", c: "Patna, Bihar", m: "63 members" },
  { n: "Lucknow University Chapter", c: "Lucknow, UP", m: "38 members" },
  { n: "Osmania University Chapter", c: "Hyderabad, Telangana", m: "29 members" },
];

export const statesForSelect = [
  "Uttar Pradesh",
  "Bihar",
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "West Bengal",
  "Rajasthan",
  "Jharkhand",
  "Punjab",
  "Telangana",
  "Other",
];

export const professions = [
  "Student (School)",
  "Student (College/University)",
  "UPSC/PSC Aspirant",
  "Engineer",
  "Doctor / Medical Student",
  "Lawyer / Law Student",
  "Farmer / Agri Student",
  "Gig Worker",
  "Entrepreneur / Startup",
  "Freelancer",
  "Content Creator",
  "Teacher / Educator",
  "Employed (Private Sector)",
  "Employed (Government)",
  "Unemployed",
  "Other",
];

export const memberIssues = [
  "Paper leaks and exam fraud",
  "Youth unemployment",
  "Corruption in govt contracts",
  "Gig worker rights",
  "Agnipath scheme reform",
  "Mental health of students",
  "Rural labour rights",
  "Digital divide",
  "Police reform",
  "Education mafia",
];
