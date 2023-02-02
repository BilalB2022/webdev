// regular for loop 

// for(initializing, until where , incement or decrement) {
//     start code block
// }

// Example 
// for(let x = 1 ; x <= 10 ; x++){
//     // code here
//     console.log(x);

// }

// for(let x = 10; x >= 1; x--) {
//     console.log(x);
// }

let product = ['laptop','computer','macos','cofeemachine']

// for(let x = 0; x < product.length; x++){
//     console.log(product[x]);
// }

let students_names = ['mohammed','bilal','arhisa','ahmed','nina']; // highest number of index;

// for(let x=0;x<students_names.length;x++){
//     console.log('sadasdsad',students_names[x],x)
// }

// let company = "microsoft";
// console.log(company[0])
// for(let letter=0;letter<company.length;letter++){
//     console.log(company[letter])
// }

for (let x = 0; x < 100; x++) {
    // console.log(x);
    // if (x === 66) {                                  // 1st mway
    //     break;                                       // second way
    // }
    // x <= 66 ? console.log(x) : null

    // if(x >= 40){
    //     if(x <= 50){
    //         console.log(x);
    //     }
    // }
    
}

let users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]

//   console.log(users.length);

//   for(let i = 0 ; i < users.length; i++) {
//     console.log(users[i].address.geo.lat);
//   }

let users2 = [{
    "id": 1,
    "email": "adanter0@squidoo.com",
    "langs": ['Catalan','Nederlands','French']
  }, {
    "id": 2,
    "email": "tselby1@ycombinator.com",
    "langs": ['Spanish','Nederlands','English']
  }, {
    "id": 3,
    "email": "abonnavant2@pinterest.com",
    "langs": ['Marathi','Arabic','French']
  }, {
    "id": 4,
    "email": "marton3@noaa.gov",
    "langs": ['Berber','Nederlands','French']
  }, {
    "id": 5,
    "email": "eredmire4@nyu.edu",
    "langs": ['Turkish','Nederlands','French']
  }]

// for(let x=0;x<users2.length;x++){
//     // console.log(users[x].langs[x])
//     for(let y=0; y<users2[x].langs.length;y++){
//         console.log(users2[x].langs[y])
//         console.log(`Email is ${users2[x].email} \n and langs is ${users2[x].langs[y]}`);
//     }
//     // users[x].langs.forEach(function(lang){
//     //     console.log(lang)
//     // })
//     users2[x].langs.map(function(lang){
//         console.log(lang)
//     })

// }

let  usernames = ['mohamed','ahmed','bilal','arisha','nina','hande']

// for (let x=0; x < usernames.length; x++){
//     console.log(`#${x+1} ${usernames[x]}`);
// }

// For in loop 

// let student = {
//     name:'john',
//     email:'john@kusv.com'
// }


// for(let val in student){
//     console.log(student[val]);   //value of property
//     console.log(val);   // property > student[property] > property's value
// }


// // first way of extract property value
// console.log(student.email);

// // second way to extract property value 
// console.log(student['email']);

// for(let x=0; x<users.length;x++) {
//     let addresss = users[x].address
//     // console.log(addresss);                                     /// Classic FOR LOOP ///
//     for(val in addresss){
//         console.log(addresss[val]);
//     }
//     console.log('\n');
// }

// for(user in users){
//     let obj = users[user]
//     let myAddress = obj.address                        /// FOR IN LOOP ///
//     for(val in myAddress) {
//         console.log(myAddress[val]);
//     }
//     console.log('\n');
// }


for(let user of usernames){
    console.log(user);
}
for(let user in usernames){
    console.log(user);
}

