//normal types
const message : string = 'first message'
console.log(message)

//types in functions
//without type for return
function UserData(name:string, age:number){
    console.log('UserName:',name)
    console.log("UserAge:",age)
}
UserData('Hoda',21)

//with type for return
function Counter(a:number,b:number):number{
  const counted = a + b
  console.log(counted)
  return counted
}
Counter(12,5)

//type alias
type person = {name:string, age:number}
const user1:person = {name:"hoda" ,age:21}