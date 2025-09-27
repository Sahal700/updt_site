gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-[#d3d8d8b0]", "shadow-md", "backdrop-blur-md");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-[#d3d8d8b0]", "shadow-md", "backdrop-blur-md");
    navbar.classList.add("bg-transparent");
  }
});

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("hamburger").classList.toggle("active");
}

function navigateWithDelay(event, url) {
  event.preventDefault(); // Prevent immediate navigation

  // Close sidebar first
  toggleSidebar();

  // Navigate after animation completes (300ms delay to match your transition)
  setTimeout(() => {
    window.location.href = url;
  }, 280);
}

// animations -----------------
window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.to("#hero-text", { opacity: 1, xPercent: 30, duration: 1 });
  tl.to("#hero-image", { opacity: 1, xPercent: -30, duration: 1 }, "-=0.8");

  gsap.to(".empover-img", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".empover-img",
      start: "top 80%",
    },
  });

  gsap.to(".empover-text", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".empover-img",
      start: "top 80%",
    },
  });

  gsap.from(".stagger-item", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-item",
      start: "top 90%",
    },
  });

  gsap.to(".scale-up", {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".scale-up",
      start: "top 80%",
    },
  });
  gsap.to(".slide-right", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".slide-right",
      start: "top 80%",
    },
  });

  gsap.from(".stagger-item-1", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-item-1",
      start: "top 90%",
    },
  });

  gsap.from(".our-text", {
    opacity: 0,
    xPercent: -30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".our-text",
      start: "top 80%",
    },
  });

  gsap.from(".our-line", {
    opacity: 0,
    xPercent: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".our-text",
      start: "top 80%",
    },
  });

  gsap.from(".stagger-item-2", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stagger-item-2",
      start: "top 90%",
    },
  });
  gsap.to(".stagger-service-card", {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
});


const carouselContainer = document.getElementById('carousel-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Scroll to the next card
nextBtn.addEventListener('click', () => {
  const itemWidth = carouselContainer.querySelector('div').offsetWidth + 32; // item width + gap
  carouselContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
});

// Scroll to the previous card
prevBtn.addEventListener('click', () => {
  const itemWidth = carouselContainer.querySelector('div').offsetWidth + 32; // item width + gap
  carouselContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
});

// Show/hide buttons based on scroll position
carouselContainer.addEventListener('scroll', () => {
  const atStart = carouselContainer.scrollLeft === 0;
  const atEnd =
    carouselContainer.scrollLeft + carouselContainer.clientWidth >= carouselContainer.scrollWidth - 1; // -1 for rounding errors

  prevBtn.style.opacity = atStart ? '0' : '1';
  prevBtn.style.pointerEvents = atStart ? 'none' : 'auto';
  nextBtn.style.opacity = atEnd ? '0' : '1';
  nextBtn.style.pointerEvents = atEnd ? 'none' : 'auto';
});

// Initial check on load
window.addEventListener('load', () => {
  const atStart = carouselContainer.scrollLeft === 0;
  prevBtn.style.opacity = atStart ? '0' : '1';
  prevBtn.style.pointerEvents = atStart ? 'none' : 'auto';
});