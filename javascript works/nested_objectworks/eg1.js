var users = {
    1000:{ accno: 1000, personName: "ram", balance: 5000, password: "userone", 
    transactions:[{creditTransaction:[]},{debitTransactions:[]}

    ]
    },
    1001: {accno: 1001, personName: "ravi", balance: 7000, password: "usertwo", transactions:
    [{creditTransaction:[]},{debitTransactions:[]}
    ]},
    1002:{ accno: 1002, personName: "raju", balance: 8000, password: "userthree", transactions:[]},
    1003:{accno: 1003, personName: "vivek", balance: 15000, password: "userfour", transactions:[]},
           
    

}

function validateAccountNumber(acno) {
    return acno in users ? true : false
}
function fundTransfar(from_acno, to_acno, amount) {
    if (validateAccountNumber(from_acno) && validateAccountNumber(to_acno)) {
        let curBal = users[from_acno].balance
        if (amount>curBal) {
            console.log("insufficient balance");
        }
        else {

            users[from_acno].balance-=amount
            let from_acno_balance = balanceEnquiry(from_acno)
            console.log(`your acno ${from_acno} account has been debited with ${amount} balance amount ${from_acno_balance}`);
            users[to_acno].balance += amount
            let to_acno_balance = balanceEnquiry(to_acno)
            console.log(`your acno ${to_acno} account has been credited with ${amount} balance amount ${to_acno_balance}`);
            let crTrans = {from:from_acno,amount:amount}
            let dbTrans = {to: to_acno, amount: amount}
           users[from_acno].transactions[1].debitTransactions.push(dbTrans)
           users[to_acno].transactions[1].creditTransaction.push(crTrans)
        }
    }
    else {
        console.log("invalid account number");
    }

}
fundTransfar(1000,1002,4000)

function balanceEnquiry(acno) {
    if (validateAccountNumber(acno)) {
        return users[acno].balance
    }
    else {
        console.log("invalid account number");
    }
}


