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

   test('should correctly calculate users age mars years', () => {
    const galactic = new Galactic(45);
    galactic.marsAge()
    console.log(galactic.marsAge())
    expect(galactic.marsAge()).toEqual(24);
   });

   test('should correctly calculate users age jupiter years', () => {
    const galactic = new Galactic(45);
    galactic.jupiterAge()
    console.log(galactic.jupiterAge())
    expect(galactic.jupiterAge()).toEqual(4);
   });

   test('should correctly calculate users life expectancy for Earth', () => {
    const galactic = new Galactic(45);
    galactic.lifeExpect()
    console.log(galactic.lifeExpect())
    expect(galactic.lifeExpect()).toEqual(31);
   });



});