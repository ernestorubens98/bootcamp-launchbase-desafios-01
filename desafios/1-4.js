const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {

    if (transaction.type == 'credit') {
        user.transactions.push(transaction)
        return user.balance = user.balance + transaction.value;
    }

    if (transaction.type == 'debit') {
        user.transactions.push(transaction)
        return user.balance = user.balance - transaction.value;
    }
}

function getHigherTransactionByType (typeTransaction) {
    let biggerValue = {
        type: typeTransaction,
        value: 0
    }

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == typeTransaction && user.transactions[i].value > biggerValue.value) {
            biggerValue.value = user.transactions[i].value
        }
    }
    console.log(biggerValue);
}

function getAverageTransactionValue() {
    let media = 0;
    
    for (let i=0; i < user.transactions.length; i++) {
        media += user.transactions[i].value
    }
    console.log(media / user.transactions.length)
}

function getTransactionsCount() {
    let counterTypeTransaction = {
        credit: 0,
        debit: 0
    }

    for (let i=0; i < user.transactions.length; i++) {
        if (user.transactions[i].type == 'credit') {
            counterTypeTransaction.credit += 1;
        }
        if (user.transactions[i].type == 'debit') {
            counterTypeTransaction.debit += 1;
        }
    }
    console.log(counterTypeTransaction)
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }