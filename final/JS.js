
// grab header and footer - make a reference for each
const mainHeader = document.querySelector('#main-header');
const mainFooter = document.querySelector('#footer-section');

mainHeader.innerHTML = `
    <div class="logo">
      <a href="#">
      <img src="./images/logo.png" alt="logo" class="iconLogo">
      </a>
      <p>Route Dial</p>      
    </div>
    <nav>
      <ul class="menu" id="menu">
        <li><a href="1.Home.html">Home</a></li>
        <li><a href="2.Product.html">Product</a></li>
        <li><a href="About-Us.html">About us</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </nav>
    <div class="login" id="login">
      <a href="#">Login</a>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#">Register</a>
    </div>
`;

mainFooter.innerHTML = `

  <div class="footer-left">

        <div>
          <i class="fa fa-map-marker"></i>
          <p><a href="#">444 Cedros Ave, California</a></p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p><a href="#">+1(123) DIAL-NOW</a></p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="#">info@rotarydialphones.com</a></p>
        </div>
  </div> 
  

  <div class="footer-center"> 
         
        <p class="footer-company-name">&copy; 2024 Rotary Dial. All rights reserved.<br>
           Privacy Policy
        </p>
    
  </div>  


  <div class="footer-right">

    <div class="footer-icons">
      <img src="./images/logo.png" alt="logo" class="iconLogo">
      <a href="#" id="fa-facebook" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-linkedin"></a>
      <a href="#" class="fa fa-github"></a>
    </div>
      <p class="footer-links">
          <a href="#">Blog</a>&nbsp;|&nbsp;
          <a href="#">Faq</a>&nbsp;|&nbsp;
          <a href="#">Contact</a>
      </p>
  </div>  
`;


// Navigation color change function
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mainHeader.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
  } else {
    mainHeader.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};

// Images slideshow function
let count = 0;
const image = document.querySelector('#pictureShow');

function nextImage() {
  count++;
  if (count >= 2) {
    count = 0;
  }
  image.style.transform = `translateX(${- count * 100}%)`;
}

setInterval(nextImage, 3500);
