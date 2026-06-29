// =========================
// TYENA BEAUTY TRAINING COLLEGE
// script.js
// =========================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
        navbar.style.boxShadow = "0 2px 10px rgba(212,175,55,0.2)";
    } else {
        navbar.style.background = "#000";
        navbar.style.boxShadow = "none";
    }
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("response").innerText = "Please fill in all fields!";
        document.getElementById("response").style.color = "red";
    } else {
        document.getElementById("response").innerText =
            "Thank you " + name + "! Your message has been sent successfully.";

        document.getElementById("response").style.color = "green";

        // clear form
        document.getElementById("contactForm").reset();
    }
});

// Active menu highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Fade-in animation
const fadeElements = document.querySelectorAll(".card, h2, p");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

    observer.observe(element);
});

// Contact Form Validation
const contactForm = document.querySelector("#contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === ""){

            alert("Please fill in all fields.");
            return;
        }

        alert("Thank you for contacting TYENA BEAUTY TRAINING COLLEGE!");

        contactForm.reset();
    });
}

// Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.left = "20px";
topButton.style.padding = "12px 15px";
topButton.style.fontSize = "20px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.background = "#D4AF37";
topButton.style.color = "#000";
topButton.style.display = "none";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Apply button
function applyCourse(courseName) {
    alert(
        "Thank you for your interest in " +
        courseName +
        ". Please contact TYENA BEAUTY TRAINING COLLEGE on +254 759936766 for enrollment."
    );
}

// Scroll Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    card.classList.add("hidden");
    observer.observe(card);
});

console.log("TYENA BEAUTY TRAINING COLLEGE Website Loaded Successfully");