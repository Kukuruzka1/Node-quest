const information = require('./information');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, I am ${information.name} and I am studing at ${information.campus}`,
    e: "oO",
    T: "U "
}));
