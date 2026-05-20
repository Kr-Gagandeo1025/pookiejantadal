"use client";

import { useEffect, useRef, useState } from "react";
import {
  chapters,
  feedItems as initialFeedItems,
  issues as initialIssues,
  memberIssues,
  professions,
  states,
  statesForSelect,
  taglines,
  wings,
} from "@/data/siteData";

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function SectionHeading({ eyebrow, title, emphasis, subtitle, dark = false }) {
  return (
    <>
      <div className="sec-eyebrow">{eyebrow}</div>
      <div className={`sec-h2 ${dark ? "white" : ""}`}>
        {title}
        <br />
        <em>{emphasis}</em>
      </div>
      <div className={`sec-sub ${dark ? "white" : ""}`}>{subtitle}</div>
    </>
  );
}

function Nav() {
  const links = [
    ["election", "2029"],
    ["issues", "Issues"],
    ["states", "States"],
    ["wings", "Wings"],
    ["chapters", "Colleges"],
    ["feed", "Feed"],
  ];

  return (
    <nav id="topnav">
      <div className="nav-inner">
        <button className="nav-brand bg-transparent border-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span>Nav Bharat</span> Nirman
        </button>
        <div className="nav-links">
          {links.map(([id, label]) => (
            <a key={id} onClick={() => scrollToSection(id)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" onClick={() => scrollToSection("membership")}>
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((current) => (current + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" id="home">
      <svg className="geo-lines" viewBox="0 0 400 800" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="400" y2="800" stroke="white" strokeWidth="1" />
        <line x1="80" y1="0" x2="400" y2="640" stroke="white" strokeWidth="0.5" />
        <line x1="160" y1="0" x2="400" y2="480" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="200" x2="400" y2="800" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="400" x2="400" y2="800" stroke="white" strokeWidth="0.5" />
        <circle cx="350" cy="150" r="120" fill="none" stroke="white" strokeWidth="0.5" />
        <circle cx="350" cy="150" r="80" fill="none" stroke="white" strokeWidth="0.3" />
        <circle cx="350" cy="150" r="40" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>
      <div className="hero-inner">
        <div className="hero-eyebrow">Nav Bharat Nirman · नव भारत निर्माण · Est. 2026</div>
        <div className="hero-h1">
          <em>Nav Bharat</em>
          <br />
          Nirman
        </div>
        <div className="hero-hindi">नव भारत निर्माण — Building a New India</div>
        <div className="tagline-wrap">
          {taglines.map((tagline, index) => (
            <div className={`tagline ${index === taglineIndex ? "active" : ""}`} key={tagline.strong}>
              <strong>{tagline.strong}</strong>
              {tagline.text}
            </div>
          ))}
        </div>
        <div className="hero-main-tag">
          Rant Nahi. <span>Result Chahiye.</span>
        </div>
        <div className="hero-sub">
          Nav Bharat Nirman is not a protest. Not a meme. It is a structured political organisation built by India's
          frustrated, aspirational youth — to file RTIs, contest elections, and deliver measurable change.
        </div>
        <div className="hero-btns">
          <button className="btn btn-red" onClick={() => scrollToSection("membership")}>Join the Movement</button>
          <button className="btn btn-outline" onClick={() => scrollToSection("election")}>2029 Election Plan</button>
          <button className="btn btn-outline" onClick={() => scrollToSection("issues")}>10 National Demands</button>
        </div>
        <div className="hero-stats">
          <div className="hstat"><div className="hstat-num">10<em>+</em></div><div className="hstat-label">State Units</div></div>
          <div className="hstat"><div className="hstat-num">6</div><div className="hstat-label">Professional Wings</div></div>
          <div className="hstat"><div className="hstat-num">30</div><div className="hstat-label">RTI-Backed Issues</div></div>
          <div className="hstat"><div className="hstat-num"><em>₹</em>0</div><div className="hstat-label">Corporate Funding</div></div>
        </div>
      </div>
    </div>
  );
}

function ElectionSection() {
  const [vote, setVote] = useState({ yes: 0, no: 0, voted: false });
  const total = vote.yes + vote.no;
  const yesPercent = total ? Math.round((vote.yes / total) * 100) : 0;

  const castVote = (dir) => {
    if (vote.voted) return;
    setVote((current) => ({ ...current, [dir]: current[dir] + 1, voted: true }));
  };

  return (
    <div className="election-sec" id="election">
      <div className="election-bg" />
      <div className="election-inner">
        <div className="sec-eyebrow">Strategic Decision · The Question India's Youth Must Answer</div>
        <div className="election-q">SHOULD NAV BHARAT NIRMAN<br /><em>Contest Elections in 2029?</em></div>
        <div className="election-context">This is not a rhetorical question. It is the most consequential decision this movement will make. We are putting it to every member — your vote shapes the strategy. Below are the honest arguments on both sides.</div>
        <div className="election-grid">
          <ArgumentCard type="for" title="✓  Arguments FOR contesting in 2029" items={[
            "Movements without electoral participation eventually fade — Anna Hazare, India Against Corruption, all faded without seats",
            "2029 gives 3 years to build booth-level presence — enough for 25-30% seat contesting",
            "Even losing deposits sends a signal — crores of votes for NBN changes the political conversation permanently",
            "By-elections from 2027 can be the training ground — contest every one, win some, build experience",
            "Youth issues will peak before 2029 — paper leaks, unemployment, gig rights are the defining issues of this cycle",
            "Independent MPs in Parliament can table questions, demand answers — even 5 seats changes the game",
          ]} />
          <ArgumentCard type="against" title="✗  Arguments AGAINST contesting in 2029" items={[
            "2,800+ registered parties in India — most contest once and disappear after losing deposits",
            "No caste coalition strategy = no seat wins in UP, Bihar, Maharashtra without 10+ years of ground work",
            "Election deposits alone for 163 seats = ₹3-5 crore minimum — no funding model ready",
            "Premature elections destroy credibility — better to build 10 years and win decisively than contest and lose badly",
            "Co-option risk peaks at election time — parties will offer your candidates tickets, splitting the movement",
            "2034 with a full decade of RTIs, Jan Sunwais, and visible results is a stronger foundation",
          ]} />
        </div>
        <div className="evote-row">
          <button className="evote-btn evote-yes" onClick={() => castVote("yes")}>Yes — Contest in 2029</button>
          <button className="evote-btn evote-no" onClick={() => castVote("no")}>No — Build till 2034</button>
          <span className="evote-count">
            {vote.voted ? `${yesPercent}% say Contest in 2029 · ${100 - yesPercent}% say Wait till 2034 (${total} vote${total > 1 ? "s" : ""} cast)` : "Cast your vote above"}
          </span>
        </div>
        <div className="verdict-box">
          <div className="verdict-label">Strategic Analysis — Nav Bharat Nirman Core Team</div>
          <div className="verdict-text">The recommendation is a <strong style={{ color: "#fff" }}>phased approach</strong>: Contest <em>all state by-elections from 2027</em> as a training ground. Contest a <em>targeted 25% of assembly seats</em> in the 4 states where we have strongest ground presence by 2028. Then take the 2029 Lok Sabha decision based on actual vote share achieved. A movement that wins 3% of votes in 2 states and 0 seats is not a failure — it is a launch pad. But a movement that contests 200 seats, loses all deposits, and has no money left is finished. <strong style={{ color: "#fff" }}>Discipline over ambition. Ground presence over optics.</strong></div>
        </div>
      </div>
    </div>
  );
}

function ArgumentCard({ type, title, items }) {
  return (
    <div className={`ecard ${type}`}>
      <div className="ecard-title">{title}</div>
      <ul className="elist">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function PhilosophySection() {
  const pillars = [
    ["01", "Remove Corruption", "File RTIs. Publish results. Name the corrupt. Every contract above ₹1 crore disclosed publicly within 30 days."],
    ["02", "Raise Real Issues", "Ground-up issue collection. Every Jan Sunwai. Every state chapter. Evidence-backed, not emotional. Data, not drama."],
    ["03", "Reform Systems", "Not personalities — systems. Independent examination authority. Time-bound vacancy filling. Gig worker rights law."],
    ["04", "Measurable Results", "Every Sunday: RTIs filed, MPs contacted, Jan Sunwais held. Rant nahi — result chahiye. Published weekly. No exceptions."],
  ];
  return (
    <section className="philosophy-sec" id="philosophy">
      <div className="sec-inner">
        <SectionHeading eyebrow="Our Foundation" title="FOUR PILLARS." emphasis="Non-Negotiable." subtitle="Not ideology. Not religion. Not caste. Four measurable commitments that every NBN member, candidate, and office bearer is held to every single week." />
        <div className="phil-grid">
          {pillars.map(([num, title, desc]) => (
            <div className="phil-card" key={num}>
              <div className="phil-icon"><svg viewBox="0 0 24 24" fill="none" stroke="#C0182A" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M4.93 4.93 19.07 19.07" /></svg></div>
              <div className="phil-title">{title}</div>
              <div className="phil-desc">{desc}</div>
              <div className="phil-num">{num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IssuesSection() {
  const [issues, setIssues] = useState(initialIssues);
  const [votes, setVotes] = useState({});

  const voteIssue = (dir, index) => {
    const existing = votes[index];
    setVotes((current) => {
      const next = { ...current };
      if (dir === "up") next[index] = existing === "up" ? undefined : "up";
      if (dir === "dn") next[index] = existing === "dn" ? undefined : "dn";
      return next;
    });
    setIssues((current) => current.map((issue, i) => {
      if (i !== index) return issue;
      let delta = 0;
      if (dir === "up") delta = existing === "up" ? -1 : 1;
      if (dir === "dn" && existing !== "dn" && issue.votes > 0) delta = -1;
      return { ...issue, votes: issue.votes + delta };
    }));
  };

  return (
    <section className="issues-sec" id="issues">
      <div className="sec-inner">
        <SectionHeading dark eyebrow="National Manifesto" title="TEN DEMANDS." emphasis="Non-Negotiable." subtitle="Specific. Legally actionable. Electorally enforceable. We file RTIs on every one. We publish every result. We hold every candidate accountable." />
        <div className="issues-grid">
          {issues.map((issue, index) => (
            <div className="issue-card" key={issue.n}>
              <div className="icard-num">{issue.n}</div>
              <span className="icard-tag">{issue.tag}</span>
              <div className="icard-title">{issue.t}</div>
              <div className="icard-desc">{issue.d}</div>
              <div className="vote-row">
                <button className={`vote-btn ${votes[index] === "up" ? "voted-up" : ""}`} onClick={() => voteIssue("up", index)}>▲ <span>{issue.votes.toLocaleString()}</span></button>
                <button className={`vote-btn ${votes[index] === "dn" ? "voted-down" : ""}`} onClick={() => voteIssue("dn", index)}>▼</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatesSection() {
  const [activeState, setActiveState] = useState(null);
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const issueTitleRef = useRef(null);
  const issueDescRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = activeState ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeState]);

  const submitIssue = () => {
    if (!issueTitleRef.current?.value.trim()) {
      alert("Please enter an issue title.");
      return;
    }
    setIssueSubmitted(true);
    issueTitleRef.current.value = "";
    if (issueDescRef.current) issueDescRef.current.value = "";
  };

  return (
    <>
      <section className="states-sec" id="states">
        <div className="sec-inner">
          <SectionHeading eyebrow="State Units" title="JOIN YOUR" emphasis="State Chapter" subtitle="Each state unit is autonomous within the national constitution. Minimum 50 active members for recognition. Click any state to raise an issue or join your chapter." />
          <div className="states-grid">
            {states.map((state) => (
              <div className={`state-card ${state.priority ? "priority" : ""}`} key={state.n}>
                <div className="sc-hdr"><div className="sc-name">{state.n}</div><div className={`sc-badge ${state.priority ? "" : "normal"}`}>{state.seats}</div></div>
                <div className="sc-body">
                  {state.issues.slice(0, 2).map((issue) => <div className="sc-issue" key={issue}>{issue}</div>)}
                  <button className="sc-btn" onClick={() => { setActiveState(state); setIssueSubmitted(false); }}>Open Chapter →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={`modal-overlay ${activeState ? "open" : ""}`} onClick={(event) => event.target === event.currentTarget && setActiveState(null)}>
        {activeState && (
          <div className="modal-box">
            <div className="modal-hdr">
              <div className="modal-title">{activeState.n}</div>
              <button className="modal-close" onClick={() => setActiveState(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-sec-title">State Overview</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
                  <strong>Assembly seats:</strong> {activeState.seats}
                  <br /><br />
                  <strong>Key issues:</strong>
                  <ul style={{ marginTop: 8, paddingLeft: 16 }}>
                    {activeState.issues.map((issue) => <li style={{ marginBottom: 4, color: "var(--muted)", fontSize: 13 }} key={issue}>{issue}</li>)}
                  </ul>
                </div>
              </div>
              <div className="modal-section">
                <div className="modal-sec-title">Raise Your Issue</div>
                <div className="issue-submit">
                  <div className="form-field"><label>Issue Title</label><input ref={issueTitleRef} placeholder="Brief title of the issue" type="text" /></div>
                  <div className="form-field"><label>Describe the Issue</label><textarea ref={issueDescRef} placeholder="What is the problem? Who is affected? What evidence do you have?" /></div>
                  <div className="form-field"><label>Category</label><select defaultValue=""><option value="">Select category</option><option>Education / Exam</option><option>Employment</option><option>Corruption</option><option>Infrastructure</option><option>Health</option><option>Agriculture</option><option>Women Safety</option><option>Youth Rights</option><option>Other</option></select></div>
                  <button className="btn btn-red w-full justify-center" onClick={submitIssue}>Submit Issue for RTI Review</button>
                  <div className={`success-msg ${issueSubmitted ? "show" : ""}`}>
                    <div className="success-ico">✅</div>
                    <div className="success-title">Issue Submitted!</div>
                    <div className="success-text">Your issue has been received. If it gets 50+ upvotes from NBN members, it becomes an RTI filing. Track it in the community feed.</div>
                  </div>
                </div>
              </div>
              <div className="modal-section">
                <div className="modal-sec-title">Top Issues in This State</div>
                <StateIssue title={`Paper leak in ${activeState.n} state exam — 2025`} count={247} />
                <StateIssue title="Government vacancy unfilled for 3+ years" count={191} />
              </div>
              <div className="modal-section">
                <div className="modal-sec-title">State Executive Council</div>
                <div className="coming-soon">STATE EXECUTIVE COUNCIL — COMING SOON · Applications open after 50 active members registered</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function StateIssue({ title, count }) {
  const [votes, setVotes] = useState(count);
  return (
    <div className="issue-item">
      <div className="ii-title">{title}</div>
      <div className="ii-desc">Question paper circulated 24 hours before examination. 45,000 aspirants affected. RTI filed.</div>
      <div className="ii-vote">
        <button className="ii-vbtn" onClick={() => setVotes((current) => current + 1)}>▲ {votes}</button>
        <button className="ii-vbtn">▼</button>
      </div>
    </div>
  );
}

function WingsSection() {
  return (
    <section className="wings-sec" id="wings">
      <div className="sec-inner">
        <SectionHeading dark eyebrow="Professional Wings" title="YOUR PROFESSION." emphasis="Your Wing. Your Fight." subtitle="Six semi-autonomous wings. Each has its own national president, state chapters, issue mandate, and annual flagship report. Wings feed issues to the National Executive Council." />
        <div className="wings-grid">
          {wings.map((wing) => (
            <div className="wing-card" key={wing.n}>
              <div className="wing-hdr"><div className="wing-tag">{wing.tag}</div><div className="wing-name">{wing.n}</div><div className="wing-sub">{wing.s}</div></div>
              <div className="wing-body">
                <div className="wing-for">For: {wing.w}</div>
                <div className="wing-issues">{wing.is.map((issue) => <div className="wi" key={issue}>{issue}</div>)}</div>
                <div className="wing-action"><strong>Flagship:</strong> {wing.a}</div>
                <div className="wing-btns">
                  <button className="wing-join" onClick={() => alert(`Thank you for interest in ${wing.n}!\n\nYou will be redirected to the wing application form. A coordinator will reach out within 3-5 working days.`)}>{wing.btn} →</button>
                  <button className="wing-issue-btn" onClick={() => alert(`Issue submission for ${wing.n} is now open.\n\nIn the full platform, this opens an issue submission form specific to ${wing.n}.`)}>Raise Issue</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChaptersSection() {
  const [submitted, setSubmitted] = useState(false);
  const [joined, setJoined] = useState({});
  const nameRef = useRef(null);
  const presidentRef = useRef(null);
  const countRef = useRef(null);

  const submitChapter = () => {
    if (!nameRef.current?.value.trim() || !presidentRef.current?.value.trim()) {
      alert("Please fill college name and president name.");
      return;
    }
    if (countRef.current?.value && Number.parseInt(countRef.current.value, 10) < 25) {
      alert("Minimum 25 founding members required.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="chapters-sec" id="chapters">
      <div className="sec-inner">
        <SectionHeading eyebrow="College Chapters" title="NBN COLLEGE" emphasis="Chapters" subtitle="The youth nursery of the movement. Every recognised chapter feeds future leaders into district and state structure. Minimum 25 members to register." />
        <div className="chapters-layout">
          <div>
            <ChapterBox title="6 Office Bearers Per Chapter">
              {[
                ["Chapter President", "Leads chapter, interfaces with district"],
                ["Academic Secretary", "Placements, fees, hostel issues"],
                ["RTI Secretary", "Files RTIs on college administration"],
                ["Media Secretary", "Campus social media, notice boards"],
                ["Cultural Secretary", "Debates, Jan Sunwais, events"],
                ["Women's Representative", "Campus safety, gender equity"],
              ].map(([role, duty]) => <div className="role-row" key={role}><span className="rname">{role}</span><span className="rfn">{duty}</span></div>)}
            </ChapterBox>
            <ChapterBox title="Monthly Calendar" extraClass="mt-4">
              {[
                ["Week 1", "Issue of the month — campus debate or panel"],
                ["Week 2", "RTI or petition drive on campus/district issue"],
                ["Week 3", "Jan Sunwai or community outreach event"],
                ["Week 4", "Report to district committee — results, attendance"],
              ].map(([week, action]) => <div className="cal-row" key={week}><span className="cwk">{week}</span><span className="cact">{action}</span></div>)}
            </ChapterBox>
          </div>
          <div>
            <ChapterBox title="Register Your Chapter">
              <div className="form-field"><label>College Name</label><input ref={nameRef} placeholder="e.g. IIT Delhi, Patna University…" type="text" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-field"><label>City</label><input placeholder="City" type="text" /></div>
                <div className="form-field"><label>State</label><SelectOptions placeholder="State" options={statesForSelect} /></div>
              </div>
              <div className="form-field"><label>Chapter President Name</label><input ref={presidentRef} placeholder="Full name" type="text" /></div>
              <div className="form-field"><label>Contact Email</label><input placeholder="president@college.ac.in" type="email" /></div>
              <div className="form-field"><label>Founding Members (min 25)</label><input ref={countRef} placeholder="Number of founding members" type="number" min="25" /></div>
              <button className="btn btn-red w-full justify-center" onClick={submitChapter}>Submit Chapter Application</button>
              <div className={`success-msg ${submitted ? "show" : ""}`}>
                <div className="success-ico">🎓</div>
                <div className="success-title">Chapter Application Received!</div>
                <div className="success-text">Your chapter application has been submitted. A district coordinator will reach out within 5 working days.</div>
              </div>
            </ChapterBox>
            <ChapterBox title="Active Chapters" extraClass="mt-4">
              <div className="chapter-list">
                {chapters.map((chapter) => (
                  <div className="chapter-item" key={chapter.n}>
                    <div><div className="ci-name">{chapter.n}</div><div className="ci-meta">{chapter.c} · {chapter.m}</div></div>
                    <button className="ci-join" onClick={() => setJoined((current) => ({ ...current, [chapter.n]: true }))}>{joined[chapter.n] ? "Joined ✓" : "Join"}</button>
                  </div>
                ))}
              </div>
            </ChapterBox>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterBox({ title, children, extraClass = "" }) {
  return <div className={`ch-box ${extraClass}`}><div className="ch-box-title">{title}</div>{children}</div>;
}

function MembershipSection() {
  const canvasRef = useRef(null);
  const certWrapRef = useRef(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", state: "", profession: "" });
  const [certVisible, setCertVisible] = useState(false);

  const updateForm = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));

  const makeCertificate = () => {
    const fn = form.firstName.trim();
    const ln = form.lastName.trim();
    if (!fn || !ln) {
      alert("Please enter your name.");
      return;
    }
    if (!form.state || !form.profession) {
      alert("Please select your state and profession.");
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const full = `${fn} ${ln}`;
    const memberId = `NBN-${Math.random().toString(36).slice(2, 7).toUpperCase()}-2026`;
    const date = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
    drawCertificate(ctx, full, form.state, form.profession, memberId, date);
    setCertVisible(true);
    setTimeout(() => certWrapRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 0);
  };

  const downloadCertificate = () => {
    const link = document.createElement("a");
    link.download = `NBN_Certificate_${form.firstName}_${form.lastName}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  return (
    <section className="mem-sec" id="membership">
      <div className="sec-inner">
        <SectionHeading eyebrow="National Membership" title="JOIN NBN." emphasis="Get Your Certificate." subtitle="Not lazy. Not a cockroach. Aspirational, evidence-driven, and done waiting for someone else to build this country. Founder: Kaushal — By the Youth." />
        <div className="mem-grid">
          <div>
            <div className="mem-form">
              <div className="mf-row">
                <div className="mfield"><label>First Name</label><input value={form.firstName} onChange={updateForm("firstName")} placeholder="Rahul" type="text" /></div>
                <div className="mfield"><label>Last Name</label><input value={form.lastName} onChange={updateForm("lastName")} placeholder="Sharma" type="text" /></div>
              </div>
              <div className="mfield"><label>Email</label><input placeholder="rahul@email.com" type="email" /></div>
              <div className="mf-row">
                <div className="mfield"><label>State</label><SelectOptions value={form.state} onChange={updateForm("state")} placeholder="Select state" options={statesForSelect} /></div>
                <div className="mfield"><label>Profession</label><SelectOptions value={form.profession} onChange={updateForm("profession")} placeholder="Select" options={professions} /></div>
              </div>
              <div className="mfield"><label>Top Issue You Care About</label><SelectOptions placeholder="Select" options={memberIssues} /></div>
              <button className="btn btn-beige w-full justify-center text-[13px]" onClick={makeCertificate}>Generate My Membership Certificate</button>
            </div>
            <div ref={certWrapRef} className={`cert-wrap ${certVisible ? "show" : ""}`}>
              <canvas ref={canvasRef} id="cert-canvas" width="900" height="620" />
              <div className="cert-acts">
                <button className="btn btn-beige" onClick={downloadCertificate}>Download Certificate</button>
                <button className="btn btn-outline" onClick={() => setCertVisible(false)}>Close</button>
              </div>
            </div>
          </div>
          <div className="mem-perks">
            {[
              ["📜", "Official membership certificate", "Auto-generated with your name, unique member ID, and founder Kaushal's mark. Downloadable."],
              ["🗺️", "State unit access", "Join your state chapter, attend Jan Sunwais, lead local issue campaigns."],
              ["⚖️", "Free RTI support", "NBN Legal Force files RTIs on your behalf. Every result published publicly."],
              ["📊", "Weekly results report", "Every Sunday: what we filed, who responded, what changed. Rant nahi — result chahiye."],
              ["🎓", "Professional wing membership", "Engineers, doctors, lawyers, farmers, aspirants — your wing, your issue mandate."],
            ].map(([icon, title, text]) => <div className="mperk" key={title}><div className="mperk-dot">{icon}</div><div><div className="mperk-title">{title}</div><div className="mperk-text">{text}</div></div></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function drawCertificate(ctx, full, state, profession, memberId, date) {
  const W = 900;
  const H = 620;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#F5F0E8"; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#0D0D0D"; ctx.fillRect(0, 0, W, 180);
  ctx.fillStyle = "#C0182A"; ctx.fillRect(0, 0, 6, H); ctx.fillRect(W - 6, 0, 6, H); ctx.fillRect(0, 0, W, 4); ctx.fillRect(0, H - 4, W, 4);
  ctx.fillStyle = "#F5F0E8"; ctx.fillRect(6, 4, W - 12, 3);
  [[20, 20], [W - 60, 20], [20, H - 60], [W - 60, H - 60]].forEach(([x, y]) => {
    ctx.fillStyle = "#C0182A"; ctx.fillRect(x, y, 40, 2); ctx.fillRect(x, y, 2, 40);
  });
  ctx.fillStyle = "rgba(245,240,232,.4)"; ctx.font = "500 10px monospace"; ctx.textAlign = "center";
  ctx.fillText("NAV BHARAT NIRMAN  ·  नव भारत निर्माण  ·  OFFICIAL MEMBERSHIP CERTIFICATE", W / 2, 38);
  ctx.fillStyle = "#fff"; ctx.font = "bold 36px Georgia,serif"; ctx.fillText("NAV BHARAT NIRMAN", W / 2, 85);
  ctx.fillStyle = "#C0182A"; ctx.fillRect(W / 2 - 120, 94, 240, 2);
  ctx.fillStyle = "rgba(245,240,232,.45)"; ctx.font = '300 13px "IBM Plex Sans",sans-serif'; ctx.fillText("By the Youth · Founder: Kaushal", W / 2, 120);
  ctx.fillStyle = "rgba(245,240,232,.25)"; ctx.font = "italic 12px Georgia,serif"; ctx.fillText('"Rant nahi. Nirman chahiye."', W / 2, 145);
  ctx.fillStyle = "#6B6050"; ctx.font = "300 13px Georgia,serif"; ctx.fillText("This is to certify that", W / 2, 210);
  ctx.fillStyle = "#0D0D0D"; ctx.font = "bold 52px Georgia,serif"; ctx.fillText(full, W / 2, 275);
  const textWidth = ctx.measureText(full).width;
  ctx.fillStyle = "#C0182A"; ctx.fillRect(W / 2 - textWidth / 2, 285, textWidth, 2);
  ctx.fillStyle = "#6B6050"; ctx.font = '300 13px "IBM Plex Sans",sans-serif'; ctx.fillText("is a founding member of Nav Bharat Nirman, India", W / 2, 318);
  [["STATE", state], ["PROFESSION", profession.length > 18 ? `${profession.slice(0, 18)}…` : profession], ["MEMBER ID", memberId]].forEach((detail, index) => {
    const x = 80 + index * 250;
    ctx.fillStyle = "rgba(0,0,0,.04)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, 340, 220, 54, 4); else ctx.rect(x, 340, 220, 54);
    ctx.fill(); ctx.strokeStyle = "rgba(0,0,0,.08)"; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = "#C0182A"; ctx.font = "500 9px monospace"; ctx.textAlign = "left"; ctx.fillText(detail[0], x + 12, 358);
    ctx.fillStyle = "#1A1806"; ctx.font = '500 13px "IBM Plex Sans",sans-serif'; ctx.fillText(detail[1], x + 12, 378);
    ctx.textAlign = "center";
  });
  ctx.fillStyle = "rgba(0,0,0,.12)"; ctx.fillRect(60, 420, W - 120, 1);
  ctx.fillStyle = "#6B6050"; ctx.font = "500 9px monospace";
  ctx.textAlign = "left"; ctx.fillText("DATE OF ENROLMENT", 80, 445);
  ctx.textAlign = "center"; ctx.fillText("RANT NAHI · NIRMAN CHAHIYE", W / 2, 445);
  ctx.textAlign = "right"; ctx.fillText("nbnindia.in", W - 80, 445);
  ctx.fillStyle = "#1A1806"; ctx.font = '500 12px "IBM Plex Sans",sans-serif';
  ctx.textAlign = "left"; ctx.fillText(date, 80, 462);
  ctx.textAlign = "right"; ctx.fillText("Ab hum banayenge", W - 80, 462);
  ctx.beginPath(); ctx.arc(W / 2, H - 72, 44, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(192,24,42,.4)"; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = "rgba(192,24,42,.06)"; ctx.fill();
  ctx.fillStyle = "#C0182A"; ctx.font = "bold 11px monospace"; ctx.textAlign = "center"; ctx.fillText("NBN", W / 2, H - 78);
  ctx.font = "8px monospace"; ctx.fillStyle = "rgba(192,24,42,.7)";
  ctx.fillText("MEMBER · 2026", W / 2, H - 65);
  ctx.fillText("FOUNDER: KAUSHAL", W / 2, H - 54);
}

function SelectOptions({ placeholder, options, value, onChange }) {
  const selectProps = value === undefined ? { defaultValue: "" } : { value, onChange };

  return (
    <select {...selectProps}>
      <option value="">{placeholder}</option>
      {options.map((option) => <option key={option}>{option}</option>)}
    </select>
  );
}

function FeedSection() {
  const [items, setItems] = useState(initialFeedItems);
  const [filter, setFilter] = useState("all");
  const visibleItems = filter === "all" ? items : items.filter((item) => item.type === filter);

  const vote = (index, dir) => {
    setItems((current) => current.map((item, itemIndex) => {
      if (itemIndex !== index) return item;
      return { ...item, votes: dir === "up" ? item.votes + 1 : Math.max(0, item.votes - 1) };
    }));
  };

  return (
    <section className="feed-sec" id="feed">
      <div className="sec-inner">
        <SectionHeading eyebrow="Community Feed" title="ISSUES RAISED" emphasis="By the Youth" subtitle="Real issues raised by NBN members — categorised by state, profession, and college. Every issue is reviewed and tracked. Top issues become RTI filings." />
        <div className="feed-filters">
          {[["all", "All Issues"], ["state", "By State"], ["profession", "By Profession"], ["college", "By College"]].map(([type, label]) => <button className={`filter-btn ${filter === type ? "active" : ""}`} key={type} onClick={() => setFilter(type)}>{label}</button>)}
        </div>
        <div className="feed-grid">
          {visibleItems.map((item) => {
            const originalIndex = items.findIndex((candidate) => candidate.t === item.t);
            return (
              <div className="feed-card" key={item.t}>
                <div className="fc-cat">{item.cat}</div>
                <div className="fc-title">{item.t}</div>
                <div className="fc-desc">{item.d}</div>
                <div className="fc-meta">
                  <span className="fc-state">{item.state}</span>
                  <div className="fc-votes">
                    <span className="fcv" onClick={() => vote(originalIndex, "up")}>▲ <span>{item.votes}</span></span>
                    <span className="fcv" onClick={() => vote(originalIndex, "dn")}>▼</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-grid">
          <div><div className="fb"><span>Nav Bharat</span> Nirman</div><div className="fd">नव भारत निर्माण — Building a New India. A political organisation for India's aspirational youth. Founded by Kaushal. All accounts audited and public. 2026.</div></div>
          <div><div className="fc-title2">Join</div><a className="fl" onClick={() => scrollToSection("membership")}>National Membership</a><a className="fl" onClick={() => scrollToSection("states")}>State Units</a><a className="fl" onClick={() => scrollToSection("wings")}>Professional Wings</a><a className="fl" onClick={() => scrollToSection("chapters")}>College Chapters</a></div>
          <div><div className="fc-title2">Issues</div><a className="fl">Paper Leaks</a><a className="fl">Unemployment</a><a className="fl">Gig Worker Rights</a><a className="fl">Corruption</a><a className="fl">Agnipath Reform</a></div>
          <div><div className="fc-title2">Organisation</div><a className="fl">Manifesto</a><a className="fl">Constitution</a><a className="fl">RTI Tracker</a><a className="fl">Results Report</a><a className="fl">2029 Strategy</a></div>
        </div>
        <div className="foot-bottom">
          <div className="fcopy">© 2026 NAV BHARAT NIRMAN · nbnindia.in · Founder: Kaushal</div>
          <div className="fslogan">Rant nahi. Nirman chahiye.</div>
        </div>
      </div>
    </footer>
  );
}

export default function NavBharatNirman() {
  return (
    <>
      <Nav />
      <Hero />
      <ElectionSection />
      <PhilosophySection />
      <IssuesSection />
      <StatesSection />
      <WingsSection />
      <ChaptersSection />
      <MembershipSection />
      <FeedSection />
      <Footer />
    </>
  );
}
