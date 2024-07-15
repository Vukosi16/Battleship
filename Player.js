const Ship = require("./Ship");
const Gameboard = require("./Gameboard");

class Player{
    constructor(name){
        this.name = name
    }

    getCoords(length, x, y){
        return [length ,x, y];
    }

    createShip(coords, name){ 
        let length = coords[0];
        let x = coords[1];
        let y = coords[2];
        name = this.name + "Ship";
        let ship = new Ship(length ,x, y, name);
        return ship;
    }

    createGameboard(){
        

         let gm = new Gameboard();
         return gm;
    }
}




module.exports = Player;