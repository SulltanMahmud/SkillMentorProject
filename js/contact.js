const contact = new Splide("#contact", {
  arrows: false,
  type: "loop",
  perPage: 3,
  pagination: true,
  gap: "48px",
  autoplay: true,
  interval: 2000,
  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination splide-box  ", // container
    page: "splide__pagination__page  splide-btn  ", // each button
  },
  perMove: 1,
  breakpoints: {
    576: {
      perPage: 1,
      // gap: 10,
      perMove: 1,
    },

    768: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    992: {
      perPage: 2,
      perMove: 1,
      focus: "none",
    },

    1024: {
      perPage: 2,
      // gap: 10,
    },
  },
});
contact.mount();
