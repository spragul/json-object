//Write a function to deep clone a JSON object, i.e.,
// create a new JSON object with the same structure and values as
// the original object, but not referencing the same memory.


/* A cloned object is a copy of the original object which resides in seperate memory.
 Cloned objects are independent of the original object. */


const cloneobject = (obj) => {
  let clone = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      clone[key] = cloneobject(obj[key]);
    }else{
        clone[key]=obj[key]
    }
  }
  return clone;
};

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
  getBirthyear: function() {
    return new Date().getFullYear() - this.age;
  },
  getAddress: function() {
    return `${this.address.doorNumber},${this.address.city},
        ${this.address.landmark}, ${this.address.district},
        ${this.address.pincode}`;
  },
};
const cloneobj = cloneobject(person);
console.log("Original Object");
console.log(person);
console.log("Clone Object age change 20");
cloneobj.age=20;
console.log(cloneobj.getBirthyear());
console.log("Original Object age 25");
console.log(person.getBirthyear());
cloneobj.name="gokul";
cloneobj.address.city="chennai"
console.log("Clone Object");
console.log(cloneobj);