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
console.log(result);

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

//lesson-3 homework:

function palindrome(string) {
    return string === string.split('').reverse().join('');
}
console.log(palindrome('шалаш'));
console.log(palindrome('слон'));

function min(a, b) {
    if(a < b){
        return a;
    }
    if(b < a){
        return b;
    }
}
console.log(min(35, 8));
console.log(min(4, 15));

function max(a, b) {
    if(a > b){
        return a;
    }
    if(b > a){
        return b;
    }
}
console.log(max(2, 5));
console.log(max(368, 251));

function zero(array) {
    for(let i = 0; i < array.length; ++i){
        array[i] = String(array[i]);
        array[i] = array[i].replaceAll('0', 'zero');
    }
    return array;
}
const array1 = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
console.log(zero(array1));



