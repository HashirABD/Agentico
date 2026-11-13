// Agentico Core Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Generate Activity Heatmap Bar (faithful translation of footer.PNG mosaic strip)
  initHeatmap();

  // Initialize ROI Calculator
  initRoiCalculator();

  // Initialize Scroll Listeners for Back to Top
  initScrollListeners();

  // Initialize Live Activity Toasts
  initLiveToasts();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

// Heatmap Generation (inspired by Jack & Jill's signature colorful telemetry grid at the bottom of the page)
function initHeatmap() {
  const container = document.getElementById('mosaic-heatmap-bar');
  if (!container) return;

  // Palette inspired by reference: mostly subtle grey/cream with scattered vibrant pastel pops
  const baseColors = ['#EAE8E2', '#E2DFD7', '#EAE8E2', '#F0EFEA', '#DFDCD4'];
  const accentColors = [
    '#38BDF8', // Cyan
    '#34D399', // Emerald
    '#FBBF24', // Amber
    '#F472B6', // Pink
    '#A78BFA', // Violet
    '#FB923C', // Orange
    '#60A5FA'  // Blue
  ];

  const totalCells = window.innerWidth > 640 ? 48 : 24;
  container.innerHTML = '';

  for (let i = 0; i < totalCells; i++) {
    const tile = document.createElement('div');
    tile.className = 'h-3 rounded-[3px] transition-all duration-300 hover:scale-125 hover:z-10 cursor-pointer';
    
    // ~20% chance of being a vibrant accent, else base subtle tone
    const isAccent = Math.random() < 0.22;
    const color = isAccent 
      ? accentColors[Math.floor(Math.random() * accentColors.length)]
      : baseColors[Math.floor(Math.random() * baseColors.length)];
    
    tile.style.backgroundColor = color;
    tile.title = isAccent ? 'Autonomous Agent Execution Node' : 'Idle / Standby Node';
    container.appendChild(tile);
  }

  // Periodic random pulse to simulate live AI neural network telemetry
  setInterval(() => {
    const tiles = container.children;
    if (!tiles.length) return;
    const randomIndex = Math.floor(Math.random() * tiles.length);
    const tile = tiles[randomIndex];
    const prevColor = tile.style.backgroundColor;
    tile.style.backgroundColor = accentColors[Math.floor(Math.random() * accentColors.length)];
    setTimeout(() => {
      tile.style.backgroundColor = prevColor;
    }, 1800);
  }, 900);
}

// Feature Section Tab Switcher
function switchFeatureTab(tabId) {
  // Update buttons
  const buttons = document.querySelectorAll('.feature-tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-white', 'text-ink', 'shadow-sm');
    btn.classList.add('text-ink-muted');
  });

  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-white', 'text-ink', 'shadow-sm');
    activeBtn.classList.remove('text-ink-muted');
  }

  // Update tab contents
  const contents = document.querySelectorAll('.feature-tab-content');
  contents.forEach(content => {
    content.classList.add('hidden');
    content.classList.remove('block');
  });

  const activeContent = document.getElementById(`tab-content-${tabId}`);
  if (activeContent) {
    activeContent.classList.remove('hidden');
    activeContent.classList.add('block');
  }

  // Re-run Lucide icons in case new icons appeared
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Interactive ROI Calculator Logic
function initRoiCalculator() {
  const teamSlider = document.getElementById('roi-team-slider');
  const hoursSlider = document.getElementById('roi-hours-slider');
  const rateSlider = document.getElementById('roi-rate-slider');

  if (!teamSlider || !hoursSlider || !rateSlider) return;

  function calculate() {
    const team = parseInt(teamSlider.value, 10);
    const hours = parseInt(hoursSlider.value, 10);
    const rate = parseInt(rateSlider.value, 10);

    // Update labels
    document.getElementById('roi-team-value').textContent = `${team} team members`;
    document.getElementById('roi-hours-value').textContent = `${hours} hrs / week`;
    document.getElementById('roi-rate-value').textContent = `$${rate} / hr`;

    // Mathematical calculations
    // Total weekly hours = team * hours
    // Monthly hours = weekly * 4.33
    // Agentico automates ~ 70% of repetitive tasks
    const monthlyHoursTotal = team * hours * 4.33;
    const monthlyHoursSaved = Math.round(monthlyHoursTotal * 0.70);
    const monthlyDollarsSaved = Math.round(monthlyHoursSaved * rate);
    const annualDollarsSaved = monthlyDollarsSaved * 12;

    // Display formatted
    document.getElementById('roi-annual-savings').textContent = `$${annualDollarsSaved.toLocaleString()}`;
    document.getElementById('roi-hours-saved').textContent = `${monthlyHoursSaved.toLocaleString()} hrs / mo`;
  }

  teamSlider.addEventListener('input', calculate);
  hoursSlider.addEventListener('input', calculate);
  rateSlider.addEventListener('input', calculate);

  calculate();
}

