    /* ---- AOS ---- */
    AOS.init({ offset: 80, duration: 700, easing: 'ease-in-out', once: true });

    /* ---- Mobile sidebar ---- */
    const header = document.getElementById('header');
    document.getElementById('headerToggle').addEventListener('click', () => {
      header.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!header.contains(e.target) && !document.getElementById('headerToggle').contains(e.target)) {
        header.classList.remove('open');
      }
    });

    /* ---- Active nav on scroll ---- */
    const sections  = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('#navmenu a');
    function updateNav() {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }
    window.addEventListener('scroll', updateNav);
    updateNav();

    /* ---- Scroll top ---- */
    const scrollTopBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });

    /* ---- Particles.js ---- */
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 700 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.45, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 140, color: '#ffffff', opacity: 0.18, width: 1 },
        move: { enable: true, speed: 1.8, random: true, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'window',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false }, resize: true },
        modes: { grab: { distance: 160, line_linked: { opacity: 0.4 } } }
      },
      retina_detect: true
    });

    /* ---- Typed.js ---- */
    const typedEl = document.querySelector('.typed');
    if (typedEl) {
      new Typed('.typed', {
        strings: typedEl.dataset.typedItems.split(',').map(s => s.trim()),
        typeSpeed: 55,
        backSpeed: 28,
        backDelay: 2000,
        loop: true
      });
    }

    /* ---- Swiper (certs) ---- */
    new Swiper('.certSwiper', {
      loop: true,
      speed: 600,
      autoplay: { delay: 3500, disableOnInteraction: false },
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        320:  { slidesPerView: 1.15 },
        576:  { slidesPerView: 2.1  },
        992:  { slidesPerView: 3    },
        1200: { slidesPerView: 4    }
      }
    });

    /* ---- Project pagination ---- */
    (function () {
      const container  = document.getElementById('projectContainer');
      const items      = Array.from(container.querySelectorAll('.portfolio-item'));
      const prevBtn    = document.getElementById('prevPage');
      const nextBtn    = document.getElementById('nextPage');
      const indicator  = document.getElementById('paginationIndicator');
      const perPage    = 3;
      let page         = 1;
      const total      = Math.ceil(items.length / perPage);

      function render() {
        const start = (page - 1) * perPage;
        items.forEach((item, i) => {
          item.style.display = (i >= start && i < start + perPage) ? '' : 'none';
        });
        indicator.textContent = `${page} / ${total}`;
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === total;
      }

      prevBtn.addEventListener('click', () => { if (page > 1)     { page--; render(); } });
      nextBtn.addEventListener('click', () => { if (page < total) { page++; render(); } });
      render();
    })();
