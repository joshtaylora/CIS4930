

var btnSubmit = document.getElementById('btnSubmit') as HTMLButtonElement;

var textUserName = document.getElementById('textUserName') as HTMLInputElement;

var dateDOB = document.getElementById('dateDOB') as HTMLInputElement;

var template = getTemplateClone('responseTemplate');

var responsePoint = document.getElementById('responsePoint');

btnSubmit.addEventListener('click', 
(event) => 
{
	var enteredDate = new Date(dateDOB.value);
	var currentDate: Date = new Date();

	let age = currentDate.getFullYear() - enteredDate.getFullYear();

	template.content.getElementById('ageOfCurrentUser')!.innerText = age.toString();

	responsePoint?.appendChild(template.content);
})

function getTemplateClone(templateID: string): HTMLTemplateElement
{
	return document.getElementById('responseTemplate')?.cloneNode(true) as HTMLTemplateElement;
}