// Back to Top Button
function initScrollListeners() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// FAQ Accordion Toggle
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('i');
  const isHidden = content.classList.contains('hidden');

  // Close all other FAQs
  document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('#faq-accordion i').forEach(i => i.style.transform = 'rotate(0deg)');

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Modals Handling
function openContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }
}

function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
}

function openSprintBooking(plan) {
  openContactModal();
  const title = document.getElementById('modal-title');
  const select = document.getElementById('modal-agent-select');
  if (title) title.textContent = `Reserve ${plan}`;
  if (select) {
    if (plan.includes('Enterprise')) {
      select.value = 'Bespoke Multi-Agent Enterprise Fleet';
    } else {
      select.value = 'Atlas — Operations & Customer Support';
    }
  }
}

function openAgentSpecs(agentName) {
  openContactModal();
  const select = document.getElementById('modal-agent-select');
  if (select) {
    for (let opt of select.options) {
      if (opt.text.includes(agentName)) {
        select.value = opt.value;
        break;
      }
    }
  }
}

function openContactModalWithROI() {
  openContactModal();
  const textarea = document.querySelector('#contact-form textarea');
  const savings = document.getElementById('roi-annual-savings')?.textContent || '$59,000';
  const hours = document.getElementById('roi-hours-saved')?.textContent || '336 hrs';
  if (textarea) {
    textarea.value = `ROI Assessment Request: Our team has ~${document.getElementById('roi-team-value')?.textContent}. We projected an annual savings of ${savings} and ${hours}/mo saved with Agentico. We would like to review the architecture blueprint.`;
  }
}

function selectAgentForDemo(agentKey) {
  openDemoModal();
  setSandboxAgent(agentKey);
  runSandboxSimulation();
}

function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');
  if (form && success) {
    form.classList.add('hidden');
    success.classList.remove('hidden');
  }
}

// Live Demo Sandbox Simulation
let currentSandboxAgent = 'atlas';

function openDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }
}

function closeDemoModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
}

function setSandboxAgent(agent) {
  currentSandboxAgent = agent;
  const btnAtlas = document.getElementById('sandbox-btn-atlas');
  const btnAura = document.getElementById('sandbox-btn-aura');

  if (agent === 'atlas') {
    btnAtlas.className = 'px-4 py-1.5 rounded-full text-xs font-semibold bg-ink text-white';
    btnAura.className = 'px-4 py-1.5 rounded-full text-xs font-semibold bg-divider/60 text-ink';
  } else {
    btnAtlas.className = 'px-4 py-1.5 rounded-full text-xs font-semibold bg-divider/60 text-ink';
    btnAura.className = 'px-4 py-1.5 rounded-full text-xs font-semibold bg-ink text-white';
  }
}

