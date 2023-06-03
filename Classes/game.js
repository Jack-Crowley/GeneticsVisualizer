class Game {
    constructor(score, simulation) {
        this.score = score;
        this.simulation = simulation

        this.taskIDs = [];

        this.board = null;

        this.movers = [];
        this.mover = null;
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
        this.taskIDs.push(setInterval(() => {
            setScore(this.mover.score)
            this.mover.board.draw()
            this.movers.forEach((mover) => {
                mover.update()
                mover.board.update()
            })
        }, 10))
    }

    createMap() {

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