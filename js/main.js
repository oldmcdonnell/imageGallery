const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgFiles = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/*
const fs = require('fs');

// Get the directory path
const directoryPath = './images';

// Create an empty array to store the image paths
const imagePaths = [];

// Read the directory contents
fs.readdirSync(directoryPath).forEach(file => {
  // Check if the file is an image
  if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
    // Add the image path to the array
    imagePaths.push(`${directoryPath}/${file}`);
  }
});

*/

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg' : 'Weird eye image',
    'pic2.jpg' : 'Foot of a stone gargoyle',
    'pic3.jpg' : 'Purple flowers',
    'pic4.jpg' : 'Heiroglyhics',
    'pic5.jpg' : 'Fuzzy moth friend'
  }


//alt text replace function for items in imgFiles, replace "_" with " " so "Closeup_of_an_eye.jpg" becomes "Closeup of an eye"
//const filename = "This_is_a_closeup_of_an_eye.jpg";
//altText = filename.replaceAll("_", " ");
//console.log(altText.replace(".jpg", ""));

/* Looping through images */
for (image of imgFiles){
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}
/* Wiring up the Darken/Lighten button */
