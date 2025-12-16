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
//with type for return
function Counter(a, b) {
    var counted = a + b;
    console.log(counted);
    return counted;
}
Counter(12, 5);
