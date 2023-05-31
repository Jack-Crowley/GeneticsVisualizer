class Vector {
    constructor() {
        this(0,0)
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v1) {
       this.x += v1.x;
       this.y += v1.y;
    }

    clear() {
        this.x = 0;
        this.y = 0;
    }

    clone() {
        return new Vector(x,y);
    }

    
}