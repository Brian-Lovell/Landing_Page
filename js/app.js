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
        let yPos = sectionId.getBoundingClientRect().top + window.pageYOffset;
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

function changeActiveClass () {
    window.addEventListener("scroll", function () {
        for (i = 0; i < sectionList.length; i++) {
            let sectionY = sectionList[i].getBoundingClientRect().bottom;
            let viewPortHeight = window.innerHeight;
            if (sectionY <= viewPortHeight && sectionY >= 0) {
                sectionList[i].classList.add("your-active-class");
            } else {
                sectionList[i].classList.remove("your-active-class");
            }
        }
    });

}

buildNav();
changeActiveClass();