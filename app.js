class Ship{
    constructor(length, x, y){
        this.length = length,
        this.xLocation = x,
        this.yLocation = y
        this.hits = 0,
        this.sunk = false

    }

    hit(){
        this.hits++
    }

    checkIfsunk(){
        if (this.hits == this.length){
            this.sunk = true;
        }
    }
    
    area(){
        return {
            x: this.xLocation,
            y: this.yLocation
        }
    }

}

const ship = new Ship(3, 2, 1);
const { x , y} = ship.area()

console.log(x, y)

module.exports = Ship;