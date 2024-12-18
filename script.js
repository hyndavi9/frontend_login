document.addEventListener('DOMContentLoaded', function() {
    var isModalOpen = false; // Flag variable to track whether the language modal is open

    // Function to toggle sidebar menu
    function toggleMenu() {
        var sidebar = document.getElementById('sidebar');
        var toggleButton = document.getElementById('toggleButton');

        sidebar.classList.toggle('active');

        if (sidebar.classList.contains('active')) {
            toggleButton.style.display = 'none';
        } else {
            toggleButton.style.display = 'block';
        }
    }

    // Function to navigate to a page
    function navigateToPage(page) {
        console.log("Navigating to page:", page); // Debug log
        window.location.href = page;
    }

    // Function to set language
    function setLanguage(lang) {
        var icon1 = document.querySelector('.iconButton:nth-of-type(1) strong');
        var icon2 = document.querySelector('.iconButton:nth-of-type(2) strong');
        var icon3 = document.querySelector('.iconButton:nth-of-type(3) strong');
        var icon4 = document.querySelector('.iconButton:nth-of-type(4) strong');

        if (lang === 'english') {
            icon1.innerText = 'Hotels';
            icon2.innerText = 'Tourist Spots';
            icon3.innerText = 'Restaurants';
            icon4.innerText = 'Shopping Spots';
        } else if (lang === 'telugu') {
            icon1.innerText = 'హోటళ్లు';
            icon2.innerText = 'పర్యాటక ప్రాంగణాలు';
            icon3.innerText = 'రెస్టారెంట్‌లు';
            icon4.innerText = 'షాపింగ్ ప్రాంగణాలు';
        } else if (lang === 'hindi') {
            icon1.innerText = 'होटल्स';
            icon2.innerText = 'पर्यटन स्थल';
            icon3.innerText = 'रेस्टोरेंट्स';
            icon4.innerText = 'शॉपिंग स्पॉट्स';
        }
    }

    // Event listener for icon buttons
    document.querySelectorAll('.iconButton').forEach(function(button) {
        button.addEventListener('click', function() {
            var page = this.getAttribute('data-page');
            console.log("Button clicked, page:", page); // Debug log
            navigateToPage(page);
        });
    });

    // Event listener for the home button
    document.querySelector('.iconButton[data-page="home.html"]').addEventListener('click', function() {
        var toggleButton = document.getElementById('toggleButton');
        toggleButton.style.display = 'block';
    });

    // Event listener for toggling the sidebar
    document.getElementById('toggleButton').addEventListener('click', toggleMenu);

    // Event listener for the multilingual button
    document.getElementById('multilingualButton').addEventListener('click', function() {
        var modal = document.getElementById('languageModal');
        isModalOpen = true; // Set the flag variable to true when the modal opens
        modal.style.display = 'block'; // Set display property to 'block' to show the modal
    });

    // Event listener for language buttons inside the dialog box
    var languageButtons = document.querySelectorAll('.languageButton');
    languageButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop event propagation to prevent the modal from closing
            var lang = this.getAttribute('data-lang');
            setLanguage(lang); // Call setLanguage function here
            var modal = document.getElementById('languageModal');
            isModalOpen = false; // Reset the flag variable when the modal closes
            modal.style.display = 'none';
        });
    });

    // Event listener to prevent the modal from closing when clicked outside
    document.addEventListener('click', function(event) {
        var modal = document.getElementById('languageModal');
        if (event.target === modal && isModalOpen) {
            event.stopPropagation();
        } else if (event.target !== modal && isModalOpen) {
            modal.style.display = 'none';
            isModalOpen = false;
        }
    });
});
