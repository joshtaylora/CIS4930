"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(shapeType) {
        this.type = shapeType;
    }
    return Shape;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this, 'Square') || this;
        _this.length = length;
        return _this;
    }
    return Square;
}(Shape));
var sqr = new Shape('Square');
var Animal = /** @class */ (function () {
    function Animal(animalType) {
        this.type = animalType;
    }
    Animal.prototype.Speak = function () {
        console.log('GENERIC NOISE');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(legs) {
        var _this = _super.call(this, 'Dog') || this;
        _this.legs = legs;
        return _this;
    }
    Dog.prototype.Speak = function () {
        console.log('BARK BARK');
    };
    return Dog;
}(Animal));
var scout = new Dog(4);
scout.Speak(); // causes BARK BARK to print
var genericAnimal = scout;
genericAnimal.Speak(); // causes BARK BARK to print because instance of scout is still a Dog
