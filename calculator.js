

var starter = 10.95;
var main = 15.50;
var dessert = 12.95;
var beverage = 10.95;

const calculateInvoice = (starterPrice, maindishPrice, dessertPrice, beveragePrice) => {

    return (starterPrice + maindishPrice + dessertPrice + beveragePrice)
}
console.log(calculateInvoice(starter, main, dessert, beverage));





var poriyal = 12.95;
var salmonVeggies = 15.50;
var sunnyLemon = 12.95;
var guinness = 10.95;
console.log(calculateInvoice(poriyal, salmonVeggies, sunnyLemon, guinness));


var suppe = 2;
var kebab = 11;
var brownies = 1;
var cola = 1.5;
console.log(calculateInvoice(suppe, kebab, brownies, cola));

var smkdSalmon = 2.5;
var teriyaki = 14;
var icecream = 2;
var iMartini = 2;
console.log(calculateInvoice(smkdSalmon, teriyaki, icecream, iMartini));


const sdtInvoice = (starterPrice, maindishPrice, dessertPrice, beveragePrice) => {
    var std = (starterPrice + maindishPrice + dessertPrice) - ((starterPrice + maindishPrice + dessertPrice) / 10)

    return (std + beveragePrice)
}

console.log(sdtInvoice(smkdSalmon, teriyaki, icecream, iMartini));