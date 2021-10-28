window.addEventListener("load", function () {
  let imgLimitVideoLeaf = document.querySelector(".limit-video-leaf");
  let logo = document.querySelector(".logo");
  let body = document.querySelector("body");
  let navbarCollapseCollapse = document.querySelector(
    ".navbar-collapse.collapse"
  );
  let iconToggle = document.querySelector(".navbar-toggler");
  let department = document.querySelector(".department");
  let career = document.querySelector(".career");

  if (body.className == "home-page2") {
    imgLimitVideoLeaf.setAttribute("src", "./images/img-leaf-video2.png");
    logo.setAttribute("src", "./images/logo2.png");
  }

  iconToggle.addEventListener("click", () => {
    if (department) {
      department.classList.toggle("space-menu-response");
    }
    if (career) {
      career.classList.toggle("space-menu-response-home2");
    }
  });
});
