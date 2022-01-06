var num=123;
var sum=0;


while(num !=0)
{
    let last_digit=num % 10;
    sum+=last_digit**3;
    num=Math.floor(num/10);
  
   
}
console.log(sum);