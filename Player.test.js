const Ship = require("./Ship");
const Gameboard = require("./Gameboard");
const Player = require("./Player");

test("Creates player object", () => {
    const vukosi = new Player("Vukosi");

    expect(
        vukosi
    ).toBeInstanceOf(Player)
    expect(
        vukosi.name
    ).toBe("Vukosi")
});

test("Player get Co-ordinates", () => {
    const vukosi = new Player("Vukosi");

    expect(
        vukosi.getCoords(3, 2, 1)
    ).toStrictEqual([3, 2, 1]);
});


