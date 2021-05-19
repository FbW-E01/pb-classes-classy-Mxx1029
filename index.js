// 1. Person Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    describe() {
        return `${this.name}, ${this.age} years old`;
    };
};

const person1 = new Person("John", 19);
const result = person1.describe();
console.log(result);

// 2. Tick Tock

class Clock {
    constructor({template}) { // object destructuring
        this.template = template;
    };

    render() {
        let date = new Date();
  
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
  
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
    
        console.log(output);
    };

    stop() {
    };

    start() {
        this.render();
        setInterval(this.render.bind(this), 1000);
        // render needs to be rebound to it to work
    };
};

let clock = new Clock({template: 'h:m:s'});
clock.start();

// 3. TV Class

class TV {
    constructor(brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    increaseVolume() {
        if (this.volume < 100 && (this.volume + 10) < 100) {
            this.volume += 10;
        };
    };
    decreaseVolume() {
        if (this.volume > 0 && (this.volume - 10) > 0) {
            this.volume -= 10;
        };
    };
    setRandomChannel() {
        this.channel = Math.ceil(Math.random() * 50);
    };
    reset() {
        this.channel = 1;
        this.volume = 50;
    };
    printStatus() {
        console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`)
    };

};

const tv1 = new TV("Panasonic");
tv1.increaseVolume();
tv1.decreaseVolume();
tv1.decreaseVolume();
tv1.decreaseVolume();
tv1.decreaseVolume();
tv1.decreaseVolume();
tv1.decreaseVolume();
tv1.decreaseVolume();
tv1.setRandomChannel();
tv1.setRandomChannel();
tv1.reset();
tv1.setRandomChannel();
tv1.increaseVolume();
tv1.printStatus();
console.log(tv1);

// Bonus 4. Volume

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    };
    getVolume() {
        // short version: 
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
        // longer version, better to read:
        // const radiusSquared = Math.pow(this.radius, 2);
        // const multipliedByPi = Math.PI * radiusSquared;
        // const multipliedByHeight = multipliedByPi * this.height;
        // const resultVolume = multipliedByHeight.toFixed(4);
        // return resultVolume;
    };
};

const cylinder1 = new Cylinder(2, 2);
console.log(cylinder1.getVolume());