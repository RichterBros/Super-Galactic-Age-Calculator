export class Galactic {
    constructor(age, lifeExpectancy, planet) {
        this.age = age;
        this.lifeExpectancy = lifeExpectancy
        this.planet = planet
    }

    planetAge() {

        if (this.planet === "Mercury") {
            return Math.round(this.age * 365 / 88);
        } else if (this.planet === "Venus") {
            return Math.round(this.age * 365 / 225);
        } else if (this.planet === "Mars") {
            return Math.round(this.age * 365 / 687);
        } else if (this.planet === "Jupiter") {
            return Math.round(this.age * 365 / 4329);
        }
    }


    userAgeInDays() {
        return this.age * 365;
    }

    mercuryAge() {
        return Math.round(this.age * 365 / 88);
    }

    venusAge() {
        return Math.round(this.age * 365 / 225);
    }

    marsAge() {
        return Math.round(this.age * 365 / 687);
    }

    jupiterAge() {
        return Math.round(this.age * 365 / 4329);
    }

    yearsLeftEarth() {
        return Math.round(this.lifeExpectancy - this.age);
    }


    yearsLeftPlanets() {
        if (this.planet === "Earth") {
            return Math.round(this.lifeExpectancy - this.age);
        } else if (this.planet === "Mercury") {
            return Math.round(this.lifeExpectancy * 365 / 88) - Math.round(this.age * 365 / 88);


        }


    }

    yearsPastExpect() {
        if (this.planet === "Earth" && this.age > this.lifeExpectancy) {
            return this.age - this.lifeExpectancy;
        } else if (this.planet === "Mercury" && this.age > this.lifeExpectancy) {
            return Math.round(this.age * 365 / 88) - Math.round(this.lifeExpectancy * 365 / 88)
        } else if (this.planet === "Venus" && this.age > this.lifeExpectancy) {
            return Math.round(this.age * 365 / 225) - Math.round(this.lifeExpectancy * 365 / 225)
        }


    }

}

