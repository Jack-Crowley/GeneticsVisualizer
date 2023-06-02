class Board {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.player = new Player(new Circle(new Position(0,0,new Vector(1, 1)),this.ctx,20,"#ff0000"))

        this.shapes= [];
    }

    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    update() {
        this.clear()
        this.shapes.forEach((shape) => {
            shape.update()
        })

        this.player.update()
    }
}