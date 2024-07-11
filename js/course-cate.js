const categorys = new Splide("#categorys", {
  arrows: false,
  type: "loop",
  perPage: 2,
  pagination: true,

  autoplay: true,
  interval: 2000,
  //   gap: "10px",
  perMove: 1,

  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination     ", // container
    page: "splide__pagination__page    card__pagination", // each button
  },
  breakpoints: {
    576: {
      perPage: 1,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPage: 2,
      gap: 0,
      perMove: 1,
    },

    1024: {
      perPage: 2,
      perMove: 1,
    },

    1200: {
      perPage: 2,
    },
  },
});
categorys.mount();
