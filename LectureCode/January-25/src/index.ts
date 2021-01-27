class Shape
{
    type:'Square'|'Triangle'|'Rectangle'
    constructor(shapeType:'Square'|'Triangle'|'Rectangle')
    {
        this.type = shapeType;
    }
}

class Square extends Shape
{
    length:number;
    constructor(length:number)
    {
        super('Square');
        this.length = length;
    }
}

let sqr = new Shape('Square');


class Animal
{
    type:'Dog'|'Cat'|'Mouse';
    constructor(animalType:'Dog'|'Cat'|'Mouse')
    {
        this.type = animalType;
    }
    Speak()
    {
        console.log('GENERIC NOISE');
    }
}

class Dog extends Animal
{
    legs:number;
    constructor(legs:number)
    {
        super('Dog');
        this.legs = legs;
    }
    Speak()
    {
        console.log('BARK BARK');
    }
}

let scout = new Dog(4);
scout.Speak(); // causes BARK BARK to print
let genericAnimal = scout as Animal;
genericAnimal.Speak(); // causes BARK BARK to print because instance of scout is still a Dog