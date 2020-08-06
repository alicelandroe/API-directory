const employeePlace = document.querySelector('.employees');

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(person => addPersonToPage(person))
    });


// ADDING INFO TO PAGE
function addPersonToPage(person) {
    const personBox = document.createElement("div");
    personBox.classList.add('person-box');

    // GET ALL INFORMATION
    const name = createFullName(person)
    const image = createProfilePicture(person);
    const email = createEmail(person);
    const city = createCity(person);
    const cell = createCell(person);
    const address = createAddress(person);
    const birthday = createBirthday(person);

    // create div for all person-box div, aka image, name, email and city
    const personBoxContent = document.createElement("div");
    personBoxContent.className = 'person-box__content';
    personBox.appendChild(personBoxContent);

    // Show name, image, email and city on the page 
    personBoxContent.appendChild(image);

    // create div for text content, aka name, email and city
    const personBoxTextContent = document.createElement("div");
    personBoxTextContent.className = 'person-box__text-content';
    personBoxContent.appendChild(personBoxTextContent);

    personBoxTextContent.appendChild(name);
    personBoxTextContent.appendChild(email);
    personBoxTextContent.appendChild(city);

    employeePlace.appendChild(personBox);

    // create a modal that pops up with employee info
    personBox.addEventListener('click', e => {
        // create modal div
        createModal(image, name, email, city, cell, address, birthday);
    });
};

function createModal(image, name, email, city, cell, address, birthday) {
    const modal = document.createElement("div");
    modal.className = 'modal';

    // content div inside the modal div
    const modalContent = document.createElement("div");
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    // div for close button
    const closeDiv = document.createElement("div");
    closeDiv.style.height = '30px';
    modalContent.appendChild(closeDiv);

    // close button for modal 
    const closeButton = document.createElement("button");
    closeButton.className = 'modal-close-button';
    closeButton.innerText = `x`;
    closeButton.addEventListener("click", () => modal.remove());

    // include info in the modal window:
    closeDiv.appendChild(closeButton);
    modalContent.appendChild(image.cloneNode(true));
    modalContent.appendChild(name.cloneNode(true));
    modalContent.appendChild(email.cloneNode(true));
    modalContent.appendChild(city.cloneNode(true));
    modalContent.appendChild(cell);
    modalContent.appendChild(address);
    modalContent.appendChild(birthday);

    employeePlace.appendChild(modal);
}

// GETTING THE PERSONS INFO
function createProfilePicture(person) {
    const image = document.createElement("img");
    image.className = 'profile-picture';
    const imageSrc = person.picture.medium;
    image.src = imageSrc;
    return image;
}

function createFullName(person) {
    const personFirstName = person.name.first;
    const personLastName = person.name.last;
    const fullName = `${personFirstName} ${personLastName}`;
    const name = document.createElement("h3");
    name.innerText = fullName;
    return name;
}

function createEmail(person) {
    const getEmail = person.email;
    const email = document.createElement("p");
    email.innerText = getEmail;
    return email;
}

function createBirthday(person) {
    const getBirthday = person.dob.date;
    const date = getBirthday.substring(0, 10).replace(/-/g, "/");
    const birthday = document.createElement("p");
    birthday.innerText = `Birthday: ${date}`;
    return birthday;
}

function createAddress(person) {
    const addressStreetName = person.location.street.name;
    const addressStreetNumber = person.location.street.number;
    const addressState = person.location.state;
    const addressPostcode = person.location.postcode;
    const address = document.createElement("p");
    address.innerText = `${addressStreetNumber} ${addressStreetName}, ${addressState} ${addressPostcode}`;
    return address;
}

function createCell(person) {
    const getCell = person.cell;
    const cell = document.createElement("p");
    cell.className = 'cell';
    cell.innerText = getCell;
    return cell;
}

function createCity(person) {
    const getCity = person.location.city;
    const city = document.createElement("p");
    city.className = 'city';
    city.innerText = getCity;
    return city;
}

