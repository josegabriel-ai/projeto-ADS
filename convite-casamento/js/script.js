/* ============================================================
   CONVITE DE CASAMENTO — script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================
     1) LINK DO GOOGLE MAPS
     COLOQUE O LINK DO GOOGLE MAPS AQUI (substitua a URL abaixo)
     Dica: no Google Maps, busque o local, clique em "Compartilhar"
     e copie o link.
     ========================================================== */
  const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=Rondon%C3%B3polis+MT';

  const mapsButton = document.getElementById('maps-button');
  if (mapsButton) mapsButton.setAttribute('href', GOOGLE_MAPS_LINK);


  /* ==========================================================
     2) CONTAGEM REGRESSIVA
     ALTERE A DATA AQUI — formato: 'AAAA-MM-DDTHH:MM:SS'
     ========================================================== */
  const weddingDate = new Date('2026-10-18T16:30:00');

  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMinutes = document.getElementById('cd-minutes');
  const cdSeconds = document.getElementById('cd-seconds');
  const countdownEl = document.getElementById('countdown');
  const countdownFooter = document.querySelector('.countdown-footer');

  function pad(n) { return String(n).padStart(2, '0'); }

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      if (countdownEl) {
        countdownEl.innerHTML = '<p class="countdown-today">Hoje é o nosso grande dia! 🤎</p>';
      }
      if (countdownFooter) countdownFooter.style.display = 'none';
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (cdDays) cdDays.textContent = pad(days);
    if (cdHours) cdHours.textContent = pad(hours);
    if (cdMinutes) cdMinutes.textContent = pad(minutes);
    if (cdSeconds) cdSeconds.textContent = pad(seconds);
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);


  /* ==========================================================
     3) REVELAÇÃO DE ELEMENTOS AO ROLAR (IntersectionObserver)
     ========================================================== */
  const revealItems = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));


  /* ==========================================================
     4) INDICADOR DE ROLAGEM
     ========================================================== */
  const scrollBar = document.getElementById('scroll-bar');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollBar) scrollBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();


  /* ==========================================================
     5) PARALLAX SUAVE NA FOTO DO CASAL
     ========================================================== */
  const parallaxWrap = document.getElementById('couple-parallax');
  const coupleFrame = document.querySelector('.couple-photo-frame');
  const coupleImg = document.querySelector('.couple-photo-img');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (parallaxWrap && coupleFrame && !prefersReducedMotion) {
    window.addEventListener('scroll', () => {
      const rect = coupleFrame.getBoundingClientRect();
      const windowH = window.innerHeight;

      if (rect.bottom > 0 && rect.top < windowH) {
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const offset = (progress - 0.5) * 40; // deslocamento leve
        parallaxWrap.style.transform = `translateY(${offset}px)`;

        if (coupleImg) {
          const zoom = 1.06 + progress * 0.03; // zoom muito pequeno
          coupleImg.style.transform = `scale(${zoom})`;
        }
      }
    }, { passive: true });
  }


  /* ==========================================================
     6) GALERIA + LIGHTBOX
     ========================================================== */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('no-photo')) return; // sem foto real, não abre
      const img = item.querySelector('img');
      if (!img || !lightbox || !lightboxImg) return;

      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
      requestAnimationFrame(() => lightbox.setAttribute('data-open', 'true'));
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.setAttribute('data-open', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { lightbox.hidden = true; }, 350);
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });


  /* ==========================================================
     7) MODAL DE CONFIRMAÇÃO DE PRESENÇA (RSVP)
     ========================================================== */
  const openRsvpBtn = document.getElementById('open-rsvp');
  const rsvpOverlay = document.getElementById('rsvp-overlay');
  const rsvpClose = document.getElementById('rsvp-close');
  const rsvpForm = document.getElementById('rsvp-form');
  const rsvpSuccess = document.getElementById('rsvp-success');

  function openRsvp() {
    if (!rsvpOverlay) return;
    rsvpOverlay.hidden = false;
    requestAnimationFrame(() => rsvpOverlay.setAttribute('data-open', 'true'));
    document.body.style.overflow = 'hidden';
  }

  function closeRsvp() {
    if (!rsvpOverlay) return;
    rsvpOverlay.setAttribute('data-open', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { rsvpOverlay.hidden = true; }, 350);
  }

  if (openRsvpBtn) openRsvpBtn.addEventListener('click', openRsvp);
  if (rsvpClose) rsvpClose.addEventListener('click', closeRsvp);
  if (rsvpOverlay) {
    rsvpOverlay.addEventListener('click', (e) => {
      if (e.target === rsvpOverlay) closeRsvp();
    });
  }

  /* ----------------------------------------------------------
     Envio do formulário (front-end apenas, por enquanto).
     Estrutura pensada para plugar facilmente em:
       - Google Forms (troque a action e os "name" dos campos
         pelos "entry.XXXXXXX" gerados pelo Forms)
       - Formspree (troque a action pela URL do seu formulário
         Formspree e mude o método de envio para fetch/POST)
       - Uma API própria (troque o bloco abaixo por um fetch()
         para o seu endpoint, enviando os mesmos dados)
     ---------------------------------------------------------- */
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(rsvpForm);
      const rsvpData = {
        nome: formData.get('nome'),
        acompanhantes: formData.get('acompanhantes'),
        presenca: formData.get('presenca'),
      };

      // ----- PONTO DE INTEGRAÇÃO FUTURA -----
      // Exemplo com Formspree:
      // fetch('https://formspree.io/f/SEU_ID', {
      //   method: 'POST',
      //   headers: { 'Accept': 'application/json' },
      //   body: formData
      // });
      console.log('Confirmação de presença recebida:', rsvpData);

      rsvpForm.hidden = true;
      if (rsvpSuccess) rsvpSuccess.hidden = false;

      setTimeout(() => {
        closeRsvp();
        setTimeout(() => {
          rsvpForm.reset();
          rsvpForm.hidden = false;
          if (rsvpSuccess) rsvpSuccess.hidden = true;
        }, 400);
      }, 2200);
    });
  }


  /* ==========================================================
     8) MÚSICA DE FUNDO
     COLOQUE A MÚSICA AQUI: assets/musica.mp3
     Não inicia automaticamente — o convidado precisa tocar.
     ========================================================== */
  const musicToggle = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');
  let isPlaying = false;

  if (musicToggle && bgMusic) {
    musicToggle.addEventListener('click', () => {
      if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.setAttribute('aria-pressed', 'false');
        musicToggle.setAttribute('aria-label', 'Ativar música de fundo');
      } else {
        bgMusic.play().catch(() => {
          // Arquivo de música ainda não adicionado ou bloqueio do navegador
          console.warn('Não foi possível tocar a música. Verifique se assets/musica.mp3 existe.');
        });
        musicToggle.classList.add('playing');
        musicToggle.setAttribute('aria-pressed', 'true');
        musicToggle.setAttribute('aria-label', 'Pausar música de fundo');
      }
      isPlaying = !isPlaying;
    });
  }

});
