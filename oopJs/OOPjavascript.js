let user = {
    firstName: "youssef",
    lastName: "Achkir",
    age: 19,
    getName: function () {
        return `Full name : ${this.firstName} ${this.lastName}`;
    },
    getAge: function () {
        return this.age * 365;
    }
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.getName());
console.log(user.getAge());
console.log(window.location.hostname);
console.log(window.location);

