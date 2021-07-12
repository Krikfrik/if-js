let user = 'John Doe';
console.log(user);
const studentName = 'Hanna Hirkouskaya';
console.log(studentName);
user = studentName;
// в консоли Hanna Hirkouskaya
console.log(user);

let test = 1;
test = `${test}1`;
// в консоли 1
console.log(test);
test -= 1;
// в консоли значение 10;
console.log(test);
test = Boolean(test);
// в консоли true
console.log(test);

const arr = [2, 3, 5, 8];
let result = 0;
for (let i = 0; i < arr.length; i += 1) {
  result += arr[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i += 1) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

for (let i = 0; i < arr2.length; i += 1) {
  if (!(arr2[i] % 2)) {
    console.log(arr2[i]);
  }
}

// lesson-3 homework:

function palindrome(string) {
  return string === string.split('').reverse().join('');
}
console.log(palindrome('шалаш'));
console.log(palindrome('слон'));

function min(a, b) {
  if (a < b) {
    return a;
  }
  if (b < a) {
    return b;
  }
}
console.log(min(35, 8));
console.log(min(4, 15));

function max(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
}
console.log(max(2, 5));
console.log(max(368, 251));

function zero(array) {
  const param = array;
  for (let i = 0; i < param.length; i += 1) {
    param[i] = String(param[i]);
    param[i] = param[i].replaceAll('0', 'zero');
  }
  return param;
}
const array1 = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
console.log(zero(array1));

// lesson-4 homework

function sum(a) {
  return function (b) {
    return a + b;
  };
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
// 1.
const date1 = '2020-11-26';
const changeDate = (date) => date.split('-').reverse().join('.');
console.log(changeDate(date1));

const date2 = '1997-10-07';
console.log(changeDate(date2));

// 2.
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
  const searchArr = [];
  for (let i = 0; i < data.length; i += 1) {
    const currentStr = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
    if (currentStr.includes(str)) {
      searchArr.push(currentStr);
    }
  }
  return searchArr;
};

console.log(search('Hotel'));
console.log(search('Germany'));
console.log(search('China'));

// lesson-6 homework
// 1 задача = строка 44
// 2 задача
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
  const newSearchArr = [];
  hotels.forEach((item) => {
    const currentStr = `${item.country}, ${item.city}, ${item.hotel}`;
    if (currentStr.includes(str)) {
      newSearchArr.push(currentStr);
    }
  });
  return newSearchArr;
};

console.log(newSearch('Germany'));

// 3.
const countries = hotels.reduce((acc, item) => {
  const countriesResult = { ...acc };
  if (!countriesResult[item.country]) {
    countriesResult[item.country] = [];
  }
  if (!countriesResult[item.country].includes(item.city)) {
    countriesResult[item.country].push(item.city);
  }
  return countriesResult;
}, {});

console.log(countries);

// lesson-7 homework

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
    for (const key in object1) {
      if (Object.prototype.hasOwnProperty.call(object1, key)) {
        if (!Object.prototype.hasOwnProperty.call(object2, key)) {
          return false;
        }
        if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
          const deepEqualResult = deepEqual(object1[key], object2[key]);
          if (!deepEqualResult) {
            return false;
          }
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));

// lesoon-8 homework

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2020,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2020,
    courseName: 'Android',
  },
];

class User {
  constructor(params) {
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(params) {
    super(params);
    this.admissionYear = params.admissionYear;
    this.courseName = params.courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    return this.students.sort((student1, student2) => new Student(student1).course - new Student(student2).course).map((student) => `${new User(student).fullName} - ${new Student(student).courseName} - ${new Student(student).course}`);
  }
}

const students = new Students(studentsData);

console.log(students.getInfo());

// lesson-9 homework

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined) {
      this.current = 0;
    }
    if (this.current < this.data.length) {
      return {
        done: false,
        value: this.data[this.current++],
      };
    }
    if (this.current === this.data.length) {
      this.current = 0;
      return this.next();
    }
  },
};

const changeColor = (param) => (event) => {
  const e = event;
  e.target.style.color = (param).next().value;
};

const changeParagraphColor = (p) => {
  p.addEventListener('click', changeColor({ ...colors }));
};

changeParagraphColor(document.getElementById('text1'));
changeParagraphColor(document.getElementById('text2'));
changeParagraphColor(document.getElementById('text3'));
