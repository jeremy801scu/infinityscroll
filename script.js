const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
let currentIndex = 0;

// Image File Paths
const imagePaths = [
  'images/IMG_1.jpeg',
  'images/IMG_3.jpeg',
  'images/IMG_5.jpeg',
  'images/IMG_7.jpeg',  
  'images/IMG_10.jpeg',
  'images/mtmap.png',
  // Add more image paths as needed
];

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhoto() {
  // Create <a> to link to image
  const item = document.createElement('a');
  setAttributes(item, {
    href: imagePaths[currentIndex],
    target: '_blank',
  });

  // Create <img> for photo
  const img = document.createElement('img');
  setAttributes(img, {
    src: imagePaths[currentIndex],
    alt: `Image ${currentIndex + 1}`,
    title: `Image ${currentIndex + 1}`,
  });

  // Put <img> inside <a>, then put both inside imageContainer Element
  item.appendChild(img);
  imageContainer.appendChild(item);

  currentIndex = (currentIndex + 1) % imagePaths.length; // Increment currentIndex and wrap around to the start if necessary
}

// Display the initial photo
displayPhoto();

// Set an interval to continuously display the photos
setInterval(displayPhoto, 10); // Change the interval duration as desired (in milliseconds)
