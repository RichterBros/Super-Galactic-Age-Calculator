export class Galactic {
    constructor(age) {
    this.age = age;
    }
  
    userAgeInDays(){
        return this.age * 365 
   }
    
    mercuryAge(){
        return Math.round(this.age * 365 / 88)
   }
}