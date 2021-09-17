const specifications = [
  {
    id: 10254121,
    mileage: 12.65,
    fuelType: "Petrol",
    engineDisplacement: 3982,
    maxPower: "576.63bhp@2100-5500rpm",
    maxTorque: "700Nm@2100-5500rmp",
    seatingCapacity: 2,
    transmissionType: "Automatic",
    bootspace: 285,
    fuelTankCapacity: 75.0,
    bodyType: "coupe",
  },
];

const features = [
  {
    id: 10254122,
    powerSteering: true,
    PowerWindowsFront: true,
    abs: true,
    ac: true,
    driverAirbag: true,
    passangerAirbag: true,
    autoClimateCrontol: true,
    alloyWheels: true,
    mfSteering: true,
  },
];

const db = {
  specifications,
  features,
};
export default db;
