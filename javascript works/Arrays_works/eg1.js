// var expenses=[20000,25000,30000,35000,35000]

// for(amount of expenses)
// {
    
   
// } console.log(amount);



// var expenses=[20000,25000,30000,35000,35000]
// sum=0;
// for(amount of expenses)
// {
//     sum=sum+amount;
   
// } console.log(sum);



// var expenses=[20000,25000,30000,35000,35000]

// for(amount of expenses)
// {
// if(amount>25000)
// {
//     console.log(amount);
// }
   
// } 



// var expenses=[20000,25000,30000,35000,35000]
// var maxm=0;
// for(amount of expenses)
// {
//   if(amount>maxm){
//       maxm=amount;
    
//   }  
  
// }console.log(maxm); 



//  var expenses=[20000,25000,30000,35000,35000]
// var st=new Set();
//  var minm=expenses[0];
//  for(amount of expenses)
//  {
//     st.add(amount);
//   if(amount<minm){
//       minm=amount;
    
//   }   
  
// }
// console.log(st);
// console.log(minm);
// expenses.push(70000);

// var array=[90,10,20,60,40,40]
// var et=new Set();
// array.push(80);
// for(amount of array){
//     et.add(amount);
// }
// console.log(et);


var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],]


    //print the employees names in the order of their salary
   var emp= employees.sort((e1,e2)=>e1[2]-e2[2]).map(empy=>empy[1])
    //console.log(emp)

//print the person name with highest salary
var emp=employees.reduce((e1,e2)=>e1[2]>e2[2]?e1:e2)[1]
//console.log(emp);


// print the name of persons worked as developer
var emp=employees.filter(e1=>e1[3]=="developer").map(e1=>e1[1])
//console.log(emp);


//print the persons have same job "ba"

var emp=employees.filter(e1=>e1[3]=="ba").map(e1=>e1[1])

//console.log(emp);



for(employee of employees)
{
    //console.log(employees.length);
    break;
}



















// print all the employee names
// for(employee of employees)
{
    //console.log(employee[1]);
}


// print the highest salary
// var high_salary=0;
// for (let employee of employees)
// {
//     if(employee[2]>high_salary)
//     {
//         high_salary=employee[2];
//     }
// }
//console.log(high_salary);


// print the second highest salary


// employees.sort((e1,e2)=>e2[2]-e1[2])
// console.log(employees[1][2]);


// print the developer details


// for(employee of employees)
// {
//     if(employee[3]=="developer")
//     {
//         console.log(employee);
//     }
// }



