import { Galactic } from './../src/galactic.js';

describe('Galactic', () => {

  test('should correctly create a galactic object', () => {
    const galactic = new Galactic(44);
    expect(galactic.age).toEqual(44);
   });

   test('should correctly calculate users age in days', () => {
    const galactic = new Galactic(45);
    galactic.mercuryAge()
    console.log(galactic.mercuryAge())
    expect(galactic.mercuryAge()).toEqual(16425);
   
});





});