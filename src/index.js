let buttons = document.querySelectorAll('.change-bg')
let confirmButton = document.getElementById('confirmButton');

function handleButtonClick(event){
    buttons.forEach(button => {
        button.style.backgroundImage = "url('img/1 button.png')"
        button.style.height = "316px";
    });

    event.currentTarget.style.backgroundImage = "url('img/blue kiosk button.png')"
    event.currentTarget.style.height = "340px";

    confirmButton.style.display = "block";
}

buttons.forEach(button => {
    button.addEventListener('click',handleButtonClick)
});


confirmButton.addEventListener('click', function() {
        // Perform actions when the confirm button is clicked
        // This function will execute when the confirm button is clicked
        // You can add specific actions or logic here

     
    });




 function handleClickOutside(event) {
    if (!event.target.closest('.grid')) {
        // Hide the confirm button
        confirmButton.style.display = "none";

        // Reset background images of buttons
        buttons.forEach(button => {
            button.style.backgroundImage = "url('img/1 button.png')";
            button.style.height = "316px";
        });
    }
}

// Event listener for clicks outside of the buttons area
document.addEventListener('click', handleClickOutside);   