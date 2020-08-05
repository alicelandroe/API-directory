fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        const employeePlace = document.querySelector('.employees');
        data.results.forEach(person => {
            const personElement = document.createElement("div");
            
            // NAME
            const personFirstName = person.name.first;
            const personLastName = person.name.last;
            personElement.innerText = `${personFirstName} ${personLastName}`;


            // IMAGE
            const createImg = document.createElement("img");
            const personImage = person.picture.medium;
            createImg.src = personImage;
            
            // EMAIL
            const email = person.email;
            const createEmailDiv = document.createElement("div");
            createEmailDiv.innerText = email;

            // CITY
            const city = person.location.city;
            const createCityDiv = document.createElement("div");
            createCityDiv.innerText = city;


            personElement.appendChild(createImg);
            personElement.appendChild(createEmailDiv);
            personElement.appendChild(createCityDiv);
            employeePlace.appendChild(personElement);

            // console.log(personElement);
            // console.log(person);
        });
        
        // employeePlace.innerHTML = data.results;
        // console.log(data);
    });



// MODAL POP-UP
var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

// Image
// First 
// Last Name
// Email
// City