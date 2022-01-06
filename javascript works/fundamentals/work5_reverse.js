var num=123;
var result="";

while(num !=0)
{
  let last_digit=num % 10;
   result+=last_digit;
   num=Math.floor(num/10);
}
console.log(result);