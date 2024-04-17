const display = document.querySelector("#display-data");

function fetchJSONData() {
    return fetch('JS/work.JSON')
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .catch((error) =>
        console.error("Unable to fetch data", error));
}

async function displayDataInModal() {
    try {
        const data = await fetchJSONData();
        const modalContent = document.querySelector(".modal-content");
        const modalBody = modalContent.querySelector(".modal-body");

        // Assuming there's only one project in the JSON for simplicity
        const project = data.projects[0];
        
        // Populate modal with project data
        modalBody.innerHTML = `
            <p class="id">ID: ${project.id}</p>
            <p class="title">Title: ${project.title}</p>
            <p class="description">Description: ${project.description}</p>
            <p class="technologies">Technologies: ${project.technologies.join(', ')}</p>
            <p class="status">Status: ${project.status}</p>
        `;
    } catch (error) {
        console.error("Error displaying data in modal:", error);
    }
}

// Call the function to display data within the modal
displayDataInModal();

// Rest of your code for modal functionality...
