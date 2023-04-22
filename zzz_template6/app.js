let parallax0 = document.getElementById("parallax0");
let parallax1 = document.getElementById("parallax1");
let parallax3 = document.getElementById("parallax3");
let parallax4 = document.getElementById("parallax4");
let parallax5 = document.getElementById("parallax5");
let parallax6 = document.getElementById("parallax6");
let parallax7 = document.getElementById("parallax7");
let parallax8 = document.getElementById("parallax8");

window.addEventListener("scroll", func);

function func() {
    let value = window.scrollY;
    parallax0.style.top = value * 0.95 + "px";
    parallax1.style.top = value * 0.75 + "px";
    parallax3.style.top = value * 0.65 + "px";
    parallax4.style.top = value * 0.55 + "px";
    parallax5.style.top = value * 0.35 + "px";
    parallax6.style.top = value * 0.25 + "px";
    parallax7.style.left = value * -0.4 + "px";
}
//----------scrollefect1
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hidenElements = document.querySelectorAll(".hidden");
hidenElements.forEach((ell) => observer.observe(ell));

//----------scrollefect2
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show1");
        } else {
            entry.target.classList.remove("show1");
        }
    });
});
const hidenElements1 = document.querySelectorAll(".hidden1");
hidenElements1.forEach((ell) => observer1.observe(ell));

//----------scrollefect3
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show2");
        } else {
            entry.target.classList.remove("show2");
        }
    });
});
const hidenElements2 = document.querySelectorAll(".hidden2");
hidenElements2.forEach((ell) => observer2.observe(ell));
