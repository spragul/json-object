/*
Create a JSON object representing a person with properties
 like name, age, and address. Add methods to the object to
  calculate the person's birth year and full address.
*/

const person = {
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
console.log(person.getBirthyear());
console.log(person.getAddress());
