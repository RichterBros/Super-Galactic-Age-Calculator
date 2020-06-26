export class Galactic {
    constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy
}
  
    userAgeInDays(){
        return this.age * 365; 
        }
    
    mercuryAge(){
        return Math.round(this.age * 365 / 88);
        }

    venusAge(){
        return Math.round(this.age * 365 / 225);
        }

    marsAge(){
        return Math.round(this.age * 365 / 687);
        }

    jupiterAge(){
        return Math.round(this.age * 365 / 4329);
        }

    lifeExpect(){
        return Math.round(this.lifeExpectancy - this.age);
        }
    }