const student = new Splide("#student", {
  arrows: false,
  type: "loop",
  perPage: 2,
  pagination: true,

  // autoplay: true,
  interval: 2000,
  gap: 10,
  perMove: 1,
  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination  student-box ", // container
    page: "splide__pagination__page   student__pagination", // each button
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
student.mount();
