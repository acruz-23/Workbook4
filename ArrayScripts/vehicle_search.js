let vehicles = [
  {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6,
  },
  {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5,
  },
  {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7,
  },
  {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5,
  },
  {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5,
  },
];
// Which vehicles are RED?
// Which vehicles have registration
// Which vehicles that hold at least 6 people?
// Which vehicles have license plates that end with "22
function findVehiclesByColor(vehicleArray, color) {
  let foundmatches = [];
  for (let i = 0; i < vehicleArray.length; i++) {
    if (vehicleArray[i].color == color) {
      foundmatches.push(vehicleArray[i].licenseNo);
    }
  }
  return foundmatches;
}
function findExpiredRegistration(vehicleArray) {
  let foundmatches = [];
  const currentDate = new Date();
  for (let i = 0; i < vehicleArray.length; i++) {
    if (vehicleArray[i].registrationExpires < currentDate) {
      foundmatches.push(vehicleArray[i].licenseNo);
    }
  }
  return foundmatches;
}

function findVehiclesByMinCapacity(vehicleArray, capacity) {
  let foundmatches = [];
  for (let i = 0; i < vehicleArray.length; i++) {
    if (vehicleArray[i].capacity >= capacity) {
      foundmatches.push(vehicleArray[i].licenseNo);
    }
  }
  return foundmatches;
}
function searchLicensePlateEndsWithX(vehicleArray, plate) {
  let foundmatches = [];
  let dashLocation;
  for (let i = 0; i < vehicleArray.length; i++) {
    dashLocation = vehicleArray[i].licenseNo.indexOf("-");
    if (vehicleArray[i].licenseNo.indexOf(plate) == dashLocation + 1) {
      foundmatches.push(vehicleArray[i].licenseNo);
    }
  }

  return foundmatches;
}

console.log("Red Vehicles:", findVehiclesByColor(vehicles, "Red"));
console.log(
  "Vehicles with capacity of 6:",
  findVehiclesByMinCapacity(vehicles, 6)
);
console.log(
  "Plates that end with 222:",
  searchLicensePlateEndsWithX(vehicles, "222")
);
console.log("Expired Registration:", findExpiredRegistration(vehicles));
