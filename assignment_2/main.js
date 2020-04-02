const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg'); /* Creating image tag for html and in the image tag it is creating the source attribute.Then it is creating a name for each image and replacing the index as the number for the image  */
    thumbBar.appendChild(newImage);
    newImage.onclick = function(current) {
      displayedImage.src = current.target.src; // selecting the image pathway currently being clicked and setting the display image pathway to that
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
  const brightness = btn.getAttribute('class'); // making a variable that grab ahold of the button class attribute
  if (brightness === 'dark') { // checking if the class is set to "dark" then
    btn.setAttribute('class','light'); // change it to light upon light
    btn.textContent = 'Lighten'; // changing the text displayed
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  if (brightness === 'light') { // same as before but for dark
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}