  document.addEventListener("DOMContentLoaded", function () {
      const checkBtn = document.querySelector('.checkbtn');
      const navLinks = document.querySelector('.nav-links');

      checkBtn.addEventListener('click', () => {
        checkBtn.classList.toggle('close');
        navLinks.classList.toggle('show');
      });
  
    // Configureer de ScrollTrigger-plugin
    gsap.registerPlugin(ScrollTrigger);
  
    // Voeg de animatie toe aan de secties
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
        },
      });
    });
  
    // Voeg de animatie toe aan de afbeeldingen met class "img1"
    const img1 = document.querySelector('.img1');
    gsap.from(img1, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      scrollTrigger: {
        trigger: img1,
        start: 'top center',
      },
    });
  
    // Voeg de animatie toe aan de afbeeldingen met class "img2"
    const img2 = document.querySelectorAll('.img2');
    img2.forEach((image) => {
      gsap.from(image, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: 'top center',
        },
      });
    });
  
    // Voeg de Text reveal-animatie toe met een vertraging van 2 seconden
    const imgText = document.getElementById('img-text');
    gsap.set(imgText, { opacity: 0, y: '100%' });
    gsap.to(imgText, {
      opacity: 1,
      y: 0,
      duration: 2.6,
      ease: 'power4.out',
      delay: 2,
    });

  
    // Voeg de Text reveal-animatie toe met een vertraging van 2 seconden als  "img2" in beeld komt
    const imgText2 = document.getElementById('img-text2');
    gsap.set(imgText2, { opacity: 0, y: '100%' });
    gsap.to(imgText2, {
      opacity: 1,
      y: 0,
      duration: 2.6,
      ease: 'power4.out',
      delay: 2,
      scrollTrigger: {
        trigger: img2,
        start: 'top center',
      },
    });
    // voeg de gopage2 animatie toe met een vertraging van 2 seconden als  "img2" in beeld komt
    const goPage2 = document.getElementById('goPage2');
    gsap.set(goPage2, { opacity: 0, y: '100%' });
    gsap.to(goPage2, {
      opacity: 1,
      y: 0,
      duration: 2.6,
      ease: 'power4.out',
      delay: 2,
      scrollTrigger: {
        trigger: img2,
        start: 'top center',
      },
    });
      // Voeg de Text reveal-animatie toe met een vertraging van 2 seconden aan het element met id="goPage"
  const goPage = document.getElementById('goPage');
  gsap.set(goPage, { opacity: 0, y: '100%' });
  gsap.to(goPage, {
    opacity: 1,
    y: 0,
    duration: 2.6,
    ease: 'power4.out',
    delay: 2,
  });
});

  