class Game {
    constructor(score, board, simulation) {
        this.score = score;
        this.board = board;

        this.taskIDs = [];

        this.createMap()
    }

    start() {
        this.taskIDs.push(setInterval(this.frame, 10, this.board))
    }

    frame(board) {
        board.update()
    }

    createMap() {

    }

    end() {
        this.taskIDs.forEach((id) => {
            clearInterval(id)
        })
    }
}