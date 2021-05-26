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

const landingContainer = document.getElementsByClassName('landing__container')[1];
console.log(landingContainer);

const headers = landingContainer.getElementsByTagName('h2')[0];
console.log(headers);

const headersText = headers.innerHTML;
console.log(headersText);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (i = 0; i < sectionList.length; i++) {
    console.log("For loop test")
    
}



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
