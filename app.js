/* Masoud / Folio 04 — project content and accessible interactions. */
'use strict';

const PROJECTS = Object.freeze([
  {
    id: 'goldex', title: 'گلدکس / GoldEx', english: 'GOLDEX', number: '01',
    category: 'product', categoryLabel: 'محصول مستقل · فناوری مالی',
    visual: 'gold', mark: 'Gx', featured: true, featuredHome: true, logo: '/assets/goldex-logo.png',
    short: 'سامانه جامع مدیریت کسب‌وکار طلا و جواهر؛ از موجودی و فاکتور تا حسابداری و تعامل با دستیار هوشمند.',
    problem: 'فرآیندهای پراکنده موجودی، قیمت‌گذاری، فاکتور و تسویه‌حساب در کسب‌وکارهای طلا و جواهر.',
    role: 'طراحی مدل دامنه مالی، معماری نرم‌افزار، مدیریت توسعه و یکپارچه‌سازی قابلیت‌های هوش مصنوعی.',
    decisions: ['مدل‌سازی دقیق موجودی، وزن، عیار و پرداخت‌ها', 'جداسازی منطق کسب‌وکار از رابط کاربری و سرویس‌ها', 'ارائه قابلیت‌های تعاملی مبتنی بر Model Context Protocol'],
    outcome: 'محصولی یکپارچه با گردش‌کار فروش، خرید، موجودی و حساب‌ها و قابلیت توسعه تدریجی.',
    stack: ['.NET', 'Blazor', 'SQL Server', 'DDD', 'MCP'],
    link: 'https://goldexsoft.ir'
  },
  {
    id: 'qirato', title: 'قیراط / Qirato', english: 'QIRATO', number: '02',
    category: 'product', categoryLabel: 'محصول مستقل · اندروید',
    visual: 'qirato', mark: 'Q', featuredHome: true, logo: '/assets/qirato-logo.png',
    short: 'ابزار کاربردی محاسبه و صدور فاکتور طلا با تمرکز بر سرعت، دقت و تجربه آفلاین.',
    problem: 'نیاز فعالان بازار طلا به محاسبات دقیق، ثبت اطلاعات و تولید اسناد بدون وابستگی دائمی به اتصال اینترنت.',
    role: 'طراحی تجربه محصول، مدل داده محلی و جریان‌های اصلی محاسبات و صدور فاکتور.',
    decisions: ['رویکرد Local-First برای سناریوهای روزمره', 'تفکیک تجربه محاسبه از مدیریت فاکتور', 'تمرکز بر ورودی‌های سریع و رابط کاربری لمسی'],
    outcome: 'مجموعه ابزار موبایلی تخصصی برای سناریوهای محاسبه و ثبت فاکتور طلا.',
    stack: ['Kotlin', 'Jetpack Compose', 'SQLite', 'Mobile UX'],
    link: 'https://qirato.ir'
  },
  {
    id: 'meetflow', title: 'وقت‌نگار / MeetFlow', english: 'MEETFLOW', number: '03',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · مدیریت جلسات',
    visual: 'meet', mark: 'M/', logo: '/assets/meetflow-logo.png', featuredHome: true,
    short: 'سامانه سازمانی مدیریت جلسات، تقویم‌ها، دعوت‌ها، مصوبات و هماهنگی میان واحدها با یکپارچه‌سازی هویت.',
    problem: 'هماهنگی چندلایه جلسات سازمانی، اتاق‌ها، مدعوین و سطح دسترسی در ساختارهای پیچیده.',
    role: 'معماری راهکار، تحلیل گردش‌کار، طراحی تجربه کاربری و یکپارچه‌سازی هویت و اعلان‌ها.',
    decisions: ['تطبیق دسترسی‌ها با ساختار سازمانی', 'یکپارچه‌سازی احراز هویت متمرکز و وب‌هوک‌ها', 'طراحی مسیرهای واکنش‌گرا برای کاربران موبایل و دسکتاپ'],
    outcome: 'راهکاری برای مدیریت چرخه جلسه از برنامه‌ریزی تا تأیید حضور و اطلاع‌رسانی.',
    stack: ['.NET 10', 'Blazor', 'SQL Server', 'SSO', 'Webhooks'],
    link: 'https://jalase.urmia.ir'
  },
  {
    id: 'smartplaque', title: 'پلاک هوشمند / SmartPlaque', english: 'SMART PLAQUE', number: '04',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · شهر هوشمند و GIS',
    visual: 'plaque', mark: 'P/', featuredHome: true, logo: '/assets/smartplaque-logo.png',
    short: 'پلاک و اطلاعات مکانی هوشمند، اتصال قطعات و واحدهای ساختمانی به داده‌های شهری و سرویس‌های سازمانی.',
    problem: 'پراکندگی اطلاعات املاک، واحدهای ساختمانی و مشخصات مکانی بین سامانه‌ها و دستگاه‌های مختلف.',
    role: 'مشارکت در طراحی و توسعه سامانه‌های شهروندی و مدیریتی، یکپارچه‌سازی GIS و مدل‌های داده مکانی.',
    decisions: ['مدل دامنه Parcel و Unit برای املاک و واحدها', 'یکپارچه‌سازی اطلاعات مکانی مبتنی بر WFS و GIS', 'مدیریت ویژگی‌های قابل تعریف توسط سازمان‌ها و گزارش مغایرت'],
    outcome: 'بستری برای مدیریت اطلاعات پلاک و دارایی مکانی و ارتباط بهتر داده‌های شهری.',
    stack: ['.NET', 'Blazor', 'GIS / WFS', 'SQL Server'],
    link: 'https://pelak.urmia.ir'
  },
  {
    id: 'itam', title: 'پایش سامانه‌ها / ITAM', english: 'ITAM MONITORING', number: '05',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · عملیات',
    visual: 'itam', mark: 'iT', featuredHome: true, logo: '/assets/itam-logo.png',
    short: 'مدیریت دارایی‌های IT و پایش بلادرنگ رایانه‌ها، سخت‌افزار و تغییرات شبکه با عامل‌های نصب‌شده روی سیستم‌ها.',
    problem: 'نبود دید یکپارچه از وضعیت دارایی‌های فناوری اطلاعات، تغییرات تجهیزات، ارتباطات و سلامت سیستم‌های کاربران.',
    role: 'طراحی و توسعه اجزای معماری Agent–Server، جریان گردآوری داده، نمایش بلادرنگ و داشبورد مدیریتی.',
    decisions: ['عامل ویندوز برای جمع‌آوری تغییرات سخت‌افزار و شبکه', 'ثبت رویدادها برای ارسال مجدد هنگام قطع ارتباط', 'نمایش تغییرات در داشبورد بلادرنگ'],
    outcome: 'بستر رصد دارایی‌های سازمانی، گزارش تغییرات و مشاهده متمرکز وضعیت رایانه‌ها.',
    stack: ['Windows Agent', '.NET', 'Blazor', 'SignalR', 'SQL Server'],
    link: 'https://itam.urmia.ir'
  },
  {
    id: 'citizen', title: 'درگاه خدمات شهروندی', english: 'CITIZEN SERVICES', number: '06',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · خدمات عمومی',
    visual: 'city', mark: 'Cs',
    short: 'بازطراحی مسیر درخواست، پیگیری و پرداخت خدمات شهری در یک تجربه یکپارچه.',
    problem: 'پیچیدگی استفاده از سرویس‌های شهری و نیاز به مدرن‌سازی تجربه شهروندان بدون قطع سازگاری سرویس‌های قدیمی.',
    role: 'نوسازی معماری، طراحی رابط کاربری و حفظ قراردادهای سرویس در فرآیند مهاجرت.',
    decisions: ['نوسازی تدریجی همراه با سازگاری سرویس‌ها', 'طراحی تجربه فارسی و واکنش‌گرا', 'تفکیک منطقی بخش عمومی و مدیریت'],
    outcome: 'درگاه متمرکزتر برای کشف، درخواست و پیگیری خدمات شهری.',
    stack: ['.NET 10', 'MVC', 'SQL Server', 'SOAP', 'Docker'],
    link: 'https://khedmat.urmia.ir'
  },
  {
    id: 'ruzin', title: 'روزین / Ruzin', english: 'RUZIN', number: '07',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · منابع انسانی',
    visual: 'ruzin', mark: 'R', logo: '/assets/ruzin-mark.svg',
    short: 'مدیریت حضور و غیاب، درخواست‌های مرخصی و مأموریت و قواعد زمانی نیروی انسانی.',
    problem: 'تعدد قوانین ساعات کاری، سلسله‌مراتب سازمانی و نیاز به محاسبه دقیق وضعیت تردد و درخواست‌ها.',
    role: 'تحلیل قوانین حضور و غیاب، طراحی مدل دسترسی و بهبود گردش‌کارهای کارکنان و منابع انسانی.',
    decisions: ['محاسبات مبتنی بر تاریخ اعتبار قوانین', 'گردش‌کار درخواست و تأیید', 'هماهنگ‌سازی داده تردد و ساختار سازمانی'],
    outcome: 'سیستمی برای مدیریت عملیات حضور و درخواست‌های منابع انسانی با مدل‌های زمانی روشن.',
    stack: ['.NET 10', 'Blazor', 'HR Workflows', 'Access Control'],
    link: 'https://hozor.urmia.ir'
  },
  {
    id: 'etraab', title: 'پلتفرم معاملات اتراب', english: 'ETRAAB', number: '08',
    category: 'industry', categoryLabel: 'پروژه تخصصی · معاملات طلا',
    visual: 'etraab', mark: 'Et',
    short: 'بخش‌هایی از تجربه خرید، فروش و محاسبات مالی در یک سامانه معاملات آنلاین طلا.',
    problem: 'پیچیدگی مدیریت سفارش‌ها و محاسبات مالی حساس در محیط معاملات آنلاین.',
    role: 'توسعه بخش‌هایی از معماری API، رابط کاربری و منطق محاسبات معاملات طلا.',
    decisions: ['تمرکز بر صحت محاسبات مالی', 'تفکیک سرویس‌های تجاری از ارائه اطلاعات', 'مدیریت وضعیت سفارش و جریان معامله'],
    outcome: 'مشارکت در توسعه زیرساخت معاملات و تجربه کاربری یک پلتفرم تخصصی.',
    stack: ['ASP.NET Core', 'Blazor', 'SQL Server']
  },
  {
    id: 'his', title: 'سامانه‌های بیمارستانی', english: 'HEALTHCARE SYSTEMS', number: '09',
    category: 'industry', categoryLabel: 'پروژه تخصصی · سلامت',
    visual: 'his', mark: 'H+',
    short: 'مشارکت در توسعه ماژول‌های نوبت‌دهی، خدمات پرسنل و فرآیندهای عملیاتی بیمارستان.',
    problem: 'نیاز به جریان‌های قابل اتکا برای امور اداری و خدماتی در محیط بیمارستانی.',
    role: 'توسعه و یکپارچه‌سازی ماژول‌های نرم‌افزاری با تمرکز بر ساختار داده و فرآیند.',
    decisions: ['تفکیک بخش‌های عملکردی سامانه', 'مدیریت ارتباط بین ماژول‌ها', 'توجه به حساسیت داده و کنترل دسترسی'],
    outcome: 'مشارکت در دیجیتالی‌سازی بخشی از فرآیندهای خدماتی و اداری بیمارستان.',
    stack: ['.NET', 'SQL Server', 'Enterprise Integration']
  }
]);

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const faNumber = (n) => new Intl.NumberFormat('fa-IR').format(n);
const icon = (name) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="/assets/icons.svg#' + name + '"></use></svg>';
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');

