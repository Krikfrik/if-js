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
    // {
    //   name: 'Radisson Blu Hotel',
    //   city: 'Kyiv',
    //   country: 'Ukraine',
    //   imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    // },
    // {
    //   name: 'Paradise Hotel',
    //   city: 'Guadalupe',
    //   country: 'Mexico',
    //   imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    // },
    // {
    //   name: 'Hotel Grindewald',
    //   city: 'Interlaken',
    //   country: 'Switzerland',
    //   imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    // },
    // {
    //   name: 'The Andaman Resort',
    //   city: 'Port Dickson',
    //   country: 'Malaysia',
    //   imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    // },
];

function getListContent() {
  let result = [];
  
  data.forEach((item) => {
    const homesItem = document.createElement('li');
    homesItem.className = 'Homes_item';
    const homesPictureLink = document.createElement ("a")
    const homesPicture = document.createElement("img");
    homesPicture.className = 'Homes_picture';
    homesPicture.setAttribute("src", `${item.imageUrl}`);
    homesPictureLink.append(homesPicture);
    const homesName = document.createElement("a");
    homesName.className = 'Homes_name';
    const homesNameText = document.createTextNode(`${item.name}`);
    homesName.appendChild(homesNameText);
    const homesAdress = document.createTextNode(`${item.city}, ${item.country}`);
    homesAdress.className = 'Homes_adress';
    homesItem.append(homesPictureLink, homesName, homesAdress);
    result.push(homesItem);
  })

  return result;
}
 
const homesList = document.querySelector(".Homes_list")

homesList.append(...getListContent());
