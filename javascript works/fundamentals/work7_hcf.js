var num1=8,num2=24;
let factor=0;
var limt=0;
if(num1>num2){
limit=num2;
}
else{
limit=num1;
}
let count=1;


for(let i=1;i<=limit;i++)
{
if((num1%i==0)&&(num2%i==0)){
    factor=i;
    console.log(factor);
}
count++;
}
console.log("hcf", factor);