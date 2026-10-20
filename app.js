/* Masoud / Folio 04 — project content and accessible interactions. */
'use strict';

const PROJECTS = Object.freeze([
  {
    id: 'goldex', title: 'گلدکس / GoldEx', english: 'GOLDEX', number: '01',
    category: 'product', categoryLabel: 'محصول مستقل · فناوری مالی',
    visual: 'gold', mark: 'Gx', featured: true, logo: '/assets/goldex-logo.png',
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
    visual: 'qirato', mark: 'Q', logo: '/assets/qirato-logo.png',
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
    visual: 'meet', mark: 'M/',
    short: 'مدیریت جلسات، تقویم‌های سازمانی، دعوت‌ها و هماهنگی تیم‌ها در یک جریان منسجم.',
    problem: 'هماهنگی چندلایه جلسات سازمانی، اتاق‌ها، مدعوین و سطح دسترسی در ساختارهای پیچیده.',
    role: 'معماری راهکار، تحلیل گردش‌کار، طراحی تجربه کاربری و یکپارچه‌سازی هویت و اعلان‌ها.',
    decisions: ['تطبیق دسترسی‌ها با ساختار سازمانی', 'یکپارچه‌سازی احراز هویت متمرکز و وب‌هوک‌ها', 'طراحی مسیرهای واکنش‌گرا برای کاربران موبایل و دسکتاپ'],
    outcome: 'راهکاری برای مدیریت چرخه جلسه از برنامه‌ریزی تا تأیید حضور و اطلاع‌رسانی.',
    stack: ['Blazor', 'SSO', 'Webhooks', 'System Design']
  },
  {
    id: 'citizen', title: 'درگاه خدمات شهروندی', english: 'CITIZEN SERVICES', number: '04',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · خدمات عمومی',
    visual: 'city', mark: 'Cs',
    short: 'بازطراحی مسیر درخواست، پیگیری و پرداخت خدمات شهری در یک تجربه یکپارچه.',
    problem: 'پیچیدگی استفاده از سرویس‌های شهری و نیاز به مدرن‌سازی تجربه شهروندان بدون قطع سازگاری سرویس‌های قدیمی.',
    role: 'نوسازی معماری، طراحی رابط کاربری و حفظ قراردادهای سرویس در فرآیند مهاجرت.',
    decisions: ['نوسازی تدریجی همراه با سازگاری سرویس‌ها', 'طراحی تجربه فارسی و واکنش‌گرا', 'تفکیک منطقی بخش عمومی و مدیریت'],
    outcome: 'درگاه متمرکزتر برای کشف، درخواست و پیگیری خدمات شهری.',
    stack: ['.NET', 'Clean Architecture', 'UX', 'Docker']
  },
  {
    id: 'ruzin', title: 'روزین / Ruzin', english: 'RUZIN', number: '05',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · منابع انسانی',
    visual: 'ruzin', mark: 'R',
    short: 'مدیریت حضور و غیاب، درخواست‌های مرخصی و مأموریت و قواعد زمانی نیروی انسانی.',
    problem: 'تعدد قوانین ساعات کاری، سلسله‌مراتب سازمانی و نیاز به محاسبه دقیق وضعیت تردد و درخواست‌ها.',
    role: 'تحلیل قوانین حضور و غیاب، طراحی مدل دسترسی و بهبود گردش‌کارهای کارکنان و منابع انسانی.',
    decisions: ['محاسبات مبتنی بر تاریخ اعتبار قوانین', 'گردش‌کار درخواست و تأیید', 'هماهنگ‌سازی داده تردد و ساختار سازمانی'],
    outcome: 'سیستمی برای مدیریت عملیات حضور و درخواست‌های منابع انسانی با مدل‌های زمانی روشن.',
    stack: ['HR Workflows', '.NET', 'Access Control', 'Data']
  },
  {
    id: 'itam', title: 'پایش سامانه‌ها / ITAM', english: 'ITAM MONITORING', number: '06',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · عملیات',
    visual: 'itam', mark: 'iT',
    short: 'نمایی عملیاتی از سلامت سرویس‌ها، پایگاه‌های داده و رویدادهای زیرساخت نرم‌افزاری.',
    problem: 'تشخیص دیرهنگام اختلالات و پراکندگی اطلاعات سلامت سامانه‌ها در محیط‌های سازمانی.',
    role: 'طراحی ساختار مانیتورینگ، تجربه داشبورد و یکپارچگی بررسی‌های سلامت سیستم.',
    decisions: ['تفکیک پایش سرویس و پایگاه داده', 'نمایش وضعیت بلادرنگ', 'طراحی مدل‌های تعریف و تخصیص منابع تحت پایش'],
    outcome: 'یک نمای عملیاتی متمرکزتر برای بررسی وضعیت سیستم‌ها و رخدادها.',
    stack: ['Monitoring', 'SignalR', 'SQL Server', 'DevOps']
  },
  {
    id: 'ranking', title: 'سامانه رتبه‌بندی', english: 'RANKING SYSTEM', number: '07',
    category: 'enterprise', categoryLabel: 'سامانه سازمانی · ارزیابی',
    visual: 'rank', mark: 'Rk',
    short: 'شفاف‌سازی معیارهای ارزیابی، دوره‌های فعال و وضعیت امتیاز کارکنان؛ در مسیر توسعه.',
    problem: 'پراکندگی معیارهای رتبه‌بندی و نبود نمای شفاف از امتیازها و شرایط موردنیاز.',
    role: 'طراحی مدل دوره و معیارهای ارزیابی، تجربه کاربری کارکنان و الگوی دسترسی.',
    decisions: ['تفکیک معیار و امتیاز کسب‌شده', 'پشتیبانی از دوره‌های ارزیابی', 'طراحی دسترسی‌های مبتنی بر نقش'],
    outcome: 'زیرساختی در حال توسعه برای مدیریت شفاف‌تر چرخه ارزیابی.',
    stack: ['Workflow', 'Authorization', '.NET']
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

const grid = qs('#project-grid');
const count = qs('#work-count');
const dialog = qs('#project-dialog');
let previousFocus = null;

function cardMarkup(p) {
  const logo = p.logo ? '<img class="visual-logo" src="' + p.logo + '" alt="" loading="lazy">' : '';
  return [
    '<article class="project-card', p.featured ? ' featured' : '', '" data-category="', p.category, '" data-reveal aria-labelledby="project-', p.id, '">',
    '<div class="project-visual" data-visual="', p.visual, '" aria-hidden="true">',
    '<div class="visual-rules"></div><div class="visual-orbit"></div>',
    '<div class="visual-top" dir="ltr"><span>', p.english, '</span><span>MK / ', p.number, '</span></div>',
    '<div class="visual-display" dir="ltr"><span class="visual-monogram">', p.mark, '</span>', logo, '</div>',
    '<div class="visual-bottom" dir="ltr"><span>SOFTWARE / SYSTEMS</span><span>↓</span></div></div>',
    '<div class="project-main"><span class="project-index" dir="ltr">', p.number, ' / SELECTED WORK</span>',
    '<h3 id="project-', p.id, '">', escapeHtml(p.title), '</h3><p>', escapeHtml(p.short), '</p>',
    '<div class="project-bottom"><span>', escapeHtml(p.categoryLabel), '</span>',
    '<button class="project-open" type="button" data-project="', p.id, '" aria-label="مشاهده جزئیات پروژه ', escapeHtml(p.title), '" title="مشاهده جزئیات">↙</button>',
    '</div></div></article>'
  ].join('');
}
function renderProjects(category = 'all') {
  const filtered = PROJECTS.filter((p) => category === 'all' || p.category === category);
  grid.innerHTML = filtered.map(cardMarkup).join('');
  count.textContent = faNumber(filtered.length) + ' پروژه منتخب';
  bindReveals(grid);
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
    p.link ? '<a class="dialog-visit" href="' + p.link + '" target="_blank" rel="noopener noreferrer">مشاهده وب‌سایت پروژه <span aria-hidden="true">↗</span></a>' : '',
    '</div>'
  ].join('');
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
    document.body.classList.add('dialog-open');
    qs('#dialog-close').focus();
  }
}
function closeDialog() { if (dialog && dialog.open) dialog.close(); }
grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project, button);
});
qs('#dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (previousFocus && previousFocus.isConnected) previousFocus.focus();
  previousFocus = null;
});
qsa('.filter-btn').forEach((button) => {
  button.addEventListener('click', () => {
    qsa('.filter-btn').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderProjects(button.dataset.filter);
  });
});

