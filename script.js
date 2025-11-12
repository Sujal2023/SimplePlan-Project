const dropdown = document.querySelector(".main-dropdown");
const categories = document.querySelector(".categories");
const headerContainer = document.querySelector(".header-container");

categories.addEventListener("click", () => {
  dropdown.classList.toggle("open");

  // Add or remove bg class on header-container
  if (dropdown.classList.contains("open")) {
    headerContainer.classList.add("bg");
  } else {
    headerContainer.classList.remove("bg");
  }
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !categories.contains(e.target)) {
    dropdown.classList.remove("open");
    headerContainer.classList.remove("bg");
  }
});

// Toggle Show All
    const showAllBtn = document.querySelector(".show-all");
    const hiddenCards = document.querySelectorAll(".hidden");

    showAllBtn.addEventListener("click", () => {
      hiddenCards.forEach(card => card.classList.toggle("hidden"));
      showAllBtn.textContent =
        showAllBtn.textContent === "SHOW ALL" ? "SHOW LESS" : "SHOW ALL";
    });

    // Currency Toggle
    const toggleButtons = document.querySelectorAll(".toggle-group button");
    toggleButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        toggleButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    const bookmarks = document.querySelectorAll(".bookmark");

bookmarks.forEach(pin => {
  pin.addEventListener("click", () => {
    pin.classList.toggle("pinned");
  });
});

const track = document.getElementById('carouselTrack');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 1; // Middle active card
    let total = cards.length;

    function updateCarousel() {
      cards.forEach((card, i) => {
        card.classList.remove('active');
      });

      // Ensure circular looping
      if (currentIndex >= total) currentIndex = 0;
      if (currentIndex < 0) currentIndex = total - 1;

      cards[currentIndex].classList.add('active');

      // Shift the track
      track.style.transform = `translateX(-${currentIndex * 33.333}%)`;
    }

    // Infinite loop
    setInterval(() => {
      currentIndex++;
      updateCarousel();
    }, 3000);

    var swiper = new Swiper(".community-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: { 
      slidesPerView: 1,
      centeredSlides: false,
    },
    600: { 
      slidesPerView: 2,
      centeredSlides: false,
    },
    991: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});


    const teachersSwiper = new Swiper(".swiper-teachers", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
   autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  watchSlidesProgress: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".teachers-button-next",
    prevEl: ".teachers-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    700: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },

  on: {
    init(swiper) {
      fixAlignmentAndFade(swiper);
    },
    slideChange(swiper) {
      fixAlignmentAndFade(swiper);
    },
    resize(swiper) {
      fixAlignmentAndFade(swiper);
    },
    setTranslate(swiper) {
      fixAlignmentAndFade(swiper);
    },
  },
});

function fixAlignmentAndFade(swiper) {
  // Reset opacity on all slides
  swiper.slides.forEach(slide => slide.classList.remove("is-faded"));

  // Get only visible non-duplicate slides
  const visibleSlides = Array.from(swiper.slides).filter(
    s =>
      s.classList.contains("swiper-slide-visible") &&
      !s.classList.contains("swiper-slide-duplicate")
  );

  if (visibleSlides.length === 0) return;

  // Fade out the last visible one
  const lastVisible = visibleSlides[visibleSlides.length - 1];
  if (lastVisible) lastVisible.classList.add("is-faded");
}


const BlogShowAllBtn = document.getElementById("showAllBtn");
  const hiddenBlogs = document.querySelectorAll(".blog-card.hidden");
  let shown = false;

  BlogShowAllBtn.addEventListener("click", () => {
    if (!shown) {
      // Show hidden blogs
      hiddenBlogs.forEach(blog => (blog.style.display = "block"));
      BlogShowAllBtn.textContent = "Show less";
      shown = true;
    } else {
      // Hide them again
      hiddenBlogs.forEach(blog => (blog.style.display = "none"));
      BlogShowAllBtn.textContent = "Show all";
      shown = false;
    }
  });

  document.querySelector(".cta-form").addEventListener("submit", function () {
    const input = this.querySelector("input");
    if (input.value.trim() !== "") {
      alert("Thank you for subscribing!");
      input.value = "";
    }
  });

  const scrollBtn = document.getElementById("scrollToTop");

  // Show button after scrolling down 300px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Scroll to top smoothly
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

    document.getElementById("chatButton").addEventListener("click", function () {
    alert("Chat support coming soon!");
  });

  const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");

// Open menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Handle dropdown open/close
const mobileDropdown = document.querySelector(".mobile-dropdown > a");
mobileDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  mobileDropdown.parentElement.classList.toggle("open");
});

// Handle nested submenu
document.querySelectorAll(".submenu-item > a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.parentElement.classList.toggle("open");
  });
});
