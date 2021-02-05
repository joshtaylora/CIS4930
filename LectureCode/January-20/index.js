var btnSubmit = document.getElementById('btnSubmit');
var textUserName = document.getElementById('textUserName');
var dateDOB = document.getElementById('dateDOB');
var responsePoint = document.getElementById('responsePoint');
btnSubmit.addEventListener('click', function (event) {
    // var enteredDate = new Date(dateDOB.value);
    // var currentDate: Date = new Date();
    // var template = getTemplateClone('responseTemplate');
    // let age = currentDate.getFullYear() - enteredDate.getFullYear();
    // let result = padLeft(age.toString(), 0);
    // if (typeof(result) == "string")
    // {
    //     template.content.getElementById('ageCol')!.innerText = result;
    // }
    // template.content.getElementById('nameCol')!.innerText = textUserName.value;
    // template.content.getElementById('ageOfCurrentUser')!.innerText = age.toString();
    // responsePoint?.appendChild(template.content);
    var circle1 = new Circle(6);
    console.log(circle1);
});
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById('responseTemplate')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
function padLeft(value, char) {
    return char + value;
}
function getStudentByID(studentNum) {
    // Intersection Type -> Useful when you need to get multiple things from the internet
    var s = { id: 6, name: 'Larry' };
    var r = { resultNumber: 201, message: 'All Good' };
    var combined = {
        id: 6, name: 'Larry',
        resultNumber: 201, message: 'All Good'
    };
    return combined;
}
/**
 * Object Oriented TypeScript
 * Encapsulation
 * Inheritance
 * Polymorphism
 *
 */
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.pi = 3.14159;
        this.radius = radius;
    }
    return Circle;
}());
