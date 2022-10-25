let contact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contactTab");

  const contactHeading = document.createElement("h1");
  contactHeading.textContent = "Find us here:";
  contactHeading.classList.add("contact-heading");
  contact.appendChild(contactHeading);

  const days = document.createElement("p")
  const time = document.createElement("p")
  const place = document.createElement("p")
  const email = document.createElement("p")

  days.classList.add('contact-info')
  time.classList.add('contact-info')
  place.classList.add('contact-info')
  email.classList.add('contact-info')

  days.textContent = "Monday - Sunday";
  time.textContent = "10am - 11pm";
  place.textContent = "Pang, Malappuram";
  email.textContent = "thefoodhouse@company.com";

  contact.appendChild(days)
  contact.appendChild(time)
  contact.appendChild(place)
  contact.appendChild(email)

  return contact;
};

export default contact;


