const myCar = new Object();
myCar.color = 'Gray';
myCar.make = 'Mazda';
myCar.model = "CX-5";
myCar.Year = '2017';
// General Syntax: object.property= value;

console.log(myCar.make);

// a Second way of defing an object
const mySecondCar = {
  color: 'Blue',
  make: 'Ford',
  model: 'Ranger',
  year: '2020'

}
console.log(mySecondCar.drive);
console.log(myCar['make']);
//////

  let superHeroes = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

console.log(superHeroes['members'][0]['powers'][1]);
//fucntion to add a new superhero


//function
function populateHeader (x) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.TextContext = x['squadName'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  //use ` for cation for a const name
  myPara.TextContext = `HomeTown: ${x['homeTown']} // Formed: ${x['formed']}`;

header.appendChild(myPara);
};

populateHeader(superHeroes);
