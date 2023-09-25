document.addEventListener("DOMContentLoaded", function setup() {
  const titles = document.querySelectorAll(".title");
  const nav = document.querySelector("nav");

  const getId = (titleElement) => {
    return titleElement.getAttribute('id');
  }

  titles.forEach(function (value) {
    const titleBtn = document.createElement('button');
    titleBtn.className = "nav-btn";
    titleBtn.textContent = value.textContent;
    const link = document.createElement('a');
    link.setAttribute('href', '#' + getId(value));
    link.appendChild(titleBtn);
    nav.appendChild(link);
    console.log(titleBtn);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main > h2, main > img, main > p");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkScroll() {
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("fade-in-active");
        section.classList.add("slide-in-left-active");
        section.classList.add("swirl-in-active");
      } else {
        section.classList.remove("fade-in-active");
        section.classList.remove("slide-in-left-active");
        section.classList.remove("swirl-in-active");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll();
});