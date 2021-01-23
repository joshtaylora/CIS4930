
// the name text input field
var txtUserName = document.getElementById('txtUserName') as HTMLInputElement;
var txtComments = document.getElementById('txtComments') as HTMLInputElement;

var starReview:number = 0; 

// button for 1 star review + event listener for it
var btnStar1 = document.getElementById('star1btn') as HTMLInputElement;
btnStar1.addEventListener('click', (event)=>
{
	starReview = +btnStar1.value;
});

// button for 2 star review + event listener
var btnStar2 = document.getElementById('star2btn') as HTMLInputElement;
btnStar2.addEventListener('click', (event)=>
{
	starReview = +btnStar2.value;
});

// button for 3 star review + event listener
var btnStar3 = document.getElementById('star3btn') as HTMLInputElement;
btnStar3.addEventListener('click', (event)=>
{
	starReview = +btnStar3.value;
});

// button for 4 star review + event listener
var btnStar4 = document.getElementById('star4btn') as HTMLInputElement;
btnStar4.addEventListener('click', (event)=>
{
	starReview = +btnStar4.value;
});

// button for  star review + event listener
var btnStar5 = document.getElementById('star5btn') as HTMLInputElement;
btnStar5.addEventListener('click', (event)=>
{
	starReview = +btnStar5.value;
});


var btnSubmit = document.getElementById('btnSubmit') as HTMLInputElement;

var responsePoint = document.getElementById('responsePoint');


btnSubmit.addEventListener
('click', (event)=> {
	var template = getTemplateClone('responseTemplate');
	var name = txtUserName.value;
	if (name.length < 1)
	{ // inform the customer to please enter a name and resubmit
		alert('Please enter a name for your review and resubmit')
		return;
	}
	var comment = txtComments.value;

	var currentDate = new Date();
	let  dateD = currentDate.getDay().toString();
	let dateM = currentDate.getMonth().toString();
	let dateY = currentDate.getFullYear().toString();
	var dateString = dateD + '/' + dateM + '/' + dateY;

	template.content.getElementById('responseName')!.innerText = name;
	template.content.getElementById('responseComment')!.innerText = comment;
	template.content.getElementById('responseDate')!.innerText = dateString;

	console.log(starReview);

	// check that the review for the product contains a star rating
	if (starReview == 0)
	{
		alert("Please select from one of the 5 star rating options!");
		return;
	}

	switch(starReview)
	{
		case(1):
			template.content.getElementById('responseStars')!.innerText = '★';
			template.content.getElementById('responseStars')!.setAttribute("style", "color:rgb(255, 200, 0); color:rgb(255, 200, 0);");
			break;
		case(2):
			template.content.getElementById('responseStars')!.innerText = '★★';
			template.content.getElementById('responseStars')!.setAttribute("style", "color:rgb(255, 200, 0); color:rgb(255, 200, 0);");
			break;
		case(3):
			template.content.getElementById('responseStars')!.innerText = '★★★'
			template.content.getElementById('responseStars')!.setAttribute("style", "color:rgb(255, 200, 0); color:rgb(255, 200, 0);");
			break;
		case(4):
			template.content.getElementById('responseStars')!.innerText = '★★★★';
			template.content.getElementById('responseStars')!.setAttribute("style", "color:rgb(255, 200, 0); color:rgb(255, 200, 0);");
			break;
		case(5):
			template.content.getElementById('responseStars')!.innerText = '★★★★★';
			template.content.getElementById('responseStars')!.setAttribute("style", "color:rgb(255, 200, 0); color:rgb(255, 200, 0);");
			break;
		default:
			break;
	}


	responsePoint?.appendChild(template.content);
	starReview = 0;
});



function getTemplateClone(templateID: string): HTMLTemplateElement
{
	return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}