// Product or Class to be built
class House {
    private walls?: string;
    private roof?: string;
    private garden?: string;

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

    describe(){
        console.log(`House with ${this.walls}, ${this.roof}, ${this.garden}`);
    }

}

// Builder 
class HouseBuilder {
    private house: House = new House();

    buildWalls(walls: string): this {
        this.house.setWalls(walls);
        return this;
    }
    buildRoof(roof: string): this {
        this.house.setRoof(roof);
        return this;
    }
    buildGarden(garden: string): this {
        this.house.setGarden(garden);
        return this;
    }
    build(): House {
        return this.house;
    }
}

// Usage by Client
const houseBuilder = new HouseBuilder()
.buildWalls('brick walls')
.buildRoof('tile roof')
.buildGarden('beautiful garden')
.build();

 houseBuilder.describe();