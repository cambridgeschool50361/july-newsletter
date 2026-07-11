




/*==============================
     Explore Button Scroll
==============================*/

const exploreBtn = document.querySelector(".hero button");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector("#principal").scrollIntoView({
            behavior: "smooth"
        });

    });

}


/*==============================
     Card Hover Animation
==============================*/

const cards = document.querySelectorAll(".card, .student-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";
        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*==============================
      Active Navigation
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==============================
     Gallery Click Effect
==============================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});


/*==============================
      Welcome Message
==============================*/

window.addEventListener("load", () => {

    console.log("Cambridge School Newsletter Loaded Successfully");

});




/*==============================
      remove1
==============================*/

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});


const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=
window.scrollY>300?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};