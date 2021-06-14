# Landing Page Project
_JavaScript_ project that dynamically creates the section menu based on the sections in index.html!  We also mark active the section that is in view.

## Table of Contents
- ### Variables
- ### Functions


### Functions
There are three main functions that accomplish the project goals.

#### buildNav Function
The first one is the buildNav function.  What this does is use the sectionList global variable to retreive the name of the section from the header.  Then it will pass the section ID and the header name to the the addMenu function.


#### addMenu Function

The addMenu function will create the HTML elements needed for the navigation menu.  It will also add the correct class for styling and turn them into hyperlinks.  The the function will add event listeners that replace the default scroll behavior to smoothly scroll the page down to the section.


#### changeActiveClass

This function will add an event listener for scrolling.  When a section is inside the view of the browser window that section will be marked active to apply different styling.