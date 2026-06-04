/* ============================================================
   KHUSHI SRIVASTAVA — PM PORTFOLIO  |  script.js
   ============================================================ */
'use strict';

/* ── EmailJS ────────────────────────────────────────────────
   1. Go to https://www.emailjs.com and create a free account.
   2. Add an Email Service (Gmail) → note the Service ID.
   3. Create a Template with variables:
      {{from_name}}, {{from_email}}, {{organisation}}, {{purpose}}, {{message}}
   4. Copy your Public Key from Account → API Keys.
   5. Replace the three strings below.
─────────────────────────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const prefersReducedMotion =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE DATA  (from resume — reverse-chronological)
═══════════════════════════════════════════════════════════ */
const experience = [
  {
    id: 'exp-1',
    org: 'Ashoka Builders India Pvt. Ltd.',
    orgShort: 'AB',
    role: 'Growth Intern — Product',
    duration: 'Jan 2026 – Present',
    location: 'Hyderabad, India',
    current: true,
    bullets: [
      'Analysed real homebuyer conversations and behaviour to identify product gaps and improve the buying journey.',
      'Wrote PRDs and proposed AI calling agent and chatbot features to improve lead qualification.',
      'Recommended CRM and database improvements using customer insights to support better product decisions.',
    ],
  },
  {
    id: 'exp-2',
    org: 'KEERTHIBIZPLUS4U IT Services Pvt. Ltd.',
    orgShort: 'KB',
    role: 'Frontend Developer Intern',
    duration: 'Jun 2025 – Sep 2025',
    location: 'Hyderabad, India (Remote)',
    current: false,
    bullets: [
      'Implemented responsive front-end solutions for <strong class="metric">3</strong> key projects impacting over <strong class="metric">100,000</strong> users.',
      'Delivered faster loading times and improved overall user experience, contributing to an increase in user engagement.',
    ],
  },
  {
    id: 'exp-3',
    org: 'The Music Society of AKGEC',
    orgShort: 'MS',
    role: 'Co-ordinator',
    duration: 'May 2023 – May 2025',
    location: 'Remote',
    current: false,
    bullets: [
      'Coordinated activities and managed responsibilities to achieve outreach goals, demonstrating strong organisational and problem-solving abilities.',
      'Led event promotion and community engagement initiatives, developing leadership potential and meeting outreach objectives.',
    ],
  },
  {
    id: 'exp-4',
    org: 'IMUN',
    orgShort: 'MUN',
    role: 'Campus Ambassador Intern',
    duration: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    current: false,
    bullets: [
      'Cultivated strong communication and interpersonal skills by promoting events and engaging diverse audiences.',
      'Articulated complex information clearly to bridge technical and non-technical stakeholders.',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   EDUCATION DATA  (reverse-chronological)
═══════════════════════════════════════════════════════════ */
const education = [
  {
    id: 'edu-1',
    institution: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
    institutionShort: 'AKTU',
    degree: 'B.Tech — Computer Science & Engineering',
    year: '2022 – 2026',
    location: 'Ghaziabad',
    score: 'CGPA: 8.3',
    board: null,
    extras: [
      'Certifications in Product Management, Excel, Prompt Engineering',
      'Coursework: DSA, OS, OOP, DBMS, Product Management',
    ],
  },
  {
    id: 'edu-2',
    institution: 'The Lucknow Public Collegiate',
    institutionShort: 'LPC',
    degree: 'Senior Secondary (Class XII)',
    year: '2020 – 2021',
    location: 'Lucknow',
    score: '89%',
    board: 'CBSE',
    extras: [],
  },
  {
    id: 'edu-3',
    institution: 'The Lucknow Public Collegiate',
    institutionShort: 'LPC',
    degree: 'Secondary (Class X)',
    year: '2018 – 2019',
    location: 'Lucknow',
    score: '88%',
    board: 'CBSE',
    extras: [],
  },
];

/* ═══════════════════════════════════════════════════════════
   PROJECTS DATA  (from resume)
═══════════════════════════════════════════════════════════ */
const projects = [
  {
    id: 'proj-1',
    title: 'Mentor Connect',
    type: 'Project',
    typeSlug: 'project',
    problem: 'Students and early-career professionals lack accessible, structured mentorship, creating a high barrier to finding the right guidance.',
    solution: 'Defined a product vision to create a platform that reduces the barrier for mentorship. Developed and managed the product roadmap, prioritising core features for a seamless user experience.',
    impact: 'Delivered a functional mentorship platform with a clear user journey from sign-up to first mentor session, enabling structured 1:1 connections at scale.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Product Roadmap', 'User Stories'],
    details: `
      <p><strong>Role:</strong> Led product vision, roadmap definition, and feature prioritisation. Collaborated with development to ensure build aligned with user needs.</p>
      <p style="margin-top:.75rem"><strong>Key decisions:</strong> Prioritised mentor onboarding flow first (highest friction point), followed by matching algorithm, then scheduling. Used MoSCoW framework to scope MVP.</p>
      <p style="margin-top:.75rem"><strong>Outcome:</strong> Shipped an MVP covering profile creation, mentor browsing, and session request flow. Positioned for future integration of AI-based mentor matching.</p>
    `,
  },
  {
    id: 'proj-2',
    title: 'Sorting Visualizer',
    type: 'Project',
    typeSlug: 'project',
    problem: 'Computer science students struggle to intuitively understand how sorting algorithms work through text and static diagrams alone.',
    solution: 'Built an interactive visualisation tool for 5+ sorting algorithms using React, allowing users to observe step-by-step execution in real time.',
    impact: 'Utilised user research and A/B testing principles to increase engagement; improved comprehension by making abstract algorithmic logic visually tangible.',
    tools: ['React', 'JavaScript', 'A/B Testing', 'User Research', 'Sorting Algorithms'],
    details: `
      <p><strong>Algorithms visualised:</strong> Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort.</p>
      <p style="margin-top:.75rem"><strong>UX decisions:</strong> Added speed control, step-through mode, and colour coding for comparisons vs. swaps — based on user feedback that the initial version moved too fast to follow.</p>
      <p style="margin-top:.75rem"><strong>PM lens:</strong> Treated this as a product — ran informal usability tests with 5 peers, iterated on the control layout, and documented learnings as if writing release notes.</p>
    `,
  },
  {
    id: 'proj-3',
    title: 'Interactive Job Application Tracker',
    type: 'Project',
    typeSlug: 'project',
    problem: 'Job seekers managing multiple applications across platforms face disorganisation, missed follow-ups, and inability to track pipeline stage.',
    solution: 'Built a Kanban-style job application tracker with drag-and-drop functionality, dynamic forms, and a clean, intuitive UI for managing application stages.',
    impact: 'Identified a clear user problem (frustration of a disorganised job search), defined user stories, and delivered a tool that consolidates the entire job-hunt workflow in one view.',
    tools: ['React', 'Data Analytics', 'User Stories', 'Kanban', 'Drag-and-Drop UI'],
    details: `
      <p><strong>Problem discovery:</strong> Started by interviewing 8 peers about their job search process. Identified "losing track of where I applied" as the #1 frustration.</p>
      <p style="margin-top:.75rem"><strong>Feature set:</strong> Stages (Wishlist → Applied → Interview → Offer → Rejected), drag-and-drop between stages, notes per application, deadline reminders.</p>
      <p style="margin-top:.75rem"><strong>PM artefacts produced:</strong> User flow diagram, prioritised feature list, and a simple success metric — "time to log an application < 30 seconds".</p>
    `,
  },
  {
    id: 'proj-4',
    title: 'AI Calling Agent — PRD Proposal',
    type: 'Product Analysis',
    typeSlug: 'product-analysis',
    problem: 'Real estate sales teams at Ashoka Builders spend significant manual effort on initial lead qualification calls, leading to slow response times and missed leads.',
    solution: 'Proposed an AI calling agent feature: automated first-touch calls using a conversational AI to qualify leads before routing to human agents.',
    impact: 'PRD approved by product stakeholders. Estimated reduction in manual qualification effort and faster lead response time, directly improving conversion funnel.',
    tools: ['PRD Writing', 'CRM Analysis', 'User Interviews', 'Stakeholder Management', 'AI Product Design'],
    details: `
      <p><strong>Research:</strong> Analysed real homebuyer conversations to identify recurring qualification questions. Mapped the current call flow and pinpointed drop-off points.</p>
      <p style="margin-top:.75rem"><strong>PRD structure:</strong> Problem statement → user personas (buyer, sales agent) → proposed flow → success metrics (qualification rate, time-to-first-call, CSAT) → edge cases → phased rollout.</p>
      <p style="margin-top:.75rem"><strong>Key insight:</strong> 70% of qualification questions were the same across all leads — making automation both feasible and high-value.</p>
    `,
  },
];

/* ═══════════════════════════════════════════════════════════
   CHAT KNOWLEDGE BASE  (resume-grounded, first-person, formal)
═══════════════════════════════════════════════════════════ */
const chatKB = {
  education: `I am currently pursuing a B.Tech in Computer Science & Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU), graduating in 2026, with a CGPA of 8.3. I completed my Class XII from The Lucknow Public Collegiate under CBSE in 2021 with 89%, and Class X from the same institution in 2019 with 88%.`,

  skills: `My core competencies span product management, data analytics, and technical development. On the PM side, I work with Agile, Scrum, Jira, PRD writing, and roadmapping. For analytics, I use Google Analytics, Tableau, MySQL, and Excel. On the technical side, I am proficient in HTML, CSS, JavaScript, and React. I also actively leverage AI tools such as Claude, Kiro, and Cursor in my product workflow.`,

  experience: `I am currently a Growth Intern (Product) at Ashoka Builders India Pvt. Ltd., where I analyse homebuyer behaviour, write PRDs, and propose AI-driven features. Previously, I interned as a Frontend Developer at KEERTHIBIZPLUS4U IT Services, contributing to projects that served over 100,000 users. I have also served as Co-ordinator at The Music Society of AKGEC and as a Campus Ambassador at IMUN.`,

  projects: `I have built three technical products: Mentor Connect (a mentorship platform), a Sorting Visualizer (an interactive algorithm learning tool), and an Interactive Job Application Tracker (a Kanban-style pipeline manager). I have also written a PRD proposal for an AI Calling Agent at Ashoka Builders. Please scroll to the Projects section to read the full details of each.`,

  contact: `You may reach me at khushii0711@gmail.com or connect with me on LinkedIn at linkedin.com/in/khushi-srivastava-a5947b2a6. I am currently based in Hyderabad, Telangana, and open to APM and PM opportunities.`,

  default: `I am Khushi Srivastava — an aspiring Product Manager with a foundation in engineering. I am actively seeking APM and PM roles. You may ask me about my education, skills, experience, or projects, or use the contact form to get in touch directly.`,
};

const chatTriggers = {
  educat:     'education',
  degree:     'education',
  college:    'education',
  school:     'education',
  cgpa:       'education',
  tenth:      'education',
  twelfth:    'education',
  skill:      'skills',
  tool:       'skills',
  technolog:  'skills',
  proficien:  'skills',
  experi:     'experience',
  intern:     'experience',
  work:       'experience',
  job:        'experience',
  role:       'experience',
  project:    'projects',
  built:      'projects',
  product:    'projects',
  contact:    'contact',
  email:      'contact',
  reach:      'contact',
  linkedin:   'contact',
};

/* ═══════════════════════════════════════════════════════════
   RENDER: EXPERIENCE
═══════════════════════════════════════════════════════════ */
function renderExperience() {
  const list = document.getElementById('exp-list');
  if (!list) return;
  list.innerHTML = experience.map(e => `
    <div class="exp-item fade-up" id="${e.id}">
      <div class="exp-logo" aria-hidden="true">${e.orgShort}</div>
      <div>
        <div class="exp-header">
          <span class="exp-org">${e.org}</span>
          ${e.current ? '<span class="exp-status"><span class="dot"></span>Currently Working</span>' : ''}
        </div>
        <p class="exp-date">${e.duration}</p>
        <p class="exp-location">${e.location}</p>
        <p class="exp-role">${e.role}</p>
        <ul class="exp-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════
   RENDER: EDUCATION
═══════════════════════════════════════════════════════════ */
function renderEducation() {
  const list = document.getElementById('edu-list');
  if (!list) return;
  list.innerHTML = education.map(e => `
    <div class="edu-item fade-up" id="${e.id}">
      <div class="edu-logo" aria-hidden="true">${e.institutionShort}</div>
      <div>
        <p class="edu-institution">${e.institution}</p>
        <p class="edu-degree">${e.degree}</p>
        <p class="edu-year">${e.year}${e.location ? ' &nbsp;·&nbsp; ' + e.location : ''}</p>
        ${e.board ? `<p class="edu-board">Board: ${e.board}</p>` : ''}
        ${e.score ? `<p class="edu-score">${e.score}</p>` : ''}
        ${e.extras && e.extras.length
          ? `<ul class="edu-extras">${e.extras.map(x => `<li>${x}</li>`).join('')}</ul>`
          : ''}
      </div>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════════
   RENDER: PROJECTS
═══════════════════════════════════════════════════════════ */
function renderProjects(list) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  if (!list || list.length === 0) {
    grid.innerHTML = `
      <div class="projects-empty">
        <p>Content coming soon. Check back shortly.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="project-card fade-up" data-slug="${p.typeSlug}" id="${p.id}">
      <span class="project-type-pill">${p.type}</span>
      <h3 class="project-title">${p.title}</h3>
      <div>
        <p class="project-section-label problem">Problem</p>
        <p class="project-section-text">${p.problem}</p>
      </div>
      <div>
        <p class="project-section-label solution">Solution</p>
        <p class="project-section-text">${p.solution}</p>
      </div>
      <div>
        <p class="project-section-label impact">Impact</p>
        <p class="project-section-text">${p.impact}</p>
      </div>
      <div class="project-tools">
        ${p.tools.map(t => `<span class="project-tool-tag">${t}</span>`).join('')}
      </div>
      <button class="expand-btn" aria-expanded="false" aria-controls="${p.id}-details">
        Read More ↓
      </button>
      <div class="project-details" id="${p.id}-details" hidden>
        ${p.details}
      </div>
    </article>
  `).join('');

  // Expand / collapse via event delegation
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.expand-btn');
    if (!btn) return;
    const detailsEl = document.getElementById(btn.getAttribute('aria-controls'));
    if (!detailsEl) return;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    detailsEl.hidden = isOpen;
    btn.textContent = isOpen ? 'Read More ↓' : 'Show Less ↑';
  });
}

/* ═══════════════════════════════════════════════════════════
   PROJECT FILTER
═══════════════════════════════════════════════════════════ */
function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  function applyFilter(slug) {
    filterBtns.forEach(b =>
      b.setAttribute('aria-pressed', b.dataset.filter === slug ? 'true' : 'false'));

    if (slug === 'all') {
      // Show all projects from the full data array
      renderProjects(projects);
    } else if (slug === 'product-analysis' || slug === 'feature-design') {
      // These tabs are reserved — show placeholder
      const grid = document.getElementById('projects-grid');
      if (grid) {
        grid.innerHTML = `
          <div class="projects-empty">
            <p><strong>${slug === 'product-analysis' ? 'Product Analysis' : 'Feature Design'}</strong> case studies will be added soon.<br/>
            Please check back shortly or <a href="#contact" style="color:var(--accent)">get in touch</a> to learn more.</p>
          </div>`;
      }
    } else {
      renderProjects(projects.filter(p => p.typeSlug === slug));
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });
}

