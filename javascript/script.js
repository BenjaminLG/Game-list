// Footer years

document.addEventListener("DOMContentLoaded", function () {
    const copyrightText = document.querySelector(".footer__copyright");
    const currentYear = new Date().getFullYear();
    copyrightText.textContent = "© " + currentYear + " Benjamin Le Guellec";
});
  