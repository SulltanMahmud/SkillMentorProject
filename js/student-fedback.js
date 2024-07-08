const student_fedback = new Splide("#student_fedback", {
  arrows: false,
  type: "loop",
  perPage: 2,
  pagination: true,

  autoplay: true,
  interval: 2000,
  gap: 10,
  perMove: 1,
  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination   ", // container
    page: "splide__pagination__page   event-section__pagination", // each button
  },
  breakpoints: {
    576: {
      perPage: 1,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    992: {
      perPage: 3,
      perMove: 1,
      focus: "none",
    },
  },
});
student_fedback.mount();