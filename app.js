const app=document.getElementById("app");
const nav=(active)=>`<header class="nav"><div class="brand">GLOBAXUS</div><nav class="navlinks">
<button onclick="go('profile')">Profile</button><button onclick="go('opportunities')">Opportunities</button><button onclick="go('dashboard')">Dashboard</button>
</nav></header>`;

const opps=[
 {id:1,title:"Build a Student Innovation Platform",org:"Globaxus Innovation Lab",tags:["UI/UX","Web Development","Innovation"],desc:"Work with a student team to design and build a technology solution that creates real-world impact."},
 {id:2,title:"Campus Digital Skills Project",org:"Innovation Hub",tags:["Python","Data Analysis","Technology"],desc:"Help develop a digital skills initiative for university students."},
 {id:3,title:"Youth Tech Challenge",org:"FutureTech",tags:["Research","Problem Solving","Innovation"],desc:"Explore a real community problem and prototype a technology-based solution."}
];

function go(screen,id=1){location.hash=screen+(id?`?id=${id}`:"");render()}
function layout(content,active=""){app.innerHTML=nav(active)+`<main class="main">${content}</main>`}

function welcome(){app.innerHTML=`<div class="screen"><main class="main center" style="padding-top:150px">
<h1 class="h1">Build Your Future With Globaxus</h1><p class="lead">Choose how you want to get started.</p>
<div class="cards">
<div class="card"><h3 class="h3">I'm a Student</h3><p class="muted">Build your profile, discover opportunities and gain real experience.</p><button class="btn" onclick="go('profile',0)">Continue as Student</button></div>
<div class="card"><h3 class="h3">I'm a Business</h3><p class="muted">Coming soon — post challenges and discover student talent.</p><button class="btn secondary" disabled>Coming Soon</button></div>
</div></main></div>`}

function profile(){layout(`<h2 class="h2">Create Your Student Profile</h2><p class="lead" style="margin-left:0">Tell Globaxus what you can build, what you're learning and what opportunities you're looking for.</p>
<div class="form-grid"><section class="card"><h3 class="h3">Basic Information</h3>
<div class="field"><label>Full Name</label><input class="input" value="Phuti Moholwa"></div>
<div class="field"><label>Field of Study</label><input class="input" value="ICT Application Development"></div>
</section>
<section class="card"><h3 class="h3">Your Skills</h3><div class="tags"><span class="tag">Python</span><span class="tag">Web Development</span><span class="tag">UI/UX Design</span><span class="tag">Data Analysis</span></div></section></div>
<div class="actions"><button class="btn" onclick="go('skills',0)">Continue</button></div>`,"profile")}

function skills(){layout(`<h2 class="h2">What Do You Want to Build?</h2><p class="lead" style="margin-left:0">Tell us what interests you so we can help you discover relevant opportunities and projects.</p>
<section class="section"><h3 class="h3">What interests you?</h3><div class="tags"><span class="tag">Technology</span><span class="tag">AI</span><span class="tag">Web Development</span><span class="tag">Data</span><span class="tag">Robotics</span><span class="tag">UI/UX</span><span class="tag">Entrepreneurship</span><span class="tag">Innovation</span></div></section>
<section class="section"><h3 class="h3">What are you looking for?</h3><div class="choice-grid"><button class="choice">Projects</button><button class="choice">Internships</button><button class="choice">Business Opportunities</button></div></section>
<div class="actions"><button class="btn" onclick="go('opportunities',0)">Continue</button></div>`,"profile")}

function opportunities(){layout(`<h2 class="h2">Opportunities For You</h2><p class="muted">Discover opportunities matched to your skills and interests.</p>
<div class="section" style="display:flex;gap:12px"><input class="input" placeholder="Search opportunities..." style="max-width:650px"><button class="btn secondary">Filter</button></div>
<div class="section"><p style="font-size:12px;font-weight:700;color:#5B5BF7;letter-spacing:.08em">RECOMMENDED FOR YOU</p><div class="opps">${opps.map(o=>`<article class="opp"><div><h3>${o.title}</h3><div class="org">${o.org}</div><p class="muted">${o.desc}</p><div class="tags">${o.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></div><button class="btn" onclick="go('details',${o.id})">View Opportunity</button></article>`).join("")}</div></div>`,"opportunities")}

function details(){const id=Number(new URLSearchParams(location.hash.split("?")[1]||"").get("id"))||1,o=opps.find(x=>x.id===id)||opps[0];layout(`<h2 class="h2">${o.title}</h2><div class="org">${o.org}</div><p class="lead" style="margin-left:0">${o.desc}</p>
<section class="section"><h3 class="h3">What You'll Work On</h3><p class="muted">Research the problem, collaborate with other students, develop a practical solution and present your progress.</p></section>
<section class="section"><h3 class="h3">Skills Needed</h3><div class="tags">${o.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></section>
<div class="actions"><button class="btn" onclick="go('application',${o.id})">Apply Now</button></div>`)}
function application(){layout(`<h2 class="h2">Apply for Opportunity</h2><p class="lead" style="margin-left:0">Tell the opportunity owner why you're interested and what you can contribute.</p>
<div class="card" style="max-width:760px"><div class="field"><label>Why are you interested?</label><textarea class="textarea" placeholder="Tell us why you want to join this opportunity..."></textarea></div><div class="field"><label>What can you contribute?</label><textarea class="textarea" placeholder="Describe your skills, experience or ideas..."></textarea></div><p class="muted" style="font-size:13px">Your application will be reviewed by the opportunity owner.</p><button class="btn" onclick="go('submitted',0)">Submit Application</button></div>`)}
function submitted(){layout(`<div class="center" style="padding-top:60px"><div class="success">✓</div><h2 class="h2">Application Submitted!</h2><p class="lead">Your application has been sent to the opportunity owner.</p><h3 class="h3">Build a Student Innovation Platform</h3><div class="org">Globaxus Innovation Lab</div><button class="btn" onclick="go('dashboard',0)">View My Applications</button></div>`)}
function dashboard(){layout(`<h2 class="h2">Welcome to Globaxus</h2><p class="lead" style="margin-left:0">Your skills, opportunities and progress — all in one place.</p>
<div class="summary"><div class="card stat"><div class="muted">Skills</div><div class="number">4</div><div class="muted">Skills Added</div></div><div class="card stat"><div class="muted">Applications</div><div class="number">1</div><div class="muted">Application Submitted</div></div><div class="card stat"><div class="muted">Opportunities</div><div class="number">3</div><div class="muted">Recommended For You</div></div></div>
<section class="section"><h3 class="h3">Your Progress</h3><p class="muted">Profile completion</p><div class="progress-bg"><div class="progress-fill"></div></div></section>
<section class="section"><h3 class="h3">Recommended Opportunities</h3><p class="muted">Opportunities matched to your skills and interests.</p><article class="opp"><div><h3>${opps[0].title}</h3><div class="org">${opps[0].org}</div><div class="tags">${opps[0].tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div></div><button class="btn" onclick="go('details',1)">View Opportunity</button></article></section>`,"dashboard")}

function render(){const s=location.hash.replace("#","").split("?")[0]||"welcome";({welcome,profile,skills,opportunities,details,application,submitted,dashboard}[s]||welcome)()}
window.addEventListener("hashchange",render);render();
