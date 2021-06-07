/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
console.log("Javascript file loaded");
/**
 * Define Global Variables
 * 
*/
const sectionList = document.querySelectorAll('section');
console.log(sectionList);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addNav (text,id) {
    // Create Elements and retreive the navbar_list element
    let navbarList = document.getElementById("navbar__list");
    let newNavLi = document.createElement("li");
    let newNavA = document.createElement("a");
    let navContent = document.createTextNode(text);

    // Add the elements and add class names
    newNavA.classList.add("menu__link");
    newNavA.appendChild(navContent);
    navbarList.appendChild(newNavLi, navbarList);
    newNavLi.appendChild(newNavA);
    newNavA.setAttribute("href","#" + id);

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav () {
    // Get elements from section list
    for (i = 0; i < sectionList.length; i++) {
        // Go through each section and retreive the name of the header
        const landingContainer = document.getElementsByClassName('landing__container')[i];
        const headers = landingContainer.getElementsByTagName('h2')[0];
        // Store header information in variable
        const headersText = headers.innerHTML;

        // Get section id 
        const sectionId = document.getElementsByTagName("section")[i].id;
        console.log(sectionId);
        // Passes the header text to create menu items in nav
        addNav (headersText,sectionId);

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
