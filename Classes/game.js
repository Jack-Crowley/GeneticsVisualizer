class Game {
    constructor(score) {
        this.score = score;
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