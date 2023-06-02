class Board {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.shapes= [];
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    createPlayer(shape) {
        this.player = new Player(shape);
    }

    addShape(shape) {
        this.shapes.push(shape)
    }

    update() {
        this.clear()
        this.shapes.forEach((shape) => {
            shape.update()
        })

        this.player.update()
    }
}