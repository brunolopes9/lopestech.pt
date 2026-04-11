// ============================================
// STATE
// ============================================
let currentLang = localStorage.getItem('lang') || 'pt';
let isDark = localStorage.getItem('theme') === 'dark';
let expandedService = null;
let selectedRepair = null;
let repairFilter = null; // set after init
let showAllRepairs = false;
let carouselIndex = 0;
let projectCarouselIndexes = {};
let mobileMenuOpen = false;
let scrolled = false;

// ============================================
// HELPERS
// ============================================
function t(key) {
  const keys = key.split('.');
  let val = translations[currentLang];
  for (const k of keys) {
    if (val && val[k] !== undefined) val = val[k];
    else return key;
  }
  return val;
}

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

// ============================================
// THEME
// ============================================
function applyTheme() {
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0f172a';
    document.body.style.color = '#e2e8f0';
  } else {
    document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '';
  }
}

function toggleDark() {
  isDark = !isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyTheme();
  renderAll();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  repairFilter = t('reparacoes.all');
  showAllRepairs = false;
  renderAll();
}

// ============================================
// NAVBAR
// ============================================
function renderNavbar() {
  const nav = t('nav');
  const el = $('#navbar');
  el.className = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-slate-900 ${scrolled ? 'shadow-lg' : 'shadow-md dark:shadow-slate-800/50'}`;

  el.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" class="flex items-center gap-3">
          <img src="assets/sobre-mim/logo.jpg" alt="LopesTech" class="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover" />
          <span class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Lopes<span class="text-blue-600">Tech</span></span>
        </a>

        <div class="hidden md:flex items-center gap-1">
          ${nav.links.map(l => `<a href="${l.href}" class="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">${l.label}</a>`).join('')}

          <div class="flex items-center ml-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
            <button onclick="setLang('pt')" class="px-2 py-1.5 rounded-md text-sm transition-all ${currentLang === 'pt' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'opacity-50 hover:opacity-80'}" title="Portugues">
              <img src="https://flagcdn.com/w40/pt.png" alt="PT" class="w-5 h-3.5 object-cover rounded-sm" />
            </button>
            <button onclick="setLang('en')" class="px-2 py-1.5 rounded-md text-sm transition-all ${currentLang === 'en' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'opacity-50 hover:opacity-80'}" title="English">
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" class="w-5 h-3.5 object-cover rounded-sm" />
            </button>
          </div>

          <button onclick="toggleDark()" class="ml-1 px-2.5 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" title="${isDark ? 'Light mode' : 'Dark mode'}">
            <i class="fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}"></i>
          </button>

          <a href="https://wa.me/351933938716?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="ml-2 flex items-center gap-1.5 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-colors">
            <i class="fa-brands fa-whatsapp"></i> ${nav.cta}
          </a>
          <a href="mailto:contacto@lopestech.pt?subject=Pedido%20de%20Or%C3%A7amento" class="ml-1 flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors">
            <i class="fa-solid fa-envelope text-xs"></i> ${nav.cta}
          </a>
        </div>

        <div class="flex items-center gap-1 md:hidden">
          <div class="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
            <button onclick="setLang('pt')" class="px-1.5 py-1 rounded-md text-sm transition-all ${currentLang === 'pt' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'opacity-50'}">
              <img src="https://flagcdn.com/w40/pt.png" alt="PT" class="w-5 h-3.5 object-cover rounded-sm" />
            </button>
            <button onclick="setLang('en')" class="px-1.5 py-1 rounded-md text-sm transition-all ${currentLang === 'en' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'opacity-50'}">
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" class="w-5 h-3.5 object-cover rounded-sm" />
            </button>
          </div>
          <button onclick="toggleDark()" class="p-2 rounded-lg text-gray-900 dark:text-white">
            <i class="fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-lg"></i>
          </button>
          <button onclick="toggleMobileMenu()" class="p-2 rounded-lg text-gray-900 dark:text-white">
            <i class="fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  renderMobileMenu();
}

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  renderNavbar();
}

function renderMobileMenu() {
  const menu = $('#mobile-menu');
  const nav = t('nav');
  if (!mobileMenuOpen) { menu.classList.add('hidden'); return; }
  menu.classList.remove('hidden');
  menu.innerHTML = `
    <div class="px-4 py-3 space-y-1">
      ${nav.links.map(l => `<a href="${l.href}" onclick="mobileMenuOpen=false;renderNavbar();" class="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg font-medium">${l.label}</a>`).join('')}
      <div class="flex gap-2 mt-2">
        <a href="https://wa.me/351933938716?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white font-semibold rounded-lg">
          <i class="fa-brands fa-whatsapp text-lg"></i> ${nav.cta}
        </a>
        <a href="mailto:contacto@lopestech.pt?subject=Pedido%20de%20Or%C3%A7amento" class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg">
          <i class="fa-solid fa-envelope"></i> ${nav.cta}
        </a>
      </div>
    </div>
  `;
}

// ============================================
// HERO
// ============================================
function renderHero() {
  const h = t('hero');
  $('#inicio').innerHTML = `
    <div class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0">
        <img src="assets/hero.jpg" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-slate-900/75"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-slate-900/60"></div>
      </div>
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div class="mb-6 mt-4">
          <span class="inline-flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium tracking-wider uppercase">${h.badge}</span>
        </div>
        <h1 class="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">Lopes<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tech</span></h1>
        <p class="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">${h.description}</p>
        <div class="flex flex-wrap justify-center gap-3 mb-10">
          ${h.badges.map((b, i) => `<span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${i === 0 ? 'bg-white/10 border border-white/15 text-white' : i === 1 ? 'bg-green-500/15 border border-green-500/25 text-green-300' : 'bg-amber-500/15 border border-amber-500/25 text-amber-300'}">${b.emoji} ${b.text}</span>`).join('')}
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="https://wa.me/351933938716?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25">
            <i class="fa-brands fa-whatsapp text-2xl"></i> ${h.ctaWhatsapp}
          </a>
          <a href="mailto:contacto@lopestech.pt?subject=Pedido%20de%20Or%C3%A7amento" class="group flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
            <i class="fa-solid fa-envelope text-xl"></i> ${h.ctaEmail}
          </a>
          <a href="#servicos" class="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25">${h.ctaServices}</a>
        </div>
        <div class="flex flex-wrap justify-center gap-8 mb-14">
          ${h.stats.map(s => `<div class="text-center"><div class="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">${s.emoji} ${s.value}</div><div class="text-sm text-gray-400 mt-1">${s.label}</div></div>`).join('')}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8 mb-4">
          ${h.boxes.map(b => `<div class="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-5 flex items-center gap-4 hover:border-white/30 transition-colors"><div class="w-12 h-12 ${b.bg} rounded-xl flex items-center justify-center shrink-0"><i class="fa-solid ${b.icon} ${b.color} text-xl"></i></div><div class="text-left"><p class="text-sm font-bold text-white">${b.title}</p><p class="text-xs text-gray-400">${b.subtitle}</p></div></div>`).join('')}
        </div>
      </div>
      <a href="#servicos" class="absolute bottom-8 left-1/2 text-white/50 hover:text-white transition-colors animate-bounce-custom">
        <i class="fa-solid fa-arrow-down text-xl"></i>
      </a>
    </div>
  `;
}

// ============================================
// SERVICOS
// ============================================
function renderServicos() {
  const s = t('servicos');
  $('#servicos').className = 'py-20 md:py-28 bg-slate-50 dark:bg-slate-800';
  $('#servicos').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">${s.subtitle}</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">${s.title}</h2>
      </div>
      <div class="text-center mb-12">
        <div class="inline-flex flex-wrap justify-center gap-3">
          <span class="inline-flex items-center gap-2 px-5 py-2.5 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 rounded-full font-semibold text-sm">\u2705 ${s.badgeFree}</span>
          <span class="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 rounded-full font-semibold text-sm">\ud83d\udee1\ufe0f ${s.badgeNoPay}</span>
        </div>
      </div>
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:mb-0 md:snap-none" id="services-grid">
        ${s.services.map(svc => renderServiceCard(svc, s)).join('')}
      </div>
      <div class="mt-16">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">${s.extraTitle}</h3>
        <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
          ${s.extra.map(e => `
            <div class="min-w-[280px] snap-start md:min-w-0 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <span class="text-3xl">${e.emoji}</span>
                  <h4 class="font-bold text-gray-900 dark:text-white text-lg">${e.title}</h4>
                </div>
                ${e.price ? `<span class="px-4 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full">${e.price}</span>` : ''}
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">${e.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://wa.me/351933938716?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20">
          <i class="fa-brands fa-whatsapp text-xl"></i> ${s.ctaWhatsapp}
        </a>
        <a href="mailto:contacto@lopestech.pt?subject=Pedido%20de%20Or%C3%A7amento" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
          <i class="fa-solid fa-envelope text-xl"></i> ${s.ctaEmail}
        </a>
      </div>
    </div>
  `;
}

function renderServiceCard(svc, s) {
  const isExp = expandedService === svc.id;
  return `
    <div onclick="toggleService('${svc.id}')" class="min-w-[280px] snap-start md:min-w-0 relative group rounded-2xl p-6 transition-all duration-300 cursor-pointer border ${isExp ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-[1.02] border-blue-700' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1'}">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isExp ? 'bg-white/20' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50'}">
          <i class="fa-solid ${svc.icon} text-xl"></i>
        </div>
        <span class="text-2xl">${svc.emoji}</span>
      </div>
      <h3 class="text-lg font-bold mb-2 ${!isExp ? 'text-gray-900 dark:text-white' : ''}">${svc.title}</h3>
      <p class="text-sm leading-relaxed ${isExp ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}">${svc.description}</p>
      ${svc.highlight ? `<div class="mt-3 flex items-center gap-2 text-xs font-semibold ${isExp ? 'text-yellow-300' : 'text-green-600 dark:text-green-400'}"><i class="fa-solid fa-star text-xs"></i> ${svc.highlight}</div>` : ''}
      <div class="mt-3 text-xs font-medium ${isExp ? 'text-blue-200' : 'text-blue-500 dark:text-blue-400'}">${isExp ? '\u25b2 ' + s.lessDetails : '\u25bc ' + s.moreDetails}</div>
      ${isExp ? `<ul class="mt-4 space-y-2 border-t border-white/20 pt-4">${svc.details.map(d => `<li class="flex items-center gap-2 text-sm text-blue-100"><i class="fa-solid fa-circle-check text-xs text-blue-300 shrink-0"></i> ${d}</li>`).join('')}</ul>` : ''}
    </div>
  `;
}

function toggleService(id) {
  expandedService = expandedService === id ? null : id;
  renderServicos();
}

// ============================================
// REPARACOES
// ============================================
function renderReparacoes() {
  const r = t('reparacoes');
  if (!repairFilter) repairFilter = r.all;
  const allLabel = r.all;
  const brands = [allLabel, ...new Set(reparacoes.map(rep => rep.brand))];
  const filtered = reparacoes.filter(rep => repairFilter === allLabel || rep.brand === repairFilter);
  const displayed = showAllRepairs ? filtered : filtered.slice(0, 8);

  $('#reparacoes').className = 'py-20 md:py-28 bg-gray-100 dark:bg-gray-900';
  $('#reparacoes').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">${r.subtitle}</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">${r.title}</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">${r.description}</p>
        <p class="text-blue-600 dark:text-blue-400 font-semibold mt-2">\ud83d\udcc5 ${r.appointment}</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto">
        ${r.highlights.map(h => `<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center hover:border-blue-300 dark:hover:border-blue-600 transition-colors"><div class="text-2xl mb-1">${h.emoji}</div><div class="text-lg font-bold text-blue-600 dark:text-blue-400">${h.value}</div><div class="text-xs text-gray-600 dark:text-gray-400">${h.label}</div></div>`).join('')}
      </div>
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        ${brands.map(b => `<button onclick="setRepairFilter('${b}')" class="px-4 py-2 rounded-full text-sm font-medium transition-all ${repairFilter === b ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}">${b}</button>`).join('')}
      </div>
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:snap-none">
        ${displayed.map(rep => renderRepairCard(rep, r)).join('')}
      </div>
      ${filtered.length > 8 && !showAllRepairs ? `<div class="text-center mt-10"><button onclick="showAllRepairs=true;renderReparacoes();" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">${r.viewAll} (${filtered.length})</button></div>` : ''}
      <div class="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">${r.ctaTitle}</h3>
        <p class="text-blue-100 mb-6 max-w-xl mx-auto">${r.ctaDescription}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/351933938716?text=Ol%C3%A1!%20O%20meu%20equipamento%20precisa%20de%20repara%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105"><i class="fa-brands fa-whatsapp text-xl"></i> ${r.ctaWhatsapp}</a>
          <a href="mailto:contacto@lopestech.pt?subject=Pedido%20de%20Or%C3%A7amento%20-%20Repara%C3%A7%C3%A3o" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 border border-white/30"><i class="fa-solid fa-envelope text-xl"></i> ${r.ctaEmail}</a>
        </div>
      </div>
    </div>
  `;
}

function renderRepairCard(rep, r) {
  const mainPhoto = rep.photos[0];
  return `
    <div onclick="openRepairModal(${rep.id})" class="min-w-[260px] snap-start sm:min-w-[280px] lg:min-w-0 group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1">
      <div class="relative aspect-[4/3] overflow-hidden">
        <div class="absolute inset-0 flex">
          <div class="w-1/2 overflow-hidden"><img src="${mainPhoto.before}" alt="${r.before}" class="w-full h-full object-cover" loading="lazy" /></div>
          <div class="w-1/2 overflow-hidden"><img src="${mainPhoto.after}" alt="${r.after}" class="w-full h-full object-cover" loading="lazy" /></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div class="repair-divider"></div>
          <div class="absolute top-3 left-3 px-2 py-1 bg-red-500/90 text-white text-xs font-bold rounded">${r.before.toUpperCase()}</div>
          <div class="absolute top-3 right-3 px-2 py-1 bg-green-500/90 text-white text-xs font-bold rounded">${r.after.toUpperCase()}</div>
        </div>
        ${rep.photos.length > 1 ? `<div class="absolute bottom-3 left-3 px-2 py-1 bg-blue-600/90 text-white text-xs font-bold rounded">+${rep.photos.length} ${r.photos}</div>` : ''}
      </div>
      <div class="p-4">
        <h3 class="font-bold text-gray-900 dark:text-white text-lg">${rep.device}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">${rep.problem}</p>
        <div class="flex items-center gap-4 mt-3 text-sm">
          <span class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold"><i class="fa-solid fa-euro-sign text-xs"></i> ${rep.price}</span>
          <span class="flex items-center gap-1 text-gray-500 dark:text-gray-400"><i class="fa-solid fa-clock text-xs"></i> ${rep.time}</span>
        </div>
      </div>
    </div>
  `;
}

function setRepairFilter(brand) {
  repairFilter = brand;
  showAllRepairs = false;
  renderReparacoes();
}

function openRepairModal(id) {
  selectedRepair = reparacoes.find(r => r.id === id);
  renderRepairModal();
}

function renderRepairModal() {
  const container = $('#modal-container');
  if (!selectedRepair) { container.innerHTML = ''; return; }
  const r = t('reparacoes');
  const rep = selectedRepair;

  container.innerHTML = `
    <div class="modal-backdrop" onclick="closeRepairModal()">
      <div class="relative bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
        <button onclick="closeRepairModal()" class="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-xmark text-gray-900 dark:text-white"></i>
        </button>
        <div class="p-6 md:p-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 pr-12">${rep.device}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">${rep.solution}</p>
          ${rep.photos.map((photo, idx) => `
            <div class="mb-6">
              ${rep.photos.length > 1 ? `<h4 class="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">${photo.label}</h4>` : ''}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span class="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-bold rounded-lg mb-2">${r.before}</span>
                  <img src="${photo.before}" alt="${r.before}" class="w-full rounded-xl" />
                </div>
                <div>
                  <span class="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-bold rounded-lg mb-2">${r.after}</span>
                  <img src="${photo.after}" alt="${r.after}" class="w-full rounded-xl" />
                </div>
              </div>
            </div>
          `).join('')}
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
              <div class="text-sm text-gray-500 dark:text-gray-400">${r.price}</div>
              <div class="text-xl font-bold text-blue-600 dark:text-blue-400">${rep.price}</div>
            </div>
            <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-4 text-center">
              <div class="text-sm text-gray-500 dark:text-gray-400">${r.time}</div>
              <div class="text-xl font-bold text-gray-900 dark:text-white">${rep.time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function closeRepairModal() {
  selectedRepair = null;
  $('#modal-container').innerHTML = '';
}

// ============================================
// VIDEO SHOWCASE
// ============================================
function renderVideoShowcase() {
  const v = t('video');
  $('#video-showcase').innerHTML = `
    <section class="py-20 bg-slate-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-blue-400 font-semibold text-sm uppercase tracking-wider">${v.subtitle}</span>
          <h2 class="text-3xl md:text-5xl font-bold text-white mt-3">${v.title}</h2>
          <p class="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">${v.description}</p>
        </div>
        <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:snap-none max-w-6xl mx-auto">
          ${videos.map(vid => `
            <div class="min-w-[260px] snap-start lg:min-w-0 rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <div class="aspect-[9/16]">
                <iframe src="https://www.youtube.com/embed/${vid.id}" title="${vid.title[currentLang]}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full" loading="lazy"></iframe>
              </div>
              <div class="p-4">
                <h3 class="text-white font-bold text-sm">${vid.title[currentLang]}</h3>
                <p class="text-gray-400 text-xs mt-1">${vid.description[currentLang]}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// ============================================
// SOFTWARE
// ============================================
function renderSoftware() {
  const s = t('software');
  $('#software').className = 'py-20 md:py-28 bg-slate-50 dark:bg-slate-800';
  $('#software').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">${s.subtitle}</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">${s.title}</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">${s.description}</p>
      </div>
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        ${techStack.map(tech => `<div class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">${tech.faIcon ? `<i class="${tech.faIcon} ${tech.color} text-xl"></i>` : `<span class="${tech.color} font-bold text-sm">&lt;/&gt;</span>`}<span class="text-sm font-medium text-gray-700 dark:text-gray-300">${tech.name}</span></div>`).join('')}
      </div>
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden mb-8 hover:shadow-lg transition-shadow">
        <div class="grid md:grid-cols-2">
          <div class="bg-gray-900 p-4 flex items-center justify-center">
            <div class="relative w-full">
              <img src="${featuredProject.images[carouselIndex]}" alt="Screenshot ${carouselIndex + 1}" class="w-full h-64 md:h-80 object-contain bg-gray-900 rounded-xl" />
              ${featuredProject.images.length > 1 ? `
                <button onclick="changeCarousel(-1)" class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow"><i class="fa-solid fa-chevron-left text-sm"></i></button>
                <button onclick="changeCarousel(1)" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow"><i class="fa-solid fa-chevron-right text-sm"></i></button>
                <div class="flex justify-center gap-2 mt-3">
                  ${featuredProject.images.map((_, i) => `<button onclick="carouselIndex=${i};renderSoftware();" class="w-2.5 h-2.5 rounded-full transition-colors ${i === carouselIndex ? 'bg-blue-500' : 'bg-gray-300'}"></button>`).join('')}
                </div>
              ` : ''}
            </div>
          </div>
          <div class="p-8 flex flex-col justify-center">
            <span class="text-blue-600 dark:text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">${s.featured}</span>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">${featuredProject.title}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">${featuredProject.description[currentLang]}</p>
            <div class="flex flex-wrap gap-2">
              ${featuredProject.tags.map(tag => `<span class="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
        ${projects.map((p, idx) => {
          const imgs = p.images || (p.image ? [p.image] : []);
          const pIdx = projectCarouselIndexes[idx] || 0;
          const safeIdx = imgs.length ? pIdx % imgs.length : 0;
          return `
          <div class="min-w-[280px] snap-start md:min-w-0 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group flex flex-col">
            ${imgs.length ? `
              <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
                <img src="${imgs[safeIdx]}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.style.display='none'" />
                ${imgs.length > 1 ? `
                  <button onclick="event.stopPropagation();changeProjectCarousel(${idx},-1)" aria-label="Previous" class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 rounded-full flex items-center justify-center shadow text-gray-700 dark:text-gray-200"><i class="fa-solid fa-chevron-left text-xs"></i></button>
                  <button onclick="event.stopPropagation();changeProjectCarousel(${idx},1)" aria-label="Next" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 rounded-full flex items-center justify-center shadow text-gray-700 dark:text-gray-200"><i class="fa-solid fa-chevron-right text-xs"></i></button>
                  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                    ${imgs.map((_, i) => `<button onclick="event.stopPropagation();setProjectCarousel(${idx},${i})" aria-label="Go to slide ${i + 1}" class="w-2 h-2 rounded-full transition-all ${i === safeIdx ? 'bg-white w-4' : 'bg-white/50'}"></button>`).join('')}
                  </div>
                  <div class="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">${safeIdx + 1}/${imgs.length}</div>
                ` : ''}
              </div>
            ` : ''}
            <div class="p-5 flex flex-col flex-1">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">${p.title}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 flex-1">${p.description[currentLang]}</p>
              <div class="flex flex-wrap gap-1.5 mb-4">
                ${p.tags.map(tag => `<span class="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">${tag}</span>`).join('')}
              </div>
              <div class="flex gap-3 mt-auto">
                ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"><i class="fa-solid fa-up-right-from-square text-xs"></i> ${s.demo}</a>` : ''}
                ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"><i class="fa-brands fa-github"></i> ${s.code}</a>` : ''}
              </div>
            </div>
          </div>
        `;
        }).join('')}
      </div>
      <div class="mt-16 text-center">
        <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto text-lg">${s.ctaText}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/351933938716?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20software." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20"><i class="fa-brands fa-whatsapp text-xl"></i> ${s.ctaWhatsapp}</a>
          <a href="mailto:contacto@lopestech.pt?subject=Pedido%20de%20Or%C3%A7amento%20-%20Software" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20"><i class="fa-solid fa-envelope text-xl"></i> ${s.ctaEmail}</a>
        </div>
      </div>
    </div>
  `;
}

function changeCarousel(delta) {
  carouselIndex = (carouselIndex + delta + featuredProject.images.length) % featuredProject.images.length;
  renderSoftware();
}

function changeProjectCarousel(idx, delta) {
  const p = projects[idx];
  const len = (p.images || []).length;
  if (!len) return;
  const cur = projectCarouselIndexes[idx] || 0;
  projectCarouselIndexes[idx] = (cur + delta + len) % len;
  renderSoftware();
}

function setProjectCarousel(idx, i) {
  projectCarouselIndexes[idx] = i;
  renderSoftware();
}

// ============================================
// SOBRE MIM
// ============================================
function renderSobreMim() {
  const s = t('sobre');
  const badgeColors = [
    'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300',
    'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300',
    'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300',
  ];

  $('#sobre').className = 'py-20 md:py-28 bg-gray-100 dark:bg-gray-900';
  $('#sobre').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">${s.subtitle}</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">${s.title}</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div class="space-y-8">
          <div class="flex gap-6">
            <img src="assets/sobre-mim/foto-profissional.jpg" alt="Bruno Lopes" class="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover shadow-lg" />
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">${s.role}</h3>
              <p class="text-gray-500 dark:text-gray-400 mt-1">${s.location}</p>
              <div class="flex flex-wrap gap-2 mt-3">
                ${s.badges.map((b, i) => `<span class="px-3 py-1 ${badgeColors[i]} border text-xs font-semibold rounded-full">${b}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            ${s.bio.map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="grid grid-cols-2 gap-4">
            ${s.stats.map(stat => `<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center"><i class="fa-solid ${stat.icon} text-blue-600 dark:text-blue-400 mb-2 text-xl"></i><p class="text-2xl font-bold text-gray-900 dark:text-white">${stat.value}</p><p class="text-xs text-gray-600 dark:text-gray-400">${stat.label}</p></div>`).join('')}
          </div>
          <div class="mt-4">
            <img src="assets/sobre-mim/cartao-visita.png" alt="Cartao de Visita LopesTech" class="w-full max-w-md rounded-xl shadow-md border border-gray-200 dark:border-gray-700" />
          </div>
        </div>
        <div class="space-y-6">
          <img src="assets/sobre-mim/foto-casual.png" alt="Bruno Lopes a trabalhar" class="w-full max-w-sm mx-auto rounded-2xl shadow-xl" />
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">${s.timelineTitle}</h3>
            <div class="space-y-6">
              ${s.timeline.map((item, i) => `
                <div class="flex gap-4">
                  <div class="flex flex-col items-center">
                    <div class="w-3 h-3 rounded-full bg-blue-600 shrink-0 mt-1.5"></div>
                    ${i < s.timeline.length - 1 ? '<div class="w-0.5 h-full bg-blue-200 dark:bg-blue-800 mt-1"></div>' : ''}
                  </div>
                  <div class="pb-2">
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">${item.year}</span>
                    <h4 class="font-bold text-gray-900 dark:text-white mt-0.5">${item.title}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">${item.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// CONTACTO
// ============================================
function renderContacto() {
  const c = t('contacto');
  const locationLines = c.locationText.split('\n');

  $('#contacto').className = 'py-20 md:py-28 bg-slate-50 dark:bg-slate-800';
  $('#contacto').innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">${c.subtitle}</span>
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">${c.title}</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">${c.description}</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-6">${c.formTitle}</h3>
          <form id="contact-form" class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">${c.name} *</label>
              <input type="text" name="nome" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 dark:text-white" placeholder="${c.namePlaceholder}" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">${c.email} *</label>
              <input type="email" name="email" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 dark:text-white" placeholder="${c.emailPlaceholder}" />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">${c.serviceType} *</label>
              <select name="servico" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-900 dark:text-white">
                <option value="">${c.serviceSelect}</option>
                ${c.serviceOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">${c.message} *</label>
              <textarea name="mensagem" rows="4" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-900 dark:text-white" placeholder="${c.messagePlaceholder}"></textarea>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button type="button" onclick="handleWhatsApp()" class="flex items-center justify-center gap-2 px-4 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition"><i class="fa-brands fa-whatsapp text-xl"></i> ${c.whatsapp}</button>
              <button type="button" onclick="handleEmail()" class="flex items-center justify-center gap-2 px-4 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"><i class="fa-solid fa-envelope"></i> ${c.emailBtn}</button>
              <a href="tel:+351933938716" class="flex items-center justify-center gap-2 px-4 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition"><i class="fa-solid fa-phone"></i> ${c.call}</a>
            </div>
          </form>
        </div>
        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-5">
            ${[
              { icon: 'fa-phone', title: c.phone, content: '<a href="tel:+351933938716" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">+351 933 938 716</a>' },
              { icon: 'fa-envelope', title: c.emailLabel, content: '<a href="mailto:contacto@lopestech.pt" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">contacto@lopestech.pt</a>' },
              { icon: 'fa-location-dot', title: c.locationLabel, content: `<p class="text-gray-600 dark:text-gray-400">${locationLines.join('<br>')}</p>` },
              { icon: 'fa-clock', title: c.schedule, content: `<p class="text-gray-600 dark:text-gray-400">${c.scheduleText}<br><span class="text-sm text-gray-500">${c.scheduleNote}</span></p>` },
            ].map(item => `
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0"><i class="fa-solid ${item.icon}"></i></div>
                <div><h4 class="font-bold text-gray-900 dark:text-white">${item.title}</h4>${item.content}</div>
              </div>
            `).join('')}
          </div>
          <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
            <h4 class="font-bold text-gray-900 dark:text-white mb-4">${c.social}</h4>
            <div class="grid grid-cols-2 gap-3">
              ${[
                { href: 'https://www.facebook.com/lopestech.pt', icon: 'fa-brands fa-facebook', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40', label: 'Facebook' },
                { href: 'https://www.instagram.com/lopestech.pt', icon: 'fa-brands fa-instagram', color: 'text-pink-600 dark:text-pink-400', bg: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40', label: 'Instagram' },
                { href: 'https://www.linkedin.com/in/brunolopes9/', icon: 'fa-brands fa-linkedin', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/40', label: 'LinkedIn' },
                { href: 'https://share.google/5tCfb4JNChIZEGHOu', icon: 'fa-brands fa-google', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40', label: c.google },
              ].map(s => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 px-4 py-3 ${s.bg} border rounded-xl transition"><i class="${s.icon} ${s.color} text-xl"></i><span class="text-sm font-medium text-gray-700 dark:text-gray-300">${s.label}</span></a>`).join('')}
            </div>
          </div>
          <div class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-48">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042!2d-7.8636!3d40.6574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd234b6bc135475b%3A0x544afc94a19d0e54!2sLopes%20Tech!5e0!3m2!1spt-PT!2spt" width="100%" height="100%" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localizacao LopesTech"></iframe>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getFormData() {
  const form = $('#contact-form');
  if (!form) return {};
  return {
    nome: form.querySelector('[name="nome"]')?.value || '',
    email: form.querySelector('[name="email"]')?.value || '',
    servico: form.querySelector('[name="servico"]')?.value || '',
    mensagem: form.querySelector('[name="mensagem"]')?.value || '',
  };
}

function handleWhatsApp() {
  const c = t('contacto');
  const f = getFormData();
  const msg = `${c.whatsappMsg} ${f.nome}.\n\n${c.whatsappService}: ${f.servico}\n\n${f.mensagem}\n\nEmail: ${f.email}`;
  window.open(`https://wa.me/351933938716?text=${encodeURIComponent(msg)}`, '_blank');
}

function handleEmail() {
  const c = t('contacto');
  const f = getFormData();
  const subject = `${c.emailSubject} - ${f.servico}`;
  const body = `${c.emailBody} ${f.nome}.\n\n${c.emailServiceLabel}: ${f.servico}\n\n${f.mensagem}\n\n${c.emailContact}: ${f.email}`;
  window.location.href = `mailto:contacto@lopestech.pt?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ============================================
// FOOTER
// ============================================
function renderFooter() {
  const f = t('footer');
  const serviceHrefs = ['#servicos', '#servicos', '#software', '#servicos', '#servicos'];
  const usefulHrefs = ['#sobre', '#reparacoes', '#contacto', 'https://share.google/5tCfb4JNChIZEGHOu', 'https://www.livroreclamacoes.pt/'];

  $('#footer').innerHTML = `
    <div class="bg-slate-900 text-gray-400">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div class="md:col-span-1">
            <div class="flex items-center gap-3 mb-4">
              <img src="assets/sobre-mim/logo.jpg" alt="LopesTech" class="h-10 w-10 rounded-lg" />
              <span class="text-xl font-bold text-white">Lopes<span class="text-blue-400">Tech</span></span>
            </div>
            <p class="text-sm leading-relaxed">${f.description}</p>
            <div class="flex gap-3 mt-4">
              ${[
                { href: 'https://www.facebook.com/lopestech.pt', icon: 'fa-brands fa-facebook', hover: 'hover:bg-blue-600' },
                { href: 'https://www.instagram.com/lopestech.pt', icon: 'fa-brands fa-instagram', hover: 'hover:bg-pink-600' },
                { href: 'https://www.linkedin.com/in/brunolopes9/', icon: 'fa-brands fa-linkedin', hover: 'hover:bg-sky-600' },
                { href: 'https://wa.me/351933938716', icon: 'fa-brands fa-whatsapp', hover: 'hover:bg-green-600' },
              ].map(s => `<a href="${s.href}" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-white/10 ${s.hover} rounded-lg flex items-center justify-center transition"><i class="${s.icon} text-lg"></i></a>`).join('')}
            </div>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">${f.servicos}</h4>
            <ul class="space-y-2 text-sm">${f.serviceLinks.map((l, i) => `<li><a href="${serviceHrefs[i]}" class="hover:text-white transition">${l}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">${f.useful}</h4>
            <ul class="space-y-2 text-sm">${f.usefulLinks.map((l, i) => `<li><a href="${usefulHrefs[i]}" ${usefulHrefs[i].startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="hover:text-white transition">${l}</a></li>`).join('')}</ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">${f.legal}</h4>
            <ul class="space-y-2 text-sm">
              <li><button onclick="openLegalModal('privacidade')" class="hover:text-white transition">${f.privacy}</button></li>
              <li><button onclick="openLegalModal('cookies')" class="hover:text-white transition">${f.cookies}</button></li>
              <li><button onclick="openLegalModal('termos')" class="hover:text-white transition">${f.terms}</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10 py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; ${new Date().getFullYear()} LopesTech. ${f.rights}</p>
          <p class="text-gray-500">Bruno Lopes | NIF: 263758141 | Viseu, Portugal</p>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// LEGAL MODALS
// ============================================
function openLegalModal(type) {
  const f = t('footer');
  let title = '', content = '';

  if (type === 'privacidade') {
    title = f.privacy;
    const p = f.privacyContent;
    content = `<p><strong>LopesTech</strong> ${p.intro}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${p.dataTitle}</h4><p>${p.dataText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${p.purposeTitle}</h4><p>${p.purposeText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${p.retentionTitle}</h4><p>${p.retentionText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${p.rightsTitle}</h4><p>${p.rightsText}</p>`;
  } else if (type === 'cookies') {
    title = f.cookies;
    const c = f.cookiesContent;
    content = `<p>${c.intro}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${c.whatTitle}</h4><p>${c.whatText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${c.usedTitle}</h4><p>${c.usedText}</p>`;
  } else if (type === 'termos') {
    title = f.terms;
    const t = f.termsContent;
    content = `<h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${t.repairTitle}</h4><p>${t.repairText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${t.warrantyTitle}</h4><p>${t.warrantyText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${t.liabilityTitle}</h4><p>${t.liabilityText}</p><h4 class="font-bold mt-4 mb-1 text-gray-900 dark:text-white">${t.softwareTitle}</h4><p>${t.softwareText}</p>`;
  }

  $('#modal-container').innerHTML = `
    <div class="modal-backdrop" onclick="closeLegalModal()">
      <div class="relative bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8" onclick="event.stopPropagation()">
        <button onclick="closeLegalModal()" class="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center">
          <i class="fa-solid fa-xmark text-gray-900 dark:text-white"></i>
        </button>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pr-12">${title}</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">${content}</div>
      </div>
    </div>
  `;
}

function closeLegalModal() {
  $('#modal-container').innerHTML = '';
}

// ============================================
// RENDER ALL
// ============================================
function renderAll() {
  renderNavbar();
  renderHero();
  renderServicos();
  renderReparacoes();
  renderVideoShowcase();
  renderSoftware();
  renderSobreMim();
  renderContacto();
  renderFooter();
}

// ============================================
// INIT
// ============================================
function init() {
  applyTheme();
  repairFilter = t('reparacoes.all');
  renderAll();

  // Scroll listener for navbar
  window.addEventListener('scroll', () => {
    const wasScrolled = scrolled;
    scrolled = window.scrollY > 50;
    if (wasScrolled !== scrolled) renderNavbar();
  });

  // Close mobile menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && mobileMenuOpen) {
      mobileMenuOpen = false;
      renderNavbar();
    }
  });

  // ESC to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (selectedRepair) closeRepairModal();
      else closeLegalModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
