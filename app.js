fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => {
        const employeePlace = document.querySelector('.employees');
        data.results.forEach(person => {
            const personElement = document.createElement("div");
            const personFirstName = person.name.first;
            const personLastName = person.name.last;

            const createImg = document.createElement("img");
            const personImage = person.picture.medium;
            createImg.src = personImage;
            
            
            console.log({createImg})

            personElement.innerText = `${personFirstName} ${personLastName}`;

            personElement.appendChild(createImg);
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