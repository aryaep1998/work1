var num=123;
var resut="";

while(num !=0)
{
  let last_digit=num % 10;
   resut+=last_digit;
   num=Math.floor(num/10);
}
console.log(resut);