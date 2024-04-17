// Get the modal element
const modal = document.getElementById('myModal1');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// Get the underlined text element
const modalTrigger = document.getElementById('modal-trigger');

// When the user clicks the underlined text, open the modal
modalTrigger.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
