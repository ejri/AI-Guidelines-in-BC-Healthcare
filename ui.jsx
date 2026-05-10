/* global React */
const { useState, useMemo, useEffect } = React;

// ---------------- Primitives ----------------
function OrgTile({ org, size }) {
  const klass = "org-tile" + (size === "lg" ? " org-tile-lg" : size === "sm" ? " org-tile-sm" : "") + (org.tinted ? " tinted" : "");
  return <div className={klass} title={org.name}>{org.short}</div>;
}

function Topic({ topic }) {
  return (
    <span className="topic">
      <span className="topic-dot" style={{ background: topic.color }}></span>
      {topic.label}
    </span>
  );
}

function Scope({ scope }) {
  const labels = { "pan-canadian": "Pan-Canadian", "bc-wide": "BC-wide", "vch": "VCH only", "phsa": "PHSA", "regional": "Regional", "federal": "Federal" };
  return <span className="scope" data-scope={scope}>{labels[scope] || scope}</span>;
}

function Freshness({ verified }) {
  const days = Math.floor((new Date("2026-05-09") - new Date(verified)) / (1000*60*60*24));
  const state = days < 60 ? "fresh" : days < 180 ? "ok" : "stale";
  const label = days < 30 ? `Verified ${days}d ago` : days < 365 ? `Verified ${Math.floor(days/30)}mo ago` : `Verified ${Math.floor(days/365)}y ago`;
  return <span className="freshness" data-state={state}>{label}</span>;
}

function Chip({ active, removable, onRemove, onClick, children, outline }) {
  return (
    <button className={"chip" + (outline ? " chip-outline" : "") + (removable ? " chip-removable" : "")} data-active={!!active} onClick={onClick}>
      {children}
      {removable && <span className="chip-x" onClick={(e)=>{e.stopPropagation(); onRemove&&onRemove();}}>×</span>}
    </button>
  );
}

// ---------------- Composer (hero filter) ----------------
function Composer({ profile, setProfile, onSubmit, matchCount }) {
  const D = window.HUB_DATA;
  const role = D.ROLES.find(r => r.id === profile.role);
  const org  = D.ORGS.find(o => o.id === profile.org);
  const topicLabels = profile.topics.length === 0
    ? <Token label="any topic" onClick={() => openMenu("topics")} />
    : profile.topics.map(tid => {
        const t = D.TOPICS.find(x=>x.id===tid);
        return <span key={tid} className="composer-token" data-set="true" onClick={()=>openMenu("topics")}>
          <span className="topic-dot" style={{background:t.color}}></span>{t.label}<span className="caret">×</span>
        </span>;
      });

  const [openKey, setOpenKey] = useState(null);
  function openMenu(k){ setOpenKey(prev => prev===k?null:k); }

  return (
    <div className="composer" onClick={(e)=>{ if(!e.target.closest('.composer-token, .composer-menu')) setOpenKey(null); }}>
      <div className="composer-line">
        <span>I'm</span><span>a</span>
        <span className="composer-token" data-set={!!role} onClick={()=>openMenu("role")}>
          {role ? role.label : "role"} <span className="caret">▾</span>
        </span>
        <span>at</span>
        <span className="composer-token" data-set={!!org} onClick={()=>openMenu("org")}>
          {org ? org.short : "any organization"} <span className="caret">▾</span>
        </span>
      </div>
      <div className="composer-line" style={{marginTop: 8}}>
        <span>looking</span><span>for</span><span>guidance</span><span>on</span>
        {topicLabels}
        {profile.topics.length > 0 && (
          <span className="composer-token" onClick={()=>openMenu("topics")}>+ add</span>
        )}
      </div>

      {openKey === "role" && (
        <Menu items={D.ROLES.map(r=>({id:r.id,label:r.label}))} value={profile.role} onPick={(id)=>{ setProfile({...profile, role: id===profile.role?null:id}); setOpenKey(null); }} />
      )}
      {openKey === "org" && (
        <Menu items={D.ORGS.map(o=>({id:o.id,label:`${o.short} — ${o.name}`}))} value={profile.org} onPick={(id)=>{ setProfile({...profile, org: id===profile.org?null:id}); setOpenKey(null); }} />
      )}
      {openKey === "topics" && (
        <Menu multi items={D.TOPICS.map(t=>({id:t.id,label:t.label,color:t.color}))} value={profile.topics} onPick={(id)=>{
          const has = profile.topics.includes(id);
          setProfile({...profile, topics: has ? profile.topics.filter(x=>x!==id) : [...profile.topics, id]});
        }} />
      )}

      <div className="composer-cta">
        <button className="btn btn-primary btn-lg" onClick={onSubmit}>
          View matching guidance →
        </button>
        <span className="mute">
          <strong style={{color:"var(--fg)", fontWeight:600}}>{matchCount}</strong> documents match
        </span>
        {(profile.role || profile.org || profile.topics.length>0) && (
          <button className="btn btn-ghost btn-sm" onClick={()=>setProfile({role:null,org:null,topics:[]})}>Clear</button>
        )}
      </div>
    </div>
  );
}

