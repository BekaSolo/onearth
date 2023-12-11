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