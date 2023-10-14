const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    if(window.scrollY>=300){
        nav.classList.add("nav-bg");
    }else{
        nav.classList.remove("nav-bg")
    }
})

const menu=document.querySelector(".menu-button");
const sidebar=document.querySelector(".menu");



menu.addEventListener("click",()=>{
    if(!menu.classList.contains("cross")){
        menu.classList.add("cross");
        sidebar.style.right="0";
    }
    else{
        sidebar.style.right="-50vw";
        menu.classList.remove("cross");
    }
})