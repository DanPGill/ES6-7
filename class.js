class Dogs {
  constructor(name, breed, owner){
this.name = name;
this.breed = breed;
this.owner = owner;
console.log(`${owner} has a ${breed} called ${name}`);
  }
};
let B = new Dogs("Billy", "Bulldog", "Bertrand");
console.log(B);

