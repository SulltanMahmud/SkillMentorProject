const events = new Splide("#events", {
  arrows: false,
  type: "loop",
  perPage: 1,
  pagination: true,

  autoplay: true,
  interval: 2000,

  perMove: 1,

  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination   ", // container
    page: "splide__pagination__page   event-section__pagination", // each button
  },
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
events.mount();