function runSandboxSimulation() {
  const terminal = document.getElementById('sandbox-terminal');
  const runBtn = document.getElementById('run-simulation-btn');
  if (!terminal) return;

  runBtn.disabled = true;
  runBtn.classList.add('opacity-50', 'cursor-not-allowed');

  terminal.innerHTML = '';

  const simulationStepsAtlas = [
    { text: '>> [00:00.12] INCOMING EVENT: Customer ticket #4910 via Zendesk Webhook', color: 'text-brand-cyan' },
    { text: '>> [00:00.28] REASONING: Customer requesting invoice re-generation & credit memo.', color: 'text-white/70' },
    { text: '>> [00:00.45] TOOL CALL: stripe.charges.retrieve(id="ch_3M49x0291")', color: 'text-brand-amber' },
    { text: '>> [00:00.78] TOOL RESPONSE: Charge confirmed ($2,400.00). Tax ID DE319401928 present.', color: 'text-white/90' },
    { text: '>> [00:01.05] TOOL CALL: xero_ledger.generateCreditMemo(amount=400, reason="SLA_Downtime")', color: 'text-brand-amber' },
    { text: '>> [00:01.22] VALIDATION GUARDRAIL: Parameter checks passed. $400 within $500 auto-limit.', color: 'text-brand-emerald' },
    { text: '>> [00:01.40] NOTIFICATION: Slack dispatch sent to #finance-alerts with audit link.', color: 'text-brand-cyan' },
    { text: '>> [00:01.55] COMPLETE: Ticket resolved autonomously in 1.43 seconds. 0 errors.', color: 'text-brand-emerald font-bold' }
  ];

  const simulationStepsAura = [
    { text: '>> [00:00.10] INCOMING EVENT: 10-K filing & hiring surge detected for Target Org: CloudScale', color: 'text-brand-emerald' },
    { text: '>> [00:00.35] TOOL CALL: apollo.searchContacts(title=["VP Engineering", "Head of AI"])', color: 'text-brand-amber' },
    { text: '>> [00:00.62] TOOL RESPONSE: Isolated 2 decision makers with verified email & LinkedIn.', color: 'text-white/90' },
    { text: '>> [00:00.89] REASONING: CloudScale recently migrated to Snowflake; pain point is query overages.', color: 'text-white/70' },
    { text: '>> [00:01.15] GENERATION: Drafting 3-paragraph bespoke technical proposal...', color: 'text-brand-cyan' },
    { text: '>> [00:01.38] TOOL CALL: salesforce.createLead(name="Elena Rostova", intentScore=0.96)', color: 'text-brand-amber' },
    { text: '>> [00:01.52] GUARDRAIL CHECK: Zero hallucination policy verified against corporate database.', color: 'text-brand-emerald' },
    { text: '>> [00:01.68] COMPLETE: Lead queued in CRM with personalized pitch deck generated.', color: 'text-brand-emerald font-bold' }
  ];

  const steps = currentSandboxAgent === 'atlas' ? simulationStepsAtlas : simulationStepsAura;

  steps.forEach((step, index) => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = `terminal-line ${step.color} py-0.5`;
      line.textContent = step.text;
      terminal.appendChild(line);
      terminal.scrollTop = terminal.scrollHeight;

      if (index === steps.length - 1) {
        runBtn.disabled = false;
        runBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    }, index * 240);
  });
}

// Live Activity Alerts (Toast notifications)
function initLiveToasts() {
  const toast = document.getElementById('live-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastDesc = document.getElementById('toast-desc');
  if (!toast) return;

  const mockEvents = [
    { title: 'Live Sprint Deployment', desc: 'Atlas agent integrated into Zendesk for FinTech in London.' },
    { title: 'Autonomous Action Executed', desc: 'Aura qualified 3 enterprise deals for B2B SaaS client in San Francisco.' },
    { title: 'Deterministic Guardrail', desc: 'Sentinel prevented an unauthorized $14k vendor double-billing.' },
    { title: 'Sprint Kickoff', desc: 'New bespoke multi-agent fleet sprint launched for Berlin logistics firm.' }
  ];

  let eventIndex = 0;

  function showToast() {
    const current = mockEvents[eventIndex % mockEvents.length];
    toastTitle.textContent = current.title;
    toastDesc.textContent = current.desc;

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      dismissToast();
    }, 4500);

    eventIndex++;
  }

  // Trigger first after 3 seconds, then every 22 seconds
  setTimeout(showToast, 3500);
  setInterval(showToast, 24000);
}

function dismissToast() {
  const toast = document.getElementById('live-toast');
  if (toast) {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }
}

