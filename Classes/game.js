class Game {
    constructor(score, board) {
        this.score = score;
        this.board = board;
        this.interval = -1;
    }

    start() {
        this.interval = setInterval(this.frame, 1000)
    }

    frame() {
        
    }

    end() {

    }
}