console.log("JavaScript is linked and running!");



/* accordion button  */
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});


/* footer  */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('year').textContent = new Date().getFullYear();
});



/* button */
document.addEventListener('DOMContentLoaded', function() {
    var biteButton = document.querySelector('.bite-button');
    biteButton.addEventListener('click', function() {
        alert('You clicked the Bite button!');
        // You can add more interactive behaviors here
    });
});
