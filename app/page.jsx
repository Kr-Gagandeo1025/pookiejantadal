"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- DATA CONSTANTS ---
const initialIssues = [
  { n: '01', t: 'PAPER LEAK EPIDEMIC', d: 'NEET 2026 cancelled. SSC, BPSC, UPPSC — every exam is a crime scene.', tag: 'Exam Integrity', votes: 2847 },
  { n: '02', t: 'YOUTH UNEMPLOYMENT', d: '40% of graduates aged 15-25 unemployed. Degree premium has collapsed.', tag: 'Employment', votes: 2341 },
  { n: '03', t: 'GIG WORKER EXPLOITATION', d: '80% work 10+ hours daily. Zero minimum wage. Zero insurance.', tag: 'Labour Rights', votes: 1923 },
  { n: '04', t: 'INSTITUTIONAL CORRUPTION', d: 'Ministers arrested. Judges raided. IPS officers helping criminals.', tag: 'Governance', votes: 3102 },
  { n: '05', t: 'AGNIPATH BETRAYAL', d: '4 years of service. No pension. No guaranteed job.', tag: 'Defence Youth', votes: 1654 },
];

const statesData = [
  { n: 'Uttar Pradesh', priority: true, seats: '403 seats → 100', issues: ['UPPSC paper leaks', 'Farmer payment delays'] },
  { n: 'Bihar', priority: true, seats: '243 seats → 60', issues: ['BPSC irregularities', 'Brain drain'] },
  { n: 'Delhi', priority: true, seats: '70 seats → 17', issues: ['Gig worker rights', 'Air quality'] },
  { n: 'Maharashtra', priority: false, seats: '288 seats', issues: ['Farmer crisis', 'Infrastructure corruption'] },
];

const wingsData = [
  { tag: 'Wing 1 — Tech Force', n: 'Engineers Wing', s: 'IIT · NIT · State colleges', w: 'Engineers, CS graduates', is: ['Brain drain', 'Mass layoffs'], a: '"Employment Index"', btn: 'Join Tech Force' },
  { tag: 'Wing 2 — Health Force', n: 'Doctors Wing', s: 'NEET aspirants · MBBS', w: 'Medical students', is: ['Paper leaks', 'Rural posting gap'], a: '"Medical India Report"', btn: 'Join Health Force' },
];

const chaptersData = [
  { n: 'IIT Delhi Chapter', c: 'New Delhi, Delhi', m: '47 members' },
  { n: 'Patna University Chapter', c: 'Patna, Bihar', m: '63 members' },
];

const feedItemsData = [
  { cat: 'State · Uttar Pradesh', t: 'UPPSC PRELIMS PAPER LEAKED', d: 'I have documentary evidence that the question paper was circulating.', state: 'Uttar Pradesh', votes: 342, type: 'state' },
  { cat: 'Profession · Engineer', t: 'IIT BOMBAY GRADUATE — UNEMPLOYED', d: 'Graduated with 8.4 CGPA. 200+ applications. 3 calls.', state: 'Maharashtra', votes: 891, type: 'profession' },
  { cat: 'College · IIT Delhi', t: 'PLACEMENT OFFICE HIDING DATA', d: 'Our placement office refuses to publish salary data.', state: 'Delhi', votes: 567, type: 'college' },
];

