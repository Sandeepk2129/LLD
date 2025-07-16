# Abstract Pattern
The Abstract Factory Design Pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
## Purpose
It helps you decouple client code from the actual creation of objects — especially useful when the system needs to be independent of how its objects are created, composed, and represented.

## Abstract Factory vs Factory Method
| Feature                        | **Factory Method**                                                                    | **Abstract Factory**                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Purpose**                    | Creates **one product**                                                               | Creates **families of related products**                                       |
| **Inheritance vs Composition** | Typically uses **inheritance** to override the creation method                        | Typically uses **composition** to create multiple products                     |
| **Level of Abstraction**       | Single factory method to create a product                                             | A factory interface with multiple methods to create **related objects**        |
| **Extensibility**              | Easier to add new products                                                            | Easier to add new product families                                             |
| **Example Use Case**           | You need to create a **document** object, but the exact type (PDF, Word, etc.) varies | You need to create a **UI kit** with buttons and checkboxes that work together |
| **Client Awareness**           | Client may subclass to override creation                                              | Client gets factory instance to produce whole product family                   |


## Structure
```
                    +--------------------+
                    | AbstractFactory    |
                    |--------------------|
                    | createProductA()   |
                    | createProductB()   |
                    +--------------------+
                             ^
                             |
                    implements/extends
                             |
        +--------------------+--------------------+
        |                                         |
+--------------------+              +---------------------+
| ConcreteFactory1   |              | ConcreteFactory2    |
|--------------------|              |---------------------|
| createProductA()   |              | createProductA()    |
| createProductB()   |              | createProductB()    |
+--------------------+              +---------------------+
        |                                         |
        |                                         |
        v                                         v
   creates                                   creates
        |                                         |
        +----------+                    +---------+
        |          |                    |         |
        v          v                    v         v
+-------------+ +-------------+  +-------------+ +-------------+
| ProductA1   | | ProductB1   |  | ProductA2   | | ProductB2   |
+-------------+ +-------------+  +-------------+ +-------------+
```

## Implementation Class Diagram

```
                        ┌─────────────────────────┐
                        │   <<interface>>         │
                        │   FurnitureFactory      │
                        │─────────────────────────│
                        │ + createChair(): Chair  │
                        │ + createSofa(): Sofa    │
                        │ + createCoffeeTable():  │
                        │   CoffeeTable           │
                        └─────────────────────────┘
                                     △
                                     │ implements
                        ┌────────────┴────────────┐
                        │                         │
    ┌─────────────────────────┐     ┌─────────────────────────┐
    │  ModernFurnitureFactory │     │ VictorianFurnitureFactory│
    │─────────────────────────│     │─────────────────────────│
    │ + createChair(): Chair  │     │ + createChair(): Chair  │
    │ + createSofa(): Sofa    │     │ + createSofa(): Sofa    │
    │ + createCoffeeTable():  │     │ + createCoffeeTable():  │
    │   CoffeeTable           │     │   CoffeeTable           │
    └─────────────────────────┘     └─────────────────────────┘
                │                                   │
                │ creates                           │ creates
                │                                   │
    ┌───────────┼───────────┐           ┌───────────┼───────────┐
    │           │           │           │           │           │
    ▼           ▼           ▼           ▼           ▼           ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ModernCh-│ │ModernS- │ │ModernC- │ │Victorian│ │Victorian│ │Victorian│
│air      │ │ofa      │ │offeeT-  │ │Chair    │ │Sofa     │ │CoffeeT- │
│         │ │         │ │able     │ │         │ │         │ │able     │
└─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
     △           △           △           △           △           △
     │           │           │           │           │           │
     │ implements│ implements│ implements│ implements│ implements│ implements
     │           │           │           │           │           │
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│<<interf-│ │<<interf-│ │<<interf-│ │<<interf-│ │<<interf-│ │<<interf-│
│ace>>    │ │ace>>    │ │ace>>    │ │ace>>    │ │ace>>    │ │ace>>    │
│Chair    │ │Sofa     │ │CoffeeTa-│ │Chair    │ │Sofa     │ │CoffeeTa-│
│─────────│ │─────────│ │ble      │ │─────────│ │─────────│ │ble      │
│+type(): │ │+type(): │ │─────────│ │+type(): │ │+type(): │ │─────────│
│string   │ │string   │ │+type(): │ │string   │ │string   │ │+type(): │
└─────────┘ └─────────┘ │string   │ └─────────┘ └─────────┘ │string   │
                        └─────────┘                         └─────────┘

                        ┌─────────────────────────┐
                        │        Client           │
                        │─────────────────────────│
                        │ - factory: FurnitureF-  │
                        │   actory                │
                        │─────────────────────────│
                        │ + main(): void          │
                        │ + createProducts():void │
                        └─────────────────────────┘
                                     │
                                     │ uses
                                     ▼
                        ┌─────────────────────────┐
                        │   FurnitureFactory      │
                        └─────────────────────────┘
```

## Key Components

### Abstract Factory Interface
- **FurnitureFactory**: Declares methods for creating each type of furniture product

### Concrete Factories
- **ModernFurnitureFactory**: Creates modern-style furniture products
- **VictorianFurnitureFactory**: Creates Victorian-style furniture products

### Product Interfaces
- **Chair**: Interface for all chair types
- **Sofa**: Interface for all sofa types  
- **CoffeeTable**: Interface for all coffee table types

### Concrete Products
- **Modern Family**: ModernChair, ModernSofa, ModernCoffeeTable
- **Victorian Family**: VictorianChair, VictorianSofa, VictorianCoffeeTable

### Client
- Uses the factory interface to create products without knowing concrete implementations

## Example

