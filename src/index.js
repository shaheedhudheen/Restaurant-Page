import navbar from "./modules/navbar.js";
import homepage from "./modules/homepage.js";
import menuPage from "./modules/menu.js";
import contactPage from "./modules/contact.js";
import "./style.css";

let header = document.querySelector('header')
header.appendChild(navbar())

let content = document.querySelector("#content");
const navBtn = document.querySelectorAll(".nav-link");

//tab swtitch function

(function () {
    content.appendChild(homepage())
    let home = document.querySelector(".home")
    home.addEventListener("click", ()=>{
        content.replaceChildren(homepage())
        
    })
    let menu = document.querySelector(".menu")
    menu.addEventListener("click", ()=>{
        
        content.replaceChildren(menuPage());
    })
    let contact = document.querySelector(".contact")
    contact.addEventListener("click", ()=>{
        console.log("contact page");
    })
})();

