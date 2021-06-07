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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addNav (text) {
    // Create Elements and retreive the navbar_list element
    let navbarList = document.getElementById("navbar__list");
    let newNavLi = document.createElement("li");
    let newNavA = document.createElement("a");
    let navContent = document.createTextNode(text);

    // Add the elements and add class names
    newNavLi.classList.add("menu__link");
    newNavA.appendChild(navContent);
    navbarList.appendChild(newNavLi, navbarList);
    newNavLi.appendChild(newNavA);

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav () {
    for (i = 0; i < sectionList.length; i++) {
        const landingContainer = document.getElementsByClassName('landing__container')[i];
        const headers = landingContainer.getElementsByTagName('h2')[0];
        const headersText = headers.innerHTML;
        addNav (headersText);

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
