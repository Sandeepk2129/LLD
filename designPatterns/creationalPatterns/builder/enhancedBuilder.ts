// Product or Class to be built
class Apartment {
  private walls: string;
  private roof: string;
  private garden: string;

  constructor() {}

  setWalls(walls: string): void {
    this.walls = walls;
  }
  setRoof(roof: string): void {
    this.roof = roof;
  }
  setGarden(garden: string): void {
    this.garden = garden;
  }

  describe(): void {
    const aprtment = [this.walls && `Walls: ${this.walls}`, this.roof && `Roof: ${this.roof}`, this.garden && `Garden: ${this.garden}`].filter(Boolean).join(", ");

    console.log(`Apartment with ${aprtment}`);
  }
}

// Builder interface: There can be multiple builders for different type of Apartments
interface ApartmentBuilder {
  buildWalls(): this;
  buildRoof(): this;
  buildGarden(): this;
  build(): Apartment;
}

class ConcreteHouseBuilder implements ApartmentBuilder {
  private apartment: Apartment = new Apartment();

  buildWalls(): this {
    this.apartment.setWalls("Concrete Walls");
    return this;
  }
  buildRoof(): this {
    this.apartment.setRoof("Concrete Roof");
    return this;
  }
  buildGarden(): this {
    this.apartment.setGarden("Concrete Garden: In Balcony");
    return this;
  }
  build(): Apartment {
    return this.apartment;
  }
}

// Director class to manage the building process
class Director {
  private builder: ApartmentBuilder;

  setBuilder(builder: ApartmentBuilder): void {
    this.builder = builder;
  }

  constructMinimalApartment(): Apartment {
    return this.builder.buildWalls().buildRoof().build();
  }

  constructLuxuryApartment(): Apartment {
    return this.builder.buildWalls().buildRoof().buildGarden().build();
  }
}

function main() {
  const director = new Director();
  const concreteBuilder = new ConcreteHouseBuilder();

  director.setBuilder(concreteBuilder);

  console.log("Constructing Minimal Apartment:");
  const minimalApartment = director.constructMinimalApartment();
  minimalApartment.describe();

  console.log("\nConstructing Luxury Apartment:");
  const luxuryApartment = director.constructLuxuryApartment();
  luxuryApartment.describe();
}

main();
