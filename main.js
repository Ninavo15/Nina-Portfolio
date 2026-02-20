// https://www.youtube.com/watch?v=gbmV2Lh9dBM
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    const polaroid = document.querySelector(".about-images .polaroid");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            polaroid.classList.add("slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    observer.observe(polaroid);
  });