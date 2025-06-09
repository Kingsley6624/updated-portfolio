const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>{
  link.addEventListener('mouseover', function() {
    navLink.forEach((nav) => nav.classList.remove('active'));

    this.classList.add('active');
  });
});
