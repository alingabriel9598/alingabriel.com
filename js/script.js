//Spotlight Effect
const spotlightEl = document.querySelector("#spotlight");
function handleMouseMove(event) {
    const { clientX, clientY } = event;
    
    spotlightEl.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;}
// Event listener for spotlight effect
document.addEventListener("mousemove", handleMouseMove);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
 
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};