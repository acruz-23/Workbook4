let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function getMealPrice(mealItems) {
  let sum = 0;
  for (let i = 0; i < mealItems.length; i++) {
    sum = sum + +lunch[i].price;
  }
  let subtotal = sum;

  let tax = subtotal * 0.08;
  let total = subtotal + tax;
  console.log("Subtotal:", subtotal.toFixed(2));
  console.log("Tax:", tax.toFixed(2));
  console.log("Total", total.toFixed(2));
  console.log("-".repeat(25));

  return total;
}
getMealPrice(lunch);
