import { Chair, Sofa, CoffeeTable, VictorianChair, VictorianSofa, VictorianCoffeeTable } from "./products";
import { ModernChair, ModernCoffeeTable, ModernSofa } from "./products";

export interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createCoffeeTable(): CoffeeTable;
}

export class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }

  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }
}

export class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  createSofa(): Sofa {
    return new VictorianSofa();
  }
  createCoffeeTable(): CoffeeTable {
    return new VictorianCoffeeTable();
  }
}
