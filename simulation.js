sb.addEventListener("click", () => {start(true)})
gb.addEventListener("click", () => {start(false)})
eb.addEventListener("click", end)

let game;
let interval = -1;

function start(simulation) {
    table.innerHTML=''
    simulation.textContent = 0;

    running = true;

    if (simulation) {
        game = new Tester(simulation, 100);
        interval = setInterval(() => {
            if (game.frameNum >= 500) {
                simulationNum.textContent = parseInt(simulationNum.textContent)+1
                table.innerHTML="";
                bestMovers = game.getBestAgents(2)
                console.log("First: "+bestMovers[0].score+"; "+"Second: "+bestMovers[1].score+"; Average: "+((bestMovers[0].score+bestMovers[1].score)/2))
                game.end();
                game = new Tester(simulation, 100);
            }
        }, 0)
    }
    else {
        game = new Tester(simulation, 1);
    }

    sb.style.display = "none";
    eb.style.display = "block";
    gb.style.display = "none";
}

function end() {
    if (interval != -1) {
        clearInterval(interval)
    }

    running = false;

    sb.style.display = "block";
    gb.style.display = "block";
    eb.style.display = "none";

    game.end()
}