window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let navimg = this.document.getElementById("nav-img");
  let navColor = document.querySelectorAll(".nav-link");

  if (window.scrollY > 0) {
    navbar.classList.add("header-colour","shadows");
    // navbar.classList.add("shadows");
    navimg.src = "/assets/logo-colored (1).png";
    // console.log(navColor);
    navColor.forEach((color) => {
      color.classList.add("black");
    });
  } else {
    navbar.classList.remove("header-colour", "shadows");
    navimg.src = "/assets/logo-white.png";
    // navbar.classList.remove("shadow");
    navColor.forEach((color) => {
      color.classList.remove("black");
    });
  }
});

// window.addEventListener("scroll", function () {
//   let navbar = document.getElementById("navbar");
//   let navimg = this.document.getElementById("nav-img");
//   let navColor = document.querySelectorAll(".nav-link");

//   // Define your breakpoint (e.g., 768px for tablets)
//   const breakpoint = 768;

//   if (window.scrollY > 0) {
//     navbar.classList.add("header-colour");

//     if (window.innerWidth >= breakpoint) {
//       navimg.src = "/assets/logo-colored (1).png";
//     } else {
//       navimg.src = "/assets/logo-white.png"; // You can change the logo for smaller screens
//     }

//     navColor.forEach((color) => {
//       color.classList.add("black");
//     });
//   } else {
//     navbar.classList.remove("header-colour");

//     if (window.innerWidth >= breakpoint) {
//       navimg.src = "/assets/logo-white.png";
//     } else {
//       navimg.src = "/assets/logo-white.png"; // You can change the logo for smaller screens
//     }

//     navColor.forEach((color) => {
//       color.classList.remove("black");
//     });
//   }
// });
