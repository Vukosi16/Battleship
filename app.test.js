const Ship = require('./app.js');

test("Creates the object", () => {
    const ship = new Ship(3, 2, 1);

    expect(
        ship
    ).toBeInstanceOf(Ship)
    expect(
        ship.xLocation
    ).toBe(2)
    expect(
        ship.yLocation
    ).toBe(1)
    expect(
        ship.length
    ).toBe(3)
});

test("Adds hits", () => {
    const ship = new Ship(3, 2, 1,);

    ship.hit()

    expect(
        ship.hits
    ).toBe(1)
});

test("Has ship shunk", () => {
    const ship = new Ship(3, 2, 1);

    ship.hit()
    ship.hit()
    ship.hit()
    ship.checkIfsunk()

    expect(
        ship.sunk
    ).toBeTruthy()
});

test("Has the rigth location", () => {
    const ship = new Ship(3, 2, 1);
    const { x , y} = ship.area()

    expect(
        ship.xLocation
    ).toEqual(x)
    expect(
        ship.yLocation
    ).toBe(y)
});