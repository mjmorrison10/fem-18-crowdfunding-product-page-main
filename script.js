const Navbar = document.querySelector(".nav-bar");
const Navmenu = document.querySelector(".nav-menu");

Navbar.addEventListener("click", () => {
  console.log(Navbar.children[0]);
  Navbar.children[0].classList.toggle("fa-bars");
  Navbar.children[0].classList.toggle("fa-times");
  Navmenu.style.display = Navmenu.style.display == "flex" ? "none" : "flex";
});
