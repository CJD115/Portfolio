// Get the modal element
const modal = document.getElementById('myModal1');

// Get the button that opens the modal
const modalTrigger = document.getElementById('modal-trigger');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for opening the modal when the button is clicked
modalTrigger.addEventListener('click', openModal);

// Event listener for closing the modal when the close button is clicked
closeBtn.addEventListener('click', closeModal);

// Event listener for closing the modal when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});