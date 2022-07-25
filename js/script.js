let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let moun1 = document.getElementById("moun1");
let moun2 = document.getElementById("moun2");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let imageSection = document.querySelector(".images")


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value*4 + "px";
    moun1.style.top = value*2 + "px";
    moun2.style.top = value*1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value*3 + "px";

    if(value >= 129) {
        imageSection.style.background = "linear-gradient(#02224c , #8886f9)";
    } else {
        imageSection.style.background = "linear-gradient(#410a2b , #661a49)";
    } 
};
