# Agentico — Autonomous AI Agents Agency

[![Live Demo](https://img.shields.io/badge/Live_Demo-agentico--snowy.vercel.app-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://agentico-snowy.vercel.app)
[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://agentico-snowy.vercel.app)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A bespoke, production-grade website for **Agentico**, an AI agents agency that builds, fine-tunes, and deploys custom autonomous AI agents for high-growth companies and enterprises.

🌐 **Live Website**: [https://agentico-snowy.vercel.app](https://agentico-snowy.vercel.app)

---

## 📖 About Agentico

**Agentico** is a premier AI engineering agency specializing in custom, action-oriented autonomous agents. Unlike traditional chat wrappers, Agentico builds deterministic, tool-calling agents that integrate directly into workplace tools (Slack, Microsoft Teams, Salesforce, HubSpot, Stripe, PostgreSQL, BigQuery, Zendesk) to execute real business workflows without human bottlenecks.

---

## 🎨 UI/UX Research & Reference Breakdown

The design architecture was developed by extracting key aesthetic and structural patterns from a category leader's website (**Jack & Jill**):

| UI/UX Pattern | Reference Principle (`Jack & Jill`) | Agentico Translation & Innovation |
| :--- | :--- | :--- |
| **Brand Tone & Typography** | Prestigious editorial serif headline paired with crisp geometric grotesque sans and mono telemetry accents. Warm off-white canvas with gentle hairline borders. | Custom pairing of **Fraunces Editorial Serif** + **Plus Jakarta Sans** + **JetBrains Mono**. Warm alabaster canvas (`#FAF9F5`), deep ink text (`#121316`), and subtle hairline borders (`#E7E5E0`). |
| **Dual Split Hero Architecture** | Left/Right bifurcation: "For candidates (Jack)" vs "For companies (Jill)" with direct pill CTAs and live product mockups beneath each. | **Bifurcated Business Needs**: **"Atlas"** (Autonomous Operations, Billing & Triage Agent) vs **"Aura"** (Autonomous Revenue, Pipeline & Deal Intelligence Agent) with live UI mockups showing real-time agent execution. |
| **Micro Status & Accent Markers** | Pastel colored rectangular post-it tabs (cyan, coral, emerald, amber) on top edge of preview cards. | Positioned accent color markers on Atlas and Aura cards to signify active operational state and role categorization. |
| **Segmented Pill Feature Switcher** | Centered rounded pill toggle: `[ Candidates \| Companies ]`. | Interactive 3-way segmented pill toggle: `[ Slack & Teams Co-Pilot \| Autonomous CRM Sync \| Data & ERP Actions ]`. |
| **In-Situ Ecosystem Mockup** | Real-world Slack integration showing an agent communicating with the human team in `#staff-eng-hire`. | Authentic Dark-Mode Slack simulation (`#ops-agentico-dispatch`) showing human prompt to `@Atlas`, deterministic tool execution, and interactive triage action cards. |
| **Asymmetric Value Narrative** | Large bold headline on the left, clear explanatory copy and real stats on the right. | "Execute mission-critical tasks without leaving your conversation" paired with detailed API execution and deterministic function calling details. |
| **Side-by-Side Asymmetric Pricing** | Cool grey card for entry tier vs warm champagne cream card for outcome tier. Integrated micro-FAQ answers under each price. | **The Agent Sprint** ($4,900 fixed 14-day sprint on cool slate `#F3F4F6`) vs **Managed Enterprise Fleet** ($2,400/mo on warm cream `#FBF6EE`) with built-in refund guarantee and FAQ items directly inside each card. |
| **Signature Telemetry Heatmap Mosaic** | A continuous horizontal bar of soft pastel grid blocks at the bottom of the page reflecting living AI activity. | Interactive dynamic telemetry mosaic bar (`#mosaic-heatmap-bar`) that generates and randomly pulses pastel tiles to visualize live multi-region tool calls. |
| **Back to Top Floating Pill** | Floating pill button `↑ Back to top` in bottom-right corner. | Floating `↑ Back to top` button that automatically reveals upon scrolling and provides smooth deceleration to the hero section. |

---

## 🚀 Key Website Features & Interactive Capabilities

1. **Dual-Agent Hero Showcase**:
   - Meet **Atlas** (Operations & Support) and **Aura** (Revenue & Pipeline).
   - In-product live UI cards simulating realistic operational outputs and deal intelligence.
2. **Interactive Feature Switcher**:
   - Switch between **Slack & Teams Co-pilot**, **Autonomous CRM Sync**, and **Data & ERP Actions**.
   - Live visual mockups showing deterministic SQL execution and multi-channel triage.
3. **The Agentico Fleet Explorer**:
   - Production archetype cards for Atlas (Ops), Aura (Revenue), and Sentinel (Audit & Compliance).
4. **Interactive ROI Calculator**:
   - Reactive sliders for team size, manual hours spent weekly, and hourly rate.
   - Computes monthly hours saved, annual cost savings, and sprint payback period in real time.
5. **Outcome-Driven Transparent Pricing**:
   - Single Agent Sprint ($4,900) vs Managed Enterprise Fleet ($2,400/mo).
   - Embedded answers to common objections: IP ownership, deployment speed, private cloud deployment, and the 30-day performance refund guarantee.
6. **Live Execution Sandbox (Modal)**:
   - Click "Live Sandbox" or "Meet Atlas" / "Meet Aura" to open an interactive terminal.
   - Run simulated autonomous workflows with real-time logs, tool calls (Stripe, Postgres, Salesforce, Apollo), and validation guardrails.
7. **Discovery Booking Modal**:
   - Clean, validated inquiry drawer with role selection, company size options, and pre-populated ROI calculations.
8. **Live Activity Alerts**:
   - Non-intrusive toast alerts showing simulated deployments and verified enterprise actions around the globe.
9. **Signature AI Telemetry Heatmap**:
   - 48-node dynamic activity grid at the base of the footer mimicking live neural network execution.

---

## 📂 Project Structure

```bash
├── index.html        # Main semantic markup and Tailwind styling
├── styles.css        # Custom animations, luxury scrollbars, range sliders, grids
├── app.js            # Interactive logic (ROI calculator, tabs, terminal sandbox, toast notifications)
├── vercel.json       # Vercel deployment configuration with security headers
├── .gitignore        # Git ignore rules (.vercel, logs, etc.)
├── README.md         # Full project documentation & architecture guide
└── website design/   # Reference inspiration screenshots (hero, features, pricing, footer)
```

---

## 💻 Local Development & Setup

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer or open it directly in any browser:
```
e:\AI agents\index.html
```

### Option 2: Python Local Server
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 3: Node / npx Serve
```bash
npx serve .
```

---

## ☁️ Deployment

### Deployed to Vercel
The site is live on Vercel at:
👉 **[https://agentico-snowy.vercel.app](https://agentico-snowy.vercel.app)**

To deploy updates via Vercel CLI:
```bash
vercel --prod
```

---

## 📄 License
This project is licensed under the MIT License.
