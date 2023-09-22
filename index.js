const firstAnimal = {
  id: 1,
  name: "Dodo",
  age: 20,
  weight: 15,
  spieces: "Bird",
  extintionYear: 1662,
};
const secondAnimal = {
  id: 2,
  name: "Quokka",
  age: 5,
  weight: 6,
  spieces: "Mammal",
  extintionYear: null,
};

const getAnimalSpieces = (animal) => animal.spieces;

const isAnimalExtint = (animal) => {
  if (animal.extintionYear === null) {
    return "This animal is not extint.";
  } else {
    return "This animal is extint.";
  }
};

const getAnimalDescription = (animal) => {
  return `The animal ${animal.name} is a ${animal.spieces} o ${animal.age} years old and weights ${animal.weight} kg.`;
};

console.log(getAnimalDescription(secondAnimal));
