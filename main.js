"use strict"

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

// lesson-4 homework

function sum(a){
    return function(b){
        return a + b;
    }
}
console.log(sum(5)(2));

// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const p = document.querySelectorAll('p');

// const changeColor = () => {
//     let i = 0;
//     return (e) => {
//         e.target.style.color = colors[i];
//         i++;
//         if(i >= colors.length){
//             i = 0;
//         }
//     }
// }

// p.forEach((item) => {
//     const paint = changeColor();
//     item.addEventListener('click', paint);
// });

// lesson-5 homework
//1.
const date = '2020-11-26';
const changeDate = (date) => {
    return date.split('-').reverse().join('.');
}
console.log(changeDate(date));

const date2 = '1997-10-07';
console.log(changeDate(date2));

//2.
const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
];

const search = (str) => {
    const arr = [];
    for(let i = 0; i < data.length; ++i){
        const currentStr = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
        if(currentStr.includes(str)){
            arr.push(currentStr);
        }
    }
    return arr;
}

console.log(search('Hotel'));
console.log(search('Germany'));
console.log(search('China'));

//lesson-6 homework
//1 задача = строка 44
//2 задача
const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
];

const newSearch = (str) => {
    const arr = [];
    hotels.forEach ((item) => {
        const currentStr = `${item.country}, ${item.city}, ${item.hotel}`;
        if(currentStr.includes(str)){
            arr.push(currentStr);
        }
    });
    return arr;
};

console.log(newSearch('Germany'));

// 3.
const countries = hotels.reduce((acc, item) => {
  const result = {...acc};
  if(!result[item.country]){
    result[item.country] = [];
  }
  if(!result[item.country].includes(item.city)){
    result[item.country].push(item.city);
  }
  return result;
}, {})

console.log(countries);

//lesson-7 homework

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};

const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};

const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  const objs = typeof object1 === 'object' && typeof object2 === 'object';
  const notNull = object1 !== null && object2 !== null;

  if (objs && notNull) {
      for (let key in object1) {
          if(!object2.hasOwnProperty(key)) {
              return false;
          }
          if(typeof object1[key] === 'object' && typeof object2[key] === 'object') {
              const result = deepEqual(object1[key], object2[key]);
              if (!result) {
                  return false;
              } 
          } else {
              if(object1[key] !== object2[key]) {
                  return false;
              }
          }
      }
      return true;
  }
};

console.log(deepEqual(obj1, obj2)); 
console.log(deepEqual(obj1, obj3)); 
 
//lesoon-8 homework

const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2020,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2020,
    courseName: "Android",
  },
];

class User {
  firstName = "";
  lastName = "";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends User {
  admissionYear = 0;
  courseName = "";
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
  get courseNumber() {
    let result = "";
    let course = new Date().getFullYear() - this.admissionYear;
    if (course < 1) {
      return (result = "1 курс");
    }
    return (result = `${course} курс`);
  }
}

class Students {
  data = new Array();

  constructor(students) {
    students.forEach((element) => {
      this.data.push(new Student(element.firstName, element.lastName, element.admissionYear, element.courseName));
    });
  }

  sortByCourseNumber(data) {
    let currentYear = new Date().getFullYear();
    return data.sort((a, b) => (currentYear - a.admissionYear > currentYear - b.admissionYear ? 1 : -1));
  }

  get getInfo() {
    const data = this.sortByCourseNumber(this.data);
    let result = [];

    data.forEach((el) => {
      result.push(`${el.fullName} - ${el.courseName}, ${el.courseNumber}`);
    });

    return result;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo);

// lesson-9 homework


const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    let current = data[0]
    let last = data[-1]
    return {
      next(){
        if( current <= last){
          return {
            done: false,
            value: current++
          }
        }
        else{
          return {
            done: false,
            value: current = data[0]
          }
        }
      }
    }
  }
}

let p = document.querySelectorAll('p');

p.forEach((item) => {
  item.addEventListener('click', item.style.color = colors.next().value);
});




