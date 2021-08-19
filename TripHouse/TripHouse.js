(async function main () {
  const homesData = await fetch( 'https://fe-student-api.herokuapp.com/api/hotels/popular')
  .then((res) => {
    if(!res.ok){
      throw new Error (res.statusText)
    }
    return res.json()
  })
  .then((data) => data)
  .catch((err) => {console.log(err.message)});

  function getListContent() {
    let result = [];
    
    homesData.forEach((item, index) => {
      if(index <= 3){
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
        const homesAdress = document.createElement("a");
        homesAdress.className = 'Homes_adress';
        const homesAdressText = document.createTextNode(`${item.city}, ${item.country}`);
        homesAdress.appendChild(homesAdressText);
        homesItem.append(homesPictureLink, homesName, homesAdress);
        result.push(homesItem);
      }
    })
    return result;
  }
 
  const homesList = document.querySelector(".Homes_list")

  homesList.append(...getListContent());
}());

