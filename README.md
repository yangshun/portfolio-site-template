CS3240 Lab Bootstrap Assignment
===============================

### Introduction

The homepage is located inside `index.html`. This website is a single-page application built using AngularJS for routing, templating, and part of the user interaction. Bootstrap was used for the CSS layouts and Animate.css was used for adding flashy features.


### Description

This site is my portfolio site where I showcase my past projects and resume. I have been working on front end development for a few years now.


### Walkthrough

##### Usage of a grid system
This was used throughout the webpage which can be inspected from the source code.

##### Responsive Design
Using Bootstrap 3, sites are responsive out of the box. Resize the browser width to see this in action. The nav bar automatically collapses to form a mobile-friendly navigation bar. Columns are also stacked on top of each other, which can be see from the portfolio page.

##### Base CSS
- **Forms**: Used in the **Contact** page.
- **Responsive Images**: Used in the **Portfolio** page.
- **Responsive Utilities**: Used for hiding the name in the navigation bar on mobile.

##### Components
- **Navbar**: Used for the navigation bar of the page.
- **Labels**: Used for labels on the **Portfolio** page.

##### JavaScript
- **Carousel**: Used for screenshots of certain project on the **Portfolio** page, such as NUSMods and Una.

#### Form Validation
- AngularJS' built-in form validation is used to check for the valid state of the form. There's no need for jQuery here.

###3 jQuery Effects
- The form is hidden using `hide()` after the user has entered valid form input and hits on "Submit".


### Usability and Aesthetics
- The page has a simple and straightforward navigation system by keeping the navigation bar at the top. Also, all pages can be accessed from every page, so that users do not get lost while surfing the page.
- CSS3 animations have been used throughout the site to make the content more dynamic.


### Special Note

The base site was generated using [Yeoman](http://yeoman.io/)'s web app generator. Yeoman is a scaffolding tool for quick setting up of websites. What is submitted is the build version of the website, in the generated `dist` folder. CSS styles can be found inside `styles` directory and partial templates reside in the `views` directory.
