const navContainer = document.querySelector(".navbar-container");
const navbar = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".nav-toggle");

//date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//nav height
navToggle.addEventListener("click", () => {
  const navContainerHeight = navContainer.getBoundingClientRect().height;
  const navHeight = navbar.getBoundingClientRect().height;
  if (navContainerHeight === 0) {
    navContainer.style.height = `${navHeight}px`;
  } else {
    navContainer.style.height = 0;
  }
});

const topLink = document.querySelector(".top-link");
const flexNav = document.querySelector(".tgl");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const fixedHeight = flexNav.getBoundingClientRect().height;
  if (scrollHeight > fixedHeight) {
    flexNav.classList.add("fixed-nav");
  } else {
    flexNav.classList.remove("fixed-nav");
  }
  // back to top
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

const scrollLink = document.querySelectorAll(".scroll-link");

// scrollLink.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const fixedHeight = flexNav.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     const navContainerHeight = navContainer.getBoundingClientRect().height;
//     let position = element.offsetTop - fixedHeight;
//     if (!fixedNav) {
//       position -= fixedHeight;
//     }
//     if (navHeight > 82) {
//       position += navContainerHeight;
//     }
//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     linksContainer.style.height = 0;
//   });
// });
