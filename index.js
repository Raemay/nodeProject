const melanieInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.think({
text: `i'm ${melanieInfo.firstName} and i'm in ${melanieInfo.campus} campus !`
}));