var students=[
[1000,"akhil","mearn stack",145,"mca"],
[1000,"anu","mearn stack",165,"bca"],
[1000,"nikhil","django",175,"bca"],
[1000,"vijil","django",165,"mca"],
[1000,"tim","testing",185,"mca"],
[1000,"john","testing",155,"mca"],
]
//print all student name
// for(let student of students)
// {
     //console.log(student[1]);  
// }


for(let student of students)
{
    if(student[2]=="mearn stack")
    {
    //console.log(student);
    }
}


// print names of django batch students whose total>168

for(let student of students)
{
    if(student[2]=="django" && student[3]>168)
    {
    //console.log(student[1]);
    }
}


//print highest Total

// var max_total=0;
// for(let student of students){

//     if(student[3]>max_total)
//     {
//         max_total=student[3]

//     }
// }console.log(max_total);



// var max_total=students.reduce((st1,st2)=>st1[3]>st2[3]?st1:st2)