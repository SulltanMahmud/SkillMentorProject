const student_buy = new Splide("#student_buy", {
  arrows: false,
  type: "loop",
  perPage: 3,
  pagination: true,
  gap: '45px',
  autoplay: true,
  interval: 2000,

  perMove: 1,
  classes: {
    // Add classes for pagination.
    pagination: "splide__pagination student_pagination_content  ", // container
    page: "splide__pagination__page    student__pagination", // each button
  },
  breakpoints: {
    576: {
      perPage: 1,
      // gap: 10,
      perMove: 1,
    },

    768: {
      perPoge: 2,
      gap: '45px',
      perMove: 1,
    },

    992: {
      perPage: 2,
      perMove: 1,
      focus: "none",
    },

    1024: {
      perPage: 3,
      // gap: 10,
      gap:'20px'
    },
  },
});
student_buy.mount();
