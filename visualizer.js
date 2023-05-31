let running = false;
const sb = document.querySelector(".start");
const eb = document.querySelector(".end");

sb.addEventListener("click", startSimulation)
eb.addEventListener("click", endSimulation)

function startSimulation() {
    running = true;
    
    sb.style.display = "none";
    eb.style.display = "block";
}

function endSimulation() {
    running = false;

    sb.style.display = "block";
    eb.style.display = "none";
}