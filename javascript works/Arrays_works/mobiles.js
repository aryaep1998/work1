var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4G"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4G"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4G"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4G"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]

// print costly mobile
//mobiles.sort((m1,m2)=>m2[3]-m1[3])
//console.log(mobiles[0]);

//print snapdragon processor mobiles

// for(let mobile of mobiles)
// {
//     if(mobile[4]=="snapdragon")
//     {
        //console.log(mobile);
   // }
//}


//print costly mobile with processor snapdragon with 5g band



// var snap_5g=[]
// for(let mob of mobiles)
// {
//     if(mob[4]=="snapdragon" &&  mob[6]=="5G")
//     {
//         snap_5g.push(mob)
//     }
// }
// snap_5g.sort((m1,m2)=>m1[3]-m2[3])
// console.log(snap_5g[1]); //another method of console log
// console.log(snap_5g[snap_5g.length-1]);




// print is there any mobile can i purchase below 10k?
// var flag=0;
// for(let mobile of mobiles)
// {
//     if(mobile[3]<10000)
//     {
//    flag=1;
//     }    
    

// }
// console.log(flag==1?"yes":"no");


// for(mob of mobiles)
// {
//     console.log(mob[3]<10000?"true":"false");
//     break;
// }





// print samsung mobile detail

// for(let mobile of mobiles)
// {
//     if(mobile[1]=="samsung")
//     {
//         console.log(mobile);
//     }
// }

//map  //method

var mob_names=mobiles.map(mob=>mob[2])
console.log(mob_names);                         

var prizes=mobiles.map(mob=>mob[3])
console.log(prizes); 





//filter// method

var arr=[2,3,4,5,6,7,8]
var evens=arr.filter(num=>num%2==0)
//console.log(evens);

var names=["arun","arathi","anu","ram","ravi","Abhi"]
var anames=names.filter(name=>name[0]=="a" || name[0]=="A")
//console.log(anames);


var names=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
//console.log(names);

var prize=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]])
//console.log(prize);


var mob_details=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000)
//console.log(mob_details);

var mob_5g=mobiles.filter(mob=>mob[6]=="5G").map(mob=>mob[1])
//console.log(mob_5g);

var mob=mobiles.filter(mob=>mob[3]<25000 && mob[6]=="5G")
//console.log(mob);

var mob1=mobiles.filter(mob=>mob[1]=="samsung" && mob[6]=="4G" && mob[5]=="AMOLED").map(mob=>mob[1])
//console.log(mob1);






//reduce// method

var highest_prize=mobiles.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)[3]
//console.log(highest_prize);
var costly_prize=mobiles.filter(mob=>mob[3]==10000)
//console.log(costly_prize);

var low_prize=mobiles.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)     //reduce
//console.log(low_prize);


var low_prize=mobiles.reduceRight((n1,n2)=>n1[3]<n2[3]?n1:n2)    //reduceRight
//console.log(low_prize);
var isaval=mobiles.some(mob=>mob[3]==10000)
//console.log(isaval);

var isaval=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=35000)   //some
//console.log(isaval);

var isaval=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000)    //some
//console.log(isaval);





//find// method

var namebymob=mobiles.find(mob=>mob[0]==1000)
//console.log(namebymob);

var namebymob=mobiles.find(mob=>mob[1]=="redmi")
console.log(namebymob);


