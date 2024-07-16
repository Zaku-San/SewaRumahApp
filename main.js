let darkMode = "#1B2021";
let lightMode = "white";
let orange = "#F58634";
let isClicked = false;

let headerText = document.querySelectorAll("h2,h1");
const navLinks = document.querySelectorAll(".container .navbar .navbar-item a");

let rentHouse = [
    {
        imageUrl: 'img/house 2.svg',
        room: '3 room',
        houseName: 'Orange House',
        address: 'Jl Klapanunggal, cileungsi, bogor',
        price: '$1,435,000'
    },
    {
        imageUrl: 'img/house 1.svg',
        room: '2 room',
        houseName: 'White House',
        address: 'Jl Klapanunggal, cileungsi, bogor',
        price: '$1,200,500'
    },
    {
        imageUrl: 'img/house 3.svg',
        room: '2 room',
        houseName: 'Green House',
        address: 'Jl Klapanunggal, cileungsi, bogor',
        price: '$2,300,000'
    }
];

let saleHouse = [
    {
        imageUrl: 'img/house 1.svg',
        room: '1 room',
        houseName: 'Orange House',
        address: 'Jl Klapanunggal, cileungsi, bogor',
        price: '$1,435,000'
    },
    {
        imageUrl: 'img/house 2.svg',
        room: '2 room',
        houseName: 'White House',
        address: 'Jl Klapanunggal, cileungsi, bogor',
        price: '$1,200,500'
    },
    {
        imageUrl: 'img/house 3.svg',
        room: '3 room',
        houseName: 'Green House',
        address: 'Jl Klapanunggal, cileungsi, bogor',
        price: '$2,300,000'
    }
]

let houseContainer = document.getElementById("house-container");


function displayHouses(houseData) {
    houseContainer.innerHTML = "";

    houseData.forEach(function(houseItem) {

        //membuat div utama
        let houseBox = document.createElement("div");
        houseBox.classList.add("house");
        houseContainer.appendChild(houseBox);

        // image
        let houseImg = document.createElement("img");
        houseImg.src = houseItem.imageUrl;
        houseBox.appendChild(houseImg);

        //minibox
        let houseRoom = document.createElement("p");
        houseRoom.textContent = houseItem.room;
        houseRoom.classList.add("room");
        if(isClicked === true ) {
          houseRoom.style.backgroundColor = darkMode;
        } else {
          houseRoom.style.backgroundColor = lightMode;
        }
        houseBox.appendChild(houseRoom);
        

        //membuat container untuk description
        let descContainer = document.createElement("div");
        descContainer.classList.add("description");
        houseBox.appendChild(descContainer);

        //h2 untuk menambahkan judul pada descContainer
        let houseName = document.createElement("h2");
        houseName.textContent = houseItem.houseName;
        houseName.classList.add("house-name");
        if(isClicked === true) {
          houseName.style.color = lightMode;
        } else {
          houseName.style.color = darkMode;
        }
        descContainer.appendChild(houseName);

        //p untuk menambahkan alamat pada descContainer
        let address = document.createElement("p");
        address.textContent = houseItem.address;
        descContainer.appendChild(address);

        //h3 untuk menaruh harga pada descContainer
        let housePrice = document.createElement("h3");
        housePrice.textContent = houseItem.price;
        housePrice.classList.add("price");
        descContainer.appendChild(housePrice);

        let toRentBtn = document.getElementById("toRentBtn");
        let forSaleBtn = document.getElementById("forSaleBtn");

        if(houseData === saleHouse) {
            
        }

    });
}

document.getElementById("forSaleBtn").addEventListener("click", function(event) {
    event.preventDefault();

    let toRentBtn = document.getElementById("toRentBtn");
    let forSaleBtn = document.getElementById("forSaleBtn");

    forSaleBtn.style.color = "#F58634";
    toRentBtn.style.color = "#828282";
        
    displayHouses(saleHouse);
});

document.getElementById("toRentBtn").addEventListener("click", function (event) {
    event.preventDefault();

    let toRentBtn = document.getElementById("toRentBtn");
    let forSaleBtn = document.getElementById("forSaleBtn");

    toRentBtn.style.color = "#F58634";
    forSaleBtn.style.color = "#828282";
    displayHouses(rentHouse);
});

