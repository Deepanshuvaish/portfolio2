const hamburger=document.querySelector(".hamburger");
const navmenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n =>n.
addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))


var preloader;
function loadNow(opacity){
if(opacity <=0){
    displaycontent();
}
else{
    preloader.style.opacity= opacity;
    window.setTimeout(function(){
        loadNow(opacity - 0.05)
    },100)
}
}
function displaycontent(){
    preloader.style.display = 'none';
    document.getElementById('preloader').style.display="block"
}