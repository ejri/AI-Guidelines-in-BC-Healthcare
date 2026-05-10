/* global React */
const { useState, useMemo, useEffect } = React;

// =====================================================
// HOME
// =====================================================
function HomeScreen({ go, profile, setProfile, bookmarks, toggleBookmark, cardStyle }) {
  const D = window.HUB_DATA;

  const matchCount = useMemo(() => {
    return D.GUIDELINES.filter(g => matches(g, profile)).length;
  }, [profile]);

  const recent = D.UPDATES.slice(0, 3);
  const principles = D.PRINCIPLES;

  return (
    <div>
      <div className="hero">
        <div className="hero-grid">
          <div>
            <h1 className="h-display">
              AI guidance for BC<br/>
              healthcare, <em>simplified</em>
            </h1>
            <p className="lede" style={{marginTop: 18}}>
              One place to find the AI principles, policies and college guidance that apply to your role and your organization.
            </p>
          </div>
          <div>
            <div className="eyebrow" style={{marginBottom: 12}}>Find guidance that applies to you</div>
            <Composer profile={profile} setProfile={setProfile} matchCount={matchCount} onSubmit={()=>go("results")} />
          </div>
        </div>
      </div>

      <div className="container" style={{paddingTop: 0}}>
        {/* RECENTLY UPDATED */}
        <Section
          title="Recently updated"
          rightLink={{label:"All updates →", onClick:()=>go("updates")}}>
          <div className="grid grid-3 gap-4">
            {recent.map(u => {
              const org = D.ORGS.find(o=>o.id===u.org);
              return (
                <div key={u.id} className="card card-link" data-style={cardStyle} onClick={()=>go("detail", u.guidelineId)}>
                  <div className="card-pad">
                    <div className="row gap-3" style={{marginBottom: 14}}>
                      <DateStack iso={u.date} />
                      <div style={{flex:1}}></div>
                      <OrgTile org={org} size="sm" />
                    </div>
                    <div style={{fontFamily:"var(--font-serif)", fontSize:18, lineHeight:1.25, letterSpacing:"-0.01em", marginBottom: 8}}>{u.title}</div>
                    <p className="mute" style={{fontSize:13, margin:0}}>{u.summary}</p>
                    <div className="row wrap gap-2" style={{marginTop: 14}}>
                      {u.topics.map(tid => <Topic key={tid} topic={D.TOPICS.find(t=>t.id===tid)} />)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* PRINCIPLES MAP */}
        <Section
          title="The six AI4H principles"
          subtitle="Pan-Canadian AI for Health. Click a principle to see related guidance.">
          <div className="pmap">
            {principles.map(p => (
              <div key={p.id} className="pmap-cell" onClick={()=>{
                setProfile({...profile, topics: [...new Set([...profile.topics, mapPrincipleToTopic(p.id)])]});
                go("results");
              }}>
                <div className="row between">
                  <span className="dot" style={{background: p.color}}></span>
                  <span className="num">{p.num}</span>
                </div>
                <div className="ttl">{p.title}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* BROWSE BY */}
        <Section title="Browse by source">
          <div className="grid grid-4 gap-3">
            {D.ORGS.slice(0, 8).map(o => {
              const count = D.GUIDELINES.filter(g => g.org === o.id).length;
              return (
                <div key={o.id} className="card card-link" data-style={cardStyle} onClick={()=>{ setProfile({...profile, org:o.id}); go("results"); }}>
                  <div className="card-pad-sm row gap-3">
                    <OrgTile org={o} />
                    <div style={{flex:1, minWidth:0}}>
                      <div style={{fontWeight:500, fontSize:13.5}}>{o.short}</div>
                      <div className="soft" style={{fontSize:11.5, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap"}}>{o.name}</div>
                      {o.infoUrl && (
                        <a href={o.infoUrl} className="org-browse-link" style={{fontSize:11, marginTop:6, display:"inline-block"}} target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}>Organization site ↗</a>
                      )}
                    </div>
                    {count > 0 && <span className="mono soft" style={{fontSize:11}}>{count}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, subtitle, rightLink, children }) {
  return (
    <section style={{marginTop: 48}}>
      <div className="row between" style={{marginBottom: 18}}>
        <div>
          <div className="h-section">{title}</div>
          {subtitle && <div className="mute" style={{fontSize:13, marginTop: 6}}>{subtitle}</div>}
        </div>
        {rightLink && <button className="btn btn-ghost btn-sm" onClick={rightLink.onClick}>{rightLink.label}</button>}
      </div>
      {children}
    </section>
  );
}

function DateStack({ iso }) {
  const d = new Date(iso);
  const mon = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return (
    <div className="date-stack">
      <span className="date-inline">{d.getDate()} {mon} {d.getFullYear()}</span>
    </div>
  );
}

function mapPrincipleToTopic(pid) {
  const m = { person:"clinical", edi:"bias", privacy:"privacy", safety:"safety", transparency:"transparency", accountability:"accountability" };
  return m[pid] || "privacy";
}

// =====================================================
// RESULTS
// =====================================================
function ResultsScreen({ go, profile, setProfile, bookmarks, toggleBookmark, cardStyle }) {
  const D = window.HUB_DATA;
  const [sort, setSort] = useState("relevance");
  const [view, setView] = useState("list");
  const [typeFilters, setTypeFilters] = useState([]);

  const results = useMemo(() => {
    let r = D.GUIDELINES.filter(g => matches(g, profile));
    if (typeFilters.length) r = r.filter(g => typeFilters.includes(g.type));
    if (sort === "newest") r = [...r].sort((a,b) => b.updated.localeCompare(a.updated));
    if (sort === "alpha") r = [...r].sort((a,b) => a.title.localeCompare(b.title));
    return r;
  }, [profile, sort, typeFilters]);

  const orgCounts = D.ORGS.map(o => ({...o, count: D.GUIDELINES.filter(g=>g.org===o.id).length}));
  const topicCounts = D.TOPICS.map(t => ({...t, count: D.GUIDELINES.filter(g=>g.topics.includes(t.id)).length}));

  function toggleArr(arr, val, setter) {
    setter(arr.includes(val) ? arr.filter(x=>x!==val) : [...arr, val]);
  }

  return (
    <div className="container">
      <div className="layout-results">
        <aside className="rail">
          <div className="rail-section">
            <div className="rail-h"><span>Role</span></div>
            <div className="rail-list">
              {D.ROLES.map(r => (
                <div key={r.id} className="rail-item" data-on={profile.role===r.id} onClick={()=>setProfile({...profile, role: profile.role===r.id?null:r.id})}>
                  <span className="check"></span><span>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rail-section">
            <div className="rail-h"><span>Organization</span></div>
            <div className="rail-list">
              {orgCounts.filter(o=>o.count>0).map(o => (
                <div key={o.id} className="rail-item" data-on={profile.org===o.id} onClick={()=>setProfile({...profile, org: profile.org===o.id?null:o.id})}>
                  <span className="check"></span><span>{o.short}</span>
                  {o.infoUrl && (
                    <a href={o.infoUrl} className="rail-ext" title="Organization information" aria-label={`Open ${o.short} organization site`}
                      target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()}>↗</a>
                  )}
                  <span className="ct">{o.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rail-section">
            <div className="rail-h"><span>Topic</span></div>
            <div className="rail-list">
              {topicCounts.filter(t=>t.count>0).map(t => (
                <div key={t.id} className="rail-item" data-on={profile.topics.includes(t.id)} onClick={()=>toggleArr(profile.topics, t.id, (v)=>setProfile({...profile, topics:v}))}>
                  <span className="check"></span>
                  <span className="topic-dot" style={{background:t.color}}></span>
                  <span>{t.label}</span><span className="ct">{t.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rail-section">
            <div className="rail-h"><span>Document type</span></div>
            <div className="rail-list">
              {D.TYPES.map(t => {
                const ct = D.GUIDELINES.filter(g=>g.type===t.id).length;
                if (!ct) return null;
                return (
                  <div key={t.id} className="rail-item" data-on={typeFilters.includes(t.id)} onClick={()=>toggleArr(typeFilters, t.id, setTypeFilters)}>
                    <span className="check"></span><span>{t.label}</span><span className="ct">{ct}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        <main>
          <div className="crumbs">
            <a onClick={()=>go("home")}>Home</a><span className="sep">›</span><span style={{color:"var(--fg)"}}>Search results</span>
          </div>
          <div className="results-head">
            <div>
              <div className="h1" style={{marginBottom: 4}}>{results.length} document{results.length===1?"":"s"} match</div>
              <div className="mute" style={{fontSize:13.5}}>{describeProfile(profile, D)}</div>
            </div>
            <div className="row gap-2">
              <div className="seg">
                <button className="seg-btn" data-active={sort==="relevance"} onClick={()=>setSort("relevance")}>Relevance</button>
                <button className="seg-btn" data-active={sort==="newest"} onClick={()=>setSort("newest")}>Newest</button>
                <button className="seg-btn" data-active={sort==="alpha"} onClick={()=>setSort("alpha")}>A–Z</button>
              </div>
            </div>
          </div>

          {(profile.role || profile.org || profile.topics.length || typeFilters.length) ? (
            <div className="applied">
              <span className="soft mono" style={{fontSize:11, marginRight:4}}>FILTERED BY</span>
              {profile.role && (() => {
                const r = D.ROLES.find(x=>x.id===profile.role);
                return <Chip key="r" removable onRemove={()=>setProfile({...profile, role:null})}>Role: {r.label}</Chip>;
              })()}
              {profile.org && (() => {
                const o = D.ORGS.find(x=>x.id===profile.org);
                return <Chip key="o" removable onRemove={()=>setProfile({...profile, org:null})}>{o.short}</Chip>;
              })()}
              {profile.topics.map(tid => {
                const t = D.TOPICS.find(x=>x.id===tid);
                return <Chip key={tid} removable onRemove={()=>setProfile({...profile, topics: profile.topics.filter(x=>x!==tid)})}>
                  <span className="topic-dot" style={{background:t.color}}></span>{t.label}
                </Chip>;
              })}
              {typeFilters.map(tid => {
                const t = D.TYPES.find(x=>x.id===tid);
                return <Chip key={tid} removable onRemove={()=>setTypeFilters(typeFilters.filter(x=>x!==tid))}>{t.label}</Chip>;
              })}
              <button className="btn btn-ghost btn-sm" onClick={()=>{ setProfile({role:null,org:null,topics:[]}); setTypeFilters([]); }}>Clear all</button>
            </div>
          ) : null}

          <div className="col gap-3" style={{marginTop: 12}}>
            {results.length === 0 ? (
              <div className="card" data-style="soft" style={{padding:32, textAlign:"center"}}>
                <div className="h2" style={{marginBottom:8}}>No matches yet</div>
                <p className="mute">Try clearing a filter, or broadening the topics on the left.</p>
              </div>
            ) : results.map(g => (
              <GuidelineCard key={g.id} g={g} cardStyle={cardStyle}
                bookmarked={bookmarks.includes(g.id)}
                onBookmark={()=>toggleBookmark(g.id)}
                onOpen={()=>go("detail", g.id)} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function describeProfile(p, D) {
  const parts = [];
  if (p.role) parts.push(D.ROLES.find(r=>r.id===p.role).label);
  if (p.org)  parts.push(D.ORGS.find(o=>o.id===p.org).short);
  if (p.topics.length) parts.push(p.topics.length + " topic" + (p.topics.length===1?"":"s"));
  return parts.length ? "Filtered for " + parts.join(" · ") : "Showing all guidance in scope.";
}

function matches(g, profile) {
  if (profile.role && !g.audiences.includes(profile.role)) return false;
  if (profile.org && g.org !== profile.org) return false;
  if (profile.topics.length && !profile.topics.some(t => g.topics.includes(t))) return false;
  return true;
}

// =====================================================
// DETAIL
// =====================================================
function DetailScreen({ go, id, bookmarks, toggleBookmark }) {
  const D = window.HUB_DATA;
  const g = D.GUIDELINES.find(x => x.id === id) || D.GUIDELINES[0];
  const org = D.ORGS.find(o=>o.id===g.org);
  const topics = g.topics.map(tid => D.TOPICS.find(t=>t.id===tid)).filter(Boolean);
  const related = (g.related || []).map(rid => D.GUIDELINES.find(x=>x.id===rid)).filter(Boolean);
  const isBookmarked = bookmarks.includes(g.id);

  return (
    <div className="container" style={{maxWidth: 1100}}>
      <div className="crumbs">
        <a onClick={()=>go("home")}>Home</a><span className="sep">›</span>
        <a onClick={()=>go("results")}>{org.short}</a><span className="sep">›</span>
        <span style={{color:"var(--fg)"}}>{g.title}</span>
      </div>

      <div className="detail-head">
        <OrgTile org={org} size="lg" />
        <div>
          <div className="row gap-2 wrap" style={{marginBottom: 10}}>
            <span className="mono soft" style={{fontSize:11, textTransform:"uppercase", letterSpacing:"0.06em"}}>{g.type}</span>
            <span className="soft">·</span>
            <Scope scope={g.scope} />
            <span className="soft">·</span>
            <Freshness verified={g.verified} />
          </div>
          <h1 className="h-display" style={{fontSize:"clamp(28px,3.4vw,42px)", marginBottom:12}}>{g.title}</h1>
          <p className="lede">{g.summary}</p>
          <div className="row gap-3 wrap" style={{marginTop:18}}>
            <button className="btn btn-primary" onClick={()=>window.open(g.sourceUrl,"_blank")}>Open full document ↗</button>
            <button className="btn btn-outline" onClick={()=>toggleBookmark(g.id)}>
              {isBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
            </button>
            <button className="btn btn-ghost" onClick={()=>navigator.clipboard?.writeText(window.location.href)}>Copy link</button>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <div>
          <div className="h-section" style={{marginBottom:14}}>Who should read this?</div>
          <ul className="kp-list" style={{marginBottom:36}}>
            {g.whoFor.map((w,i) => (
              <li key={i}><span className="num">·</span><span className="body">{w}</span></li>
            ))}
          </ul>
          <div className="h-section" style={{marginBottom:14}}>Key points</div>
          <ol className="kp-list">
            {g.keyPoints.map((kp, i) => (
              <li key={i}><span className="num">{String(i+1).padStart(2,"0")}</span><span className="body"><strong>{kp.h}.</strong> {kp.b}</span></li>
            ))}
          </ol>
        </div>
        <aside>
          <div className="aside-card">
            <div className="aside-row">
              <span className="k">Source</span>
              <span className="v" style={{textAlign:"right"}}>
                {org.infoUrl ? (
                  <a href={org.infoUrl} className="dim-on-hover" style={{fontWeight:500}} target="_blank" rel="noopener noreferrer">{org.name} ↗</a>
                ) : (
                  org.short
                )}
              </span>
            </div>
            <div className="aside-row"><span className="k">Region / scope</span><span className="v">{g.region}</span></div>
            <div className="aside-row"><span className="k">Last updated</span><span className="v">{fmt(g.updated)}</span></div>
            <div className="aside-row"><span className="k">Verified by hub</span><span className="v">{fmt(g.verified)}</span></div>
            {g.pages && <div className="aside-row"><span className="k">Length</span><span className="v">{g.pages} pages</span></div>}
            <div className="aside-actions">
              <button type="button" className="btn btn-outline btn-sm" onClick={()=>window.open(g.sourceUrl,"_blank")}><span>Open full document</span><span>↗</span></button>
              <button className="btn btn-outline btn-sm"><span>Download PDF</span><span>⤓</span></button>
              <button className="btn btn-outline btn-sm" onClick={()=>toggleBookmark(g.id)}><span>{isBookmarked?"Remove bookmark":"Bookmark"}</span><span>{isBookmarked?"★":"☆"}</span></button>
              <button className="btn btn-outline btn-sm"><span>Share with team</span><span>→</span></button>
            </div>
          </div>
          <div style={{marginTop:24}}>
            <div className="h-section" style={{marginBottom:10}}>Topics</div>
            <div className="row wrap gap-2">
              {topics.map(t => <Topic key={t.id} topic={t} />)}
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <div style={{marginTop: 56}}>
          <div className="h-section" style={{marginBottom:18}}>Related guidance</div>
          <div className="grid grid-3 gap-3">
            {related.map(r => {
              const ro = D.ORGS.find(o=>o.id===r.org);
              return (
                <div key={r.id} className="card card-link" onClick={()=>go("detail", r.id)}>
                  <div className="card-pad">
                    <div className="row gap-2" style={{marginBottom:10}}>
                      <OrgTile org={ro} size="sm" />
                      <span className="soft mono" style={{fontSize:11}}>{ro.short}</span>
                    </div>
                    <div style={{fontFamily:"var(--font-serif)", fontSize:17, lineHeight:1.25, letterSpacing:"-0.01em"}}>{r.title}</div>
                    <p className="mute" style={{fontSize:13, marginTop:8, marginBottom:0}}>{r.summary.slice(0,90)}…</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function fmt(d) {
  return new Date(d).toLocaleDateString("en-CA", { year:"numeric", month:"short", day:"numeric" });
}

// =====================================================
// UPDATES
// =====================================================
function UpdatesScreen({ go, cardStyle }) {
  const D = window.HUB_DATA;
  const [orgF, setOrgF] = useState(null);
  const [topicF, setTopicF] = useState(null);
  let list = D.UPDATES;
  if (orgF) list = list.filter(u=>u.org===orgF);
  if (topicF) list = list.filter(u=>u.topics.includes(topicF));

  const orgsWithUpdates = [...new Set(D.UPDATES.map(u=>u.org))].map(id=>D.ORGS.find(o=>o.id===id));
  const topicsWithUpdates = [...new Set(D.UPDATES.flatMap(u=>u.topics))].map(id=>D.TOPICS.find(t=>t.id===id));

  return (
    <div className="container">
      <div className="crumbs">
        <a onClick={()=>go("home")}>Home</a><span className="sep">›</span><span style={{color:"var(--fg)"}}>Latest updates</span>
      </div>
      <h1 className="h1" style={{marginBottom: 8}}>Latest updates</h1>
      <p className="lede" style={{marginBottom: 24}}>New AI policy and guidance as it lands from BC and pan-Canadian health bodies.</p>

      <div className="row wrap gap-2" style={{marginBottom:14}}>
        <span className="soft mono" style={{fontSize:11, marginRight:4}}>SOURCE</span>
        <Chip active={!orgF} onClick={()=>setOrgF(null)}>All</Chip>
        {orgsWithUpdates.map(o => (
          <Chip key={o.id} active={orgF===o.id} onClick={()=>setOrgF(orgF===o.id?null:o.id)}>{o.short}</Chip>
        ))}
      </div>
      <div className="row wrap gap-2" style={{marginBottom:24}}>
        <span className="soft mono" style={{fontSize:11, marginRight:4}}>TOPIC</span>
        <Chip active={!topicF} onClick={()=>setTopicF(null)}>All</Chip>
        {topicsWithUpdates.map(t => (
          <Chip key={t.id} active={topicF===t.id} onClick={()=>setTopicF(topicF===t.id?null:t.id)}>
            <span className="topic-dot" style={{background:t.color}}></span>{t.label}
          </Chip>
        ))}
      </div>

      <div className="feed">
        {list.map(u => {
          const org = D.ORGS.find(o=>o.id===u.org);
          return (
            <div key={u.id} className="card card-link upd-card" data-style={cardStyle} onClick={()=>go("detail", u.guidelineId)}>
              <div className="card-pad">
                <div className="row between" style={{marginBottom:14}}>
                  <DateStack iso={u.date} />
                  <OrgTile org={org} size="sm" />
                </div>
                <div style={{fontFamily:"var(--font-serif)", fontSize:18, lineHeight:1.25, letterSpacing:"-0.01em"}}>{u.title}</div>
                <p className="mute" style={{fontSize:13, marginTop:10, marginBottom:14}}>{u.summary}</p>
                <div className="row wrap gap-2">
                  {u.topics.map(tid => <Topic key={tid} topic={D.TOPICS.find(t=>t.id===tid)} />)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// =====================================================
// BOOKMARKS
// =====================================================
function BookmarksScreen({ go, bookmarks, toggleBookmark }) {
  const D = window.HUB_DATA;
  const items = bookmarks.map(id => D.GUIDELINES.find(g=>g.id===id)).filter(Boolean);

  return (
    <div className="container" style={{maxWidth: 900}}>
      <div className="crumbs">
        <a onClick={()=>go("home")}>Home</a><span className="sep">›</span><span style={{color:"var(--fg)"}}>Saved</span>
      </div>
      <div className="row between" style={{marginBottom: 24, alignItems:"flex-end"}}>
        <div>
          <h1 className="h1" style={{marginBottom: 4}}>Saved guidance</h1>
          <p className="mute" style={{fontSize:13.5}}>{items.length} item{items.length===1?"":"s"} · stored on this device</p>
        </div>
        {items.length > 0 && <button className="btn btn-outline btn-sm">Share with team →</button>}
      </div>

      {items.length === 0 ? (
        <div className="card" data-style="soft" style={{padding:48, textAlign:"center"}}>
          <div className="h2" style={{marginBottom:8}}>No bookmarks yet</div>
          <p className="mute" style={{marginBottom: 18}}>Open a guideline and tap the star to save it here.</p>
          <button className="btn btn-primary" onClick={()=>go("results")}>Browse all guidance →</button>
        </div>
      ) : (
        <div className="card" data-style="outlined">
          {items.map(g => {
            const org = D.ORGS.find(o=>o.id===g.org);
            return (
              <div key={g.id} className="bm-row" onClick={()=>go("detail", g.id)}>
                <button className="icon-btn" style={{color:"var(--accent-warm)"}} onClick={(e)=>{e.stopPropagation(); toggleBookmark(g.id);}}>★</button>
                <OrgTile org={org} size="sm" />
                <div>
                  <div className="ttl">{g.title}</div>
                  <div className="sub">
                    <span>{org.short}</span>
                    <span>·</span>
                    <Scope scope={g.scope} />
                    <span>·</span>
                    <Freshness verified={g.verified} />
                  </div>
                </div>
                <div className="soft mono" style={{fontSize:11}}>→</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const { Composer, OrgTile, Topic, Scope, Freshness, Chip, GuidelineCard } = window.UI;
window.SCREENS = { HomeScreen, ResultsScreen, DetailScreen, UpdatesScreen, BookmarksScreen };
