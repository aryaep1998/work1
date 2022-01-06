var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//q1 print all employee names

// for(let employee of employees){
//     console.log(employee[1]);
// }


//q2 print developers details


// for(let employee of employees)
// {
//     if(employee[3]=="developer")
//     {
//         console.log(employee);
//     }
// }

//q3 print experience of each employee


// for(let employee of employees)
// {

// console.log(employee[5]-employee[4]);
// }


//q4 print employee details who is having exp > 10


for(let employee of employees)
{
    
    if(employee[5]-employee[4]>10)
    {
        //console.log(employee);
    }
}



//q5 print highest salary

// var high_salary=0;
// for(let employee of employees)
// {
//     if(employee[2]>high_salary)
//     {
//         high_salary=employee[2];
//     }
// }
// console.log(high_salary);





//q6 highest second salary


// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);





// q7 minimum salary

// employees.sort((e1,e2)=>e1[2]-e2[2])
// console.log(employees[0][2]);


// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[employees.length-1][2]);








// q8 number of employees

//console.log(employees.length);




// q9 highest salary among developers


// var high_salary=employees[3];
// for(let employee of employees)
// {
//     if(employee[2]>high_salary)
//     {
//         high_salary=employee[2];
//     }
// }
// console.log(high_salary);


var developers_details=[]
for(let employee of employees)
{
    if(employee[3]=="developer")
    {
    developers_details.push(employee)
}
}
developers_details.sort((d1,d2)=>d2[2]-d1[2])
console.log(developers_details[0][2]);





// q10 print the details of employees whose name starts with A
// 
// for(let employee of employees)
// {
//     if(employee[1][0]=="A"  ||   employee[1][0]=="a")
//     {
//         console.log(employee);
//     }
    
// }







// q11 print  details of employees who are working inthe period of 2010 to 2015

// for(let employee of employees)
// {
//     if(employee[4]>=2010 && employee[5]<=2015)
//     {
//         console.log(employee);
//     }
// }

for(let employee of employees)
{
    if(employee[4]>=2009 && employee[5]<2016)
    {
        //console.log(employee);
    }
}
