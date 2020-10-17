"use strict";// режим строгого современного кода



const soldier = {

    health: 400,
    armor: 100,
    sayHello: function () {

        console.log("hello");
    }
};

const john = Object.create(soldier);

console.log(john.sayHello());