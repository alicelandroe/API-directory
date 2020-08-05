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


// Image
// First 
// Last Name
// Email
// City