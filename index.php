<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge'><![endif]-->
    <meta name="description" content="Type Anatomy is a website designed to help people understand and learn the anatomy of typography.">
    <meta name="keywords" content="type, anatomy, typography, typography quiz, design, web, nicholas, diesslin, nicholas diesslin">
    <meta name="author" content="Nicholas Diesslin">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Type Anatomy</title>
    <link rel="icon" href="img/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="img/favicon.png" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="shortcut icon" sizes="196x196" href="img/196.png">
    <link rel="shortcut icon" sizes="152x152" href="img/152.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/apple.png">
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="img/apple.png">
    <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css"/>
    <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700%7CCLibre+Baskerville' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <a class="letters nav_click" id="intro" onclick="showletter('letter1')">
      <div id="logo"></div>
      <div id="continue-here"><em>Click anywhere to continue to site ...</em></div>
    </a>
    <section id="letter-space">

      <h2>Typography letters</h2>
      <?php
  	for($i=1;$i<47;$i++) {?><div class="letters" id="letter<?php echo $i; ?>"></div>
      <?php }?>

    </section>
    <nav>
      <h1>Type Anatomy</h1>
      <h2>A website on the anatomy of typography.</h2>
      <hr>
      <ul>

      <?php
      $letters = array("Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender Height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body Width", "Bowl", "Bracket", "Cap Height", "Character Width", "Counter (Open)", "Counter (Closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head Serif", "Joint", "Leg", "Ligature", "Link/ Neck", "Loop", "Overhang","Serif", "Shoulder","Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex");
    $num = 1;
      foreach ($letters as $letter) : ?>
  <li><a class="nav_click" onclick="showletter('letter<?php echo $num++;?>')"><?php echo $letter; ?></a></li>
      <?php endforeach;?>

      </ul>
      <hr>
      <div id="subnavigation">
      	<ul>
      		<li><a href="type_quiz/">Take the Quiz</a></li>
      	</ul>
      </div>
    </nav>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-46191310-4', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
