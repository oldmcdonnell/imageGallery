const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const directoryPath = '../img/';
  
const imgFiles = [];
const fs = require('fs');

function getFiles(directoryPath, imgFiles) {
    const filesInDirectory = fs.readdirSync(directoryPath);
  
    for (const file of filesInDirectory) {
      const filePath = `${directoryPath}/${file}`;
  
      if (fs.statSync(filePath).isDirectory()) {
        getFiles(filePath, imgFiles);
      } else {
        imgFiles.push(filePath);
      }
    }
  }
  
  getFiles(directoryPath, imgFiles);
  
  console.log(imgFiles);

//image container?
const container = document.querySelector("#image-container");

imgFiles.forEach((imgFiles) => {
  const img = document.createElement("img");
  img.src = imgFiles;
  container.appendChild(img);
});



/* Declaring the alternative text for each image file */

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
