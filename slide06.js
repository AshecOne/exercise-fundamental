// Exercise 1
class Student {
    constructor(_name, _email, _birth, _score) {
        this.name = _name;
        this.email = _email;
        this.age = new Date().getFullYear() - new Date(_birth).getFullYear();
        this.score = _score;
    }
}

let dbStudent = [
    new Student("Edo", "edo@mail.com", "1997-04-25", 75),
    new Student("Andrew", "and@mail.com", "1998-11-12", 65),
    new Student("Zafran", "zaf@mail.com", "1992-02-01", 95),
    new Student("Budi", "budi@mail.com", "1996-11-11", 55)
];

let calculateStudent = (arr) => {
    let sortedByScore = arr.sort((a, b) => a.score - b.score);
    let minScore = sortedByScore[0];
    let maxScore = sortedByScore[sortedByScore.length - 1];
    let averageScore = arr.reduce((sum, student) => sum + student.score, 0) / arr.length;
    let score = {highest: maxScore, lowest: minScore, averageScore};

    let sortedByAge = arr.sort((a, b) => a.age - b.age);
    let minAge = sortedByAge[0];
    let maxAge = sortedByAge[sortedByAge.length - 1];
    let averageAge = arr.reduce((sum, student) => sum + student.age, 0) / arr.length;
    let age = {oldest: maxAge, youngest: minAge, average: averageAge};

    return {score, age};
};

console.log(calculateStudent(dbStudent));

// Exercise 2
class Product {
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}

let dbProduct = [new Product("Apel", 5000), new Product("Lemon", 10000)];

class Transaction {
    constructor() {
        this.cart = [];
        this.total = 0;
    }

    
    addToCart(product, qty) {
        this.cart.push({ product, qty });
        this.total += product.price * qty;
    }

    
    showTotal() {
        return `Rp.${this.total.toLocaleString("id")},00`;
    }

    
    checkout() {
        const transactionData = {
            total: `Rp.${this.total.toLocaleString("id")},00`,
            products: this.cart,
        };
        
        this.cart = []; 
        this.total = 0;

        return transactionData;
    }
}

let transaction = new Transaction();
transaction.addToCart(dbProduct[0], 3);
console.log(transaction.cart);
transaction.addToCart(dbProduct[1], 1);
console.log(transaction.cart);
console.log(transaction.showTotal());
console.log(transaction.checkout());
transaction.addToCart(dbProduct[1], 10);
console.log(transaction.cart);