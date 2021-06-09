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

let navbarList = document.getElementById("navbar__list");
console.log(navbarList);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addMenu (text,idstring) {
    // Create Elements and retreive the navbar_list element
    // let navbarList = document.getElementById("navbar__list");
    let newNavLi = document.createElement("li");
    let newNavA = document.createElement("a");
    let navContent = document.createTextNode(text);

    // Add the elements and add class names
    newNavA.classList.add("menu__link");
    newNavA.appendChild(navContent);
    navbarList.appendChild(newNavLi, navbarList);
    newNavLi.appendChild(newNavA);
    newNavA.setAttribute("href","#" + idstring);

    // Add event listener and scroll behavior
    newNavA.addEventListener("click", (e) => {
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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

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
