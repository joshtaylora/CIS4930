
// the name text input field
var txtUserName = document.getElementById('txtUserName') as HTMLInputElement;
var txtComments = document.getElementById('txtComments') as HTMLInputElement;

var btnStar1 = document.getElementById('star1btn') as HTMLInputElement;
var btnStar2 = document.getElementById('star2btn') as HTMLInputElement;
var btnStar3 = document.getElementById('star3btn') as HTMLInputElement;
var btnStar4 = document.getElementById('star4btn') as HTMLInputElement;
var btnStar5 = document.getElementById('star5btn') as HTMLInputElement;

var checkedStars:number = 0;

btnStar1.addEventListener('click',
(event) =>
{
	checkedStars = 1;
});

btnStar2.addEventListener('click',
(event) =>
{
	checkedStars = 2;
});

btnStar3.addEventListener('click',
(event) =>
{
	checkedStars = 3;
});

btnStar4.addEventListener('click',
(event) =>
{
	checkedStars = 4;
});

btnStar5.addEventListener('click',
(event) =>
{
	checkedStars = 5;
});

var btnSubmit = document.getElementById('btnSubmit') as HTMLInputElement;

var responsePoint = document.getElementById('responsePoint');

btnSubmit.addEventListener('click', 
(event) => 
{
	var template = getTemplateClone('responseTemplate');
	var name = txtUserName.value;
	var comment = txtComments.value;

	var currentDate = new Date();
	let  dateD = currentDate.getDay().toString();
	let dateM = currentDate.getMonth().toString();
	let dateY = currentDate.getFullYear().toString();
	var dateString = dateD + '/' + dateM + '/' + dateY;

	template.content.getElementById('responseName')!.innerText = name;
	template.content.getElementById('responseComment')!.innerText = comment;
	template.content.getElementById('responseDate')!.innerText = dateString;

	switch(checkedStars)
	{
		case(1):
			template.content.getElementById('responseStar1')!.style.backgroundColor = 'rgb(255,200,0)';
			break;
		case(2):
			template.content.getElementById('responseStar1')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar2')!.style.backgroundColor = 'rgb(255,200,0)';
			break;
		case(3):
			template.content.getElementById('responseStar1')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar2')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar3')!.style.backgroundColor = 'rgb(255,200,0)';
			break;
		case(4):
			template.content.getElementById('responseStar1')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar2')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar3')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar4')!.style.backgroundColor = 'rgb(255,200,0)';
			break;
		case(5):
			template.content.getElementById('responseStar1')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar2')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar3')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar4')!.style.backgroundColor = 'rgb(255,200,0)';
			template.content.getElementById('responseStar5')!.style.backgroundColor = 'rgb(255,200,0)';
			break;
		default:
			break;
	}

	responsePoint?.appendChild(template.content);
})



function getTemplateClone(templateID: string): HTMLTemplateElement
{
	return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}