const navLink = document.querySelectorAll(".nav-link");
const form = document.querySelector('.form');

navLink.forEach((link) =>{
  link.addEventListener('mouseover', function() {
    navLink.forEach((nav) => nav.classList.remove('active'));

    this.classList.add('active');
  });
});