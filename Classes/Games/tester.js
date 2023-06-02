class Tester extends Game{
    constructor (score, board) {
        board.createPlayer(new Circle(new Position(), board.ctx, 20, "#ff0000"))

        for (let i = 0; i < 10; i++) {
            let s = new Circle(new Position(Math.random()*canvas.width, Math.random()*canvas.height), board.ctx, 5, "#00ff00", "#00ff00", () => {addScore(5)})

            board.addShape(s)
            s.collisions.push(board.player.shape)
        }

        for (let i = 0; i < 5; i++) {
            let s = new Circle(new Position(Math.random()*canvas.width, Math.random()*canvas.height), board.ctx, 5, "#0000ff", "#0000ff", () => {addScore(-5)})

            board.addShape(s)
            s.collisions.push(board.player.shape)
        }

        super(score, board);
    }
}