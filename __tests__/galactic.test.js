import { Galactic } from './../src/galactic.js';

describe('Galactic', () => {
    test('should correctly calculate users years left on planet', () => {
        const galactic = new Galactic(45, 76, "Earth");
        galactic.yearsLeftPlanets()
        console.log(galactic.yearsLeftPlanets())
        expect(galactic.yearsLeftPlanets()).toEqual(31);
    });

    test('should correctly calculate years over life expectancy', () => {
        const galactic = new Galactic(77, 76, "Venus");
        galactic.yearsPastExpect()
        console.log(galactic.yearsPastExpect())
        expect(galactic.yearsPastExpect()).toEqual(2);
    });

    test('should correctly calculate users years left on inputted planet', () => {
        const galactic = new Galactic(45, 76, "Mars");
        galactic.planetAge()
        console.log(galactic.planetAge())
        expect(galactic.planetAge()).toEqual(24);
    });

});