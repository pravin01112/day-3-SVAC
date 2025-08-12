// Welcome Alert
window.onload = function() {
    alert("Welcome to my website!");
};

// Change Background Color on Button Click
const changeColorBtn = document.getElementById('changeColorBtn');
if (changeColorBtn) {
    changeColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = "#ffe4b5";
    });
}

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        document.getElementById('thankYouMessage').classList.remove('hidden');
        contactForm.reset();
    });
}
