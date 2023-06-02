class Board {
    constructor(canvas) {
        this.canvas = canvas;
        this.shapes= [];
    }

    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
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

    deleteShape(shape) {
        if (this.shapes.indexOf(shape) != -1) {
            this.shapes.splice(this.shapes.indexOf(shape), 1);
        }
    }
}