
class Bank {
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }

        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },

    }

    session = {

    }

    validateAccountNumber(acno) {
        return acno in this.accounts ? true : false
    }

    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.accounts[acno].password
            if (pwd == password) {
                console.log("access granted");
                this.session["user"] = acno
            }
            else {
                console.log("invalid password");
            }
        }
        else {
            console.log("invalid account number");
        }


    }
    getBalance(acno) {
        return this.accounts[acno].balance
    }
    balanceEnquiry() {
        if ("user" in this.session) {

            let loggedUser = this.session["user"]
            console.log(this.getBalance(loggedUser));


        }
        else {
            console.log("invalid session u must login");
        }

    }



    loginRequired() {
        return "user" in this.session ? true : false
    }

    loggedUser() {
        if (this.loginRequired())
            return this.session["user"]

    }
    fundTransfer(to_acno, amount) {
        if (this.loginRequired()) {
            let loggedUser = this.session["user"]
            if (this.validateAccountNumber(to_acno)) {
                let curBal = this.getBalance(loggedUser)


                if (amount > curBal) {
                    console.log("insufficient balance");
                }
                else {
                    this.accounts[to_acno].balance += amount
                    let to_acno_balance = this.getBalance(to_acno)
                    this.accounts[loggedUser].balance -= amount
                    let loggedUser_from = this.getBalance(loggedUser)
                    let creditTransaction = { from_acno: loggedUser, amount: amount }
                    let debitTransaction = { to_acno: to_acno, amount: amount }
                    this.accounts[loggedUser].transactions.debitTransactions.push(debitTransaction)
                    this.accounts[to_acno].transactions.creditTransactions.push(creditTransaction)
                    console.log("debit transaction of payer details", this.accounts[loggedUser].transactions.debitTransactions);
                    console.log("credit transaction of prayer details", this.accounts[to_acno].transactions.creditTransactions);


                }

            }
            else { console.log("invalid to account number"); }

        }
        else { console.log("invalid account number"); }
    }



    getDebitTransactions() {
        let user = this.loggedUser()
        this.accounts[user].transactions.debitTransactions.forEach(t => console.log(t))
    }

    getCreditTransactions() {
        let user = this.loggedUser()
        this.accounts[user].transactions.creditTransactions.forEach(t => console.log(t))
    }
    getTransactionHistory() {
        let user = this.loggedUser()
        console.log(this.accounts[user].transactions);
    }

}
    
      

var bank = new Bank                                      //validate account number
console.log(bank.validateAccountNumber(1001));
bank.authenticate(1000, "userone")                      //authenticate (acno,password)

bank.balanceEnquiry();
bank.fundTransfer(1001, 5000)
bank.getTransactionHistory(1001, 5000)