let menu = document.querySelector(".mobile-nav");
let btn = document.querySelector(".mbl-nav");

btn.addEventListener("click", function(){
    menu.style.opacity = "1";
    menu.style.pointerEvents = "all";
})

let close=document.querySelector(".mobile-nav button");

close.addEventListener('click',()=>{
    menu.style.opacity="0";
    menu.style.pointerEvents="none"

})
