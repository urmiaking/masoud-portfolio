/**
 * Masoud Khodadadi - Full-Stack .NET Engineer Portfolio JS Logic
 * Smooth Navigation, Scroll Reveal Animations & Vazirmatn UI Enhancements
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. Theme Switcher (Dark Mode / Light Mode)
    // =========================================================================
    const themeToggleBtn = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('mk_portfolio_theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        localStorage.setItem('mk_portfolio_theme', theme);
    }

    // =========================================================================
    // 2. Smooth Navigation Scroll & Active Section Highlighting
    // =========================================================================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth Scroll Click Handler
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active Section Intersection Observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active-nav');
                    } else {
                        link.classList.remove('active-nav');
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" });

    sections.forEach(section => sectionObserver.observe(section));

    // =========================================================================
    // 3. Scroll Reveal Micro-Animations (Fade Up)
    // =========================================================================
    const revealElements = document.querySelectorAll('.glass-card, .project-card, .skill-card, .counter, section h2');
    revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

    // =========================================================================
    // 4. Dynamic Typing Text Effect (Hero Section)
    // =========================================================================
    const typedRoleElement = document.getElementById('typedRole');
    const roles = [
        'توسعه‌دهنده ارشد فول‌استک .NET',
        'رتبه ۱ ارشد مهندسی نرم‌افزار دانشگاه ارومیه',
        'معمار سیستم‌های Clean Architecture & DDD',
        'متخصص C#، .NET 10، Blazor و .NET MAUI'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typedRoleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typedRoleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2200;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (typedRoleElement) {
        typeEffect();
    }

    // =========================================================================
    // 5. Stats Counter Animation
    // =========================================================================
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const duration = 1500;
                    const stepTime = 25;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }

                        if (target === 1) {
                            counter.textContent = 'رتبه ۱';
                        } else if (target === 100) {
                            counter.textContent = '۱۰۰٪';
                        } else {
                            counter.textContent = '+' + Math.floor(current);
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.counter')?.parentElement?.parentElement;
    if (statsContainer) {
        counterObserver.observe(statsContainer);
    }

    // =========================================================================
    // 6. Skills Matrix Filter Tabs
    // =========================================================================
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCards = document.querySelectorAll('.skill-card');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.classList.add('animate-fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // =========================================================================
    // 7. Project Modal Details Data & Logic
    // =========================================================================
    const projectData = {
        '1': {
            title: 'پلتفرم معاملات آنلاین طلا (شرکت اتراب)',
            category: 'C# / .NET 10 Core & Blazor Engine',
            date: '۱۴۰۲ - ۱۴۰۳',
            description: 'طراحی و پیاده‌سازی سامانه جامع صرافی آنلاین و دادوستد آنلاین طلا. این سیستم امکان خرید، فروش، ثبت سفارش‌های لحظه‌ای و محاسبه دقیق قیمت مصنوعات طلا را با پایداری کامل فراهم می‌سازد.',
            features: [
                'طراحی معماری REST API بر پایه ASP.NET Core با کارایی و امنیت بالا',
                'پیاده‌سازی پنل کاربری و معامله با Blazor و کامپوننت‌های بهینه',
                'محاسبه لحظه‌ای قیمت طلا با فرمول‌های پیچیده حسابداری مالی',
                'مدیریت دیتابیس SQL Server و EF Core با نرخ تراکنش بالا بین کاربران'
            ],
            tech: ['C# 14', '.NET 10 Core', 'ASP.NET Core Web API', 'Blazor', 'SQL Server', 'EF Core', 'REST API'],
            link: '#'
        },
        '2': {
            title: 'سامانه‌های یکپارچه بیمارستانی (HIS - بیمارستان عارفیان)',
            category: 'Clean Architecture & Enterprise .NET',
            date: '۱۴۰۰ - ۱۴۰۲',
            description: 'توسعه ماژول‌های حیاتی نرم‌افزاری بیمارستان عارفیان شامل سامانه نوبت‌دهی آنلاین، کنترل تردد و حضور غیاب پرسنل، تغذیه، منابع انسانی و بایگانی الکترونیک سوابق پزشکی بیماران.',
            features: [
                'طراحی معماری بر پایه اصول Clean Architecture و تفکیک لایه‌های دامنه (Domain)',
                'یکپارچه‌سازی سیستم نوبت‌دهی آنلاین بیماران با درگاه‌ها و دیتابیس متمرکز',
                'سیستم اتوماسیون تردد و فیش غذای پرسنل بیمارستان',
                'پوشش امنیتی بالاتر برای اطلاعات پزشکی بیماران'
            ],
            tech: ['C#', 'ASP.NET Core', 'Clean Architecture', 'Domain-Driven Design', 'SQL Server', 'Entity Framework Core'],
            link: '#'
        },
        '3': {
            title: 'نرم‌افزار حسابداری گالری طلا & اپلیکیشن موبایل (طلا و جواهری فانی)',
            category: 'ASP.NET Core & Xamarin Mobile',
            date: '۱۴۰۰',
            description: 'پروژه فریلنسری شامل نرم‌افزار جامع مدیریت موجودی، فاکتورسازی آنلاین و محاسبه لحظه‌ای قیمت طلا به همراه اپلیکیشن موبایل برای بارکدخوانی انبار.',
            features: [
                'صدور فاکتور رسمی و محاسبه خودکار مالیات، اجرت و قیمت لحظه‌ای طلا',
                'توسعه اپلیکیشن موبایل Xamarin برای اسکن بارکد محصولات و انبارگردانی سریع',
                'سیستم گزارش‌گیری مالی دقیق تحت وب بر پایه ASP.NET Core',
                'مدیریت موجودی انبار به صورت آنلاین و همگام‌سازی لحظه‌ای'
            ],
            tech: ['ASP.NET Core', 'Xamarin Forms / .NET', 'C#', 'SQL Server', 'Barcode Scanning'],
            link: '#'
        },
        '4': {
            title: 'اپلیکیشن خیریه و پلتفرم IoT (چشمه جوشان کوثر & اسکای نیک)',
            category: 'Android App & Java Socket Server',
            date: '۱۳۹۸ - ۱۴۰۰',
            description: 'توسعه اپلیکیشن اندرویدی خیریه با الگوریتم زیرمجموعه‌گیری و درآمدزایی به همراه پنل مدیریت + برنامه‌نویسی سوکت جاوا برای کنترل دستگاه‌های هوشمند اینترنت اشیا.',
            features: [
                'طراحی اپلیکیشن موبایل اندروید با قابلیت هبه و شبکه درآمدزایی خیریه',
                'توسعه پنل ادمین وب و مدیریت تراکنش‌ها',
                'برنامه‌نویسی سوکت پروگرمینگ در جاوا جهت مدیریت دستگاه‌های IoT',
                'ارتباط بی‌درنگ سرور و تجهیزات سخت‌افزاری هوشمند'
            ],
            tech: ['Java Socket Programming', 'Android SDK', 'PHP', 'MySQL', 'IoT Protocols'],
            link: '#'
        }
    };

    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                modalBody.innerHTML = `
                    <div class="space-y-6 text-right">
                        <div class="space-y-2">
                            <span class="text-xs font-bold text-cyan-700 dark:text-cyan-400 block">${data.category} • ${data.date}</span>
                            <h3 class="text-2xl font-black text-main">${data.title}</h3>
                        </div>

                        <p class="text-muted text-sm sm:text-base leading-relaxed text-justify">${data.description}</p>

                        <div class="space-y-3">
                            <h4 class="font-bold text-sm text-indigo-700 dark:text-indigo-400">ویژگی‌ها و معماری پروژه:</h4>
                            <ul class="text-xs sm:text-sm text-muted space-y-2 list-disc list-inside leading-relaxed text-justify">
                                ${data.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="space-y-3 pt-2">
                            <h4 class="font-bold text-sm text-cyan-700 dark:text-cyan-400">تکنولوژی‌های استفاده شده:</h4>
                            <div class="flex flex-wrap gap-2">
                                ${data.tech.map(t => `<span class="tech-pill px-3 py-1.5 rounded-lg border text-xs font-mono">${t}</span>`).join('')}
                            </div>
                        </div>

                        <div class="pt-6 border-t border-glass flex items-center justify-between">
                            <span class="text-xs text-indigo-700 dark:text-indigo-300 font-bold">توسعه یافته توسط مسعود خدادادی</span>
                            <button class="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white text-xs font-bold hover:bg-slate-300 dark:hover:bg-white/20 transition-colors cursor-pointer" onclick="document.getElementById('closeModalBtn').click()">بستن پنجره</button>
                        </div>
                    </div>
                `;
                modal.classList.remove('opacity-0', 'pointer-events-none');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }
        });
    });

    closeModalBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
    }

    // =========================================================================
    // 8. Interactive Developer CLI Terminal Emulator
    // =========================================================================
    const terminalInput = document.getElementById('terminalInput');
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalQuickBtns = document.querySelectorAll('.terminal-quick-btn');
    const commandHistory = [];
    let historyIndex = -1;

    const commands = {
        'help': 'دستورات آنلاین:<br>• <b class="text-cyan-300">about</b> - درباره مسعود خدادادی<br>• <b class="text-cyan-300">education</b> - مدارک و افتخارات تحصیلی (رتبه ۱)<br>• <b class="text-cyan-300">skills</b> - مهارت‌ها و اکوسیستم .NET<br>• <b class="text-cyan-300">projects</b> - پروژه‌های شاخص<br>• <b class="text-cyan-300">contact</b> - اطلاعات تماس<br>• <b class="text-cyan-300">clear</b> - پاک کردن صفحه<br>• <b class="text-cyan-300">sudo hire</b> - دعوت به همکاری',
        'about': 'مسعود خدادادی - توسعه‌دهنده ارشد فول‌استک دات‌نت و مهندس نرم‌افزار با بیش از ۵ سال سابقه کار تخصصی. متخصص در C# 14، .NET 10 Core، Blazor، .NET MAUI و معماری‌های Clean/Microservices.',
        'education': '🎓 <b>رتبه ۱ کارشناسی ارشد</b> مهندسی نرم‌افزار دانشگاه ارومیه<br>🎓 <b>رتبه ۱ کارشناسی</b> مهندسی نرم‌افزار دانشگاه ارومیه',
        'skills': 'Backend: C# 14, .NET 10 Core, ASP.NET Core Web API, Blazor, Razor Pages<br>Mobile/Desktop: .NET MAUI, Xamarin, WPF, WinForms<br>Architecture: Microservices, Clean Architecture, DDD, REST API<br>Databases & DevOps: SQL Server, EF Core, Docker, Kubernetes, Git',
        'projects': '۱. پلتفرم معاملات آنلاین طلا (اتراب)<br>۲. سامانه‌های بیمارستانی HIS (عارفیان)<br>۳. نرم‌افزار حسابداری گالری طلا و موبایل (فانی)<br>۴. اپلیکیشن خیریه و IoT (چشمه جوشان & اسکای نیک)',
        'contact': 'Email: masoud.xpress@gmail.com<br>آماده گفتگو جهت پروژه‌های سازمانی، مشاوره معماری نرم‌افزار یا همکاری ارشد.',
        'sudo hire': '<span class="text-emerald-400 font-bold">🎉 فوق‌العاده است! لطفاً از فرم تماس پایین صفحه پیام بفرستید یا مستقیم ایمیل بزنید تا جلسه گفتگو را تنظیم کنیم.</span>'
    };

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const cmd = terminalInput.value.trim().toLowerCase();
                if (cmd) {
                    processCommand(cmd);
                    commandHistory.push(cmd);
                    historyIndex = commandHistory.length;
                    terminalInput.value = '';
                }
            } else if (e.key === 'ArrowUp') {
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    terminalInput.value = '';
                }
            }
        });
    }

    terminalQuickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            processCommand(cmd);
        });
    });

    function processCommand(cmd) {
        if (cmd === 'clear') {
            terminalOutput.innerHTML = '';
            return;
        }

        const cmdLine = document.createElement('div');
        cmdLine.className = 'flex items-center gap-2 font-mono text-xs';
        cmdLine.innerHTML = `<span class="text-cyan-400 font-bold">masoud@dotnet:~$</span> <span>${escapeHtml(cmd)}</span>`;

        const responseLine = document.createElement('div');
        responseLine.className = 'text-slate-300 font-mono text-xs pl-4 leading-relaxed';

        if (commands[cmd]) {
            responseLine.innerHTML = commands[cmd];
        } else {
            responseLine.innerHTML = `<span class="text-rose-400">Command not found: ${escapeHtml(cmd)}. Type <b class="text-cyan-300">help</b> for options.</span>`;
        }

        terminalOutput.appendChild(cmdLine);
        terminalOutput.appendChild(responseLine);

        const terminalBody = document.getElementById('terminalBody');
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function escapeHtml(text) {
        return text.replace(/[&<>"']/g, function(m) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
        });
    }

    // =========================================================================
    // 9. Contact Form Handling & Toast Notifications
    // =========================================================================
    const contactForm = document.getElementById('contactForm');
    const copyEmailBtn = document.getElementById('copyEmailBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submitBtn');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>در حال ارسال پیام برای مسعود...</span>`;

            setTimeout(() => {
                showToast('پیام شما با موفقیت ارسال شد! مسعود خدادادی به زودی با شما تماس خواهد گرفت.', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1200);
        });
    }

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = document.getElementById('emailText').textContent;
            navigator.clipboard.writeText(emailText).then(() => {
                showToast('آدرس ایمیل masoud.xpress@gmail.com کپی شد!', 'info');
            });
        });
    }

    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `px-5 py-3.5 rounded-2xl glass-card border border-glass shadow-2xl flex items-center gap-3 text-sm font-semibold animate-fade-in pointer-events-auto ${type === 'success' ? 'text-emerald-400 border-emerald-500/40' : 'text-cyan-400 border-cyan-500/40'}`;
        toast.innerHTML = `
            <span class="w-2.5 h-2.5 rounded-full ${type === 'success' ? 'bg-emerald-400' : 'bg-cyan-400'}"></span>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // =========================================================================
    // 10. Mobile Navigation Menu Toggle
    // =========================================================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // =========================================================================
    // 11. Ambient Particle Canvas Animation
    // =========================================================================
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 45; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

});