const grid = qs('#project-grid');
const archivePage = document.body.dataset.page === 'archive';
const count = qs('#work-count');
const dialog = qs('#project-dialog');
let previousFocus = null;

function cardMarkup(p) {
  const identity = p.logo
    ? '<span class="logo-plate"><img class="visual-logo" src="' + p.logo + '" alt="" loading="lazy" width="180" height="120"></span>'
    : '<span class="visual-monogram">' + p.mark + '</span>';
  return [
    '<article class="project-card', p.featured ? ' featured' : '', '" data-category="', p.category, '" data-reveal aria-labelledby="project-', p.id, '">',
    '<div class="project-visual" data-visual="', p.visual, '" aria-hidden="true">',
    '<div class="visual-rules"></div><div class="visual-orbit"></div>',
    '<div class="visual-top" dir="ltr"><span>', p.english, '</span><span>MK / ', p.number, '</span></div>',
    '<div class="visual-display" dir="ltr">', identity, '</div>',
    '<div class="visual-bottom" dir="ltr"><span>', escapeHtml(p.stack.slice(0, 2).join(' / ')), '</span>', icon('layers'), '</div></div>',
    '<div class="project-main"><span class="project-index" dir="ltr">', p.english, '</span>',
    '<h3 id="project-', p.id, '">', escapeHtml(p.title), '</h3><p>', escapeHtml(p.short), '</p>',
    '<div class="project-bottom"><span>', escapeHtml(p.categoryLabel), '</span>',
    '<button class="project-open" type="button" data-project="', p.id, '" aria-label="مشاهده جزئیات پروژه ', escapeHtml(p.title), '">جزئیات پروژه ', icon('arrow-left'), '</button>',
    '</div></div></article>'
  ].join('');
}
function renderProjects(category = 'all') {
  const featured = archivePage ? PROJECTS : PROJECTS.filter((p) => p.featuredHome);
  const filtered = featured.filter((p) => category === 'all' || p.category === category);
  grid.innerHTML = filtered.map(cardMarkup).join('');
  if (count) count.textContent = faNumber(filtered.length) + (archivePage ? ' پروژه در آرشیو' : ' پروژه شاخص');
  if (!motionPreference.matches) grid.animate([{opacity: .6, transform: 'translateY(6px)'}, {opacity: 1, transform: 'none'}], {duration: 280, easing: 'ease-out'});
}
function openProject(id, trigger) {
  const p = PROJECTS.find((project) => project.id === id);
  if (!p || !dialog) return;
  previousFocus = trigger;
  const decisions = p.decisions.map((d) => '<li>' + escapeHtml(d) + '</li>').join('');
  qs('#dialog-content').innerHTML = [
    '<div class="dialog-content"><p class="dialog-kicker" dir="ltr">',p.english,' / ',p.number,'</p>',
    '<h2 id="dialog-heading">',escapeHtml(p.title),'</h2>',
    '<p class="dialog-summary">',escapeHtml(p.short),'</p>',
    '<div class="dialog-section"><h3>مسئله</h3><p>',escapeHtml(p.problem),'</p></div>',
    '<div class="dialog-section"><h3>نقش من</h3><p>',escapeHtml(p.role),'</p></div>',
    '<div class="dialog-section"><h3>تصمیم‌های فنی</h3><ul>',decisions,'</ul></div>',
    '<div class="dialog-section"><h3>خروجی</h3><p>',escapeHtml(p.outcome),'</p></div>',
    '<div class="dialog-section"><h3>فناوری‌ها</h3><p class="dialog-tags" dir="ltr">',p.stack.map(escapeHtml).join(' / '),'</p></div>',
    p.link ? '<a class="dialog-visit" href="' + p.link + '" target="_blank" rel="noopener noreferrer">مشاهده وب‌سایت پروژه ' + icon('external') + '</a>' : '',
    '</div>'
  ].join('');
  if (typeof dialog.showModal === 'function') {
    dialog.classList.remove('is-closing');
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    qs('#dialog-close').focus();
  }
}
let dialogCloseTimer;
function closeDialog() {
  if (!dialog?.open || dialog.classList.contains('is-closing')) return;
  if (motionPreference.matches) { dialog.close(); return; }
  dialog.classList.add('is-closing');
  dialogCloseTimer = setTimeout(() => dialog.close(), 160);
}
grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project, button);
});
qs('#dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeDialog();
});
dialog.addEventListener('cancel', (event) => { event.preventDefault(); closeDialog(); });
dialog.addEventListener('close', () => {
  clearTimeout(dialogCloseTimer);
  dialog.classList.remove('is-closing');
  document.body.classList.remove('dialog-open');
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
  previousFocus = null;
});
function selectCategory(category, updateUrl = false) {
  const selected = ['all', 'product', 'enterprise', 'industry'].includes(category) ? category : 'all';
  qsa('.filter-btn').forEach((tab) => {
    const active = tab.dataset.filter === selected;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-pressed', String(active));
  });
  renderProjects(selected);
  if (archivePage && updateUrl) {
    const url = new URL(location.href);
    if (selected === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', selected);
    history.pushState({}, '', url);
  }
}
qsa('.filter-btn').forEach((button) => {
  const total = button.dataset.filter === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === button.dataset.filter).length;
  button.insertAdjacentHTML('beforeend', '<span class="filter-count" aria-hidden="true">' + faNumber(total) + '</span>');
  button.addEventListener('click', () => selectCategory(button.dataset.filter, true));
});