displayHouses(saleHouse);






window.addEventListener("scroll", () => {
  let current = "";

  // Melakukan loop pada setiap elemen di halaman
  document.querySelectorAll("section").forEach((section) => {
    const divTop = section.offsetTop;
    const divHeight = section.clientHeight;

    if (pageYOffset >= divTop - divHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  // Menandai tautan navbar yang sesuai dengan halaman yang terlihat di layar
  navLinks.forEach((link) => {
    link.classList.remove("current-page");

    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("current-page");
    }
  });
});

function changeMode(event) {
  event.preventDefault();
  // navbar
  let navbarText = document.querySelector(".container .navbar .logo p");
  // background
  let background = document.querySelector(".container");
  // card on hero
  let heroCard = document.querySelector(
    ".container .hero .card-container .card"
  );
  let houseTitle = document.querySelectorAll(".container .sale-house .houses-container .description h2")
  //   view more
  let viewMore = document.querySelectorAll(
    ".container .sale-house .header-text .right a, .review-id a, .blog a"
  );
  // description card for every image
  let descriptionBox = document.querySelectorAll(".room, .people, .admin");
  // reciew page
  let reviewPage = document.querySelectorAll(   
    ".container .review-id .review-container .review p"
  );
  
  let darkIcon = document.querySelector(".container .navbar .navbar-item .tes");

  //  blog text
  let blogText = document.querySelectorAll(
    ".container .blog .content-container .left-content .admin .name p:first-child, .container .blog .content-container .right-content .card .description p"
  );

  // blog header 
  let blogHeader = document.querySelectorAll(
    ".container .blog .content-container .left-content h3, .container .blog .content-container .right-content h3"
  );
  

  if (isClicked) {
    // background
    background.style.backgroundColor = lightMode;
    // navbar
    navbarText.style.color = darkMode;
    // card on hero
    heroCard.style.backgroundColor = lightMode;
    heroCard.style.color = darkMode;
    // reviewPage

    // description for image and text
    descriptionBox.forEach((box) => {
      box.style.backgroundColor = lightMode;
    });
    headerText.forEach((text) => {
      text.style.color = darkMode;
    });

    // description for reviewText
    reviewPage.forEach((review) => {
      review.style.color = darkMode;
    });

    //blogtext header
    blogHeader.forEach((text => {
        text.style.color = darkMode;
    }));

    // blogText
    blogText.forEach((text) => {
      text.style.color = darkMode;
    });

    // view more
    viewMore.forEach((text) => {
      text.style.color = darkMode;
    });

    darkIcon.innerHTML = '<i class="fa-regular fa-moon fa-xl" style="color: #1b2021" id="myButton"></i>';
    // house title
    houseTitle.forEach((title) => {
      title.style.color = darkMode;
    })
    isClicked = false;
  } else {
    // background
    background.style.backgroundColor = darkMode;
    // navbar
    navbarText.style.color = lightMode;
    //card on hero
    heroCard.style.backgroundColor = darkMode;
    heroCard.style.color = lightMode;

    // review page
    reviewPage.forEach((review) => {
      review.style.color = lightMode;
    });

    // header text
    headerText.forEach((text) => {
      text.style.color = lightMode;
    });
    // description for image
    descriptionBox.forEach((box) => {
      box.style.backgroundColor = darkMode;
    });

    //blog header text 
    blogHeader.forEach((text => {
        text.style.color = lightMode;
    }));

    // blog text
    blogText.forEach((text) => {
      text.style.color = orange;
    });

    // view more
    viewMore.forEach((text) => {
      text.style.color = orange;
    });

    darkIcon.innerHTML ='<i class="fa-solid fa-moon fa-xl" style="color: #f58634;" id="myButton"></i>';

    houseTitle.forEach((title) => {
      title.style.color = lightMode;
    })

    isClicked = true;
  }
}

const button = document.getElementById("myButton");
button.addEventListener("click", changeMode);
