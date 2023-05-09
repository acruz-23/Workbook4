let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

function findCandyLessThanX(candyArray, maxCost) {
  let foundmatches = [];
  for (let i = 0; i < candyArray.length; i++) {
    if (candyArray[i].price < maxCost) {
      foundmatches.push(candyArray[i].product);
    }
  }

  return foundmatches;
}

function searchInventoryforX(inventory, product) {
  let foundmatches = [];
  let productString;
  for (let i = 0; i < inventory.length; i++) {
    productString = inventory[i].product;
    if (productString.indexOf(product) != -1) {
      foundmatches.push(inventory[i].product);
    }
  }

  return foundmatches;
}

function doWeCarryX(inventory, product) {
  const results = searchInventoryforX(inventory, product);
  if (results[0] == product) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log("Candy less than $4:", findCandyLessThanX(products, 4));
console.log("candy with M&M in name:", searchInventoryforX(products, "M&M"));
console.log("Do we Carry Sweedish Fish:", doWeCarryX(products, "Swedish Fish"));
