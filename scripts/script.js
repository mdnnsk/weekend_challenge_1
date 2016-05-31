//declare array for all employees
var allEmployees = [];

//declare and import variables from the input fields
var addEmployee = function (){

  var firstName = document.getElementById('firstNameIn').value;
  var lastName = document.getElementById('lastNameIn').value;
  var empID = document.getElementById('empIDNumIn').value;
  var title = document.getElementById('jobTitleIn').value;
  var salary = document.getElementById('salaryIn').value;

//create object using declared values
var employee = {
  'fname' : firstName,
  'lname' : lastName,
  'eidn' : empID,
  'jtitle' : title,
  'salary' : salary
};

// console.log(employee);
//push object into all employees array
allEmployees.push(employee);

// console.log(allEmployees);

//clear input fields

calcSalary();
listEmployees();
};
//output employees onto DOM
var listEmployees = function () {
var outputText = '';
for(var i=0; i<allEmployees.length; i++){

outputText += '<p> Name: ' + allEmployees[i].fname +' '+ allEmployees[i].lname +'   EID#: ' + allEmployees[i].eidn +'   Job Title: '+ allEmployees[i].jtitle +'   Salary: ' + allEmployees[i].salary+'</p>';
document.getElementById('outputDiv').innerHTML = outputText;

//clear input fields
document.getElementById('firstNameIn').value='';
document.getElementById('lastNameIn').value='';
document.getElementById('empIDNumIn').value='';
document.getElementById('jobTitleIn').value='';
document.getElementById('salaryIn').value='';
}
};
//calculate total salary expenses
var calcSalary = function (){
  var totalSalary = 0;
for(var i=0; i<allEmployees.length; i++){
totalSalary += parseInt(allEmployees[i].salary);
//output total salary expenses onto the DOM
document.getElementById('calculation').innerHTML = 'The current total salary expense is: ' + totalSalary;
}
};
