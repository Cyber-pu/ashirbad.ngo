

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
thought2.forEach((el)=> observe_text.observe(el));


// text animation in slider 
const observe_head= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-head");
        }else{
            entry.target.classList.remove("show-head");
        }
    })
})


const focushead=document.querySelectorAll(".focus-area h1");
focushead.forEach((el)=> observe_head.observe(el));



// focus area text animation 
const card1=document.querySelectorAll(".focus-area .container .cardd:nth-child(1)");
card1.forEach((el)=> observe_head.observe(el));
const card2=document.querySelectorAll(".focus-area .container .cardd:nth-child(2)");
card2.forEach((el)=> observe_text.observe(el));
const card3=document.querySelectorAll(".focus-area .container .cardd:nth-child(3)");
card3.forEach((el)=> observe_head.observe(el));
const card4=document.querySelectorAll(".focus-area .container .cardd:nth-child(4)");
card4.forEach((el)=> observe_text.observe(el));



// reach text animation 
const reachTitle=document.querySelectorAll(".reach .content .left h1");
reachTitle.forEach((el)=>observe.observe(el))

const numbers=document.querySelectorAll(".reach .content .right  .btm-c");
numbers.forEach((el)=> observe.observe(el));

const joinUs=document.querySelectorAll(".join-us h1");
joinUs.forEach((el)=>observe.observe(el))

const joinMember=document.querySelectorAll(".join-us .container .content");
joinMember.forEach((el)=>observe.observe(el))


const howHead=document.querySelectorAll(".how h1");
howHead.forEach((el)=>observe.observe (el))

const icons=document.querySelectorAll(".how .icon .icon-content");
icons.forEach((el)=>observe.observe(el))




const inspireImg=document.querySelectorAll(".stories .swiper .swiper-slide .left span img ");
inspireImg.forEach((el)=>observe.observe(el))


const inspirbg=document.querySelectorAll(".stories .swiper .swiper-slide .left img");
inspirbg.forEach((el)=>observe.observe(el));

const inspirHead=document.querySelectorAll(".stories .swiper .swiper-slide .right h1");
inspirHead.forEach((el)=>observe.observe(el))


const inspirPara=document.querySelectorAll(".stories .swiper .swiper-slide .right p");
inspirPara.forEach((el)=>observe.observe(el))

const inspirbtn=document.querySelectorAll(".stories .swiper .swiper-slide .right button");
inspirbtn.forEach((el)=>observe.observe(el))