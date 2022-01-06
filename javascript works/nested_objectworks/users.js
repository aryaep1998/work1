var users={
    1000:{ accno: 1000, personName: "ram", balance: 5000, password: "userone", transactions:[{creditTransactions:[]},{debitTransactions:[]}]},
    1001: {accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",transactions:[{creditTransactions:[]},{debitTransactions:[]}] },
    1002:{ accno: 1002, personName: "raju", balance: 8000, password: "userthree",transactions:[{creditTransactions:[]},{debitTransactions:[]}]},
    1003:{accno: 1003, personName: "vivek", balance: 15000, password: "userfour",transactions:[{creditTransactions:[]},{debitTransactions:[]}]},
        }

//print 1003 person name
//console.log(users[1003].personName);

//1005 exist or not
//console.log("1005" in users);
function balanceEnquiry(acno){
}
function authenticate(ac_num, password) {
    
    if (validateAccountNumber(ac_num)) {

        if (ac_num in users) {    // check account number in users
            let pwd = users[ac_num].password     //assigning  the value of password in a new variable
            if (pwd == password) {   //check both are equal and return 1
                return 1
            }
            else {
                return -1   // if not equal return -1
            }
        }

    }
    else {
        console.log("invalid account number"); //if account number not in users,print invalid
        return 0;
    }

}
function validateAccountNumber(acno) {
    return acno in users ? true : false
}
function fundTransfer(from_acno, to_acno, amount){ 
    if (validateAccountNumber(from_acno) && validateAccountNumber(to_acno)) { //check both are in users
        let curBal = users[from_acno].balance// assigning balance into a new variable
        if (amount>curBal) {
            console.log("insufficient balance"); // check amount is greater than curbalance
        }
    
        else {

            users[from_acno].balance-=amount  
            let from_acno_balance = balanceEnquiry(from_acno)
            console.log(`your acno ${from_acno} account has been debited with ${amount} balance amount ${from_acno_balance}`);
            users[to_acno].balance += amount
            let to_acno_balance = balanceEnquiry(to_acno)
            console.log(`your acno ${to_acno} account has been credited with ${amount} balance amount ${to_acno_balance}`);
            let crTrans = {from: from_acno, amount: amount}
            let dbTrans = {to: to_acno, amount: amount}
           // users[to_acno].transactions.push(crTrans)
            //users[from_acno].transactions.push(dbTrans)
            users[from_acno].transactions[1].debitTransactions.push(dbTrans)
            users[to_acno].transactions[0].creditTransactions.push(crTrans)
        }
    }
    else {
        console.log("invalid account number");
    }

}



function balanceEnquiry(acno) {
    if (validateAccountNumber(acno)) {
        return users[acno].balance
    }
    else {
        console.log("invalid account number");
    }
}

console.log(balanceEnquiry(1002));
fundTransfer(1000,1002,4000)

