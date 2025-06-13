const navLink = document.querySelectorAll(".nav-link");
const form = document.querySelector('.form');

navLink.forEach((link) =>{
  link.addEventListener('mouseover', function() {
    navLink.forEach((nav) => nav.classList.remove('active'));

    this.classList.add('active');
  });
});

const showSideBar = ()=>{
  const sidebar = document.querySelector(".sidebar")
  sidebar.style.display= 'flex'
}

const closeSideMenu = ()=>{
  const sidebar = document.querySelector(".sidebar")
  if(sidebar){
    sidebar.style.display="none" 
  }
}