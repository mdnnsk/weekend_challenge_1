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
      'sal' : salary
    };

  //push object into all employees array
  allEmployees.push(employee);

  calcSalary();
  listEmployees();

  //clear input fields
  document.getElementById('firstNameIn').value='';
  document.getElementById('lastNameIn').value='';
  document.getElementById('empIDNumIn').value='';
  document.getElementById('jobTitleIn').value='';
  document.getElementById('salaryIn').value='';

};
//output employees onto DOM
var listEmployees = function () {
  var outputText = '';
  if (allEmployees.length === 0){ outputText = 'No Employees entered';}
    else if (allEmployees.length > 0) {
     for(var i=0; i<allEmployees.length; i++){
       outputText += 'Name: ' + allEmployees[i].fname +' '+ allEmployees[i].lname +'   EID#: ' + allEmployees[i].eidn +'   Job Title: '+ allEmployees[i].jtitle +'   Salary: ' + allEmployees[i].sal+' <button onClick="removeEmp(' + i + ')">' + 'Remove' + "</button>" + '</p>';
  }}
  document.getElementById('outputDiv').innerHTML ='<p>' + outputText + '</p>';
};

//calculate total salary expenses
var calcSalary = function (){
  var totalSalary = 0;
  var monthlySalary = 0;
    for(var i=0; i<allEmployees.length; i++){
    totalSalary += parseInt(allEmployees[i].sal);
    monthlySalary = totalSalary/12;
    }
  // document.getElementById('calculation').innerHTML = 'The current total annual salary expense is: ' + totalSalary;
  document.getElementById('calculation').innerHTML = 'The current total monthly salary expense is: ' + monthlySalary;
};
//Remove employee from Dom, recalculate salary
var removeEmp = function (i){
  allEmployees.splice(i, 1);
  // console.log(allEmployees);
  listEmployees();
  calcSalary();
};
