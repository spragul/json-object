/*
Write a function that takes a JSON object and a path (string representing the path 
to a property in the object, e.g., "person.address.city") and returns the value 
at that path in the object. Handle cases where the path is invalid.
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
function getData(obj, path) {
  const pathArr = path.split(".");

  if (!obj) return undefined;

  if (pathArr.length === 1) return obj[pathArr[0]];

  return getData(obj[pathArr[0]], pathArr.slice(1).join("."));
}
console.log(getData(person, "address.city"));
console.log(getData(person, "name"));
console.log(getData(person, "address.pincode"));
console.log(getData(person, "address"));
