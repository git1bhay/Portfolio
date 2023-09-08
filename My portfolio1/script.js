var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var navlist = document.querySelector('.nav-list');
var rightNav = document.querySelector('.rightNav');



burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontainers = document.getElementsByClassName("tab-container");

function opentab(tabname){
    for(item of tablinks){
        item.classList.remove("active-link");
    }
    for(tabcont of tabcontainers){
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

