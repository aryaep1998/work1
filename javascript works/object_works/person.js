var employee={
    eid:1000,
    ename:"tom",
    salary:25000,
    desig:"developer"

}

// console.log(employee.desig);
// employee.exp=2
// console.log(employee);

// console.log("gender" in employee);

if("exp" in employee)
{
    employee.exp+=1;
}
else{
    employee.exp=1;
}
console.log(employee);