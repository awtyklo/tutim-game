function Stick() {
    this.health = 3;
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

function Obstacle() {
    var _position = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    }
}

Obstacle.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    $('#game').append('<div class="obstacle"></div>');
};

Obstacle.prototype.move = function () {
    // Wprawienie przeszkody w ruch
    // $('#game').append('<div class="obstacle"></div>');
};


// Inicjalizacja naszego czlowieka
Stick.prototype.init = function () {
    // Dodanie elementu DOM do przestrzeni gry
    $('#game').append('<div id="stick" class="init"></div>');
};

Stick.prototype.getHealth = function () {
    return this.health;
};

Stick.prototype.removeHp = function () {
    this.health = this.health - 1;
    if (this.health <= 0) {
        console.log('@TODO: GAME OVER');
    }
};

// Unikanie przeszkody (kucanie)
Stick.prototype.crouch = function () {
    $('#stick').css('height', '15vh');
    console.log('@TODO: crouch');
};


var stick = new Stick();
// Inicjalizujemy ludzika
stick.init();
stick.crouch();

var o1 = new Obstacle();
o1.init();
o1.move();

// Person.prototype.sayHello = function() {
//     console.info('Witam ' + this.name);
// };
// Person.prototype.getHealth = function() {
//     console.info('Health ' + this.health);
// };
// function Doctor(name, surname) {
//     Person.call(this, name, surname);
//     this.hospital = 'Main';
// }
// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.constructor = Doctor;
// Doctor.prototype.cure = function(person) {
//     if (person instanceof Person === false) {
//         throw new Error("Can't cure!");
//     }
//     person.health += 10;
// };
//
// var person2 = new Person('Mateusz', 'Trener');
// var person1 = new Person('Arek', 'Wtyklo');
// var doctor = new Doctor('Dr', 'House');
//
// console.log(person1.sayHello());
// console.log(person2.sayHello());
// console.log(doctor.sayHello());