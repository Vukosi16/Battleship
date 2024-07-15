const Ship = require('./Ship');

class Gameboard {
    constructor(owner) {
        this.board = [
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3]
        ],
        this.allShipsDown = true,
        this.owner = owner;
    }

    placeShip(shipObject) {
        const { x, y } = shipObject.shipLocation();
        this.board[y - 1][x - 1] = "X";
    }

    //this needs to be fixed
    recieveAttack(xAttack, yAttack, ship){
        if (this.board[yAttack-1][xAttack-1] == "X"){
            ship.hit()
        }else{
            this.board[yAttack-1][xAttack-1] = "O"
            return "Not hit"
        } 
    }

        allShipsSunk() {
            this.allShipsDown = true; // Reset the flag
            this.board.forEach(row => {
                row.forEach(cell => {
                    if (cell === "X") {
                        this.allShipsDown = false; // Found a ship that is not sunk
                    }
                });
            });
    
            if (this.allShipsDown) {
                return "All ships sunk";
            } else {
                return "Ships still alive";
            }
        }
     
    
}

// const ship = new Ship(3, 3, 2);
//     const gm = new Gameboard();

//     gm.placeShip(ship);
//     gm.recieveAttack(2, 2, ship)
//     console.log(gm.board)


module.exports = Gameboard;

