import './app-bar';
import './hero-element';
import { getAllElement, getElement } from '../../utils/element';

// define all UI variable
const navToggler = getElement('.nav-toggler');
const navMenu = getElement('.site-navbar ul');
const navLinks = getAllElement('.site-navbar a');

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener('click', navLinkClick));
}

// load all event listners
allEventListners();
