//normal types
var message = 'first message';
console.log(message);
//types in functions
//without type for return
function UserData(name, age) {
    console.log('UserName:', name);
    console.log("UserAge:", age);
}
UserData('Hoda', 21);
UserData('X');
//with type for return
function Counter(a, b) {
    if (a === void 0) { a = 10; }
    var counted = a + b;
    console.log(counted);
    return counted;
}
Counter(12, 5);
var user1 = { name: "hoda", age: 21 };
function typeId(id) {
    if (typeof id === 'string') {
        console.log('string', id);
    }
    else {
        console.log("number", id);
    }
}
typeId(1);
var mapDirection = "west";
