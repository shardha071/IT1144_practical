document.addEventListener('DOMContentLoaded', function() {

    let searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toLowerCase().trim();
            let cards = document.querySelectorAll('.place-card');

            cards.forEach(function(card) {
                let name = card.getAttribute('data-name').toLowerCase();
                if (name.includes(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    let form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('userName').value;
            let email = document.getElementById('userEmail').value;
            let message = document.getElementById('userMessage').value;

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all the fields!");
            } else {
                alert("Thank you, " + name + "! Your message has been sent successfully.");
                form.reset();
            }
        });
    }
});