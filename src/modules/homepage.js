import image from "../assets/pic.jpg"

let homePage = () => {
  //create main div
  let main = document.createElement("main");
  main.classList.add("main");

  //creare left part
  let mainLeft = document.createElement("div");
  mainLeft.classList.add("main-l");
  let the = document.createElement("p");
  the.textContent = "THE";
  the.classList.add("the");
  let foodHouse = document.createElement("p");
  foodHouse.textContent = "FOOD HOUSE";
  foodHouse.classList.add("fh");

  main.appendChild(mainLeft);
  mainLeft.appendChild(the);
  mainLeft.appendChild(foodHouse);

  //create right part
  let mainRight = document.createElement("div");
  mainRight.classList.add("main-r");

  
  let homeImage = document.createElement("img");
  homeImage.src = image;
  homeImage.classList.add("home-image")

  main.appendChild(mainRight);
  mainRight.appendChild(homeImage);

  return main;
};

export default homePage;
