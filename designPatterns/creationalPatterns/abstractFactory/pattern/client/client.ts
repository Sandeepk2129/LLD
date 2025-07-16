import * as factories from "../products/factories";

// from cleint directory run #tsc client.ts && node client.js
// or run #ts-node client.ts

function main() {
  console.log("Modern Furniture Factory:");
  console.log("-------------------------");
  const modernFactory = new factories.ModernFurnitureFactory();
  cerateProducts(modernFactory);


  console.log("\nVictorian Furniture Factory:");
  console.log("----------------------------");
  const victorianFactory = new factories.VictorianFurnitureFactory();
  cerateProducts(victorianFactory);
}

function cerateProducts(factory: factories.FurnitureFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  const coffeeTable = factory.createCoffeeTable();

  console.log(chair.type());
  console.log(sofa.type());
  console.log(coffeeTable.type());
}

// Call the main function to execute the program
main();
