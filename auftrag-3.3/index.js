// Get the modal and buttons
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open the modal
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
