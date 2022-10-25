let navbar = () => {
  const navbar = document.createElement("div");
  const navl = document.createElement("div");
  const navr = document.createElement("div");

  navbar.classList.add("navbar");
  navbar.appendChild(navl);
  navbar.appendChild(navr);
  navl.classList.add("nav-l");
  navr.classList.add("nav-r");

  const navTitle = document.createElement("p");
  navTitle.classList.add("nav-title");
  navTitle.textContent = "THE FOOD HOUSE";
  navl.appendChild(navTitle);

  const nl1 = document.createElement("p");
  nl1.classList.add("nav-link", "home");
  nl1.textContent = "HOME";
  const nl2 = document.createElement("p");
  nl2.classList.add("nav-link", "menu");
  nl2.textContent = "MENU";
  const nl3 = document.createElement("p");
  nl3.classList.add("nav-link", "contact");
  nl3.textContent = "CONTACT";

  navr.appendChild(nl1)
  navr.appendChild(nl2)
  navr.appendChild(nl3)

  return navbar;
};

export default navbar;
