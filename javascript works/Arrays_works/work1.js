// var array=[9,6,7,8,3,2]
// if num < 5 num-1
// if num > 5 num+1
// for(let i=0;i<array.length;i++)
// {
//     if(array[i]<5){
//         array[i]=array[i]-1;
//     }
//     else if(array[i]>5){
//         array[i]=array[i]+1; 
//     }
// }console.log(array);

var array=[9,6,7,8,3,2]
for(num of array)
{
    console.log(num<5?num-1:num+1);
}
