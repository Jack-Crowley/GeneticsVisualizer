class Board {
    constructor() {
        this.shapes= [];
        this.shapeMap = new Map()
    }

    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    addShape(shape) {
        let pos = 0;
        while (pos < this.shapes.length-1 && this.shapes[pos].position.xPos < shape.position.xPos) {pos++}
        this.shapes.splice(pos,0,shape)
        if (!this.shapeMap.has(shape.name)) {
            this.shapeMap.set(shape.name, [shape])
        }
        else {
            let p = 0;
            while (p < this.shapeMap.get(shape.name).length-1 && this.shapeMap.get(shape.name)[p].position.xPos < shape.position.xPos) {p++}
            this.shapeMap.get(shape.name).splice(p,0,shape)
        }
    }

    getShapes(name) {
        return this.shapeMap.get(name);
    }

    getClosestShape(player, name) {
        let closeValue = -1;
        let closeShape = null;
        this.getShapes(name).forEach((shape) => {
            let x = Math.sqrt((shape.position.xPos-player.shape.position.xPos)**2+(shape.position.yPos-player.shape.position.yPos)**2);
            if (closeValue == -1 || closeValue > x) {
                closeValue = x
                closeShape = shape;
            }
        })
        return closeShape;
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