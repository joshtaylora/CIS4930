console.log('Hello World');

var btnSubmit = document.getElementById('btnSubmit') as HTMLButtonElement;
var txtUserName = document.getElementById('txtUserName') as HTMLInputElement;
var dtDob = document.getElementById('dtDOB') as HTMLInputElement;


var insertionPoint = document.getElementById('responsePoint');

btnSubmit.addEventListener('click', (event)=> {
   
    console.log('Name' + txtUserName.value);
    console.log('Date' + dtDob.value);

   /* var currentDate = new Date()
    var enteredDate = new Date(dtDob.value);
    
    var template = getTemplateClone('responseTemplate');
    let age = currentDate.getFullYear() - enteredDate.getFullYear();
    let result= padLeft(age.toString(),'0');
    if(typeof(result)==='string'){
        template.content.getElementById('ageCol')!.innerText = result;
    }
    template.content.getElementById('nameCol')!.innerText =txtUserName.value;
    insertionPoint?.appendChild(template.content);
    let x = getStudentByID(6);*/
    let c = new Circle(6);
    
    console.log(c);
    console.log(c.getCircumference());
    console.log(c.getSpecialCircumference()+true);

    let myShape = new Shape('circle');
});


function getTemplateClone(tempalteID:string): HTMLTemplateElement
{
    return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}

function padLeft(value:string, char:number|string):string|undefined
{
    return char + value;
}


function getStudentByID(studentNum:number):StudentData&RequestResult
{
    /*let s:StudentData= {id:6,name:'Larry'};
    let r: RequestResult ={resultNumber:201, message:'All Good'};*/
    let combined : StudentData&RequestResult = {id:6,name:'Larry',resultNumber:201, message:'All Good'}
    return combined;
}


interface StudentData
{
    id:number;
    name:string;
}

interface RequestResult
{
    resultNumber:number;
    message: string;
}



class Shape {
    name:'square'|'triangle'|'circle';

    constructor(shapeName:'square'|'triangle'|'circle')
    {
        this.name=shapeName;
    }
}

class Circle {
    
    radius: number=0;
    private pi: number=3.145;
    constructor(inRadius:number){
         this.radius = inRadius;
    }

    getCircumference(): number
    {
         return 2*this.pi*this.radius;
    }

    getSpecialCircumference()
    {
        this.pi=900;
        let result = this.getCircumference();
        this.pi=3.145;
     
        return result;
    }
}