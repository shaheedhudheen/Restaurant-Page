let names = [
  "Crab & avocado bruschetta - $ 14.95",
  "Italian pate bruschetta - 18.35",
  "Italian steak frites -  $ 32.30",
  "Salmon salad - $ 43.29",
  "Turkey milanese - $ 12.65",
];




//create a menu
function items(names) {
  let menuBox = document.createElement("div");
  menuBox.classList.add("menu-box");

  //menu items
  names.forEach((element) => {
    let item = document.createElement("p");
    item.textContent = element;
    menuBox.appendChild(item);
  });
  return menuBox;
}

let menu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menuTab");

  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "MENU";
  menuHeading.classList.add("menu-heading");
  menu.appendChild(menuHeading);

  menu.appendChild(items(names));

  return menu;
};

export default menu;
