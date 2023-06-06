class Board {
    constructor() {
        this.shapes= [];
    }

    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    addShape(shape) {
        this.shapes.push(shape)
    }

    draw() {
        clearCanvas()
        this.shapes.forEach((shape) => {
            shape.draw()
        })
    }

    update() {
        this.shapes.forEach((shape) => {
            shape.update()
        })
    }

    deleteShape(shape) {
        if (this.shapes.indexOf(shape) != -1) {
            this.shapes.splice(this.shapes.indexOf(shape), 1);
        }
    }
}