/* Mobile navigation */
const menuButton = qs('#menu-switch');
const mobileNav = qs('#mobile-nav');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
  mobileNav.classList.toggle('open', open);
  mobileNav.inert = !open;
  document.body.classList.toggle('menu-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
qsa('a', mobileNav).forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });

/* Theme */
const themeButton = qs('#theme-switch');
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  qs('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#191d19' : '#f4f3ee');
}
try {
  applyTheme(localStorage.getItem('mk-theme') === 'dark' ? 'dark' : 'light');
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
qs('#copy-email').addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('masoud.xpress@gmail.com');
    showToast('آدرس ایمیل کپی شد.');
  } catch {
    showToast('امکان کپی خودکار نیست؛ آدرس ایمیل را از بالای دکمه انتخاب کنید.');
  }
});

/* Reading progress and restrained motion */
let revealObserver;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }
  }, {threshold: .06, rootMargin: '0px 0px 30px 0px'});
}
function bindReveals(root) {
  if (!revealObserver) return;
  qsa('[data-reveal]', root).forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('revealed');
    else revealObserver.observe(el);
  });
}
function updateScroll() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0;
  qs('#scroll-line').style.width = percent + '%';
  qs('#site-header').classList.toggle('scrolled', window.scrollY > 24);
}
window.addEventListener('scroll', updateScroll, {passive:true});
window.addEventListener('resize', updateScroll, {passive:true});
renderProjects();
document.documentElement.classList.add('has-js');
updateScroll();
