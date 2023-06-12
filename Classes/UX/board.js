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

    getShapes(name) {
        let list = [];
        this.shapes.forEach((shape) => {
            if (name == shape.name) {
                list.push(shape);
            }
        })
        return list;
    }

    sortPositions(player, name) {
        let list = [];
        this.getShapes(name).forEach((shape) => {
            shape.positionToPlayer = Math.sqrt((shape.position.xPos-player.shape.position.xPos)**2+(shape.position.yPos-player.shape.position.yPos)**2);
            list.push(shape);
        })
        list.sort(Shape.compareTo);
        return list;
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
        // let bestMover = game.getBestAgent()
        // document.querySelectorAll('canvas.chart').forEach((canvas) => {
        //     canvas.dataset.values = canvas.dataset.values.split(',').slice(0,-1).join(',')
        //     canvas.dataset.values += bestMover.score
        //     console.log("Added: " + canvas.dataset.values)
        //     createChart()
        // })
    }

    deleteShape(shape) {
        if (this.shapes.indexOf(shape) != -1) {
            this.shapes.splice(this.shapes.indexOf(shape), 1);
        }
    }
}