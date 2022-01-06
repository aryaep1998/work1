// var expenses=[20000,25000,30000,35000,35000]
// sum=0;
// for(let i=0;i<expenses.length;i++)
// {
    
//     console.log(expenses);
// }



// for(let amount of expenses)
// {
//     if(amount>25000){
//     console.log(amount);
// }

//sum

//var sum=0;
// for(let amount of expenses)
// {
// sum+=amount;
// }

// console.log(sum);

//maximum
// var maxm_expenses=0;
// for(let amount of expenses)
// {
//     if(amount>maxm_expenses){
//    maxm_expenses=amount;}
// }

// console.log("maxm_expenses",maxm_expenses);


//minimum

// var minimum_expenses=expenses[0];
// for(let amount of expenses)
// {
//     if(amount<minimum_expenses){
//    minimum_expenses=amount;}
// }

// console.log("minimum_expenses",minimum_expenses);


// var minimum_expenses=expenses[0];
// for(let amount of expenses)
// {
//     if(amount<minimum_expenses){
//    minimum_expenses=amount;}
// }

// console.log("minimum_expenses",minimum_expenses);
// expenses.push(50000);
// console.log(expenses);

//duplicates removal      //method(1)

// var expenses=[20000,25000,30000,35000,35000]
// var st=new Set();
// for( let amount of expenses){
//     st.add(amount)
// }
// console.log(st);

//method(2)

var expenses=[20000,25000,30000,35000,35000]
var unique=[]
for(let amount of expenses){
    if(unique.includes(amount)){

    }
    else{
        unique.push(amount)
    }

}console.log(unique);


var array=[9,6,7,8,3,2]