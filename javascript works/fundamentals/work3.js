
var num1=34,num2=67,num3=87;
if((num1>num2)&&(num1>num3))
{
    
    if(num2>num3)
       {
        console.log(`decending order ${num1} ${num2} ${num3}`);
       }
    
    
    
   else{
    console.log(`decending order ${num1} ${num3} ${num2}`);
}
       }
   
    
else if((num2>num1)&&(num2>num3))
{

if(num1>num3)
{
    console.log(`decending order ${num2} ${num1} ${num3}`);
}  


else{
    console.log(`decending order ${num1} ${num3} ${num2}`);
       }
}
else if((num3>num1)&&(num3>num2)){

if(num1>num2)
{
    console.log(`decending order ${num3} ${num1} ${num2}`);
}


else{
    console.log(`decending order ${num3} ${num2} ${num1}`);
       }

}
else{
    console.log(`equal`);
}
