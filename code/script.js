"use strict";

// N#1

const returnMassive = function (...par) {
  const arr = [];
  let multiplied = 1;

  if (par.length < 2) {
    console.log("Enter more numbers");
  } else {
    arr.push(par[0] + par[1]);
    for (let i = 2; i < par.length; i++) {
      multiplied *= par[i];
    }
    arr.push(multiplied);

    return arr;
  }
};

console.log(returnMassive(1, 2, 3, 4));
console.log(returnMassive(5, 6, 3, 4, 5));
console.log(returnMassive(10, 20, 5, 6, 7));

// N#2

const user = {
  banks: [
    {},
    {},
    {
      address: { city: "Tbilisi" },
    },
  ],
};

const returnCity = function (us) {
  const addCity = us.banks[2].address.city;

  return addCity;
};

console.log(returnCity(user));

// N#3

const obj = {
  date: "01/03/2023",
  study: "js",
  student: "Misho Rostomashvili",
};

const clone = function (object) {
  const objClone = {
    ...object,
  };

  return objClone;
};

console.log(clone(obj));
