sb.addEventListener("click", () => {start(true)})
tb.addEventListener("click", () => {start(false)})
rb.addEventListener("click", end)
pb.addEventListener("click", () => {paused = true})
plb.addEventListener("click", () => {paused = false})

let game;
let interval = -1;

function start(simulation, model=null) {
    table.innerHTML=''
    simulation.textContent = 0;
    numAgents = 10

    running = true;

    if (simulation) {
        createGame(simulation, numAgents)
        interval = setInterval(() => {
            if (game.frameNum >= 500) {
                // simulationNum.textContent = parseInt(simulationNum.textContent)+1 TODO
                table.innerHTML="";
                bestMovers = game.getBestAgents(2)
                if (Number(bestMovers[0].score.toString()) > Number(bestAgentSetting.textContent)) {
                    bestAgentSetting.textContent = bestMovers[0].score.toString();
                }
                let score = 0;
                for(let i = 0; i < game.movers.length; i++) {
                    score += game.movers[i].score;
                }
                avgScoreSetting.textContent = (score/game.movers.length).toFixed(2).toString();
                console.log("First: "+bestMovers[0].score+"; "+"Second: "+bestMovers[1].score+"; Average: "+((bestMovers[0].score+bestMovers[1].score)/2))
                document.querySelectorAll('canvas.chart').forEach((canvas) => {
                    if (canvas.dataset.values !== "") canvas.dataset.values += ","
                    // canvas.dataset.values = canvas.dataset.values.split(',').slice(0,-1).join(',')
                    canvas.dataset.values += bestMovers[0].score
                    // console.log("Labels: " + canvas.dataset.labels)
                    canvas.dataset.labels += ",Gen " + canvas.dataset.labels.split(',').length
                    createChart()
                    console.log(canvas.dataset.values)
                })
                game.end();
                createGame(simulation, numAgents, bestMovers);
                iterationSetting.textContent = Number(iterationSetting.textContent)+1;
            }
        }, 0)
    }
    else {
        game = new Tester(simulation, 1);
    }

    // sb.style.display = "none";
    // eb.style.display = "block";
    // gb.style.display = "none";
}

function end() {
    if (interval != -1) {
        clearInterval(interval)
    }

    running = false;

    // sb.style.display = "block";
    // gb.style.display = "block";
    // eb.style.display = "none";

    game.end()
}