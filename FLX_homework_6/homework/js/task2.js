let priceInput = parseFloat(prompt ('Input amount of money in range 0 to 9999999')) 
let discountInput = parseFloat(prompt ('Input the discount from  0 to 99 '))
let sevedMoney = priceInput * (discountInput / 100).toFixed(2);
let priceWithDiscount = priceInput - sevedMoney;
    if (priceInput >= 0 && priceInput <= 9999999 && discountInput >= 0 && discountInput <= 99) {
        alert('Price without discound:' + priceInput + 
                '\nDiscount:' + discountInput + '%' +
                '\nPrice with discount:' + priceWithDiscount +
                '\nSaved:' + sevedMoney);
    } else {
        alert("Invalid input data");
    }





