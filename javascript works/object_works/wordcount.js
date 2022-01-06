// var student={
//     name:"ahaan",
//     age:25,
//     course:"ms"
// }
// console.log(student.course);
// console.log("gender" in student);
// student["gender"]="male"
// student.total=150;
// console.log(student);

// //if total>145 add grade Aplus else A

// if(student.total>145){
//     student.grade="Aplus"
// }
// else{
//     student.grade="A"
// }
// console.log(student);











var text="hello hai hello hai"
var words=text.split(" ")
console.log(words);

var wc={}
var words=text.split(" ")
for(let  word of words)
{
    if(word in wc)
    {
        wc[word]+=1
    }
    else
    {
    wc[word]=1
    }
}
console.log(wc);



// var text="hello hai hello hai"
// var wc={}
// text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
// console.log(wc);