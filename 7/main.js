const Transactions = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
}

const accaunt = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        const transaction = {
            id: this.transactions.length + 1,
            type,
            amount
        }

        return transaction;
    },

    deposit(amount) {
        const transaction = this.createTransaction(amount, Transactions.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
        return console.log(`Рахунок поповнено на ${amount}`)
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Недостаньо грошей на рахунку');
            return
        } 
        const transaction = this.createTransaction(amount, Transactions.WITHDRAW);
        this.transactions.push(transaction);
        this.balance -= amount;
        return console.log(`З рахунку знято ${amount}`)
    },

    getBalance() {
        return console.log(`На вашому рахунку ${this.balance}`);
    },
    
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return console.log(`Об'єкт транзакції по id ${transaction}`);
            }
        }
    },

    getTransactionTotal(type) {

        let sum = 0
        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                sum += transaction.amount;
            }
        }
        return sum
    },

}

accaunt.deposit(500);
accaunt.getBalance();
accaunt.withdraw(250);
accaunt.getBalance();