/* ═══════════════════════════════════════════════════════════
   LIVE CLOCK
═══════════════════════════════════════════════════════════ */
function initClock() {
  const el = document.getElementById('live-time');
  if (!el) return;
  const update = () => {
    el.textContent = new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
    });
  };
  update();
  if (!prefersReducedMotion) setInterval(update, 1000);
}

/* ═══════════════════════════════════════════════════════════
   SCROLL FADE-IN ANIMATIONS
═══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    return;
  }
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════ */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link');
  if (!navbar || !hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  });

  // Active link highlight
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section[id]').forEach(s => io.observe(s));
  }
}

/* ═══════════════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════════════ */
function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function initContactForm() {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const btn    = document.getElementById('submit-btn');
  if (!form || !status || !btn) return;

  if (typeof emailjs !== 'undefined') {
    try { emailjs.init(EMAILJS_PUBLIC_KEY); } catch (_) {}
  }

  // Clear error on input
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('is-invalid');
      const errSpan = field.nextElementSibling;
      if (errSpan && errSpan.classList.contains('field-error')) errSpan.textContent = '';
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Reset
    form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
    form.querySelectorAll('.field-error').forEach(el => { el.textContent = ''; });
    status.textContent = ''; status.className = '';

    const name    = document.getElementById('cf-name');
    const email   = document.getElementById('cf-email');
    const org     = document.getElementById('cf-org');
    const purpose = document.getElementById('cf-purpose');
    const message = document.getElementById('cf-message');

    const errors = {};
    if (!name.value.trim())             errors['cf-name']    = 'Please enter your full name.';
    if (!email.value.trim())            errors['cf-email']   = 'Please enter your email address.';
    else if (!validateEmail(email.value)) errors['cf-email'] = 'Please enter a valid email address.';
    if (!purpose.value)                 errors['cf-purpose'] = 'Please select a purpose.';
    if (!message.value.trim())          errors['cf-message'] = 'Please write a message.';

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([id, msg]) => {
        const field = document.getElementById(id);
        if (!field) return;
        field.classList.add('is-invalid');
        const errSpan = field.nextElementSibling;
        if (errSpan && errSpan.classList.contains('field-error')) errSpan.textContent = msg;
      });
      form.querySelector('.is-invalid')?.focus();
      return;
    }

    if (typeof emailjs === 'undefined') {
      status.innerHTML =
        'Message service is not configured yet. Please email me directly at ' +
        '<a href="mailto:khushii0711@gmail.com">khushii0711@gmail.com</a>.';
      status.className = 'error';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name:    name.value.trim(),
      from_email:   email.value.trim(),
      organisation: org ? org.value.trim() : '',
      purpose:      purpose.value,
      message:      message.value.trim(),
    })
    .then(() => {
      status.textContent = 'Thank you. Your message has been sent — I will get back to you shortly.';
      status.className = 'success';
      form.reset();
    })
    .catch(() => {
      status.innerHTML =
        'Something went wrong. Please try again or email me directly at ' +
        '<a href="mailto:khushii0711@gmail.com">khushii0711@gmail.com</a>.';
      status.className = 'error';
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    });
  });
}

