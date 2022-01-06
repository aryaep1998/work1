var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


//1.total number of accounts
//console.log(accounts.length);




//2.print all accountnumbers whose ac-type savings
//accounts.filter(actype=>actype.ac_type=="savings").forEach(data=>console.log(data.acno))




//3.print balance of acno=1000
//let account=accounts.find(acc=>acc.acno==1000).balance
//console.log(account);




//4.print all gpay transaction details
//accounts.map(data=>data.transactions).flat().filter(data=>data.method=="g-pay").
//forEach(t=>console.log(t))
  
 

//print credit transaction's of 1002
//accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002).forEach(t=>console.log(t))



//print highest balance account details
//var maxbal=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
//console.log(maxbal);







//print transaction history of 1002
 var debit=accounts.find(data=>data.acno==1002).transactions
var credit=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
var history={"debit":debit,"credit":credit}
 console.log(history);






