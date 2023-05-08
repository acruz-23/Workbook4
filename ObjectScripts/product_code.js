function getSupplier(code) {
  const colonLocation = code.indexOf(":");
  const supplierCode = code.slice(0, colonLocation);
  return supplierCode;
}

function getProductNumber(code) {
  const colonLocation = code.indexOf(":");
  const dashLocation = code.indexOf("-");
  const productNumber = code.slice(colonLocation + 1, dashLocation);
  return productNumber;
}

function getSize(code) {
  const dashLocation = code.indexOf("-");
  const size = code.slice(dashLocation + 1, code.length);
  return size;
}

function parsePartCode(code) {
  let productCode = {
    supplierCode: getSupplier(code),
    productNumber: getProductNumber(code),
    size: getSize(code),
  };
  return productCode;
}
const productCode = parsePartCode("XYZ:1234-L");
console.log(parsePartCode("XYZ:1234-L"));
console.log(productCode.productNumber);

// func takes an array of objects (one obj is a price the other is the part code) print out a packing list w/ a quantity and part code and then the price at the end.
