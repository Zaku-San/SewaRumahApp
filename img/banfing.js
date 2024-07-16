house.forEach(function (house) {
  // membuat div dengan class house-container
  let houseContainer = document.createElement("div");
  houseContainer.classList.add("house-Container");
  houseSection.appendChild(houseContainer);

  //image
  let houseImg = document.createElement("img");
  houseImg.src = house.imageUrl;
  houseContainer.appendChild(houseImg);

  // membuat div dengan class room yang diabsolute kan
  let miniBox = document.createElement("div");
  miniBox.classList.add("room");
  houseContainer.appendChild(miniBox);
  // p for room
  let roomText = document.createElement("p");
  roomText.textContent = house.room;
  miniBox.appendChild(roomText);

  //container for description
  let desContainer = document.createElement("div");
  desContainer.classList.add("description");
  houseContainer.appendChild(desContainer);

  // menambahkan h2 pada div desContainer
  let houseName = document.createElement("h2");
  houseName.textContent = house.nameHouse;
  houseName.classList.add("house-name");
  desContainer.appendChild(houseName);

  // menambahkan alamat pada div desContainer
  let houseAddress = document.createElement("p");
  houseAddress.textContent = house.address;
  desContainer.appendChild(houseAddress);

  // harga pada div desContainer
  let housePrice = document.createElement("h3");
  housePrice.textContent = house.price;
  desContainer.appendChild(housePrice);
});
