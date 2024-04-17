// Function to fetch JSON data
async function fetchProjects() {
    try {
        const response = await fetch('JS/work.JSON'); // Fetch JSON data from the specified URL
        if (!response.ok) { // Check if the response is not OK
            throw new Error('Failed to fetch data'); // Throw an error if fetching fails
        }
        const jsonData = await response.json(); // Parse the JSON data from the response
        return jsonData.projects; // Return the 'projects' array from the JSON data
    } catch (error) { // Catch any errors that occur during fetching or parsing
        console.error('Error fetching projects:', error); // Log the error to the console
        return []; // Return an empty array if an error occurs
    }
}

// Function to populate the modal content with project details
function populateModal(modal, project) {
    modal.querySelector('.id').textContent = `ID: ${project.id}`; // Set the ID text content
    modal.querySelector('.title').textContent = `Title: ${project.title}`; // Set the title text content
    modal.querySelector('.description').textContent = `Description: ${project.description}`; // Set the description text content
    modal.querySelector('.technologies').textContent = `Technologies: ${project.technologies.join(', ')}`; // Set the technologies text content
    modal.querySelector('.status').textContent = `Status: ${project.status}`; // Set the status text content
}

// Event listener for opening the modal when the first button is clicked
document.getElementById('modal-trigger-1').addEventListener('click', async function() {
    openModal(document.getElementById('myModal1')); // Open the modal
    const projects = await fetchProjects(); // Fetch projects
    if (projects.length > 0) { // If projects are fetched successfully
        const project = projects.find(project => project.id === 1); // Find the project with ID 1
        populateModal(document.getElementById('myModal1'), project); // Populate modal with project details
    }
});

// Event listener for opening the modal when the second button is clicked
document.getElementById('modal-trigger-2').addEventListener('click', async function() {
    openModal(document.getElementById('myModal2')); // Open the modal
    const projects = await fetchProjects(); // Fetch projects
    if (projects.length > 0) { // If projects are fetched successfully
        const project = projects.find(project => project.id === 2); // Find the project with ID 2
        populateModal(document.getElementById('myModal2'), project); // Populate modal with project details
    }
});

// Event listener for opening the modal when the third button is clicked
document.getElementById('modal-trigger-3').addEventListener('click', async function() {
    openModal(document.getElementById('myModal3')); // Open the modal
    const projects = await fetchProjects(); // Fetch projects
    if (projects.length > 0) { // If projects are fetched successfully
        const project = projects.find(project => project.id === 3); // Find the project with ID 3
        populateModal(document.getElementById('myModal3'), project); // Populate modal with project details
    }
});
