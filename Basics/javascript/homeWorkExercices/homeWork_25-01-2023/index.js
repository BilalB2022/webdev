// 1. Create an array of objects with the following properties and values (10 objects)

// Note: 3 of objects email should be @gmail.com and 3 of objects email @yandex.com and 4 of objects email should be @hotmail.com
// Note: 3 of objects city should be Brussel and 3 of objects city should be Istanbul and 4 of objects city should be Ghent

/*
 name: string
 age: number
 email: string
 city: string
 phone: string
*/
let persons = [
  {
    name: "Chloe",
    age: 24,
    email: "chloe@gmail.com",
    city: "Gent",
    phone: "+4859931789",
  },
  {
    name: "Peter",
    age: 32,
    email: "peter@hotmail.com",
    city: "Brussel",
    phone: "+97165331",
  },
  {
    name: "Theo",
    age: 19,
    email: "theo@yandex.com",
    city: "Istanbul",
    phone: "+8674156213",
  },
  {
    name: "Maximilian",
    age: 28,
    email: "max@hotmail.com",
    city: "Istanbul",
    phone: "+47899939412",
  },
  {
    name: "Karim",
    age: 38,
    email: "karim@gmail.com",
    city: "Istanbul",
    phone: "+74125861",
  },
  {
    name: "Kyle",
    age: 14,
    email: "kyle@hotmail.com",
    city: "Gent",
    phone: "+87985436",
  },
  {
    name: "Guillaume",
    age: 30,
    email: "Guillaume@yandex.com",
    city: "Brussel",
    phone: "+335993110289",
  },
  {
    name: "Ndiaye",
    age: 41,
    email: "ndiaye@gmail.com",
    city: "Gent",
    phone: "+8759931789",
  },
  {
    name: "Dante",
    age: 33,
    email: "dante@hotmail.com",
    city: "Brussel",
    phone: "+998451225",
  },
  {
    name: "Hua Xiong",
    age: 56,
    email: "huxi@yandex.com",
    city: "Gent",
    phone: "+787959931789",
  },
];
// 2. Create a function that can find the persons less than 30 years old.

// const findByAge = persons.map((person) => {
//     person.age < 30 ? console.log(person.name): null
// })

// 3. Create a function that can find the persons who live in the same city.
let gent = [];
let brussel = [];
let Istanbul = [];

const findByCity = persons.map((person) => {
  if (person.city === "Gent") {
    gent.push(person)
}
if (person.city === "Brussel") {
    brussel.push(person)
}
if (person.city === "Istanbul") {
    Istanbul.push(person)
}
});
// console.log(gent);
// console.log(brussel);
// console.log(Istanbul);

// 4. Create a function that can find the persons who have gmail email.

const findEmail = persons.map((person) => {
  person.email.endsWith('gmail.com') ? console.log(person) : null;
})