const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgFiles = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
  }


//alt text replace function for items in imgFiles, replace "_" with " " so "Closeup_of_an_eye.jpg" becomes "Closeup of an eye"
//const filename = "This_is_a_closeup_of_an_eye.jpg";
//altText = filename.replaceAll("_", " ");
//console.log(altText.replace(".jpg", ""));

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