// Render the project catalog before initializing optional page controls.
// This prevents unrelated failures from leaving the archive blank.
selectCategory(archivePage ? new URLSearchParams(location.search).get('category') : 'all');
window.addEventListener('popstate', () => { if (archivePage) selectCategory(new URLSearchParams(location.search).get('category')); });

/* Mobile navigation */
const menuButton = qs('#menu-switch');
const mobileNav = qs('#mobile-nav');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
  mobileNav.classList.toggle('open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
  if (open) qs('a', mobileNav)?.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
qsa('a', mobileNav).forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
  if (event.key === 'Tab' && menuButton.getAttribute('aria-expanded') === 'true') {
    const links = qsa('a', mobileNav);
    if (event.shiftKey && document.activeElement === menuButton) { event.preventDefault(); links.at(-1).focus(); }
    else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); menuButton.focus(); }
    else if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); menuButton.focus(); }
    else if (!event.shiftKey && document.activeElement === menuButton) { event.preventDefault(); links[0].focus(); }
  }
});
document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });

/* Theme */
const themeButton = qs('#theme-switch');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  themeButton.setAttribute('aria-label', theme === 'dark' ? 'فعال کردن حالت روشن' : 'فعال کردن حالت تاریک');
  qs('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#191d19' : '#f4f3ee');
}
try {
  applyTheme(localStorage.getItem('mk-theme') || document.documentElement.dataset.theme || 'light');
} catch { applyTheme('light'); }
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('mk-theme', next); } catch { /* private mode */ }
});

