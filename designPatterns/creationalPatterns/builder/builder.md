# Builder Pattern

## What is the Builder Pattern?
Builder Pattern is a creational design pattern that lets you construct complex objects step by step, allowing different representations of the object using the same construction process.

It separates the construction logic from the object representation, making the code easier to manage, test, and extend.

## When to Use It
Use Builder when:
- Object creation is complex, or involves many optional or mandatory fields.
- You want different representations of the same object.
- You want to avoid telescoping constructors (constructors with many parameters).

## Benefits
- Improves code readability and maintainability.
- Allows different representations of an object.
- Reduces bugs from constructor misuse.
- Great for immutable objects.

### Simple Builder Pattern
For implementation of a simple builder, refer to [Simple Builder Pattern](simpleBuilder.ts).

### Enhanced Builder Pattern
The enhanced version of the Builder Design Pattern includes a Director. The Director is responsible for defining the construction steps in a specific order.
Refer to: [Enhanced Builder](enhancedBuilder.ts).

### Enhanced Builder Pattern Class Diagram

```
                        ┌─────────────────────────┐
                        │       Apartment         │
                        │─────────────────────────│
                        │ - walls: string         │
                        │ - roof: string          │
                        │ - garden: string        │
                        │─────────────────────────│
                        │ + setWalls(walls: stri- │
                        │   ng): void             │
                        │ + setRoof(roof: string):│
                        │   void                  │
                        │ + setGarden(garden: str-│
                        │   ing): void            │
                        │ + describe(): void      │
                        └─────────────────────────┘
                                     △
                                     │
                                     │
                        ┌────────────┴────────────┐
                        │                         │
    ┌─────────────────────────┐     ┌─────────────────────────┐
    │ <<interface>>           │     │ ConcreteApartmentBuilder│
    │ ApartmentBuilder        │     │─────────────────────────│
    │─────────────────────────│     │ - apartment: Apartment  │
    │ + buildWalls(): this    │     │─────────────────────────│
    │ + buildRoof(): this     │     │ + buildWalls(): this    │
    │ + buildGarden(): this   │     │ + buildRoof(): this     │
    │ + build(): Apartment    │     │ + buildGarden(): this   │
    └─────────────────────────┘     │ + build(): Apartment    │
                                    └─────────────────────────┘
                                                 △
                                                 │
                                                 │
                                    ┌────────────┴────────────┐
                                    │                         │
                        ┌─────────────────────────┐
                        │        Director         │
                        │─────────────────────────│
                        │ - builder: ApartmentBui│
                        │   lder                  │
                        │─────────────────────────│
                        │ + setBuilder(builder: Ap│
                        │   artmentBuilder): void │
                        │ + constructMinimalApartm│
                        │   ent(): Apartment      │
                        │ + constructLuxuryApartme│
                        │   nt(): Apartment       │
                        └─────────────────────────┘
```

### Explanation
- **Apartment**: Represents the product being built.
- **ApartmentBuilder Interface**: Declares the steps for building an apartment.
- **ConcreteApartmentBuilder**: Implements the builder interface to construct apartments.
- **Director**: Manages the building process and defines construction sequences (e.g., minimal or luxury apartments).

