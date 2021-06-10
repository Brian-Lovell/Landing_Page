// File loaded
console.log("Javascript file loaded");

// Global Variables
 
const sectionList = document.querySelectorAll('section');
console.log(sectionList);

let navbarList = document.getElementById("navbar__list");
console.log(navbarList);

// Functions

function addMenu (text,idString) {
    // Create Elements and retreive the navbar_list element
    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    newA.classList.add("menu__link");

    // Add the elements and add class names
    let navContent = document.createTextNode(text);
    newA.appendChild(navContent);
    navbarList.appendChild(newLi, navbarList);
    newLi.appendChild(newA);
    newA.setAttribute("href","#" + idString);

    // Add event listener and scroll behavior
    newA.addEventListener("click", (e) => {
        e.preventDefault();
        sectionId = document.getElementById(idString);
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

// Set sections as active

// Could not get this to work
// function addElement (elementString, classString, textString, attribute) {
//     console.log("I'm a function that creates elements!")
//     let newEl = document.createElement(elementString);
//     newEl.classList.add(classString);
//     let newText = document.createTextNode(textString);
//     newEl.appendChild(newText);
//     newEl.setAttribute(attribute);

// }