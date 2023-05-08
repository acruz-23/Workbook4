// func takes an array of objects (one obj is a price the other is the part code) print out a packing list w/ a quantity and part code and then the price at the end.

//set inventory and prices
const part1 = {
  partCode: "XYZ:1234-L",
  price: 100,
};
const part2 = {
  partCode: "XYZ:1234-md",
  price: 200,
};

const part3 = {
  partCode: "XYZ:1234-sm",
  price: 300,
};
let inventory = [part1, part2, part3];

//bens order
const bensOrder = [part2, part1, part2, part3, part3, part3];

//print invoice
function printInvoice(customerOrder, inventory) {
  let part1Count = 0;
  let part2Count = 0;
  let part3Count = 0;

  for (let i = 0; i < customerOrder.length; i++) {
    if (customerOrder[i] == part1) {
      part1Count += 1;
    }
    if (customerOrder[i] == part2) {
      part2Count++;
    }
    if (customerOrder[i] == part3) {
      part3Count++;
    }
  }
  console.log("Invoice:");
  console.log(
    "Quantity-(" +
      part1Count +
      "), Part Code-(" +
      part1.partCode +
      "), Total Price-($" +
      part1Count * part1.price +
      ")"
  );
  console.log(
    "Quantity-(" +
      part2Count +
      "), Part Code-(" +
      part2.partCode +
      "), Total Price-($" +
      part2Count * part2.price +
      ")"
  );
  console.log(
    "Quantity-(" +
      part3Count +
      "), Part Code-(" +
      part3.partCode +
      "), Total Price-($" +
      part3Count * part3.price +
      ")"
  );
  console.log("-".repeat(50));
  let customerInvoice = {
    part1Quantity: part1Count,
    part1Total: part1Count * part1.price,
    part2Quantity: part2Count,
    part2Total: part2Count * part2.price,
    part3Quantity: part3Count,
    part3Total: part3Count * part3.price,
  };
  return customerInvoice;
}
let bensInvoice = printInvoice(bensOrder, inventory);
// console.log(bensInvoice);
