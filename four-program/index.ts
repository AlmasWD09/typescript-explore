let userName : string[];
userName = ['almas', 'hossain']
// console.log(userName[1]);

// number type array
let numbers : number[]
numbers = [2, 5, 7 ,6, 9]
// console.log(numbers);

// object type
type Users = {
    id:number,
    name: string,
}

let users: Users[] = [
    {
        id: 1, name: 'kodom ali'
    },
    {id: 2, name: 'akbor ali'}
]
// console.log(users);

// union type
let mixedArray : (number | string | boolean)[]
mixedArray = [10, 'hellow',  true]
// console.log(mixedArray);
