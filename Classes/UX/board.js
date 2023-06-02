class Board {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.shapes= [new Circle(new Position(0,0,10,10),this.ctx,20,"#ff0000")];
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    update() {
        this.clear()
        this.shapes.forEach((shape) => {
            shape.update()
        })
    }
}