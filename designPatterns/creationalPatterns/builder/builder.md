##What is the Builder Pattern?
    Builder Pattern is a creational design pattern that lets you construct complex objects step by step,
    allowing different representations of the object using the same construction process.

    It separates the construction logic from the object representation, making the code easier to manage, test, and extend.

##When to use it:
Use Builder when:
    - Object creation is complex, or involves many optional or mandatory fields.
    - You want different representations of the same object.
    - You want to avoid telescoping constructors (constructors with many parameters).

##Benefits
    - Improves code readability and maintainability
    - Allows different representations of an object
    - Reduces bugs from constructor misuse
    - Great for immutable objects

###For implementation of simple builder refert [Simple Builder Pattern](simpleBuilder.ts)

The enhanced version of the Builder Design Pattern including a Director, 
The director is responsible for defining the construction steps in a specific order.
Refer: [Enhanced Builder](enhancedBuilder.ts)

###What does Director do:
    - It defines the building sequence.
    - Client doesn't need to worry about how to build.
    - You can have multiple sequences. like minimial or luxary refer [Director in enhanced implimentation. ](enhancedBuilder.ts)
   
   