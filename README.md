<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/home.css">
    <link rel="stylesheet" href="/css/res-style.css">
    <link rel="stylesheet" href="/css/res-home.css">

    <title>Flickytoons</title>
</head>

<body>
    <nav class="navbar">
        <div class="navbar-logo">
            <a class="logoimg" href="/"><img src="/img/logo.jpg" alt="logo"></a>
        </div>
        <div class="title">Flickytoons</div>
        <ul class="navbar-links">
            <li><a href="/">Home</a></li>
            <li class="dropdown">
                <a href="#">Popular Toons &#9661;</a>
                <ul class="dropdown-menu">
                    <li><a href="doraemon.html">Doraemon</a></li>
                    <li><a href="oggy.html">Oggy and the Cockroches</a></li>
                    <li><a href="shinchan.html">Shinchan</a></li>
                </ul>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <!-- <div class="search-box">
            <input type="text" placeholder="Search">
            <button class="search-button">&#128269;</button>
        </div> -->

        <div class="search-box">
            <form id="search-form" action="/search" method="GET">
                <input type="text" name="query" id="search-input" placeholder="Search">
                <button type="submit" class="search-button">&#128269;</button>
            </form>
        </div>
        <div class="navbar-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
    <div class="bodyimg"><img src="\img\building.jpg" alt="body"></div>


    <div class="contentshinchan">
        <div id="shinchan">
            <img src="\img\shinchan.jpg" alt="Shinchan">
            <li><a href="shinchan.html">Shinchan All Season {Hindi} Episodes Download (1080p)</a></li>
            <p>Shinchan All Seasons in Hindi Download, Shinchan All Seasons Hindi Dubbed Download, Download
                Shinchan <br> All Seasons in Hindi, Shinchan All Episodes in Hindi Download. Check out All
                Shinchan Movies Here.</p>
        </div>
    </div>

    <div id="contentdoraemon">
        <div id="doraemon">
            <img src="/img/doraemon.jpg" alt="Doraemon">
            <li><a href="doraemon.html">Doraemon All Season {Hindi} Episodes Download (1080p)</a></li>
            <p>Doraemon All Seasons in Hindi Download, Doraemon All Seasons Hindi Dubbed Download, Download
                Doraemon <br> All Seasons in Hindi, Doraemon All Episodes in Hindi Download. Check out All
                Doraemon Movies Here.</p>
        </div>
    </div>

    <div id="contentoggy">
        <div id="oggy">
            <img src="/img/oggy.jpg" alt="oggy">
            <li><a href="oggy.html">Oggy and the Cockroaches All Season {Hindi} Episodes</a></li>
            <p>Oggy And The Coackroaches All Season hindi Online, Oggy and the Cockroaches All Season Episodes
                in Hindi DDP2.0<br> 480p, 720p and 1080p HD WEB-DL | 10bit HEVC, Oggy and the Cockroaches All
                Season Hindi Dubbed Episodes<br> Download/Watch Online, Oggy and the Cockroaches All Season
                Hindi Dubbed Episodes Download</p>
        </div>
    </div>


    <footer id="footer">
        <div class="footercontent">
            <p> Copyright © 2023, All Rights Reserved by <a href="/">Flickytoons</a> </p>
        </div>
    </footer>
    <script src="/js/resp.js"></script>
</body>

</html>
