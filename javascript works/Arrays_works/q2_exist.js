// var array=[10,11,12,15,16]
//  var element=15;
//  var flag=0;
// var count=0;
//  for(i=0;i<arr.length;i++)
//  {
//      if(arr[i]==12){
      
//         flag=1;
//      }
//     }
//     count++;
//     console.log(count);
//     if(flag==1){ 
//  console.log(`element exist`);}
//  else{
//      console.log(`not exist`);
//  }



var array=[10,11,12,15,16]
 var element=150;
 var flag=0;

for(num of array)
{
    if(element==num)
    {
        flag=1;
        break;
    }
}
console.log(flag==0?"not found":"found");