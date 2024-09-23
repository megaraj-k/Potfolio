
// --------------about me--
const skill = document.querySelector("#skills")
const educate = document.querySelector("#education")
const exper = document.querySelector("#experience")

function skillsfun(){
    skill.style.display = "block"
    educate.style.display = "none"
    exper.style.display = "none"
    
}
function edufun(){
    skill.style.display = "none"
    educate.style.display = "none"
    exper.style.display = "block"
  
}
function expfun(){
    skill.style.display = "none"
    educate.style.display = "block"
    exper.style.display = "none"
}

$(document).ready(function(){
    $(".header-text").hover(function(){
        $(".header-text").slideUp(3000).slideDown(3000);
    });
  });