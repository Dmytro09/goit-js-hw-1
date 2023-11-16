function makeTransaction(quantity, pricePerDroid) {

    const totalPrice = quantity * pricePerDroid;

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // Should return "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // Should return "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // Should return "You ordered 10 droids worth 5000 credits!"
