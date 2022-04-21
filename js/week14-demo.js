// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false
//part 1 -playing with json

const employees =[
{
  name:"Sam",
  department: "Tech",
  designation: "Manger",
  salary: 40000,
  raiseEligable: true,
},
{
  name:"Mary",
  department: "Finance",
  designation: "Trainee",
  salary: 18500,
  raiseEligable: true,
},
{
  name:"Bill",
  department: "HR",
  designation: "Executive",
  salary: 21200,
  raiseEligable: false,
},

];

console.log('Problem 1',employees);

//problem 2
// Create JSON for the company with the following details (companyName, website, employees)
//Tech Stars, www.techstars.site, array of Employees

const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees:employees,  // is it pushing the const or the var in the company ???
};
console.log('Problem2',company);


//problem 3
// A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
//Anna, Tech, Executive, 25600, false
function addEmployee(employeeName, dept,desig, sal,raiseEligable)
{
  const newEmployee = {
    name:employeeName,
    department: dept,
    designation: desig,
    salary: sal,
    raiseEligable: raiseEligable,
  };
  employees.push(newEmployee);
}
addEmployee ('Anna','Tech','Executive',25600,false);
console.log('Problem 3', company);

//problem 4
//Given the JSON for the company, calculate the total salary for all company employees.

let totalSalary= employees[0].salary + employees[1].salary + employees[2].salary + employees[3].salary;
console.log('Problem 4', totalSalary);

let totalSalaryBetter = 0;
for(let i = 0; i < employees.length; i++)
{
  totalSalary += employees[i].salary;

}
console.log('Problem 4 Better', totalSalaryBetter);


// problem 5
//It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees,
//write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.

function doRaises()
{
for(let i = 0; i < employees.length; i++)
{
  totalSalary += employees[i].salary;
  if(employees[i].raiseEligable)
  {
    employees[i].salary *= 1.1;
    employees[i].raiseEligable = false;
  }
}
}
doRaises();
console.log('Problem 5', employees);


// problem 6

/*
Some employees have decided to work from home. The following array indicates who is working from home.
Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false

  set a new property WFH on each employee
  and set ppl form the array to wfh true
Working from home: ['Anna', 'Sam']
*/

const workFromHomePpl = ['Anna', 'Sam'];
function setWFH()
{
for(let i = 0; i < employees.length; i++)
  {
    // set a new wfh property
    employees[i].wfh = workFromHomePpl.includes(employees[i].name);

    // use array to set hem correctly
      //  console.log (workFromHomePpl.includes(employees[i].name));
  //  console.log (employees[i].name, workFromHomePpl.includes(employees[i].name));

  }
}
setWFH();
console.log('Problem 6',employees);
