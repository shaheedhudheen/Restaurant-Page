const items = {
  Noodles: {
    names: ["Chicken", "Ginger", "Fish", "Egg", "Rice"],
    prices: [4.54, 4.54, 5.66, 7.13, 5.0],
  },
  Burger: {
    names: ["Lamp", "Chicken", "Vegitable", "Beef", "Pug"],
    prices: [6.54, 7.54, 3.66, 8.13, 9.0],
  },
  Pizza: {
    names: ["Lamp", "Chicken", "Pan", "Greek", "Cheese"],
    prices: [6.54, 7.54, 3.66, 8.13, 9.0],
  },
  "Ice Cream": {
    names: ["Vannila", "Cotton", "Peenut", "Dough", "Cookie"],
    prices: [6.00, 5.54, 4.66, 7.13, 6.50],
  },
};

let menu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menuTab");

  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "MENU";
  menuHeading.classList.add("menu-heading");
  menu.appendChild(menuHeading);

  return menu;
};

export default menu;
