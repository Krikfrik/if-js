let i = 1;
const homesCarousel = document.querySelector(".Homes_carousel")
for(let li of homesCarousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 296; // ширина картинки
let count = 3; // видимое количество изображений

let list = homesCarousel.querySelector('ul');
let listElems = homesCarousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

homesCarousel.querySelector('.Arrow_prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

homesCarousel.querySelector('.Arrow_next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

const data = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa  Cruz de Tenerife',
      country: 'Spain',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
      imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];

function getListContent() {
    let result = [];
  
    data.forEach((item) => {
      const homesItem = document.createElement('li');
      homesItem.className = 'Homes_item';
      const homesPicture = document.createElement("img");
      homesPicture.className = 'Homes_picture';
      homesPicture.setAttribute("src", `${item.imageUrl}`)
      const homesName = document.createElement("a");
      homesName.className = 'Homes_name';
      const homesNameText = document.createTextNode(`${item.name}`);
      homesName.appendChild(homesNameText);
      const homesAdress = document.createTextNode(`${item.city}, ${item.country}`);
      homesAdress.className = 'Homes_adress';
      homesItem.append(homesPicture, homesName, homesAdress);
      result.push(homesItem);
    })
  
    return result;
  }
 
const homesItems = document.querySelector(".Homes_items")

homesItems.append(...getListContent());