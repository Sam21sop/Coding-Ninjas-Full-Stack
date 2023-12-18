function calculateTotal(products) {
    let total = 0;
    products.forEach(product => {
        // total += product.quantity * product.quantity;
        total += product.quantity * product.price;
    });
    return total
}

const productList = [
    {name : 'shoes', price: 50, quantity: 2},
    {name : 'hat', price: 25, quantity: 1},
    {name : 'gloves', price: 30, quantity: 2},
]

// expected results = 100 + 25 + 60 = 185
const grandTotal = calculateTotal(productList)
console.log('Grand total: ', grandTotal);