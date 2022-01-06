var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
var highest=covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)[1]
//console.log(highest);



// q2 district with higest 1 dose vaccination rate
var rate=covid_data.reduce((dose1,dose2)=>dose1[5]>dose2[5]?dose1:dose2)[5]
console.log(rate);
var district=covid_data.filter(d=>d[5]==rate)
console.log(district);



// q3 district with lowest death cases
var death_rate=covid_data.reduce((rate1,rate2)=>rate1[3]<rate2[3]?rate1:rate2)[1]
//console.log(death_rate);



// q4 sort district with +ve cases
var cases=covid_data.sort((case1,case2)=>case1[2]-case2[2]).map(d=>d[1])
//console.log(cases);



// q5 sort the districts based on 1st dose
var doses=covid_data.sort((dose1,dose2)=>dose1[5]-dose2[5])
//console.log(doses);



// q6 is there any states with +ve cases > 60000
var dist=covid_data.filter((num)=>num[2]>60000).map(n1=>n1[1])
//console.log(dist);



// q7 print trissur details
var trissur=covid_data.find(data=>data[1]=="thrissur")
//console.log(trissur);


//q8 total number of +ve cases
var total=covid_data.map(d=>d[2]).reduce((d1,d2)=>d1+d2)
//console.log(total);


// q9 total number of cured cases
var total=covid_data.map(d=>d[4]).reduce((d1,d2)=>d1+d2)
//console.log(total);



// q10 cured numbers of iduky
var cured=covid_data.find((num)=>num[1]=="iduky").map(num=>num[4])
//console.log(cured);
var cured=covid_data.find((num)=>num[1]=="iduky")[4]
//console.log(cured);



// q11 total number of death cases
var total=covid_data.map(d=>d[3]).reduce((d1,d2)=>d1+d2)
//console.log(total);

