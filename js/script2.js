class Cars {
    constructor(brand,year,power,color){
        this.brand =brand;
        this.year = year;
        this.power = power +"kw";
        this.color = color;
    
    }

    showInfo() {
        document.write(`Brand:${this.brand}<br>
        Year of issue: ${this.year} <br>
        Engine Power: ${this.power} <br>
        Color: ${this.color} <br>`);
    }

   
} 

class ElectroCars extends Cars {
        constructor(brand,year,power,color,battery){
            super(brand,year,power,color);
            this.battery = battery;
        }

        showInfo(){
            super.showInfo();
            document.write(`Battery: ${this.battery}<br>`);
        }

        promote(){
            document.write(`You should surely buy ${this.brand}!`);
        }
    }

    const wheels = new Cars("Tayota",2020,5,"Red");
    wheels.showInfo();

    const electroWheels = new ElectroCars ("Tesla",2021,10.5,"Black");
    electroWheels.showInfo();
    electroWheels.promote();