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

        if (simulation) {
            for (let i = 0; i < numPlayers; i++) {
                let mov = new Agent(baseAgent);
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
        this.mover.setShape(new Circle(this.mover.board, new Position(), 20, "#000000",{canLeaveEdge:false}));

        this.createMap()
        this.start()
    }

    playerFinished() {
        this.finishedPlayers++;
        if (this.finishedPlayers == this.numPlayers) {this.end()}
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
            this.mover.board.draw()
            this.movers.forEach((mover) => {
                mover.draw()
            })
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
        this.taskIDs.push(setInterval(this.frame.bind(this), 10))
    }

    frame() {
        setScore(this.mover.score)
        this.mover.board.draw()
        this.movers.forEach((mover) => {
            mover.update()
            mover.board.update()
        })
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