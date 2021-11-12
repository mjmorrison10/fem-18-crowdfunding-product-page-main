const Navbar = document.querySelector(".nav-bar");
const Navmenu = document.querySelector(".nav-menu");
const ButtonProject = document.querySelector(".btn-project");
const Pledge = document.querySelector(".btn-pledge");
const ModalFirst = document.querySelector(".modal-first");
const CloseModal = document.querySelector(".close-modal");
const ModalSecond = document.querySelector(".modal-second");
const PledgeToProject = document.querySelectorAll(".pledge");

PledgeToProject.forEach((pledge) => {
  pledge.addEventListener("click", () => {
    ModalFirst.style.display = "none";
    ModalSecond.style.display =
      ModalSecond.style.display == "flex" ? "none" : "flex";
    setTimeout(() => {
      console.log("test");
      ModalSecond.style.display = "none";
    }, 10000);
  });
});

Navbar.addEventListener("click", () => {
  console.log(Navbar.children[0]);
  Navbar.children[0].classList.toggle("fa-bars");
  Navbar.children[0].classList.toggle("fa-times");
  Navmenu.style.display = Navmenu.style.display == "flex" ? "none" : "flex";
  Navmenu.parentNode.style.display =
    Navmenu.parentNode.style.display == "flex" ? "none" : "flex";
});

ButtonProject.addEventListener("click", () => {
  ModalFirst.style.display =
    ModalFirst.style.display == "flex" ? "none" : "flex";
  //   setTimeout(() => {
  // console.log("test");
  // ModalSecond.style.display = "none";
  //   }, 10000);
});

CloseModal.addEventListener("click", () => {
  ModalFirst.style.display = "none";
});


Pledge.addEventListener("click", () => {
  ModalSecond.style.display = "none";
});

