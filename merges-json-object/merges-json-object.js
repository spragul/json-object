//Write a function that takes two JSON objects as input and merges them
// into a single JSON object. Handle conflicts if both objects have the same property.

const person1 = {
  name: "RAGUL",
  age: 25,
  address: {
    doorNumber: 12,
    streetName: "Ragu Street",
    city: "Mecheri",
    landmark: "School near by",
    district: "Salem",
    pincode: 636153,
  },
  getBirthyear: function () {
    return new Date().getFullYear() - this.age;
  },
  getAddress: function () {
    return `${this.address.doorNumber},${this.address.city},
        ${this.address.landmark}, ${this.address.district},
        ${this.address.pincode}`;
  },
};
const person2 = {
  name: "gokul",
  age: 20,
  address: {
    doorNumber: 35,
    streetName: "goku Street",
    city: "mettur",
    landmark: "water task oppsite",
    district: "chennai",
    pincode: 636153,
  },
  getBirthyear: function () {
    return new Date().getFullYear() - this.age;
  },
  getAddress: function () {
    return `${this.address.doorNumber},${this.address.city},
        ${this.address.landmark}, ${this.address.district},
        ${this.address.pincode}`;
  },
};
let person = { ...person1, ...person2 };
console.log(person);

//loop
function merge(a, b) {
  let c = {};
  for (let idx in a) {
    c[idx] = a[idx];
  }
  for (let idx in b) {
    c[idx] = b[idx];
  }
  return c;
}

let c = merge(person1, person2);
console.log(c);
