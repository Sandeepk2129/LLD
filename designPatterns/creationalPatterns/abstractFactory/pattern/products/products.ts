export interface Chair {
  type(): string; // No 'function' keyword requried in TypeScript interfaces
}

export interface Sofa {
  type(): string;
}

export interface CoffeeTable {
  type(): string;
}

export class ModernChair implements Chair {
  type(): string { // Correct usage without 'function' keyword
    return "Modern Chair";
  }
}

export class VictorianChair implements Chair {
  type(): string {
    return "Victorian Chair";
  }
}

export class ModernSofa implements Sofa {
  type(): string {
    return "Modern Sofa";
  }
}

export class VictorianSofa implements Sofa {
  type(): string {
    return "Victorian Sofa";
  }
}

export class ModernCoffeeTable implements CoffeeTable {
  type(): string {
    return "Modern Coffee Table";
  }
}

export class VictorianCoffeeTable implements CoffeeTable {
  type(): string {
    return "Victorian Coffee Table";
  }
}
