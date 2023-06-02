class Tester extends Game{
    constructor (score, board) {
        super(score, board);
    }

    start() {
        super.start()
        var X = this.board.canvas.width / 2;
        var Y = this.board.canvas.height / 2;
        var R = 20;
        this.board.ctx.beginPath();
        this.board.ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        this.board.ctx.lineWidth = 3;
        this.board.ctx.fillStyle = '#FF0000';
        this.board.ctx.fill();
    }
}