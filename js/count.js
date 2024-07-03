const counts = new Splide("#countss", {
  arrows: false,
  type: "loop",
  perPage: 1,
  pagination:false,

  autoplay: true,
  interval: 2000,

  perMove: 1,

  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPoge: 3,
      gap: 10,
      perMove: 1,
    },

    992: {
      perPage: 3,
      perMove: 1,
      focus: "none",
    },

    1200: {
      perPage: 4,
    },
  },
});
counts.mount();
