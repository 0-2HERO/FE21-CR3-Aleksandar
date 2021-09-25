function calculateinvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let invoice = (starterPrice + maindishPrice + dessertPrice + beveragePrice);
    let invoicetwo = (starterPrice + maindishPrice)
    let invooiceThree = (dessertPrice + starterPrice)
    return [invoice, invoicetwo, invooiceThree];


}

let [total, total2, total3] = calculateinvoice(12.95, 15.50, 10.95, 15.95);
console.log(total, total2, total3);



function calculateinvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let invoice = (starterPrice + maindishPrice + dessertPrice + beveragePrice);
    let invoicetwo = (starterPrice + maindishPrice)
    let invooiceThree = (dessertPrice + starterPrice)
    let discountproducts = (dessertPrice + starterPrice + maindishPrice + beveragePrice);
    discountprice = (discountproducts - beveragePrice);
    discountprice = (discountprice * 0.10);
    discountotal = (discountprice * 9);
    discountprice = (discountproducts - beveragePrice - dessertPrice);
    discountprice = (discountprice * 0.10);
    discountotal2 = (discountprice * 9);
    discountprice = (discountproducts - maindishPrice - dessertPrice - beveragePrice);
    discountprice = (discountprice * 0.10);
    discountotal3 = (discountprice * 9);


    return [invoice, invoicetwo, invooiceThree, discountprice, discountotal, discountotal2, discountotal3];


}

let [total, total2, total3, total4, total5, total6, total7] = calculateinvoice(12.95, 15.50, 10.95, 15.95);
console.log(total5, total6, total7);