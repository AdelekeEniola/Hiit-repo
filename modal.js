// Grab the Modal Content
const modal = document.querySelector(".modal-form")

// Grab the button that will open the Modal
const openMOdalBtn = document.querySelector(".open-modal-btn")

// Grab the button that will close the modal
const closeModalBtn = document.querySelector(".cancel-btn")

// Listen to when the open Modal Button is clicked
openMOdalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

// Listen to when the Cancel Button is also clicked
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
})