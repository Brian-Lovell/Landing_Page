// File loaded
console.log("Javascript file loaded");

// Global Variables
 
const sectionList = document.querySelectorAll('section');
console.log(sectionList);

let navbarList = document.getElementById("navbar__list");
console.log(navbarList);

// Functions


function addMenu (text,idstring) {
    // Create Elements and retreive the navbar_list element
    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    let navContent = document.createTextNode(text);

    // Add the elements and add class names
    newA.classList.add("menu__link");
    newA.appendChild(navContent);
    navbarList.appendChild(newLi, navbarList);
    newLi.appendChild(newA);
    newA.setAttribute("href","#" + idstring);

    // Add event listener and scroll behavior
    newA.addEventListener("click", (e) => {
        e.preventDefault();
        sectionId = document.getElementById(idstring);
        console.log(sectionId);
        let yPos = sectionId.getBoundingClientRect().top + window.pageYOffset;
        console.log(yPos);
        let scrollOptions = {
            top: yPos,
            behavior: 'smooth',
        };
        window.scrollTo(scrollOptions);
    });
}

function buildNav () {
    // Get elements from section list
    for (i = 0; i < sectionList.length; i++) {
        // Go through each section and get header
        const landingContainer = document.getElementsByClassName('landing__container')[i];
        const headers = landingContainer.getElementsByTagName('h2')[0];
        // Store header
        const headersText = headers.innerHTML;
        // Get section id 
        const sectionId = document.getElementsByTagName("section")[i].id;
        // Passes section id and header text
        addMenu (headersText,sectionId);

    }
}

buildNav();

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events

 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
