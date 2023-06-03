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
        this.movers.push(mover)
    }

    start() {
        this.taskIDs.push(setInterval(() => {
            setScore(this.mover.score)
            this.mover.board.draw()
            this.movers.forEach((mover) => {
                mover.move()
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