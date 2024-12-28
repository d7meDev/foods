let btn = document.querySelector(".bx");
let menu =document.querySelector(".hide");

btn.addEventListener('click', event => {
    
    if(btn.classList.contains("bx-menu")){
        
        btn.classList.replace("bx-menu","bx-x")
        menu.classList.replace("hide","drop-menu")
    }

    else{

        btn.classList.replace("bx-x","bx-menu")
        menu.classList.replace("drop-menu","hide")
    }
})