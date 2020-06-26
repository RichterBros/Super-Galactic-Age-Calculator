import { Galactic } from './../src/galactic.js';

describe('Galactic', () => {

  test('should correctly create a galactic object', () => {
    const galactic = new Galactic(44);
    expect(galactic.age).toEqual(44);
   });

   test('should correctly convert users age into mercury years ', () => {
    const galactic = new Galactic(44);
    galactic.mercuryAge()
    expect(galactic.mercuryAge()).toEqual(188);
   
});





});