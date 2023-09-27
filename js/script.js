const spotlightEl = document.querySelector("#spotlight");

function handleMouseMove(event) {
    const { clientX, clientY } = event;
    
    spotlightEl.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
}

document.addEventListener("mousemove", handleMouseMove);

