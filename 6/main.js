function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.amount;
      }
    }
  
    return totalPrice;
}
  
const products = [
    { name: 'apple', price: 10, amount: 5 },
    { name: 'banana', price: 5, amount: 3 },
    { name: 'pineapple', price: 20, amount: 2 },
    { name: 'orange', price: 15, amount: 4 }
];
  
const productName = 'apple';

console.log(calculateTotalPrice(products, productName));