const toggleMenuOpen = () => document.body.classList.toggle("open");
document.getElementById('navbar').innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>navbar</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="./css/navstyle.css">
  </head>
  <body>
    <nav class="navbar">
      <div class="navbar-overlay" onclick="toggleMenuOpen()"></div>
      <button type="button" class="navbar-burger" onclick="toggleMenuOpen()">
        <span class="material-icons">menu</span>
      </button>
	  
      <h1 class="navbar-title">Profile Website</h1>
      <nav class="navbar-menu">
		    <li><a href="home.html"><span class="material-symbols-outlined">home</span>Home</a></li>
		    <li><a href="about_me.html"><span class="material-symbols-outlined">account_circle</span>About me</a></li>
        <li><a href="portfolio.html"><span class="material-symbols-outlined">folder_open</span>Portfolio</a></li>
		    <li><a href="contact_me.php"> <span class="material-symbols-outlined">contact_page</span>Contact</a></li>
      </nav>
    </nav>
    <script type="text/javascript" src="./js/navscript.js"></script>
  </body>
  `;
