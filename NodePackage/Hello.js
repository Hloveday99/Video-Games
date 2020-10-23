let colors = require('colors/safe');

function sayHello() {
    console.log(colors.green("Hello World"))
}

module.exports.sayHello = sayHello