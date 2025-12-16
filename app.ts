//normal types
const message : string = 'first message'
console.log(message)

//types in functions
//without type for return
function UserData(name:string, age? :number){
    console.log('UserName:',name)
    console.log("UserAge:",age)
}
UserData('Hoda',21)
UserData('X')

//with type for return
function Counter(a:number=10,b:number):number{
  const counted = a + b
  console.log(counted)
  return counted
}
Counter(12,5)

//type alias
type person = {name:string, age:number}
const user1:person = {name:"hoda" ,age:21}

//Unions
type id = string | number
function typeId(id) {
  if (typeof id === 'string') {
    console.log('string',id)
  }else {console.log("number",id)}
}
typeId(1)

//value unions
type direction = 'north' | 'south' | 'west' | 'east'
const mapDirection:direction = "west"

//template literal type
type group = 'Gryffindor' | 'Hufflepuff' | 'Ravenclaw' | 'Slytherin'
type students = 'Harry' | 'Hermione' | 'Ron'
type options = `${students} in ${group}`