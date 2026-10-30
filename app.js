/* Masoud / Folio 04 — project content and accessible interactions. */
'use strict';

const PROJECTS = Object.freeze([
  {
    id: 'goldex', title: 'گلدکس / GoldEx', english: 'GOLDEX', number: '01',
    category: 'product', categoryLabel: 'نرم‌افزار مدیریت طلافروشی',
    visual: 'gold', mark: 'Gx', featured: true, featuredHome: true, logo: '/assets/goldex-logo.png',
    short: 'نرم‌افزار مدیریت خرید و فروش، موجودی و حساب‌های طلافروشی، همراه با صدور فاکتور و دستیار هوش مصنوعی.',
    problem: 'در کار طلا، موجودی فقط تعداد کالا نیست؛ وزن، عیار، قیمت و حساب مشتری هم باید با هم بررسی بشن. جدا بودن این اطلاعات، پیگیری خرید و فروش و تسویه‌ها رو سخت می‌کنه.',
    role: 'ساختار نرم‌افزار و نحوه ثبت اطلاعات مالی رو طراحی کرده‌ام، توسعه پروژه رو مدیریت کرده‌ام و روی اتصال دستیار هوش مصنوعی به برنامه کار کرده‌ام.',
    decisions: ['ثبت موجودی با در نظر گرفتن وزن، عیار و پرداخت‌ها', 'جدا کردن کد محاسبات مالی از صفحات برنامه تا تغییر ظاهر روی محاسبات اثر نذاره', 'اتصال دستیار هوش مصنوعی به قابلیت‌های برنامه با پروتکل MCP'],
    outcome: 'خرید، فروش، موجودی و حساب‌ها در یک نرم‌افزار کنار هم قرار گرفته‌اند و می‌شه ارتباط بین این اطلاعات رو پیگیری کرد.',
    stack: ['.NET', 'Blazor', 'SQL Server', 'DDD', 'MCP'],
    link: 'https://goldexsoft.ir'
  },
  {
    id: 'qirato', title: 'قیراط / Qirato', english: 'QIRATO', number: '02',
    category: 'product', categoryLabel: 'اپ اندروید برای محاسبات طلا',
    visual: 'qirato', mark: 'Q', featuredHome: true, logo: '/assets/qirato-logo.png',
    short: 'اپ اندروید برای محاسبه قیمت طلا و صدور فاکتور؛ قابل استفاده بدون اتصال دائم به اینترنت.',
    problem: 'برای محاسبه قیمت و ثبت فاکتور طلا، همیشه کامپیوتر یا اینترنت در دسترس نیست. این کارها باید روی گوشی هم قابل انجام باشن.',
    role: 'صفحات برنامه، نحوه ذخیره اطلاعات روی گوشی و مراحل محاسبه و صدور فاکتور رو طراحی کرده‌ام.',
    decisions: ['ذخیره اطلاعات روی گوشی برای استفاده بدون اینترنت', 'جدا کردن بخش محاسبه قیمت از مدیریت فاکتورها', 'طراحی فرم‌ها برای وارد کردن اطلاعات روی صفحه گوشی'],
    outcome: 'کاربر می‌تونه محاسبات طلا رو انجام بده و فاکتور ثبت کنه، بدون اینکه برای کارهای روزمره به اینترنت دائم نیاز داشته باشه.',
    stack: ['Kotlin', 'Jetpack Compose', 'SQLite', 'Mobile UX'],
    link: 'https://qirato.ir'
  },
  {
    id: 'meetflow', title: 'وقت‌نگار / MeetFlow', english: 'MEETFLOW', number: '03',
    category: 'enterprise', categoryLabel: 'مدیریت جلسات سازمانی',
    visual: 'meet', mark: 'M/', logo: '/assets/meetflow-logo.png', featuredHome: true,
    short: 'سامانه برنامه‌ریزی جلسات، رزرو اتاق، دعوت افراد و ثبت مصوبات برای واحدهای مختلف سازمان.',
    problem: 'برگزاری یک جلسه سازمانی به هماهنگی زمان، اتاق و افراد نیاز داره. دسترسی هر فرد به اطلاعات جلسه هم باید متناسب با جایگاهش در سازمان باشه.',
    role: 'ساختار برنامه و مراحل ثبت و مدیریت جلسه رو طراحی کرده‌ام و روی صفحات کاربری، اتصال به سیستم ورود سازمان و ارسال اعلان‌ها کار کرده‌ام.',
    decisions: ['تنظیم دسترسی‌ها بر اساس ساختار سازمان', 'اتصال به سیستم ورود یکپارچه سازمان و سرویس‌های اطلاع‌رسانی', 'قابل استفاده کردن صفحات روی موبایل و کامپیوتر'],
    outcome: 'برنامه‌ریزی جلسه، دعوت افراد، تأیید حضور و اطلاع‌رسانی در یک سامانه انجام می‌شه.',
    stack: ['.NET 10', 'Blazor', 'SQL Server', 'SSO', 'Webhooks'],
    link: 'https://jalase.urmia.ir'
  },
  {
    id: 'smartplaque', title: 'پلاک هوشمند / SmartPlaque', english: 'SMART PLAQUE', number: '04',
    category: 'enterprise', categoryLabel: 'اطلاعات املاک و نقشه شهری',
    visual: 'plaque', mark: 'P/', featuredHome: true, logo: '/assets/smartplaque-logo.png',
    short: 'سامانه ثبت اطلاعات املاک و واحدهای ساختمانی و اتصال هر ملک به موقعیتش روی نقشه شهری.',
    problem: 'اطلاعات یک ملک، واحدهای اون و موقعیتش روی نقشه در سامانه‌های مختلف نگهداری می‌شه. برای بررسی یک پلاک، این اطلاعات باید کنار هم قرار بگیرن.',
    role: 'در طراحی و توسعه بخش شهروندی و مدیریت مشارکت داشته‌ام و روی اتصال اطلاعات املاک به نقشه و سرویس‌های اطلاعات مکانی کار کرده‌ام.',
    decisions: ['ثبت قطعه زمین و واحد ساختمانی به‌صورت جداگانه با مدل Parcel و Unit', 'دریافت اطلاعات نقشه از سرویس‌های GIS با استاندارد WFS', 'امکان تعریف مشخصات موردنیاز هر سازمان و ثبت گزارش اختلاف اطلاعات'],
    outcome: 'اطلاعات پلاک، قطعه زمین و واحدهای ساختمانی به داده‌های نقشه متصل شده‌اند و امکان ثبت مغایرت‌ها وجود داره.',
    stack: ['.NET', 'Blazor', 'GIS / WFS', 'SQL Server'],
    link: 'https://pelak.urmia.ir'
  },
  {
    id: 'itam', title: 'مدیریت تجهیزات IT / ITAM', english: 'ITAM MONITORING', number: '05',
    category: 'enterprise', categoryLabel: 'مدیریت تجهیزات کامپیوتری',
    visual: 'itam', mark: 'iT', featuredHome: true, logo: '/assets/itam-logo.png',
    short: 'ثبت مشخصات کامپیوترهای سازمان و گزارش تغییرات سخت‌افزار و شبکه در یک پنل مرکزی.',
    problem: 'واحد فناوری اطلاعات باید بدونه هر کامپیوتر چه قطعاتی داره، وضعیتش چطوره و چه تغییری کرده. جمع‌آوری دستی این اطلاعات بین تعداد زیادی سیستم دشواره.',
    role: 'برنامه ویندوزی جمع‌آوری اطلاعات، ارتباط اون با سرور و پنل نمایش وضعیت کامپیوترها رو طراحی و توسعه داده‌ام.',
    decisions: ['نصب یک برنامه روی ویندوز برای ثبت تغییرات سخت‌افزار و شبکه', 'نگهداری گزارش‌ها هنگام قطع ارتباط و ارسال دوباره بعد از اتصال', 'نمایش تغییرات در پنل مدیریت به‌محض دریافت اطلاعات'],
    outcome: 'مشخصات و تغییرات کامپیوترهای سازمان در یک پنل قابل مشاهده و پیگیریه.',
    stack: ['Windows Agent', '.NET', 'Blazor', 'SignalR', 'SQL Server'],
    link: 'https://itam.urmia.ir'
  },
  {
    id: 'citizen', title: 'درگاه خدمات شهروندی', english: 'CITIZEN SERVICES', number: '06',
    category: 'enterprise', categoryLabel: 'خدمات آنلاین شهرداری',
    visual: 'city', mark: 'Cs',
    short: 'درگاهی برای ثبت درخواست، پیگیری و پرداخت هزینه خدمات شهری؛ با صفحات بازطراحی‌شده برای شهروندان.',
    problem: 'استفاده از خدمات آنلاین شهری پیچیده بود. صفحات و ساختار برنامه باید نوسازی می‌شدن، در حالی که ارتباط با سرویس‌های قدیمی همچنان برقرار می‌موند.',
    role: 'روی نوسازی ساختار برنامه و طراحی صفحات کار کرده‌ام و هنگام جایگزینی بخش‌های قدیمی، سازگاری با سرویس‌های موجود رو حفظ کرده‌ام.',
    decisions: ['جایگزینی تدریجی بخش‌های قدیمی با حفظ ارتباط با سرویس‌های موجود', 'طراحی صفحات فارسی برای موبایل و کامپیوتر', 'جدا کردن بخش خدمات شهروندان از پنل مدیریت'],
    outcome: 'خدمات شهری در یک درگاه قابل دسترس‌اند و شهروند می‌تونه درخواستش رو ثبت و پیگیری کنه.',
    stack: ['.NET 10', 'MVC', 'SQL Server', 'SOAP', 'Docker'],
    link: 'https://khedmat.urmia.ir'
  },
  {
    id: 'ruzin', title: 'روزین / Ruzin', english: 'RUZIN', number: '07',
    category: 'enterprise', categoryLabel: 'حضور و غیاب کارکنان',
    visual: 'ruzin', mark: 'R', logo: '/assets/ruzin-mark.svg',
    short: 'سامانه حضور و غیاب کارکنان، ثبت درخواست مرخصی و مأموریت و بررسی اون‌ها توسط مسئول مربوطه.',
    problem: 'ساعت کاری و قوانین حضور برای همه کارکنان یکسان نیست و ممکنه در طول زمان تغییر کنه. محاسبه تردد و بررسی درخواست‌ها باید این تفاوت‌ها رو در نظر بگیره.',
    role: 'قوانین حضور و غیاب رو بررسی کرده‌ام، دسترسی کاربران رو طراحی کرده‌ام و مراحل ثبت و تأیید درخواست‌های کارکنان رو بهبود داده‌ام.',
    decisions: ['محاسبه تردد با قانون معتبر در همون تاریخ', 'مشخص کردن مراحل ثبت، بررسی و تأیید درخواست‌ها', 'اتصال اطلاعات تردد به ساختار سازمان و کارکنان'],
    outcome: 'اطلاعات حضور و غیاب و درخواست‌های کارکنان در یک سامانه مدیریت می‌شن و هر درخواست مسیر بررسی مشخصی داره.',
    stack: ['.NET 10', 'Blazor', 'HR Workflows', 'Access Control'],
    link: 'https://hozor.urmia.ir'
  },
  {
    id: 'etraab', title: 'پلتفرم معاملات اتراب', english: 'ETRAAB', number: '08',
    category: 'industry', categoryLabel: 'خرید و فروش آنلاین طلا',
    visual: 'etraab', mark: 'Et',
    short: 'مشارکت در ساخت بخش‌هایی از یک سامانه خرید و فروش آنلاین طلا، شامل صفحات معامله و محاسبات مالی.',
    problem: 'در معامله آنلاین طلا، محاسبات مالی و وضعیت هر سفارش باید دقیق ثبت بشن و با اتفاقات معامله هماهنگ بمونن.',
    role: 'در توسعه بخش‌هایی از API، صفحات برنامه و کد محاسبات معاملات طلا مشارکت داشته‌ام.',
    decisions: ['بررسی درستی محاسبات مالی معاملات', 'جدا کردن بخش پردازش معاملات از بخش نمایش اطلاعات', 'ثبت و مدیریت وضعیت سفارش در مراحل معامله'],
    outcome: 'بخش‌هایی از سرویس‌های معاملات، محاسبات مالی و صفحات خرید و فروش با مشارکت من توسعه پیدا کرده‌اند.',
    stack: ['ASP.NET Core', 'Blazor', 'SQL Server']
  },
  {
    id: 'his', title: 'سامانه‌های بیمارستانی', english: 'HEALTHCARE SYSTEMS', number: '09',
    category: 'industry', categoryLabel: 'نرم‌افزارهای بیمارستانی',
    visual: 'his', mark: 'H+',
    short: 'مشارکت در ساخت بخش‌های نوبت‌دهی، خدمات کارکنان و امور اداری بیمارستان.',
    problem: 'بخش‌های مختلف بیمارستان به اطلاعات مشترک نیاز دارن. نرم‌افزار باید تبادل این اطلاعات رو ممکن کنه و دسترسی هر کاربر هم مشخص باشه.',
    role: 'در توسعه بخش‌های نرم‌افزار و اتصال اون‌ها به هم کار کرده‌ام؛ از ساختار اطلاعات تا مراحل انجام کارهای اداری و خدماتی.',
    decisions: ['جدا کردن بخش‌های نرم‌افزار بر اساس کاری که انجام می‌دن', 'مشخص کردن نحوه تبادل اطلاعات بین بخش‌ها', 'محدود کردن دسترسی به اطلاعات متناسب با مسئولیت هر کاربر'],
    outcome: 'با مشارکت در توسعه این بخش‌ها، بخشی از کارهای اداری و خدماتی بیمارستان به‌صورت نرم‌افزاری قابل انجام شده‌اند.',
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
  if (count) count.textContent = faNumber(filtered.length) + (archivePage ? ' پروژه' : ' نمونه‌کار');
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
    '<div class="dialog-section"><h3>این پروژه برای چی ساخته شد؟</h3><p>',escapeHtml(p.problem),'</p></div>',
    '<div class="dialog-section"><h3>نقش من</h3><p>',escapeHtml(p.role),'</p></div>',
    '<div class="dialog-section"><h3>چند نکته از پیاده‌سازی</h3><ul>',decisions,'</ul></div>',
    '<div class="dialog-section"><h3>نتیجه کار</h3><p>',escapeHtml(p.outcome),'</p></div>',
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
    showToast('آدرس کپی نشد. می‌تونید روی آدرس ایمیل بزنید یا متنش رو انتخاب و کپی کنید.');
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
