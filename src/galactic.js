export class Galactic {
    constructor(age, lifeExpectancy,planet) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy
    }
  
    // planet(){

    // if (this.planet = Mercury){
    //     return Math.round(this.age * 365 / 88);


    // }
    
    // }
    
    
    
    
    
    
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

    yearsLeftEarth(){
        return Math.round(this.lifeExpectancy - this.age);
        }
    

    yearsLeftMercury(){
       return Math.round(this.lifeExpectancy * 365 / 88) - Math.round(this.age * 365 / 88);
        
    }
}
  

