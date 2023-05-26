const foot = document.querySelector('.foot');
fetch('/footer.html')
  .then(res => res.text())
  .then(data => {
    foot.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    eval(doc.querySelector('script').textContent);
  });

window.addEventListener('scroll', function() {
  // Get the distance of the user's scroll from the top of the page
  const scrollDistance = window.pageYOffset;
  
  // Get the height of the viewport
  const viewportHeight = window.innerHeight;
  
  // Get the height of the entire page
  const pageHeight = document.body.scrollHeight;
  
  // Calculate how far the user has scrolled from the bottom of the page
  const scrollFromBottom = pageHeight - (scrollDistance + viewportHeight);
  
  // Show the footer if the user has scrolled to the bottom of the page
  if (scrollFromBottom <= foot.offsetHeight) {
    foot.style.display = '0px';
  } else {
    foot.style.display = '-100px';
  }
});

document.getElementById('footer').innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>footer</title>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link href="./css/footerstyle.css" rel="stylesheet" />
  </head>
  <body>
      <footer>
        <div class="footer-content">
            <img src="./images/logo.png" alt="logo">
            <ul class="menu-link">
                <li><a href="Home.html">Home</a></li>
                <li><a href="about.html">About me</a></li>
                <li><a href="###">Portfolio</a></li>
                <li><a href="###">Contact</a></li>
              </ul>
          
            <ul class="icons">
              <a href="#" class="icon icon--facebook"><i class="ri-facebook-fill"></i></a>
              <a href="#" class="icon icon--instagram"><i class="ri-instagram-line"></i></a>
              <a href="#" class="icon icon--twitter"><i class="ri-twitter-line"></i></a>
              <a href="#" class="icon icon--linkedin"><i class="ri-linkedin-line"></i></a>
              <a href="#" class="icon icon--github"><i class="ri-github-line"></i></a>
            </ul>
        </div>
        <div class="footer-bottom">
        <p>copyright &copy;2023 MyProfile from BSIT 2-B.</p>
        </div>
    </footer>
     <script type="text/javascript" src="./js/footerscript.js"></script>
  </body>
</html>`;