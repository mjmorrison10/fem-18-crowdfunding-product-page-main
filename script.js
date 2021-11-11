const Navbar = document.querySelector(".nav-bar");
const Navmenu = document.querySelector(".nav-menu");
const ButtonProject = document.querySelector(".btn-project");
const Pledge = document.querySelector(".btn-pledge");
const Modal = document.querySelector(".modal");

Navbar.addEventListener("click", () => {
  console.log(Navbar.children[0]);
  Navbar.children[0].classList.toggle("fa-bars");
  Navbar.children[0].classList.toggle("fa-times");
  Navmenu.style.display = Navmenu.style.display == "flex" ? "none" : "flex";
  Navmenu.parentNode.style.display =
    Navmenu.parentNode.style.display == "flex" ? "none" : "flex";
});

ButtonProject.addEventListener("click", () => {
  Modal.style.display = Modal.style.display == "flex" ? "none" : "flex";
  setTimeout(() => {
    console.log("test");
    Modal.style.display = "none";
  }, 10000);
});

Pledge.addEventListener("click", () => {
  Modal.style.display = "none";
});



