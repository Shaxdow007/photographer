let menu = document.querySelector(".menu");

menu.onclick = () => {
  let menuList = document.querySelector(".listShow");
  menuList.classList.toggle("active");
};
window.onscroll = () => {
  let menuList = document.querySelector(".listShow");
  menuList.classList.remove("active", scrollY > 0);
};
