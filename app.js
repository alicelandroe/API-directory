fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        const employeePlace = document.querySelector('.employees');
        data.results.forEach(person => {
            const personElement = document.createElement("div");
            personElement.classList.add('person-box');
            
            // GET ALL INFORMATION
            // NAME
            const personFirstName = person.name.first;
            const personLastName = person.name.last;
            const fullName = `${personFirstName} ${personLastName}`;
            const name = document.createElement("div");

            name.innerText = fullName;

            // IMAGE
            const image = document.createElement("img");
            const imageSrc = person.picture.medium;
            image.src = imageSrc;
            
            // EMAIL
            const getEmail = person.email;
            const email = document.createElement("div");
            email.innerText = getEmail;

            // CITY
            const getCity = person.location.city;
            const city = document.createElement("div");
            city.innerText = getCity;

            // CELL 
            const getCell = person.cell;
            const cell = document.createElement("div");
            cell.innerText = getCell;
            
                
            // ADDRESS including street name and number, city, state, and postcode.
            const addressStreetName = person.location.street.name;
            const addressStreetNumber = person.location.street.number;
            const addressState = person.location.state;
            const addressPostcode = person.location.postcode;
            const address = document.createElement("div");
            address.innerText = `${addressStreetNumber} ${addressStreetName}, ${addressState} ${addressPostcode}`;
            

            // BIRTHDAY
            const getBirthday = person.dob.date;
            const date = getBirthday.substring(0,10).replace(/-/g, "/");

            const birthday = document.createElement("div");
            birthday.innerText = `Birthday: ${date}`;


            // Show name, image, email and city on the page 
            personElement.appendChild(image);
            personElement.appendChild(email);
            personElement.appendChild(city);

            employeePlace.appendChild(personElement);

            // create a modal that pops up with employee info
            personElement.addEventListener('click', e => {
                // create modal div
                const modal = document.createElement("div");
                modal.className = 'modal';
                // modal.innerText = 'hej hej hej hej';

                employeePlace.appendChild(modal);

                // content div inside the modal div
                const modalContent = document.createElement("div");
                modalContent.className = 'modal-content';
                modal.appendChild(modalContent);

                // close button for modal 
                const closeButton = document.createElement("button");
                closeButton.innerText = `x`;
                closeButton.style.width = "50px";
                closeButton.style.height = "50px";
                closeButton.addEventListener("click", () => modal.remove())

                // include info in the modal window:
                modalContent.appendChild(closeButton);
                modalContent.appendChild(image);
                modalContent.appendChild(name);
                modalContent.appendChild(email);
                
                modalContent.appendChild(cell);
                modalContent.appendChild(address);
                modalContent.appendChild(birthday);

            });

        });
        
        console.log(data);
    });

