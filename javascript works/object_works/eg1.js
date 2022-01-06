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
//console.log(accounts.length);
//accounts.filter(acno=>acno.ac_type=="savings").forEach(data=>console.log(data.acno))
//var ac=accounts.find(ac_no=>ac_no.acno==1003).balance
 //console.log(ac); 
//var ac=accounts.map(data=>data.transactions).flat().filter(data=>data.method=="g-pay")
//console.log(ac);

//var avc=accounts.map(data=>data.transactions).flat().filter(data=>data.to==1002)
//console.log(avc);
//var av=accounts.find(data=>data.acno==1002)
//console.log(av.transactions);

//var acc=accounts.sort((b1,b2)=>b2.balance-b1.balance)[0]
//console.log(acc.balance);