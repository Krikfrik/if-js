let user = 'John Doe';
console.log(user);
let student = 'Hanna Hirkouskaya';
console.log(student);
user = student;
//в консоли Hanna Hirkouskaya
console.log(user);

let test = 1;
test = test + '1';
//в консоли 1 
console.log(test);
test = test - 1;
// в консоли значение 10;
console.log(test);
test = Boolean(test);
// в консоли true
console.log(test);

const arr = [2, 3, 5, 8];
let result = 0;
for(let i = 0; i < arr.length; ++i){
    result += arr[i];
}
console.log(resalt);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr2.length; ++i){
    if(arr2[i] > 5 && arr2[i] < 10){
        console.log(arr2[i])
    }
}

for(let i = 0; i < arr2.length; ++i){
    if(!(arr2[i] % 2)){
        console.log(arr2[i])
    }
}

