import { Galactic } from './../src/galactic.js';

describe('Galactic', () => {

  test('should correctly create a galactic object', () => {
    const galactic = new Galactic(44);
    expect(galactic.age).toEqual(44);
   });

   test('should correctly calculate users age in days', () => {
    const galactic = new Galactic(45);
    galactic.userAgeInDays()
    console.log(galactic.userAgeInDays())
    expect(galactic.userAgeInDays()).toEqual(16425);
   });

   test('should correctly calculate users age mercury years', () => {
    const galactic = new Galactic(45);
    galactic.mercuryAge()
    console.log(galactic.mercuryAge())
    expect(galactic.mercuryAge()).toEqual(187);
   });

   test('should correctly calculate users age venus years', () => {
    const galactic = new Galactic(45);
    galactic.venusAge()
    console.log(galactic.venusAge())
    expect(galactic.venusAge()).toEqual(73);
   });





});