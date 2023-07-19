// By using Object.create we are assigning function bundles methods to customer object as __proto__
// By doing that addMoney and getAvblBalance function will not be assigning new memory every time in global context
// @author Mitashu Patel

const customers = []

const functionBundle = {
    addMoney: function (depositAmount) {
        if (isNaN(depositAmount) || depositAmount <= 0) {
            console.log("Invalid Amount for Deposit")
            return
        }

        this.initialBalance += depositAmount;
    },
    getAvblBalance: function () {
        console.log(this.name + "The Total Available Balance is", this.initialBalance)
    }
}

function craeteCustomer(name, initialBalance, panId) {
    const customer = Object.create(functionBundle)
    customer.name = name;
    customer.initialBalance = initialBalance;
    customer.panId = panId;

    return customer;
}

const alex = craeteCustomer("Alex", 200, "DSRPP");
const jane = craeteCustomer("Jane", 400, "QSSTP");

jane.addMoney(20)
jane.getAvblBalance()

const salariedFunction = {
    fetchSalary: function () {
        console.log(this.name + "The Salary is" + this.salary)
    }
}

function createSalariedUser(name, initialBalance, panId, salary) {
    const salariedUser = craeteCustomer(name, initialBalance, panId)
    Object.setPrototypeOf(salariedUser, salariedFunction)
    salariedUser.salary = salary;
    customers.push(salariedUser)

    return salariedUser
}
Object.setPrototypeOf(salariedFunction, functionBundle)

const mj = createSalariedUser("MJ", 5000, "QASD", 586500)
mj.addMoney(200)
mj.getAvblBalance()
mj.fetchSalary()
console.log(customers)

