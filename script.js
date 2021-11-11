const Navbar = document.querySelector(".nav-bar");
const Navmenu = document.querySelector(".nav-menu");
const ButtonProject = document.querySelector(".btn-project");
const Pledge = document.querySelector(".btn-pledge");
const ModalSecond = document.querySelector(".modal-second");

Navbar.addEventListener("click", () => {
  console.log(Navbar.children[0]);
  Navbar.children[0].classList.toggle("fa-bars");
  Navbar.children[0].classList.toggle("fa-times");
  Navmenu.style.display = Navmenu.style.display == "flex" ? "none" : "flex";
  Navmenu.parentNode.style.display =
    Navmenu.parentNode.style.display == "flex" ? "none" : "flex";
});

ButtonProject.addEventListener("click", () => {
  ModalSecond.style.display = ModalSecond.style.display == "flex" ? "none" : "flex";
  setTimeout(() => {
    console.log("test");
    ModalSecond.style.display = "none";
  }, 10000);
});

Pledge.addEventListener("click", () => {
  ModalSecond.style.display = "none";
});



