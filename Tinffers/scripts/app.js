/* VARIABLES */


// Store Navigation Bar
const navBar = document.querySelector('.container')
// Store Navigation Links
const navItems = document.querySelectorAll('.nav-item')
// Store All the Sections
const allSections = document.querySelectorAll('section')

/* FUNCTIONS */

// FUNCTION: Add box-shadow class to navBar
const addBoxShadowToNavBar = () => {
    if(window.scrollY >= 250) {
        navBar.classList.value = 'container box-shadow'

    } else if(window.scrollY <= 249) {
        navBar.classList.value = 'container'
    }
}


/* EVENTS */

// EVENT: Scroll
document.addEventListener('scroll', (e) => {
    // Add box-shadow class to NavBar
   addBoxShadowToNavBar()
})
