fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        const employeePlace = document.querySelector('.employees');
        data.results.forEach(person => {
            const personElement = document.createElement("div");
            personElement.classList.add('person-box');
            
            // NAME
            const personFirstName = person.name.first;
            const personLastName = person.name.last;
            personElement.innerText = `${personFirstName} ${personLastName}`;


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

                // include: 
                        // Image - yes
                        // Name - yes
                        // Email - yes
                        // Cell Number
                        // Detailed Address, including street name and number, city, state, and postcode.
                        // Birthdate
                // in the modal window

                modalContent.innerText = `${personFirstName} ${personLastName}`;
                modalContent.appendChild(email);
                modalContent.appendChild(image);

                // get cell number
                // const getCell = person.cell;
                // const cell = document.createElement("div");
                // cell.innerText = getCell;

    
                // get address number

                // get birthdate number

            });

        });
        
        // employeePlace.innerHTML = data.results;
        console.log(data);
    });

