

let starter = 10.95;
let main = 15.50;
let dessert = 12.95;
let beverage = 10.95;

const calculateInvoice = (starterPrice, mainDishPrice, dessertPrice, beveragePrice) => {

    return (starterPrice + mainDishPrice + dessertPrice + beveragePrice)
}
console.log(calculateInvoice(starter, main, dessert, beverage));





let poriyal = 12.95;
let salmonVeggies = 15.50;
let sunnyLemon = 12.95;
let guinness = 10.95;
console.log(calculateInvoice(poriyal, salmonVeggies, sunnyLemon, guinness));


let suppe = 2;
let kebab = 11;
let brownies = 1;
let cola = 1.5;
console.log(calculateInvoice(suppe, kebab, brownies, cola));

let smkdSalmon = 2.5;
let teriyaki = 14;
let icecream = 2;
let iMartini = 2;
console.log(calculateInvoice(smkdSalmon, teriyaki, icecream, iMartini));


const sdtInvoice = (starterPrice, maindishPrice, dessertPrice, beveragePrice) => {
    let std = (starterPrice + maindishPrice + dessertPrice) - ((starterPrice + maindishPrice + dessertPrice) / 10)

    return (std + beveragePrice)
}

console.log(sdtInvoice(smkdSalmon, teriyaki, icecream, iMartini));