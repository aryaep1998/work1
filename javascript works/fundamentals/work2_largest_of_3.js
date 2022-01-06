var num1=34,num2=67,num3=87;
if((num1>num2)&&(num1>num3))
{
    console.log(`num1 is largest`);
    if(num2>num3)
    {
        console.log(`num2 is second largest ${num2}`);
    
    }
    
   else{
        console.log(`num3 is second largest ${num3}`);
    }
   
    }
else if((num2>num1)&&(num2>num3))
{
console.log(`num2 is largest ${num2}`);
if(num1>num3)
{
    console.log(`num1 is second largest ${num1}`);
}

else{
    console.log(`num3 is second largest ${num3}`);
}}
else if((num3>num1)&&(num3>num2)){
console.log(`num3 is largest ${num3}`);
if(num1>num2)
{
    console.log(`num1 is second largest ${num1}`);
}

else{
    console.log(`num2 is second largest ${num2}`);
}
}
else{
    console.log(`equal`);
}
