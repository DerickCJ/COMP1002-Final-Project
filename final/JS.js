
// Global header and footer

document.getElementById("logo").innerHTML = `<img src="./images/logo.png" alt="logo">`;

document.getElementById("menu").innerHTML = `
      <li><a href="1.Home.html">Home</a></li>
      <li><a href="2.Product.html">Product</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="contact.html">Contact Us</a></li>`;

document.getElementById("login").innerHTML = `
      <a href="#">Login</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="#">Register</a>`;

document.getElementById("footer").innerHTML = `
      &copy; 2024 Rotary Dial. All rights reserved.<br>
      Privacy Policy`;



// Navigation color change function
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  } else {
    document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};

// Images slideshow function
let count = 0;
const image = document.querySelector('#pictureShow');
const totalImage = 2;

function nextImage() {
  count++;
  if (count >= totalImage) {
    count = 0;
  }
  image.style.transform = `translateX(${-count * 100}%)`;
}

setInterval(nextImage, 4000);
