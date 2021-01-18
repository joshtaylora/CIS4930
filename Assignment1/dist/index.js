"use strict";
var btnSubmit = document.getElementById('btnSubmit');
var textUserName = document.getElementById('textUserName');
var dateDOB = document.getElementById('dateDOB');
var template = getTemplateClone('responseTemplate');
var responsePoint = document.getElementById('responsePoint');
btnSubmit.addEventListener('click', function (event) {
    var enteredDate = new Date(dateDOB.value);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - enteredDate.getFullYear();
    template.content.getElementById('ageOfCurrentUser').innerText = age.toString();
    responsePoint === null || responsePoint === void 0 ? void 0 : responsePoint.appendChild(template.content);
});
function getTemplateClone(templateID) {
    var _a;
    return (_a = document.getElementById('responseTemplate')) === null || _a === void 0 ? void 0 : _a.cloneNode(true);
}
