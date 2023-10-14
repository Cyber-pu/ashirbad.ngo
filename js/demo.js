

const srcBtn=document.querySelector(".src-btn");
const inputBox=document.querySelector("nav input");


function searchOpen(){
    inputBox.classList.add("search");
    inputBox.classList.remove("rev");
    inputBox.style.display="inline-block";
    inputBox.focus();
}

function searchClose(){
    inputBox.classList.add("rev");
    inputBox.classList.remove("search");
    // inputBox.style.display="none";
}

// text animation in slider 
const observe= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})


const hiddenElement=document.querySelectorAll(".hidden");
hiddenElement.forEach((el)=> observe.observe(el));



//thought animation
const observe_text= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-th");
        }else{
            entry.target.classList.remove("show-th");
        }
    })
})


const thought1=document.querySelectorAll(".thought h2");
thought1.forEach((el)=> observe_text.observe(el));

const thought2=document.querySelectorAll(".thought h4");
