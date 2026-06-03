// ────────────────────────────────────────────────────────────
// Microsoft Build 2026 — interactivity
// ────────────────────────────────────────────────────────────
(function () {
  const data = window.BUILD_2026_DATA || [];

  // ───────────────── Headlines ticker ─────────────────
  const HEADLINES = [
    { tag: '7 New MAI Models', text: 'Microsoft AI ships its biggest first-party drop ever — Thinking, Voice, Code & Image' },
    { tag: 'Majorana 2', text: 'The next-generation topological quantum chip is unveiled' },
    { tag: 'Cobalt 200 VMs', text: '50% faster Arm-based silicon, tuned for agentic AI workloads' },
    { tag: 'Foundry IQ', text: 'Unified knowledge & serverless retrieval for every agent' },
    { tag: 'Azure HorizonDB', text: 'Postgres, rebuilt for the AI era — OLTP, vector & memory in one engine' },
    { tag: 'Project Solara', text: 'A first look at agent-first computing' },
    { tag: 'GitHub Copilot App', text: 'From workspace to pull request — native on Windows' },
    { tag: 'Autopilots', text: 'Long-running, goal-driven agents arrive across Microsoft 365' },
    { tag: 'OpenClaw', text: 'A new open standard for safe local agent execution' },
    { tag: 'Surface RTX Spark', text: 'A developer-first AI workstation from Microsoft + NVIDIA' }
  ];

  const renderTicker = () => {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    const item = (h) =>
      `<span class="ticker__item"><strong>${h.tag}</strong>${h.text}</span>`;
    // Duplicate so the -50% translate creates a seamless loop
    track.innerHTML = HEADLINES.map(item).join('') + HEADLINES.map(item).join('');
  };

  // ───────────────── Cards ─────────────────
  const cardsEl = document.getElementById('cards');
  const emptyEl = document.getElementById('empty-state');
  const statusEl = document.getElementById('results-status');

  const tagClassFor = (cat) =>
    ({
      ai: 'tag tag--ai',
      infra: 'tag tag--infra',
      data: 'tag tag--data',
      windows: 'tag tag--windows',
      quantum: 'tag tag--quantum',
      storage: 'tag tag--storage',
      dev: 'tag tag--ai'
    }[cat] || 'tag');

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
    );

  const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const highlight = (text, query) => {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  };

  const renderCards = (query = '') => {
    cardsEl.innerHTML = data
      .map(
        (item, i) => `
        <article class="card card--${item.cat}" data-cat="${item.cat}" data-id="${item.id}"
                 data-search="${escapeHtml((item.title + ' ' + item.subtitle + ' ' + item.preview + ' ' + item.tagLabel).toLowerCase())}"
                 tabindex="0" role="button" aria-label="Open details for ${escapeHtml(item.title)}"
                 style="animation-delay:${Math.min(i, 12) * 40}ms">
          <div class="card__img" style="background-image:url('${item.img}')">
            <span class="card__category"><span class="${tagClassFor(item.cat)}">${escapeHtml(item.tagLabel)}</span></span>
          </div>
          <div class="card__body">
            <h3 class="card__title">${highlight(item.title, query)}</h3>
            <p class="card__desc">${highlight(item.preview, query)}</p>
            <div class="card__footer">
              <span>${highlight(item.subtitle, query)}</span>
              <span class="card__more">Read more</span>
            </div>
          </div>
        </article>`
      )
      .join('');
  };

  // ───────────────── State ─────────────────
  const state = { cat: 'all', query: '' };

  const applyFilters = () => {
    const q = state.query.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll('.card').forEach((card) => {
      const catOk = state.cat === 'all' || card.dataset.cat === state.cat;
      const qOk = !q || card.dataset.search.includes(q);
      const show = catOk && qOk;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });
    emptyEl.hidden = visible !== 0;
    cardsEl.style.display = visible === 0 ? 'none' : '';
    if (q || state.cat !== 'all') {
      statusEl.innerHTML = `Showing <strong>${visible}</strong> of <strong>${data.length}</strong> announcements${
        q ? ` matching “<strong>${escapeHtml(state.query)}</strong>”` : ''
      }${state.cat !== 'all' ? ` in <strong>${state.cat}</strong>` : ''}.`;
    } else {
      statusEl.innerHTML = '';
    }
  };

  const updateCategoryCounts = () => {
    const counts = data.reduce((acc, d) => ((acc[d.cat] = (acc[d.cat] || 0) + 1), acc), {});
    document.querySelectorAll('[data-count-for]').forEach((el) => {
      const cat = el.dataset.countFor;
      el.textContent = cat === 'all' ? data.length : counts[cat] || 0;
    });
  };

  // ───────────────── Search ─────────────────
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  const setQuery = (q) => {
    state.query = q;
    searchClear.hidden = !q;
    renderCards(q.trim().toLowerCase());
    applyFilters();
  };

  searchInput.addEventListener('input', (e) => setQuery(e.target.value));
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    setQuery('');
    searchInput.focus();
  });
  // Press '/' to focus search from anywhere
  document.addEventListener('keydown', (e) => {
    if (
      e.key === '/' &&
      document.activeElement !== searchInput &&
      document.activeElement.tagName !== 'INPUT' &&
      document.activeElement.tagName !== 'TEXTAREA' &&
      !e.ctrlKey && !e.metaKey && !e.altKey
    ) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  // ───────────────── Category filters ─────────────────
  const filters = document.querySelectorAll('.filter');
  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      state.cat = btn.dataset.filter;
      applyFilters();
    });
  });

  document.getElementById('empty-reset').addEventListener('click', () => {
    searchInput.value = '';
    state.query = '';
    state.cat = 'all';
    searchClear.hidden = true;
    filters.forEach((b) => {
      b.classList.toggle('active', b.dataset.filter === 'all');
      b.setAttribute('aria-selected', b.dataset.filter === 'all' ? 'true' : 'false');
    });
    renderCards('');
    applyFilters();
  });

  // ───────────────── Modal ─────────────────
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTag = document.getElementById('modal-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalLead = document.getElementById('modal-lead');
  const modalDetails = document.getElementById('modal-details');
  const modalWhy = document.getElementById('modal-why');
  const modalLink = document.getElementById('modal-link');

  let lastFocus = null;

  const openModal = (id) => {
    const item = data.find((d) => d.id === id);
    if (!item) return;
    lastFocus = document.activeElement;
    modalImg.src = item.img;
    modalImg.alt = item.title;
    modalTag.textContent = item.tagLabel;
    modalTag.className = tagClassFor(item.cat);
    modalTitle.textContent = item.title;
    modalLead.textContent = item.preview;
    modalDetails.innerHTML = item.details;
    modalWhy.textContent = item.why;
    modalLink.href = item.link;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal__close').focus();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };

  cardsEl.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openModal(card.dataset.id);
  });
  cardsEl.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.card');
    if (card) {
      e.preventDefault();
      openModal(card.dataset.id);
    }
  });
  modal.addEventListener('click', (e) => {
    if (e.target.matches('[data-close]')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // ───────────────── Stat counters ─────────────────
  const counters = document.querySelectorAll('.hero__stat-num');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target);
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => io.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  // ───────────────── Init ─────────────────
  renderTicker();
  updateCategoryCounts();
  renderCards();
  applyFilters();
})();
