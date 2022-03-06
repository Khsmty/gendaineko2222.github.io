/* scroll nav */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // 100px以上
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});

/* fadeup */
window.onload = function () {
  scroll_effect();

  $(window).scroll(function () {
    scroll_effect();
  });

  function scroll_effect() {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("fade-scroll");
      }
    });

    $(".effect-underline").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("underline-scroll");
      }
    });

    $(".effect").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("inview");
      }
    });
  }
};

/* scroll */
window.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
});