/* Utility interaction: no simulated email delivery */
let toastTimeout;
function showToast(message) {
  const toast = qs('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3200);
}
qs('#copy-email')?.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('masoud.xpress@gmail.com');
    qs('#copy-email').innerHTML = '<span>کپی شد</span>' + icon('check');
    setTimeout(() => { qs('#copy-email').innerHTML = '<span>کپی آدرس ایمیل</span>' + icon('copy'); }, 2600);
    showToast('آدرس ایمیل کپی شد.');
  } catch {
    showToast('امکان کپی خودکار نیست؛ آدرس ایمیل را از بالای دکمه انتخاب کنید.');
  }
});

/* Scroll progress is decorative and must never gate content visibility. */
function updateScroll() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0;
  const progressLine = qs('#scroll-line');
  if (progressLine) progressLine.style.transform = 'scaleX(' + percent / 100 + ')';
  qs('#site-header').classList.toggle('scrolled', window.scrollY > 24);
}
let scrollScheduled = false;
window.addEventListener('scroll', () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => { updateScroll(); scrollScheduled = false; });
}, {passive:true});
window.addEventListener('resize', updateScroll, {passive:true});
updateScroll();

/* The active location is reflected in navigation without hiding any content. */
if (!archivePage && 'IntersectionObserver' in window) {
  const navLinks = qsa('.main-nav a');
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((link) => {
        const active = link.hash === '#' + entry.target.id || (entry.target.id === 'work' && link.pathname === '/projects.html');
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-20% 0px -55% 0px'});
  qsa('main > section[id]').forEach((section) => observer.observe(section));
}
