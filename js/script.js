// 1. GALLERY LIGHTBOX
function openLightbox(imageSrc) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// 2. MENU SEARCH BAR
function searchMenu() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let menuItems = document.getElementsByClassName('menu-item');

    for (let i = 0; i < menuItems.length; i++) {
        let itemText = menuItems[i].textContent.toLowerCase();
        if (itemText.includes(input)) {
            menuItems[i].style.display = ""; // Show
        } else {
            menuItems[i].style.display = "none"; // Hide
        }
    }
}

// 3. FORM VALIDATION (Contact & Enquiry)
function validateForm(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Error: Please fill in all required fields.");
        return false;
    }
    
    if (!email.includes("@")) {
        alert("Error: Please enter a valid email address.");
        return false;
    }

    alert("Success! Your message has been sent.");
    event.target.reset(); // Clear the form
    return true;
}