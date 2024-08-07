const Player = require("./Player");

class Ship{
    constructor(length, x, y, name){
        this.length = length,
        this.xLocation = x,
        this.yLocation = y
        this.hits = 0,
        this.sunk = false
        this.name = name;
    }

    getShipName(){
        return this.name;
    }

    hit(){
        this.hits++
    }

    checkIfsunk(){
        if (this.hits == this.length){
            this.sunk = true;
        }
    }
    
    shipLocation(){
        return {
            x: this.xLocation,
            y: this.yLocation
        }
    }

}



module.exports = Ship;
