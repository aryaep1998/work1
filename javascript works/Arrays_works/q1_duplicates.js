var array1=[10,11,20,21]
var array2=[11,12,20,21]
// for(i of array1){
//     for(j of array2){
//         if(i==j){
//             console.log("common element",array1[i]);
//         }




        
//     }
// }
var count=0;
var p1=0,p2=0;
while(p1<array1.length && p2<array2.length)
{
if(array1[p1]==array2[p2])
{
    console.log("common element",array1[p1]);
    p1++,p2++;
}
 else if(array1[p1]>array2[p2])
 {
     p2++;
 }
 else if(array1[p1]<array2[p2])
 {
p1++;
 }
 count++;
}console.log(count);