function Token({ label, onClick }) {
  return <span className="composer-token" onClick={onClick}>{label} <span className="caret">▾</span></span>;
}

function Menu({ items, value, onPick, multi }) {
  return (
    <div className="composer-menu" style={{
      marginTop: 14, padding: 8,
      background: "var(--bg-elev)", border: "1px solid var(--border)",
      borderRadius: 12, boxShadow: "var(--shadow-lg)",
      display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 2,
      fontFamily: "var(--font-sans)", fontSize: 13, maxHeight: 280, overflowY: "auto"
    }}>
      {items.map(it => {
        const active = multi ? value.includes(it.id) : value === it.id;
        return (
          <button key={it.id} onClick={()=>onPick(it.id)} style={{
            display:"flex", alignItems:"center", gap:8, padding:"8px 10px",
            borderRadius:6, color: active?"var(--fg)":"var(--fg-mute)",
            background: active?"var(--bg-tint)":"transparent", textAlign:"left"
          }}>
            {it.color && <span className="topic-dot" style={{background:it.color}}></span>}
            <span style={{flex:1}}>{it.label}</span>
            {active && <span style={{color:"var(--primary)"}}>✓</span>}
          </button>
        );
      })}
    </div>
  );
}

// ---------------- Guideline Card ----------------
function GuidelineCard({ g, onOpen, bookmarked, onBookmark, cardStyle }) {
  const D = window.HUB_DATA;
  const org = D.ORGS.find(o => o.id === g.org);
  const topics = g.topics.slice(0,4).map(tid => D.TOPICS.find(t=>t.id===tid)).filter(Boolean);
  return (
    <div className="card card-link" data-style={cardStyle} onClick={onOpen}>
      <div className="card-pad">
        <div className="gcard">
          <OrgTile org={org} size="lg" />
          <div>
            <div className="meta">
              <span className="meta-org">{org.short}</span>
              <span className="soft">·</span>
              <Scope scope={g.scope} />
              <span className="soft">·</span>
              <Freshness verified={g.verified} />
            </div>
            <h3>{g.title}</h3>
            <p>{g.summary}</p>
            <div className="tags">
              {topics.map(t => <Topic key={t.id} topic={t} />)}
              {g.topics.length > topics.length && <span className="topic">+{g.topics.length - topics.length}</span>}
            </div>
          </div>
          <div className="actions">
            <button className="icon-btn" title={bookmarked?"Remove bookmark":"Bookmark"} onClick={(e)=>{e.stopPropagation(); onBookmark&&onBookmark();}} style={{color: bookmarked?"var(--accent-warm)":undefined}}>
              {bookmarked ? "★" : "☆"}
            </button>
            <span className="mono soft" style={{fontSize:11}}>{g.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.UI = { OrgTile, Topic, Scope, Freshness, Chip, Composer, GuidelineCard };