export default function PookieJantaDal() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Tagline State
  const [tlIdx, setTlIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTlIdx((prev) => (prev + 1) % 5), 4000);
    return () => clearInterval(interval);
  }, []);

  // 2029 Vote State
  const [v2029, setV2029] = useState({ yes: 0, no: 0, voted: false });
  const handleVote2029 = (dir) => {
    if (v2029.voted) return;
    setV2029((prev) => ({ ...prev, [dir]: prev[dir] + 1, voted: true }));
  };

  // Issues Voting State
  const [issuesState, setIssuesState] = useState(initialIssues.map(i => ({ ...i, votedDir: null })));
  const handleIssueVote = (idx, dir) => {
    setIssuesState(prev => {
      const next = [...prev];
      const item = next[idx];
      if (item.votedDir === dir) {
        item.votedDir = null;
        item.votes += (dir === 'up' ? -1 : 1);
      } else {
        if (item.votedDir === 'up') item.votes -= 1;
        if (item.votedDir === 'dn') item.votes += 1;
        item.votedDir = dir;
        item.votes += (dir === 'up' ? 1 : -1);
      }
      return next;
    });
  };

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [activeState, setActiveState] = useState(statesData[0]);
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const openStateModal = (stateName) => {
    const s = statesData.find(x => x.n === stateName);
    if (s) setActiveState(s);
    setIssueSubmitted(false);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeStateModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  // Canvas / Membership State
  const canvasRef = useRef(null);
  const [certVisible, setCertVisible] = useState(false);
  const [memForm, setMemForm] = useState({ fn: '', ln: '', state: '', prof: '' });
  
  const generateCertificate = () => {
    if (!memForm.fn || !memForm.ln || !memForm.state || !memForm.prof) {
      alert("Please fill in your name, state, and profession.");
      return;
    }
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;
    
    const W = 900; const H = 620;
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = '#F5F0E8'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#0D0D0D'; ctx.fillRect(0, 0, W, 180);
    ctx.fillStyle = '#C0182A';
    ctx.fillRect(0, 0, 6, H); ctx.fillRect(W - 6, 0, 6, H);
    ctx.fillRect(0, 0, W, 4); ctx.fillRect(0, H - 4, W, 4);

    ctx.fillStyle = '#F5F0E8'; ctx.fillRect(6, 4, W - 12, 3);

    const cm = (x, y, w, h) => { 
      ctx.fillStyle = '#C0182A'; ctx.fillRect(x, y, w, 2); ctx.fillRect(x, y, 2, h); 
    };
    cm(20, 20, 40, 40); cm(W - 60, 20, 40, 40); cm(20, H - 60, 40, 40); cm(W - 60, H - 60, 40, 40);

    ctx.fillStyle = 'rgba(245,240,232,.4)';
    ctx.font = '500 10px monospace'; ctx.textAlign = 'center';
    ctx.fillText('POOKIE JANTA DAL  ·  पूकी जनता दल  ·  OFFICIAL MEMBERSHIP CERTIFICATE', W / 2, 38);

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 36px Georgia,serif'; ctx.textAlign = 'center';
    ctx.fillText('POOKIE JANTA DAL', W / 2, 85);

    ctx.fillStyle = '#C0182A'; ctx.fillRect(W / 2 - 120, 94, 240, 2);

    ctx.fillStyle = 'rgba(245,240,232,.45)'; ctx.font = '300 13px "IBM Plex Sans",sans-serif';
    ctx.fillText('By the Youth · Founder: Kaushal', W / 2, 120);
    ctx.fillStyle = 'rgba(245,240,232,.25)'; ctx.font = 'italic 12px Georgia,serif';
    ctx.fillText('"Rant nahi. Nirman chahiye."', W / 2, 145);

    ctx.fillStyle = '#6B6050'; ctx.font = '300 13px Georgia,serif'; ctx.textAlign = 'center';
    ctx.fillText('This is to certify that', W / 2, 210);

    const full = `${memForm.fn} ${memForm.ln}`;
    ctx.fillStyle = '#0D0D0D'; ctx.font = 'bold 52px Georgia,serif';
    ctx.fillText(full, W / 2, 275);
    const tw = ctx.measureText(full).width;
    ctx.fillStyle = '#C0182A'; ctx.fillRect(W / 2 - tw / 2, 285, tw, 2);

    ctx.fillStyle = '#6B6050'; ctx.font = '300 13px "IBM Plex Sans",sans-serif';
    ctx.fillText('is a founding member of Pookie Janta Dal, India', W / 2, 318);

    const mid = 'PJD-' + Math.random().toString(36).substring(2, 7).toUpperCase() + '-2026';
    const dt = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    
    const dets = [['STATE', memForm.state], ['PROFESSION', memForm.prof.length > 18 ? memForm.prof.substring(0, 18) + '…' : memForm.prof], ['MEMBER ID', mid]];
    dets.forEach((d, i) => {
      const x = 80 + i * 250;
      ctx.fillStyle = 'rgba(0,0,0,.04)';
      ctx.beginPath(); 
      if (ctx.roundRect) { ctx.roundRect(x, 340, 220, 54, 4); } else { ctx.rect(x, 340, 220, 54); }
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.08)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = '#C0182A'; ctx.font = '500 9px monospace'; ctx.textAlign = 'left';
      ctx.fillText(d[0], x + 12, 358);
      ctx.fillStyle = '#1A1806'; ctx.font = '500 13px "IBM Plex Sans",sans-serif';
      ctx.fillText(d[1], x + 12, 378);
      ctx.textAlign = 'center';
    });

    ctx.fillStyle = 'rgba(0,0,0,.12)'; ctx.fillRect(60, 420, W - 120, 1);
    ctx.fillStyle = '#6B6050'; ctx.font = '500 9px monospace';
    ctx.textAlign = 'left'; ctx.fillText('DATE OF ENROLMENT', 80, 445);
    ctx.textAlign = 'center'; ctx.fillText('RANT NAHI · NIRMAN CHAHIYE', W / 2, 445);
    ctx.textAlign = 'right'; ctx.fillText('pookiejantadal.in', W - 80, 445);
    ctx.fillStyle = '#1A1806'; ctx.font = '500 12px "IBM Plex Sans",sans-serif';
    ctx.textAlign = 'left'; ctx.fillText(dt, 80, 462);
    ctx.textAlign = 'right'; ctx.fillText('Ab hum banayenge', W - 80, 462);

    ctx.beginPath(); ctx.arc(W / 2, H - 72, 44, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(192,24,42,.4)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = 'rgba(192,24,42,.06)'; ctx.fill();
    ctx.fillStyle = '#C0182A'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center';
    ctx.fillText('PJD', W / 2, H - 78);
    ctx.font = '8px monospace'; ctx.fillStyle = 'rgba(192,24,42,.7)';
    ctx.fillText('MEMBER · 2026', W / 2, H - 65);
    ctx.fillText('FOUNDER: KAUSHAL', W / 2, H - 54);

    setCertVisible(true);
  };

  const downloadCert = () => {
    const a = document.createElement('a');
    a.download = `PJD_Certificate_${memForm.fn}_${memForm.ln}.png`;
    a.href = canvasRef.current?.toDataURL('image/png') || '';
    a.click();
  };

  // Feed State
  const [feedFilter, setFeedFilter] = useState('all');
  const [feedVotes, setFeedVotes] = useState(feedItemsData.map(f => f.votes));

  return (
    <>
      {/* NAV */}
      <nav id="topnav">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => scrollTo('home')}>
            <span>Pookie Janta</span> Dal
          </div>
          <div className="nav-links">
            <button onClick={() => scrollTo('election')}>2029</button>
            <button onClick={() => scrollTo('issues')}>Issues</button>
            <button onClick={() => scrollTo('states')}>States</button>
            <button onClick={() => scrollTo('wings')}>Wings</button>
            <button onClick={() => scrollTo('chapters')}>Colleges</button>
            <button onClick={() => scrollTo('feed')}>Feed</button>
            <button className="nav-cta" onClick={() => scrollTo('membership')}>Join Now</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero" id="home">
        <svg className="geo-lines" viewBox="0 0 400 800" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="400" y2="800" stroke="white" strokeWidth="1"/>
          <line x1="80" y1="0" x2="400" y2="640" stroke="white" strokeWidth="0.5"/>
          <line x1="160" y1="0" x2="400" y2="480" stroke="white" strokeWidth="0.5"/>
          <circle cx="350" cy="150" r="120" fill="none" stroke="white" strokeWidth="0.5"/>
        </svg>
        <div className="hero-inner">
          <div className="hero-eyebrow">Pookie Janta Dal · पूकी जनता दल · Est. 2026</div>
          <div className="hero-h1"><em>Pookie Janta</em><br/>Dal</div>
          <div className="hero-hindi">पूकी जनता दल — Building a New India</div>
          <div className="tagline-wrap">
            <div className={`tagline ${tlIdx === 0 ? 'active' : ''}`}><strong>3 saal ki mehnat.</strong> Ek raat mein barbad kar di — paper leak ne. Hum builders hain.</div>
            <div className={`tagline ${tlIdx === 1 ? 'active' : ''}`}><strong>Engineer hoon. 2 saal se unemployed hoon.</strong> Vacancy nikli thi. Abhi bhi nahi bhari.</div>
            <div className={`tagline ${tlIdx === 2 ? 'active' : ''}`}><strong>NEET diya. System ne cheata kiya.</strong> Merit meri thi. Pookie Janta Dal — hum jawab maangenge.</div>
            <div className={`tagline ${tlIdx === 3 ? 'active' : ''}`}><strong>Kisaan ka beta hoon.</strong> Ye naya Bharat banana padega. Hume khud.</div>
            <div className={`tagline ${tlIdx === 4 ? 'active' : ''}`}><strong>Gig worker hoon.</strong> 70 ghante kaam. Koi nahi poochh-ta. Ab hum poochhein ge.</div>
          </div>
          <div className="hero-main-tag">Rant Nahi. <span>Result Chahiye.</span></div>
          <div className="hero-sub">Pookie Janta Dal is not a protest. Not a meme. It is a structured political organisation built by India's frustrated, aspirational youth — to file RTIs, contest elections, and deliver measurable change.</div>
          <div className="hero-btns">
            <button className="btn btn-red" onClick={() =>window.open('https://www.instagram.com/pookiejantadal?igsh=ZXE1Y3oxYnd5dG1h','_blank')}>Join the Movement</button>
            <button className="btn btn-outline" onClick={() => scrollTo('election')}>2029 Election Plan</button>
          </div>
        </div>
      </div>

      {/* ELECTION 2029 */}
      <div className="election-sec" id="election">
        <div className="election-bg"></div>
        <div className="election-inner">
          <div className="sec-eyebrow" style={{ color: 'var(--red)' }}>Strategic Decision</div>
          <div className="election-q">SHOULD POOKIE JANTA DAL<br/><em>Contest Elections in 2029?</em></div>
          <div className="election-context">We are putting it to every member — your vote shapes the strategy.</div>
          <div className="evote-row">
            <button className="evote-btn evote-yes" onClick={() => handleVote2029('yes')}>Yes — Contest in 2029</button>
            <button className="evote-btn evote-no" onClick={() => handleVote2029('no')}>No — Build till 2034</button>
            <span className="evote-count">
              {v2029.voted 
                ? `${Math.round((v2029.yes / (v2029.yes + v2029.no)) * 100)}% say Contest in 2029`
                : "Cast your vote above"}
            </span>
          </div>
        </div>
      </div>

      {/* ISSUES */}
      <section className="issues-sec" id="issues">
        <div className="sec-inner">
          <div className="sec-eyebrow" style={{ color: 'var(--red)' }}>National Manifesto</div>
          <div className="sec-h2 white">TEN DEMANDS.<br/><em>Non-Negotiable.</em></div>
          <div className="issues-grid">
            {issuesState.map((issue, idx) => (
              <div key={idx} className="issue-card">
                <div className="icard-num">{issue.n}</div>
                <span className="icard-tag">{issue.tag}</span>
                <div className="icard-title">{issue.t}</div>
                <div className="icard-desc">{issue.d}</div>
                <div className="vote-row">
                  <button className={`vote-btn ${issue.votedDir === 'up' ? 'voted-up' : ''}`} onClick={() => handleIssueVote(idx, 'up')}>
                    ▲ <span>{issue.votes.toLocaleString()}</span>
                  </button>
                  <button className={`vote-btn ${issue.votedDir === 'dn' ? 'voted-down' : ''}`} onClick={() => handleIssueVote(idx, 'dn')}>▼</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATES */}
      <section className="states-sec" id="states">
        <div className="sec-inner">
          <div className="sec-eyebrow">State Units</div>
          <div className="sec-h2">JOIN YOUR<br/><em>State Chapter</em></div>
          <div className="states-grid">
            {statesData.map((s, idx) => (
              <div key={idx} className={`state-card ${s.priority ? 'priority' : ''}`}>
                <div className="sc-hdr">
                  <div className="sc-name">{s.n}</div>
                  <div className={`sc-badge ${s.priority ? '' : 'normal'}`}>{s.seats}</div>
                </div>
                <div className="sc-body">
                  {s.issues.map((iss, i) => <div key={i} className="sc-issue">{iss}</div>)}
                  <button className="sc-btn" onClick={() => openStateModal(s.n)}>Open Chapter →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="mem-sec" id="membership">
        <div className="sec-inner">
          <div className="sec-eyebrow">National Membership</div>
          <div className="sec-h2">JOIN PJD.<br/><em>Get Your Certificate.</em></div>
          <div className="mem-grid">
            <div>
              <div className="mem-form">
                <div className="mf-row">
                  <div className="mfield">
                    <label>First Name</label>
                    <input type="text" placeholder="Rahul" value={memForm.fn} onChange={e => setMemForm({...memForm, fn: e.target.value})} />
                  </div>
                  <div className="mfield">
                    <label>Last Name</label>
                    <input type="text" placeholder="Sharma" value={memForm.ln} onChange={e => setMemForm({...memForm, ln: e.target.value})} />
                  </div>
                </div>
                <div className="mf-row">
                  <div className="mfield">
                    <label>State</label>
                    <select value={memForm.state} onChange={e => setMemForm({...memForm, state: e.target.value})}>
                      <option value="">Select state</option>
                      <option>Uttar Pradesh</option>
                      <option>Bihar</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                    </select>
                  </div>
                  <div className="mfield">
                    <label>Profession</label>
                    <select value={memForm.prof} onChange={e => setMemForm({...memForm, prof: e.target.value})}>
                      <option value="">Select</option>
                      <option>Student</option>
                      <option>Engineer</option>
                      <option>Doctor</option>
                    </select>
                  </div>
                </div>
                <button className="btn btn-beige" style={{ width: '100%', justifyContent: 'center' }} onClick={generateCertificate}>
                  Generate My Membership Certificate
                </button>
              </div>
              
              <div className={`cert-wrap ${certVisible ? 'show' : ''}`} style={{ display: certVisible ? 'block' : 'none', marginTop: '20px' }}>
                <canvas ref={canvasRef} width="900" height="620" id="cert-canvas" />
                <div className="cert-acts">
                  <button className="btn btn-beige" onClick={downloadCert}>Download Certificate</button>
                  <button className="btn btn-outline" onClick={() => setCertVisible(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEED */}
      <section className="feed-sec" id="feed">
        <div className="sec-inner">
          <div className="sec-eyebrow">Community Feed</div>
          <div className="sec-h2">ISSUES RAISED<br/><em>By the Youth</em></div>
          <div className="feed-filters">
            {['all', 'state', 'profession', 'college'].map(filter => (
              <button 
                key={filter} 
                className={`filter-btn ${feedFilter === filter ? 'active' : ''}`} 
                onClick={() => setFeedFilter(filter)}
              >
                {filter === 'all' ? 'All Issues' : `By ${filter}`}
              </button>
            ))}
          </div>
          <div className="feed-grid">
            {feedItemsData.filter(f => feedFilter === 'all' || f.type === feedFilter).map((f, idx) => (
              <div key={idx} className="feed-card">
                <div className="fc-cat">{f.cat}</div>
                <div className="fc-title">{f.t}</div>
                <div className="fc-desc">{f.d}</div>
                <div className="fc-meta">
                  <span className="fc-state">{f.state}</span>
                  <div className="fc-votes">
                    <span className="fcv" onClick={() => {
                       const newVotes = [...feedVotes];
                       newVotes[idx]++;
                       setFeedVotes(newVotes);
                    }}>▲ <span>{feedVotes[idx]}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-inner">
          <div className="foot-bottom" style={{ 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'flex-start', /* Ye CSS kisi bhi external center alignment ko break kar dega */
  textAlign: 'left' 
}}>
  <div className="fcopy">© 2026 POOKIE JANTA DAL · pookiejantadal.in · Founder: Kaushal</div>
  <div className="fslogan">Rant nahi. Nirman chahiye.</div>
  
  {/* SOCIAL ICONS */}
  <div className="social-links" style={{ 
    display: 'flex', 
    gap: '20px', 
    marginTop: '16px', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10 
  }}>
    {/* INSTAGRAM ICON */}
    <a 
      href="https://www.instagram.com/pookiejantadal?igsh=ZXE1Y3oxYnd5dG1h" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#ffffff', transition: 'opacity 0.2s' }} 
      onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} 
      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </a>

    {/* X (TWITTER) ICON */}
    <a 
      href="https://x.com/Pookiejantadal" 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ color: '#ffffff', transition: 'opacity 0.2s' }} 
      onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'} 
      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.09H5.078z" />
      </svg>
    </a>
  </div>
</div>
          
        </div>
      </footer>

      {/* STATE MODAL */}
      {modalOpen && (
        <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) closeStateModal() }}>
          <div className="modal-box">
            <div className="modal-hdr">
              <div className="modal-title">{activeState.n}</div>
              <button className="modal-close" onClick={closeStateModal}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-sec-title">Raise Your Issue</div>
                <div className="issue-submit">
                  <div className="form-field"><label>Issue Title</label><input type="text" placeholder="Brief title" /></div>
                  <button className="btn btn-red" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIssueSubmitted(true)}>Submit Issue</button>
                  {issueSubmitted && (
                    <div className="success-msg show" style={{ marginTop: '16px' }}>
                      <div className="success-ico">✅</div>
                      <div className="success-title">Issue Submitted!</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}