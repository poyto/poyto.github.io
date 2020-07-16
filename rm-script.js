function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  function openNavright() {
    document.getElementById("mySidenavright").style.width = "250px";
  }
  
  function closeNavright() {
    document.getElementById("mySidenavright").style.width = "0";
}



$(document).ready(function() {

  const toggleSwitch = document.querySelector('.form-switch input[type="checkbox"]');
  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'light');
      }
      else {
          document.documentElement.setAttribute('data-theme', 'dark');
      }    
  }
  toggleSwitch.addEventListener('change', switchTheme, false);

  
});
