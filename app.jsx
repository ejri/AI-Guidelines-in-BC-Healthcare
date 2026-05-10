/* global React, ReactDOM */
const { useState, useEffect, useMemo } = React;

/** When false, Feedback + Send controls stay visible but do not activate. */
const FEEDBACK_ENABLED = false;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "standard",
  "cardStyle": "outlined",
  "palette": "teal",
  "heroLayout": "split"
}/*EDITMODE-END*/;

const PALETTES = {
  teal:   { primary: "oklch(0.40 0.075 220)", soft: "oklch(0.94 0.025 220)", accent: "oklch(0.62 0.11 55)",  accentSoft: "oklch(0.95 0.04 75)" },
  forest: { primary: "oklch(0.40 0.075 165)", soft: "oklch(0.94 0.025 165)", accent: "oklch(0.62 0.11 60)",  accentSoft: "oklch(0.95 0.04 75)" },
  graphite:{primary: "oklch(0.30 0.012 250)", soft: "oklch(0.94 0.008 250)", accent: "oklch(0.62 0.11 55)",  accentSoft: "oklch(0.95 0.04 75)" },
  rust:   { primary: "oklch(0.45 0.10 40)",   soft: "oklch(0.95 0.03 50)",   accent: "oklch(0.45 0.09 230)", accentSoft: "oklch(0.95 0.03 230)" },
  navy:   { primary: "oklch(0.32 0.08 260)",  soft: "oklch(0.94 0.025 260)", accent: "oklch(0.62 0.11 55)",  accentSoft: "oklch(0.95 0.04 75)" },
};

function App() {
  const t = window.useTweaks(TWEAK_DEFAULTS);
  const tweaks = t[0]; const setTweak = t[1];

  // Apply theme + density at root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.setAttribute("data-density", tweaks.density);
    const p = PALETTES[tweaks.palette] || PALETTES.teal;
    const r = document.documentElement.style;
    r.setProperty("--primary", p.primary);
    r.setProperty("--primary-soft", p.soft);
    r.setProperty("--accent-warm", p.accent);
    r.setProperty("--accent-warm-soft", p.accentSoft);
  }, [tweaks.theme, tweaks.density, tweaks.palette]);

  const [screen, setScreen] = useState("home");
  const [detailId, setDetailId] = useState(null);
  const [profile, setProfile] = useState({ role: "physician", org: null, topics: ["privacy","documentation"] });
  const [bookmarks, setBookmarks] = useState(["cpsbc-ai-ethics","ai4h-principles"]);
  const [fbOpen, setFbOpen] = useState(false);

  function go(s, id) {
    if (s === "detail") setDetailId(id);
    setScreen(s);
    window.scrollTo({top:0, behavior:"instant"});
  }
  function toggleBookmark(id) {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]);
  }

  const D = window.HUB_DATA;
  const { HomeScreen, ResultsScreen, DetailScreen, UpdatesScreen, BookmarksScreen } = window.SCREENS;

  let body;
  if (screen === "home") body = <HomeScreen go={go} profile={profile} setProfile={setProfile} bookmarks={bookmarks} toggleBookmark={toggleBookmark} cardStyle={tweaks.cardStyle} />;
  else if (screen === "results") body = <ResultsScreen go={go} profile={profile} setProfile={setProfile} bookmarks={bookmarks} toggleBookmark={toggleBookmark} cardStyle={tweaks.cardStyle} />;
  else if (screen === "detail") body = <DetailScreen go={go} id={detailId} bookmarks={bookmarks} toggleBookmark={toggleBookmark} />;
  else if (screen === "updates") body = <UpdatesScreen go={go} cardStyle={tweaks.cardStyle} />;
  else if (screen === "bookmarks") body = <BookmarksScreen go={go} bookmarks={bookmarks} toggleBookmark={toggleBookmark} />;

  return (
    <div className="app">
      <Nav screen={screen} go={go} bookmarkCount={bookmarks.length} theme={tweaks.theme} setTheme={(v)=>setTweak("theme", v)} openFeedback={()=>setFbOpen(true)} />
      <FeedbackModal open={fbOpen} onClose={()=>setFbOpen(false)} />
      <main className="main">{body}</main>
      <Footer />
      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </div>
  );
}

