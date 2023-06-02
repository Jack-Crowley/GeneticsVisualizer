sb.addEventListener("click", startSimulation)
gb.addEventListener("click", startSimulation)
eb.addEventListener("click", endSimulation)


let game;

function startSimulation() {
    game = new Tester(addScore, new Board(canvas));

    running = true;
    
    sb.style.display = "none";
    eb.style.display = "block";
    gb.style.display = "none";

    game.start()
}

function endSimulation() {
    running = false;

    addScore(3)

    sb.style.display = "block";
    gb.style.display = "block";
    eb.style.display = "none";

    game.end()
}