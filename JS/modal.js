// Get the modal elements
const modal1 = document.getElementById('myModal1');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');

// Get the buttons that open the modals
const modalTrigger1 = document.getElementById('modal-trigger-1');
const modalTrigger2 = document.getElementById('modal-trigger-2');
const modalTrigger3 = document.getElementById('modal-trigger-3');

// Get the close buttons for each modal
const closeBtn1 = modal1.getElementsByClassName('close')[0];
const closeBtn2 = modal2.getElementsByClassName('close')[0];
const closeBtn3 = modal3.getElementsByClassName('close')[0];

// Function to open the modal
function openModal(modal) {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Event listeners for opening the modals when the buttons are clicked
modalTrigger1.addEventListener('click', function() {
    openModal(modal1);
});
modalTrigger2.addEventListener('click', function() {
    openModal(modal2);
});
modalTrigger3.addEventListener('click', function() {
    openModal(modal3);
});

// Event listeners for closing the modals when the close buttons are clicked
closeBtn1.addEventListener('click', function() {
    closeModal(modal1);
});
closeBtn2.addEventListener('click', function() {
    closeModal(modal2);
});
closeBtn3.addEventListener('click', function() {
    closeModal(modal3);
});

// Event listeners for closing the modals when the user clicks outside of them
window.addEventListener('click', function(event) {
    if (event.target === modal1) {
        closeModal(modal1);
    }
    if (event.target === modal2) {
        closeModal(modal2);
    }
    if (event.target === modal3) {
        closeModal(modal3);
    }
});