function FeedbackModal({ open, onClose }) {
  const [topic, setTopic] = useState("Suggestion");
  const [sent, setSent] = useState(false);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{position:"fixed", inset:0, background:"oklch(0.20 0.02 250 / 0.4)", backdropFilter:"blur(4px)", display:"grid", placeItems:"center", zIndex:200, padding:24}}>
      <div onClick={(e)=>e.stopPropagation()} style={{background:"var(--bg-elev)", border:"1px solid var(--border)", borderRadius:16, padding:28, width:"100%", maxWidth:480, boxShadow:"var(--shadow-lg)"}}>
        <div className="row between" style={{marginBottom:16}}>
          <div>
            <div className="eyebrow" style={{marginBottom:6}}>Feedback</div>
            <div className="h2">Help us improve the hub</div>
          </div>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>
        {sent ? (
          <div style={{padding:"24px 0", textAlign:"center"}}>
            <div className="h2" style={{marginBottom:8}}>Thanks — sent.</div>
            <p className="mute">We'll review and reply if you left an email.</p>
            <button className="btn btn-primary" style={{marginTop:16}} onClick={()=>{ setSent(false); onClose(); }}>Close</button>
          </div>
        ) : (
          <form autoComplete="off" onSubmit={(e)=>{ e.preventDefault(); if (FEEDBACK_ENABLED) setSent(true); }}>
            <div className="col gap-3">
              <select value={topic} onChange={(e)=>setTopic(e.target.value)} style={{padding:"9px 10px", border:"1px solid var(--border)", borderRadius:6, background:"var(--bg-elev)", fontSize:13}}>
                <option>Missing policy</option><option>Bug</option><option>Suggestion</option><option>Other</option>
              </select>
              <input name="hub_fb_name" placeholder="Your name (optional)" autoComplete="off" style={{padding:"9px 10px", border:"1px solid var(--border)", borderRadius:6, background:"var(--bg-elev)", fontSize:13}} />
              <input name="hub_fb_contact" placeholder="Contact (optional)" autoComplete="off" style={{padding:"9px 10px", border:"1px solid var(--border)", borderRadius:6, background:"var(--bg-elev)", fontSize:13}} />
              <textarea name="hub_fb_message" placeholder="What's missing or broken?" rows={5} autoComplete="off" style={{padding:"9px 10px", border:"1px solid var(--border)", borderRadius:6, background:"var(--bg-elev)", fontSize:13, resize:"vertical"}}></textarea>
            </div>
            <div className="row" style={{marginTop:16, justifyContent:"flex-end"}}>
              <button type="submit" className="btn btn-primary" disabled={!FEEDBACK_ENABLED}>Send</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Nav({ screen, go, bookmarkCount, theme, setTheme, openFeedback }) {
  const links = [
    { id: "home", label: "Browse" },
    { id: "results", label: "By role / topic" },
    { id: "updates", label: "Updates" },
    { id: "bookmarks", label: <>Saved <span className="mono soft" style={{fontSize:10, marginLeft:4}}>{bookmarkCount}</span></> },
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" onClick={()=>go("home")} style={{cursor:"pointer"}}>
          <span className="brand-mark">bc</span>
          <span className="col" style={{lineHeight:1.1}}>
            <span className="brand-text">AI Policy Hub</span>
          </span>
        </a>
        <nav className="nav-links">
          {links.map(l => (
            <button key={l.id} className="nav-link" data-active={screen === l.id || (l.id==="results" && screen==="detail")} onClick={()=>go(l.id)}>{l.label}</button>
          ))}
        </nav>
        <div className="nav-spacer"></div>
        <div className="nav-search">
          <span style={{fontSize:13, opacity:0.6}}>⌕</span>
          <span style={{flex:1}}>Search guidance…</span>
          <span className="kbd">⌘ K</span>
        </div>
        <button type="button" className="btn btn-outline btn-sm" onClick={openFeedback} disabled={!FEEDBACK_ENABLED}>Feedback</button>
        <button className="icon-btn" title="Toggle theme" onClick={()=>setTheme(theme==="light"?"dark":"light")}>
          {theme === "light" ? "◐" : "◑"}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{borderTop:"1px solid var(--border)", padding: "32px 24px", background:"var(--bg-tint)"}}>
      <div style={{maxWidth:"var(--content-max)", margin:"0 auto", display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap: 32}}>
        <div>
          <div className="brand" style={{marginBottom:10}}>
            <span className="brand-mark">bc</span>
            <span className="brand-text">AI Policy Hub</span>
          </div>
          <p className="mute" style={{fontSize:13, maxWidth: "44ch", margin:0}}>
            A teaching aggregator from UBC Faculty of Medicine, DASH Cluster. <strong>Not legal advice, not clinical decision support, not an official CPSBC product.</strong> Always read the issuer's source.
          </p>
        </div>
        <div>
          <div className="h-section" style={{marginBottom:10}}>Send feedback</div>
          <form className="card" style={{padding:12}} autoComplete="off" onSubmit={(e)=>e.preventDefault()}>
            <input name="hub_footer_contact" placeholder="Contact (optional)" autoComplete="off" style={{width:"100%", padding:"8px 10px", border:"1px solid var(--border)", borderRadius:6, background:"var(--bg-elev)", marginBottom:8, fontSize:13}} />
            <textarea name="hub_footer_message" placeholder="Missing policy? Bug? Suggestion?" rows={3} autoComplete="off" style={{width:"100%", padding:"8px 10px", border:"1px solid var(--border)", borderRadius:6, background:"var(--bg-elev)", fontSize:13, resize:"vertical"}}></textarea>
            <button type="button" className="btn btn-primary btn-sm" style={{marginTop:8, width:"100%", justifyContent:"center"}} disabled={!FEEDBACK_ENABLED}>Send</button>
          </form>
        </div>
        <div>
          <div className="h-section" style={{marginBottom:10}}>About</div>
          <div className="col gap-2" style={{fontSize:13}}>
            <a className="mute dim-on-hover" href="https://www.med.ubc.ca/" target="_blank" rel="noopener noreferrer">UBC Faculty of Medicine ↗</a>
            <a className="mute dim-on-hover" href="https://datascienceandhealth.ubc.ca/" target="_blank" rel="noopener noreferrer">DASH Cluster ↗</a>
            <a className="mute dim-on-hover" href="https://www.oipc.bc.ca/documents/guidance-documents/3082" target="_blank" rel="noopener noreferrer">Privacy & retention ↗</a>
            <a className="mute dim-on-hover" href="https://github.com/ejri/AI-Guidelines-in-BC-Healthcare" target="_blank" rel="noopener noreferrer">GitHub repo ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TweaksUI({ tweaks, setTweak }) {
  const { TweaksPanel, TweakSection, TweakRadio, TweakColor } = window;
  return (
    <TweaksPanel>
      <TweakSection title="Theme">
        <TweakRadio tweaks={tweaks} setTweak={setTweak} k="theme" label="Mode" options={[{value:"light",label:"Light"},{value:"dark",label:"Dark"}]} />
      </TweakSection>
      <TweakSection title="Palette">
        <TweakColor tweaks={tweaks} setTweak={setTweak} k="palette" label="Primary"
          options={["teal","forest","graphite","rust","navy"]}
          render={(v)=> {
            const p = PALETTES[v];
            return [p.primary, p.accent];
          }} />
      </TweakSection>
      <TweakSection title="Layout">
        <TweakRadio tweaks={tweaks} setTweak={setTweak} k="density" label="Density" options={[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"roomy",label:"Roomy"}]} />
        <TweakRadio tweaks={tweaks} setTweak={setTweak} k="cardStyle" label="Card style" options={[{value:"outlined",label:"Outlined"},{value:"soft",label:"Soft"},{value:"elevated",label:"Elevated"}]} />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
