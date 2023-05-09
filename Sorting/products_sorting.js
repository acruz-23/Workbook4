let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];
const sortedProducts = products.sort(function (a, b) {
  if (a.product < b.product) return -1;
  else if (a.product == b.product) return 0;
  else return 1;
});
console.log("Sorted Products");
for (let i = 0; i < sortedProducts.length; i++) {
  console.log(sortedProducts[i].product);
}
console.log("-".repeat(20));
const productsSortedDescPrice = products.sort(function (a, b) {
  if (a.price > b.price) return -1;
  else if (a.price == b.price) return 0;
  else return 1;
});
console.log("Sorted Products by Descending Price");
for (let i = 0; i < sortedProducts.length; i++) {
  console.log(sortedProducts[i].product, sortedProducts[i].price);
}
console.log("-".repeat(20));
