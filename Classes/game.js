class Game {
    constructor(simulation, numPlayers, baseAgent, playerShape) {
        this.simulation = simulation
        this.numPlayers = numPlayers;
        this.baseAgent = baseAgent;

        this.finishedPlayers = 0;

        this.taskIDs = [];

        this.board = null;

        this.movers = [];
        this.mover = null;
        this.frameNum = 0;
        this.lastFrame = 0;

        let baseAgentNum = 0;

        if (simulation) {
            for (let i = 0; i < numPlayers; i++) {
                let mov;
                if (baseAgent.length != 0) {
                    mov = new Agent(baseAgent[baseAgentNum++]);
                    if (baseAgentNum == baseAgent.length) baseAgentNum = 0;
                }
                else {
                    mov = new Agent(null);
                }
                this.addMover(mov);
                mov.setShape(playerShape.cloneToBoard(mov.board))
            }
        }
        else {
            let mov = new Player();
            this.addMover(mov);
            mov.setShape(playerShape.cloneToBoard(mov.board))

        }

        this.setMover(this.movers[0])
        this.mover.shape.strokeColor = "#000";

        this.createMap()
        this.start()
    }

    getBestAgents(num) {
        this.movers.sort(Agent.compareFn)
        this.bestMovers = []
        for (let i = 0; i < num; i++) { this.bestMovers.push(this.movers.pop()) }
        return this.bestMovers;
    }

    getBestAgent() {
        this.movers.sort(Agent.compareFn)
        return this.movers[this.movers.length-1]
    }

    playerFinished() {
        this.finishedPlayers++;
        if (this.finishedPlayers == this.numPlayers) { this.end() }
    }

    setMover(mover) {
        this.mover = mover;
    }

    addMover(mover) {
        let tr = document.createElement("tr")

        let x = document.createElement("td")

        mover.radioButton = document.createElement("input");
        mover.radioButton.setAttribute("type", "radio")
        mover.radioButton.setAttribute("name", "activeMover")
        mover.radioButton.onclick = () => {
            game.mover.shape.strokeColor = "#ff0000"
            mover.shape.strokeColor = "#000"
            game.mover = mover;
            setScore(this.mover.score)
            if (renderButton.checked) {
                this.mover.board.draw()
                this.movers.forEach((mover) => {
                    mover.draw()
                })
            }
        };
        if (this.movers.length == 0) mover.radioButton.checked = true;
        x.appendChild(mover.radioButton)
        tr.appendChild(x)

        mover.typeField = document.createElement("td")
        mover.typeField.textContent = mover.type
        mover.scoreField = document.createElement("td")
        mover.scoreField.textContent = mover.score
        mover.finishedField = document.createElement("td")
        mover.finishedField.textContent = mover.finished

        tr.appendChild(mover.typeField)
        tr.appendChild(mover.scoreField)
        tr.appendChild(mover.finishedField)

        table.appendChild(tr)

        this.movers.push(mover)
    }

    start() {
        this.taskIDs.push(setInterval(this.frame.bind(this), 0))
    }

    frame() {
        this.lastFrame++;
        if (this.lastFrame >= getTimeBetweenFrames()) {
            this.frameNum++;
            setScore(this.mover.score)

            if (renderButton.checked) {
                clearCanvas()
                this.mover.board.draw()
            }


            this.movers.forEach((mover) => {
                mover.update()
                if (renderButton.checked) { mover.draw() }
                mover.board.update()
            })
            this.lastFrame = 0;
        }
    }

    addShape(shape, collisions = []) {
        this.movers.forEach((mover) => {
            mover.board.addShape(shape)
            collisions.forEach((collision) => {
                shape.collisions.push(collision)
            })
        })
    }

    end() {
        this.taskIDs.forEach((id) => {
            clearInterval(id)
        })
    }
}