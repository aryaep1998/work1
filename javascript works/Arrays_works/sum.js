// var array=[2,3,4,5]
// var sum=7;
// var flag=0;
// for(let i of array){
//     for(let j of array){
//         if((i+j)==sum){
//             console.log(`pairs (${i},${j})`);
           
          
//         } 
//     }  

// }


var array=[2,3,4,5]
var element=6;
var flag=0;
var count=0
var upp=array.length-1;low=0;
while(low<upp)
{
    let cur_sum=array[low]+array[upp]
if(element==cur_sum){
    console.log(`pairs( ${array[low]},${array[upp]})`);
    
    flag++;
    break;
}
else if(cur_sum<element){
    low+=1;
    
}
else if(cur_sum>element){
    upp-=1;
}


}
if(flag==0){
    console.log(`no pairs`);
}
count++;
console.log(count);