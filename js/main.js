const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

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
  
  const directoryPath = '../img/';
  
  const imgFiles = [];
  
  getFiles(directoryPath, imgFiles);
  
  console.log(imgFiles);

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
