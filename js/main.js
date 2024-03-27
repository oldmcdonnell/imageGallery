const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const directoryPath = './img';
const imagePaths = [];
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];



const alts = {
    'pic1.jpg' : 'Weird eye image',
    'pic2.jpg' : 'Foot of a stone gargoyle',
    'pic3.jpg' : 'Purple flowers',
    'pic4.jpg' : 'Heiroglyhics',
    'pic5.jpg' : 'Fuzzy moth friend'
  }



/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }
  
    /* Wiring up the Darken/Lighten button */
    
    btn.addEventListener('click', () => {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
          btn.setAttribute('class','light');
          btn.textContent = 'Lighten';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
          btn.setAttribute('class','dark');
          btn.textContent = 'Darken';
          overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
      });
      


/*
const fs = require('fs');

// Get the directory path
const directoryPath = './img';

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
// Get the directory path




//alt text replace function for items in imgFiles, replace "_" with " " so "Closeup_of_an_eye.jpg" becomes "Closeup of an eye"
//const filename = "This_is_a_closeup_of_an_eye.jpg";
//altText = filename.replaceAll("_", " ");
//console.log(altText.replace(".jpg", ""));
