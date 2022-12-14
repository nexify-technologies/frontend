export const animateNav = function (document) {
    const element = document.getElementById("nav").style;

   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    element.height = "70px";
    element.background = "rgba(250, 250, 250, 0.4)";
} else {
    element.height = "100px";
    element.background = "rgba(236, 242, 51,0.9)";
  }
}