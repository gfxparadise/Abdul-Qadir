// Cursor effect
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
});
 
 // Dark Mode Start Here
  
  let toggleBtn = document.getElementById('toggle-btn');
  let body = document.body;
  let darkMode = localStorage.getItem('dark-mode');
  
  const enableDarkMode = () =>{
     toggleBtn.classList.replace('fa-sun', 'fa-moon');
     body.classList.add('dark');
     localStorage.setItem('dark-mode', 'enabled');
  }
  
  const disableDarkMode = () =>{
     toggleBtn.classList.replace('fa-moon', 'fa-sun');
     body.classList.remove('dark');
     localStorage.setItem('dark-mode', 'disabled');
  }
  
  if(darkMode === 'enabled'){
     enableDarkMode();
  }
  
  toggleBtn.onclick = (e) =>{
     darkMode = localStorage.getItem('dark-mode');
     if(darkMode === 'disabled'){
        enableDarkMode();
     }else{
        disableDarkMode();
     }
  }
  // Dark Mode End here 

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("H").style.width = "250px";
  document.getElementById("B").style.marginRight = "250px";
  document.getElementById("menu-bars1").style.opacity= "0";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("H").style.width = "0";
  document.getElementById("B").style.marginRight = "0";
  document.getElementById("menu-bars1").style.opacity="100";
}


window.oncontextmenu =function(){ 
  alert("This operation is not allowed");
  return false;
}