const obj1 = {name: "Amarendra", age: 30}
const obj2 = {name: "Bhargav", age: 25}

function printDetails(city, country) {
    console.log(`Name: ${this.name}, Age: ${this.age}, City: ${city}, Country: ${country}`);
}

export function execute() {
// Using call method
console.log("Using call method:");
printDetails.call(obj1,'Bhubaneswar','India');
printDetails.call(obj2,'Bangalore','India');

// Using apply method
console.log("Using apply method:");
printDetails.apply(obj1, ['Bhubaneswar','India']);
printDetails.apply(obj2, ['Bangalore','India']);

// Using bind method

const bind1 = printDetails.bind(obj1, 'Bhubaneswar', 'India');
const bind2 = printDetails.bind(obj2, 'Bangalore', 'India');
bind1();
bind2();
}


