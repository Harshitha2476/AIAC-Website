/**
 * AIAC Research Centre - Enhanced Interactions & Animations Engine
 * Powers scroll reveals, dynamic stat count-ups, mouse spotlight gradients,
 * interactive lab terminal simulation, quick command palette (Ctrl+K), and toasts.
 */

(function () {
  'use strict';

  // 1. Toast Notification Utility
  window.showToast = function (message, icon = '✓') {
    let container = document.getElementById('aiac-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'aiac-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'aiac-toast';
    toast.innerHTML = `<span class="text-blue-400 font-bold">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px) scale(0.95)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  };

  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgressBar();
    initBackToTop();
    initSpotlightEffect();
    initScrollReveal();
    initStatCounters();
    initInteractiveTerminal();
    initCommandPalette();
    initSchematicInteractivity();
    initCopyButtons();
  });

  // 2. Reading / Scroll Progress Bar
  function initScrollProgressBar() {
    let bar = document.getElementById('scroll-progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'scroll-progress';
      document.body.appendChild(bar);
    }

    const updateBar = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    window.addEventListener('scroll', updateBar, { passive: true });
    updateBar();
  }

  // 3. Back to Top Button
  function initBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'back-to-top';
      btn.setAttribute('aria-label', 'Back to top');
      btn.setAttribute('title', 'Back to top');
      btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>`;
      document.body.appendChild(btn);
    }

    const toggleBtn = () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    };

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', toggleBtn, { passive: true });
    toggleBtn();
  }

  // 4. Spotlight Card Hover Tracker
  function initSpotlightEffect() {
    const cards = document.querySelectorAll('.spotlight-card, .pod-editorial-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // 5. Scroll Reveal with IntersectionObserver
  function initScrollReveal() {
    // Automatically attach reveal class to key sections and cards
    const targets = document.querySelectorAll(
      'section > div, .pod-editorial-card, .research-story-row, .spotlight-card, footer .grid > div'
    );

    targets.forEach((el, idx) => {
      if (!el.classList.contains('reveal-init')) {
        el.classList.add('reveal-init');
        // add gentle staggering
        const staggerIndex = (idx % 4) + 1;
        el.classList.add(`stagger-${staggerIndex}`);
      }
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.reveal-init').forEach(el => observer.observe(el));
  }

  // 6. Stat Counter Animation
  function initStatCounters() {
    const counters = document.querySelectorAll('.stat-counter, [data-counter-target]');
    if (!counters.length) return;

    const animateCounter = (el) => {
      const target = parseFloat(el.getAttribute('data-counter-target') || el.innerText);
      if (isNaN(target)) return;
      
      const duration = 1400; // ms
      const startTime = performance.now();
      const isDecimal = target % 1 !== 0;

      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        // Easing: easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = ease * target;

        el.innerText = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.innerText = isDecimal ? target.toFixed(1) : target;
        }
      };

      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // 7. Interactive Lab Terminal Simulator
  const SIMULATION_DATA = {
    'indic-nlp': {
      title: 'Kannada BPE Tokenizer Benchmark',
      command: 'python -m aiac.indic_nlp.tokenize --vocab-size 32000 --corpus kannada_wiki',
      logs: [
        { text: '[INIT] Loading byte-pair encoding vocab: indic-bpe-32k.model', delay: 100, color: 'text-slate-400' },
        { text: '[INGEST] Raw input text: "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಮತ್ತು ಗಣಕ ವಿಜ್ಞಾನ ಸಂಶೋಧನೆ"', delay: 300, color: 'text-amber-300' },
        { text: '[PROCESS] BPE subword segmentation matrix computation...', delay: 600, color: 'text-blue-400' },
        { text: '[RESULT] Tokens: ["_ಕೃತಕ", "_ಬುದ್ಧಿ", "ಮತ್ತೆ", "_ಮತ್ತು", "_ಗಣಕ", "_ವಿಜ್ಞಾನ", "_ಸಂಶೋಧನೆ"]', delay: 850, color: 'text-emerald-400 font-bold' },
        { text: '[METRICS] Compression Ratio: 3.42x | Token Count: 7 | Latency: 4.12ms', delay: 1100, color: 'text-sky-300' },
        { text: '[STATUS] Verified deterministic token sequence (Seed: 42) ✓', delay: 1300, color: 'text-emerald-400' }
      ]
    },
    'edge-vision': {
      title: 'YOLOv8 INT8 Embedded Jetson Profiler',
      command: 'tensorrt-exec --model=yolov8n_int8.engine --device=JetsonOrinNano --batch=1',
      logs: [
        { text: '[TRT] Loading TensorRT 8.6 execution engine into unified memory...', delay: 100, color: 'text-slate-400' },
        { text: '[MEM] VRAM Allocated: 142.4 MB | Thermal Budget: 15W Max', delay: 300, color: 'text-slate-300' },
        { text: '[INFER] Executing calibrated INT8 Conv2d CUDA kernels on Tensor Cores...', delay: 550, color: 'text-blue-400' },
        { text: '[BENCHMARK] Batch 1: Latency = 11.2ms (89.28 FPS) | Baseline FP16 = 26.3ms', delay: 800, color: 'text-emerald-400 font-bold' },
        { text: '[QUALITY] mAP@0.5: 0.724 (Delta vs FP16: -0.7% within permissible bounds)', delay: 1050, color: 'text-sky-300' },
        { text: '[STATUS] Thermal Throttle: 0% | Real-time Edge Stream PASS ✓', delay: 1300, color: 'text-emerald-400' }
      ]
    },
    'agentic-loop': {
      title: 'LangGraph Deterministic Agent Consensus',
      command: 'python -m aiac.agents.consensus --workflow code_review_triage --prs 4',
      logs: [
        { text: '[GRAPH] Initializing state graph: Router -> StaticAnalysis -> SecurityAudit -> Consensuser', delay: 100, color: 'text-slate-400' },
        { text: '[AGENT-1] Static AST Agent: Clean syntax, zero cyclomatic bloat', delay: 350, color: 'text-blue-400' },
        { text: '[AGENT-2] Vulnerability Agent: Sanitizing SQL params, bounds checked', delay: 600, color: 'text-blue-400' },
        { text: '[AGENT-3] ML Rigor Agent: Seed 42 asserted in test fixtures', delay: 850, color: 'text-purple-300' },
        { text: '[VOTE] Multi-Agent Agreement: 3/3 APPROVE (Confidence: 0.98)', delay: 1100, color: 'text-emerald-400 font-bold' },
        { text: '[GATE] PR #142 Merged deterministically into main branch ✓', delay: 1300, color: 'text-emerald-400' }
      ]
    },
    'bio-ecg': {
      title: '1D-CNN Real-Time Single-Lead ECG Anomaly Detection',
      command: 'python -m aiac.biomed.infer --record PhysioNet_MITBIH_100 --window 360',
      logs: [
        { text: '[DSP] Bandpass filtering 0.5Hz - 45Hz Butterworth filter applied', delay: 100, color: 'text-slate-400' },
        { text: '[STREAM] Ingesting 360 samples/sec continuous analog wave buffer', delay: 350, color: 'text-slate-300' },
        { text: '[CONV] 1D Convolutional feature map extraction across 8 channels...', delay: 600, color: 'text-blue-400' },
        { text: '[CLASSIFY] R-Peak at sample 184 classified as Normal Sinus Rhythm (NSR)', delay: 850, color: 'text-emerald-400' },
        { text: '[ALERT] PVC Anomaly Probability: 0.012 (Nominal Range)', delay: 1100, color: 'text-sky-300 font-bold' },
        { text: '[METRICS] Inference Latency: 3.8ms per beat | Quantized Size: 84 KB ✓', delay: 1300, color: 'text-emerald-400' }
      ]
    }
  };

  let activeTerminalTab = 'indic-nlp';
  let simulationTimer = null;

  function initInteractiveTerminal() {
    const tabButtons = document.querySelectorAll('[data-terminal-tab]');
    const terminalOutput = document.getElementById('terminal-log-output');
    const terminalCommand = document.getElementById('terminal-command-text');
    const runBtn = document.getElementById('terminal-run-btn');

    if (!terminalOutput || !tabButtons.length) return;

    function renderSimulation(tabKey) {
      if (simulationTimer) clearTimeout(simulationTimer);
      activeTerminalTab = tabKey;

      tabButtons.forEach(btn => {
        if (btn.getAttribute('data-terminal-tab') === tabKey) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      const sim = SIMULATION_DATA[tabKey];
      if (!sim) return;

      if (terminalCommand) {
        terminalCommand.innerText = sim.command;
      }

      terminalOutput.innerHTML = `<div class="text-slate-500 italic pb-2">$ Initializing execution environment...</div>`;

      sim.logs.forEach(log => {
        simulationTimer = setTimeout(() => {
          const line = document.createElement('div');
          line.className = `${log.color} py-0.5 leading-relaxed`;
          line.innerText = log.text;
          terminalOutput.appendChild(line);
          terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }, log.delay);
      });
    }

    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tabKey = btn.getAttribute('data-terminal-tab');
        renderSimulation(tabKey);
      });
    });

    if (runBtn) {
      runBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderSimulation(activeTerminalTab);
      });
    }

    // Auto-start first simulation
    renderSimulation('indic-nlp');
  }

  // 8. Command Palette (Ctrl+K / Cmd+K)
  const SEARCH_ITEMS = [
    { title: 'Overview & Mission', url: 'index.html', category: 'Navigation', icon: '🏠' },
    { title: 'Research Themes & Focus Areas', url: 'research.html', category: 'Research', icon: '🔬' },
    { title: 'Pod 01: Regional NLP & Indic LLMs', url: 'pod.html?id=pod-01', category: 'Pods', icon: '📝' },
    { title: 'Pod 02: Edge AI & Vision Systems', url: 'pod.html?id=pod-02', category: 'Pods', icon: '⚡' },
    { title: 'Pod 03: Agentic AI & Autonomous Loops', url: 'pod.html?id=pod-03', category: 'Pods', icon: '🤖' },
    { title: 'Pod 04: Healthcare & Bio-Signals', url: 'pod.html?id=pod-04', category: 'Pods', icon: '🫀' },
    { title: 'Pod 05: Secure AI & Model Ethics', url: 'pod.html?id=pod-05', category: 'Pods', icon: '🛡️' },
    { title: 'Pod 06: Systems, HPC & MLOps', url: 'pod.html?id=pod-06', category: 'Pods', icon: '⚙️' },
    { title: 'All Research Pods', url: 'pods.html', category: 'Navigation', icon: '📑' },
    { title: 'Projects Pipeline & Status', url: 'projects.html', category: 'Projects', icon: '🚀' },
    { title: 'Publications & Artifacts', url: 'outputs.html', category: 'Outputs', icon: '📄' },
    { title: 'People: Faculty, Mentors, Scholars', url: 'people.html', category: 'People', icon: '👥' },
    { title: 'Code Reproducibility Standards', url: 'reproducibility.html', category: 'Open Science', icon: '📦' },
    { title: 'Student Intake 2026 Admissions', url: 'intake.html', category: 'Admissions', icon: '🎓' },
    { title: 'Lab Updates & Colloquia', url: 'updates.html', category: 'News', icon: '📢' }
  ];

  function initCommandPalette() {
    let backdrop = document.getElementById('search-modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.id = 'search-modal-backdrop';
      backdrop.innerHTML = `
        <div id="search-modal-box" role="dialog" aria-modal="true" aria-label="Quick search navigation">
          <div class="p-3.5 border-b border-[#e2e8f0] dark:border-[#1e293b] flex items-center gap-3">
            <svg class="w-4 h-4 text-[#64748b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input id="search-palette-input" type="text" placeholder="Type to search pods, projects, themes... (Esc to exit)" class="w-full bg-transparent border-none text-sm text-[#091124] dark:text-white placeholder-[#94a3b8] focus:outline-none focus:ring-0 font-sans" autocomplete="off" />
            <kbd class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f1f5f9] dark:bg-[#1e293b] text-[#64748b] border border-[#e2e8f0] dark:border-[#334155]">ESC</kbd>
          </div>
          <div id="search-palette-results" class="max-h-80 overflow-y-auto p-2 space-y-1 font-mono text-xs"></div>
          <div class="p-2.5 border-t border-[#e2e8f0] dark:border-[#1e293b] flex items-center justify-between text-[11px] text-[#64748b] bg-[#f8fafc] dark:bg-[#080d1a]">
            <span>Navigate with ↑ ↓ and Enter</span>
            <span class="text-blue-500">AIAC Command Bar</span>
          </div>
        </div>
      `;
      document.body.appendChild(backdrop);
    }

    const input = document.getElementById('search-palette-input');
    const resultsContainer = document.getElementById('search-palette-results');

    function openModal() {
      backdrop.classList.add('open');
      input.value = '';
      renderResults('');
      setTimeout(() => input.focus(), 50);
    }

    function closeModal() {
      backdrop.classList.remove('open');
    }

    function renderResults(query) {
      const q = query.toLowerCase().trim();
      const filtered = SEARCH_ITEMS.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q)
      );

      if (!filtered.length) {
        resultsContainer.innerHTML = `<div class="p-6 text-center text-[#64748b]">No research items found matching "${query}"</div>`;
        return;
      }

      resultsContainer.innerHTML = filtered.map((item, index) => `
        <a href="${item.url}" class="palette-item flex items-center justify-between p-2.5 rounded-md hover:bg-blue-50 dark:hover:bg-blue-950/40 text-[#091124] dark:text-[#f8fafc] transition ${index === 0 ? 'bg-blue-50/60 dark:bg-blue-950/20' : ''}">
          <div class="flex items-center gap-2.5">
            <span class="text-base">${item.icon}</span>
            <span class="font-sans font-medium text-xs">${item.title}</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-[#f1f5f9] dark:bg-[#1e293b] text-[#64748b] uppercase">${item.category}</span>
        </a>
      `).join('');
    }

    // Keyboard shortcuts: Ctrl+K or Cmd+K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (backdrop.classList.contains('open')) {
          closeModal();
        } else {
          openModal();
        }
      } else if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        closeModal();
      }
    });

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    input.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });

    // Attach trigger to any element with data-search-trigger
    document.querySelectorAll('[data-search-trigger]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });
  }

  // 9. Interactive SVG Topology Highlights
  function initSchematicInteractivity() {
    const nodes = document.querySelectorAll('svg rect');
    nodes.forEach(node => {
      node.style.cursor = 'pointer';
      node.style.transition = 'all 0.25s ease';

      node.addEventListener('mouseenter', () => {
        node.setAttribute('stroke-width', '2.5');
        node.style.filter = 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))';
      });

      node.addEventListener('mouseleave', () => {
        node.setAttribute('stroke-width', '1.2');
        node.style.filter = 'none';
      });
    });
  }

  // 10. Copy Code Buttons
  function initCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-copy-target');
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        
        const text = targetEl.innerText || targetEl.textContent;
        navigator.clipboard.writeText(text).then(() => {
          window.showToast('Copied to clipboard!', '📋');
        }).catch(() => {
          window.showToast('Unable to copy', '⚠️');
        });
      });
    });
  }

  // 11. Universal Interactive Category Filters
  function initUniversalFilters() {
    document.querySelectorAll('[data-filter-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filterVal = btn.getAttribute('data-filter-btn');
        const filterGroup = btn.getAttribute('data-filter-group') || 'category';
        const parentContainer = btn.closest('.filter-container') || btn.parentElement;

        parentContainer.querySelectorAll('[data-filter-btn]').forEach(b => {
          b.classList.remove('active', 'bg-blue-600', 'text-white', 'dark:bg-blue-600', 'dark:text-white');
          b.classList.add('bg-white', 'dark:bg-[#0f172a]', 'text-[#475569]', 'dark:text-[#94a3b8]');
        });

        btn.classList.add('active', 'bg-blue-600', 'text-white');
        btn.classList.remove('bg-white', 'dark:bg-[#0f172a]', 'text-[#475569]', 'dark:text-[#94a3b8]');

        const items = document.querySelectorAll(`[data-${filterGroup}]`);
        let count = 0;
        items.forEach(item => {
          const itemVal = item.getAttribute(`data-${filterGroup}`);
          if (filterVal === 'all' || itemVal === filterVal) {
            item.style.display = '';
            item.classList.add('reveal-visible');
            count++;
          } else {
            item.style.display = 'none';
          }
        });

        const countBadge = document.getElementById(`count-${filterGroup}`);
        if (countBadge) countBadge.innerText = count;
      });
    });
  }

  // Register in init
  window.aiacInteractionsLoaded = true;
  document.addEventListener('DOMContentLoaded', () => {
    initUniversalFilters();
  });

})();
