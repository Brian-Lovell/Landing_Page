# Landing Page Project
_JavaScript_ project that dynamically creates the section menu based on the sections in index.html!  We also mark active the section that is in view.

## Table of Contents
- ### Global Variables
- ### Functions


### Functions
There are three main functions that accomplish the project goals.

#### buildNav Function
The first one is the buildNav function.  What this does is use the sectionList global variable to retreive the name of the section from the header.  Then it will pass the section ID and the header name to the the addMenu function.


#### addMenu Function

The addMenu function will create the HTML elements needed for the navigation menu.  It will also add the correct class for styling and turn them into hyperlinks.  The the function will add event listeners that replace the default scroll behavior to smoothly scroll the page down to the section.


#### changeActiveClass

This function will add an event listener for scrolling.  When a section is inside the view of the browser window that section will be marked active to apply different styling.

#### Global Variables

sectionList creates an HTML collection we can access to retreive information to generate the Menus.

navbarList will allow us to access the menu.

```
const sectionList = document.querySelectorAll('section');
let navbarList = document.getElementById("navbar__list");
```

# Udacity Review
## Meets Specifications
Congratulations! 🎉
Your project meets all the specifications 👏
I really appreciate the hard work you put into this project. Everything works perfectly fine as required.

Wish you Good Luck on your Journey Ahead, Stay Udacious and Happy Learning! :) udacious.png

## Interface and Architecture
**The project should have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.**

```
css
- styles.css    
index.html
js
- app.js
README.md
```

*The folder structure looks absolutely correct. 😀*

**All features are usable across modern desktop, tablet, and phone browsers.**

*The page is visible across all the devices.*
*Great Job 🎉*

**Styling has been added for active states.**

**There are at least 4 sections that have been added to the page.**

# Landing Page Behavior
**Navigation is built dynamically as an unordered list. Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.**

**It should be clear which section is being viewed while scrolling through the page.**

**When clicking an item from the navigation menu, the link should scroll to the appropriate section.**

## Documentation
**The ReadMe file should replace the given texts on the README template with specific information for this project. It doesn’t have to be thorough, but should have some basic information, eg. project description, usage, dependencies, and use correct the markdown syntax.**

**References: markdown guide and example of README contents**

*The README file for your project looks good.📜*

*For detailed instructions on how to write README, you can please visit this course: Writing READMEs*
*Also check out this link:*
*https://help.github.com/articles/basic-writing-and-formatting-syntax/#headings*

**Comments are present and effectively explain longer code procedures as described in the Udacity JavaScript Style Guide - Comments.**

**Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide - Code Formatting.**

*Code is perfectly formatted. 🤩*
