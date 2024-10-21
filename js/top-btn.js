const topBtn = document.querySelector(".scroll-top-menu");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop || document.body.scrollTop > 300) {
    topBtn.classList.add("customFadeInUp");
    topBtn.classList.remove("customFadeOut");
  } else {
    topBtn.classList.remove("customFadeInUp");
    topBtn.classList.add("customFadeOut");
  }

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
