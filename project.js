let card = [
  {
    id: 1,
    projectNumber:"Project 1",
    img: "randomnumber.jpeg",
    title: "Guess the Correct Number Game",
    descrption:
      "It is a guess the right number game which I made using HTML CSS and JAVASCRIPT.In js,i used random number generator function which is responsibe for genereting random number.",
  },
  {
    id: 2,
    projectNumber:"Project 2",
    img: "todolist.jpeg",
    title: "ToDoLsit App",
    descrption:
      "It a App where you can write the note and then save/delete.Youcan also delete the saved note",
  },
  {
    id: 3,
    projectNumber:"Project 3",
    img: "calculator.jpeg",
    title: "CALCULATOR",
    descrption: "fully functional calculatorusing HTML CSS and JAVASCRIPT.",
  },
  {
    id: 4,
    projectNumber:"Project 4",
    img: "exchange.jpeg",
    title: "Exchange Rate COnvertor",
    descrption:
      "It is a exchange currency conver.I made this using HTML CSS and JAVASCRIPT.API is used for country code and country flags",
  },

  {
      id:5,
      img:"amhero.jpeg",
      projectNumber:"Project 5",
      title:"Amazon Clone Web",
      descrption:"It is amazone website (clone).i made navbar,herosectionand cards for displaying items ",

  },

  {
      id:6,
      projectNumber:"Project 6",
      img:"amcards.jpeg",
      title:"Cards with image and description",
      descrption:"a user can display their item and can write description",

  },
 
];




let cardContainer = document.querySelector(".card-container");
let myProjectNumber=document.querySelector(".text");
let myCard = document.querySelector(".card");
let cardimg=document.querySelector("img");
let cardContent=document.querySelector(".card_content");
let cardTitle=document.querySelector(".card_title");
let cardDDescription=document.querySelector(".card_description");


let clutter="";

card.forEach((element)=>{

    clutter=clutter+`
    
    <p class="text">${element.projectNumber}</p>
    
    <div class="card-container">
    <div class="card">

      <img src="${element.img}" alt="">

      <div class="card__content">
        
        <p class="card__title">${element.title}</p>
        <p class="card__description">${element.descrption}</p>
      </div>
    </div>
    </div>
    `

});

cardContainer.innerHTML=clutter;