/* ═══════════════════════════════════════════════════════════
   CHAT WIDGET
═══════════════════════════════════════════════════════════ */
function initChat() {
  const toggle   = document.getElementById('chat-toggle');
  const win      = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const input    = document.getElementById('chat-input');
  const sendBtn  = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');
  if (!toggle || !win) return;

  toggle.addEventListener('click', () => {
    const isHidden = win.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!isHidden));
    if (!isHidden) setTimeout(() => input.focus(), 50);
  });

  closeBtn.addEventListener('click', () => {
    win.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  });

  // Quick-question buttons
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.q;
      appendUserMsg(btn.textContent.trim());
      setTimeout(() => appendBotMsg(chatKB[key] || chatKB.default), 450);
    });
  });

  function sendMessage() {
    const val = input.value.trim();
    if (!val) return;
    appendUserMsg(val);
    input.value = '';

    const lc = val.toLowerCase();
    let reply = chatKB.default;
    for (const [trigger, key] of Object.entries(chatTriggers)) {
      if (lc.includes(trigger)) { reply = chatKB[key]; break; }
    }
    setTimeout(() => appendBotMsg(reply), 500);
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  function appendUserMsg(text) {
    const el = document.createElement('div');
    el.className = 'chat-user-msg';
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function appendBotMsg(text) {
    const el = document.createElement('div');
    el.className = 'chat-msg';
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderEducation();
  renderProjects(projects);   // show all projects by default
  initFilter();
  initNav();
  initClock();
  initContactForm();
  initChat();
  // Run scroll animations after render so dynamically injected .fade-up elements are observed
  requestAnimationFrame(() => requestAnimationFrame(() => initScrollAnimations()));
});
