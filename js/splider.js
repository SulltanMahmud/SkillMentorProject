const feature = new Splide("#feature", {
  arrows: false,
  type: "loop",
  perPage: 3,
  pagination: true,
  gap: 10,
  autoplay: true,
  interval: 2000,

  perMove: 1,
  breakpoints: {
    576: {
      perPage: 2,
      // gap: 10,
      perMove: 1,
    },

    768: {
      perPoge: 2,
      gap: 10,
      perMove: 1,
    },

    992: {
      perPage: 3,
      perMove: 1,
      focus: "none",
    },

    1024: {
      perPage: 3,
      gap: 10,
    },
  },
});
feature.mount();

const machine = new Splide("#machine", {
  arrows: false,
  type: "loop",
  perPage: 3,
  pagination: true,

  autoplay: true,
  interval: 2000,
  gap: 10,
  perMove: 1,
  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPoge: 2,
      // gap: 10,
      perMove: 1,
    },

    992: {
      perPage: 3,
      perMove: 1,
      focus: "none",
    },

    1024: {
      perPage: 3,
    },
  },
});
machine.mount();
