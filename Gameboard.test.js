const Gameboard = require("./Gameboard.js");
const Ship = require("./Ship.js")

test("Gameboard Exists", () => {
    const gameBoard = new Gameboard();

    expect(
        gameBoard
    ).toBeInstanceOf(Gameboard)
});

test("Ship placed. Middle", () => {

    const ship = new Ship(3, 2, 2);
    const gm = new Gameboard();

    gm.placeShip(ship);

    expect(
        gm.board[1][1]
    ).toBe("X")
});

test("Ship placed. Last x and y", () => {

    const ship = new Ship(3, 3, 3);
    const gm = new Gameboard();

    gm.placeShip(ship);

    expect(
        gm.board[2][2]
    ).toBe("X")
});

test("Attack hit", () => {
    const ship = new Ship(3, 2, 2);
    const gm = new Gameboard();

    gm.placeShip(ship);
    gm.recieveAttack(2, 2, ship);

    expect(
        ship.hits 
    ).toBe(1)
});

test("Attack Missed", () => {
    const ship = new Ship(3, 3, 2);
    const gm = new Gameboard();

    gm.placeShip(ship);

    expect(
        gm.recieveAttack(2, 2, ship)
    ).toBe("Not hit")
});

test("Attack Missed. Keeps track of misses.", () => {
    const gameBoard = new Gameboard();
    const ship = new Ship(3, 3, 2);  


    gameBoard.placeShip(ship);


    gameBoard.recieveAttack(2, 2, ship);


    expect(gameBoard.board[1][1]).toBe("O"); 

});

test("Ships still live.", () => {
    const gameBoard = new Gameboard();
    const ship = new Ship(3, 3, 2);  

    gameBoard.placeShip(ship);

    expect(
        gameBoard.allShipsSunk()
    ).toBe("Ships still alive")
})

