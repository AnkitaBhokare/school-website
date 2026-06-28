// ==========================================================
// HERO IMAGE MARQUEE
// The columns scroll automatically via CSS animation
// (see .hero__img-track--up / --down in style.css).
// This script just pauses the scroll on hover/touch so
// users can look at an image, and respects reduced-motion.
// ==========================================================
document.addEventListener('DOMContentLoaded', function () {

  const heroImages = document.querySelector('.hero__images');
  const tracks = document.querySelectorAll('.hero__img-track');

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    tracks.forEach(track => (track.style.animationPlayState = 'paused'));
  } else if (heroImages) {
    heroImages.addEventListener('mouseenter', () => {
      tracks.forEach(track => (track.style.animationPlayState = 'paused'));
    });

    heroImages.addEventListener('mouseleave', () => {
      tracks.forEach(track => (track.style.animationPlayState = 'running'));
    });
  }

  // ==========================================================
  // EXHIBITION FEATURES CAROUSEL
  // Prev / next buttons scroll the card track left/right.
  // ==========================================================
  const featureTrack = document.getElementById('featureTrack');
  const prevBtn = document.getElementById('featurePrev');
  const nextBtn = document.getElementById('featureNext');

  if (featureTrack && prevBtn && nextBtn) {
    const scrollAmount = () => {
      const card = featureTrack.querySelector('.feature');
      return card ? card.offsetWidth + 15 : 240;
    };

    nextBtn.addEventListener('click', () => {
      featureTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      setActiveDot(nextBtn);
    });

    prevBtn.addEventListener('click', () => {
      featureTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      setActiveDot(prevBtn);
    });

    function setActiveDot(activeBtn) {
      prevBtn.classList.remove('dot-arrow--active');
      nextBtn.classList.remove('dot-arrow--active');
      activeBtn.classList.add('dot-arrow--active');
    }
  }

  // ==========================================================
  // ENQUIRY FORM
  // Basic submit handler placeholder — replace with real
  // form submission logic (API call, etc.) as needed.
  // ==========================================================
  const enquiryForm = document.querySelector('.enquiry-form');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = enquiryForm.querySelector('input[type="text"]').value.trim();
      const phone = enquiryForm.querySelector('input[type="tel"]').value.trim();

      if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
      }

      alert('Thank you! We will get in touch with you shortly.');
      enquiryForm.reset();
    });
  }

});