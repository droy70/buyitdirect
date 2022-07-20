    
    var menu = document.querySelector("#menubtn");
    var nav = document.querySelector("nav ul");
    
    menu.onclick = () =>{
        menu.classList.toggle('fa-times')
        nav.classList.toggle("show")
    }