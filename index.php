<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Type Anatomy</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="icon" href="img/favicon.svg" type="image/svg+xml">
        <link rel="icon" href="img/favicon.png" type="image/x-icon">
        <link rel="icon" href="img/favicon.ico" type="image/x-icon">

        <meta name="mobile-web-app-capable" content="yes">
        <link rel="shortcut icon" sizes="196x196" href="196.png">
        <link rel="shortcut icon" sizes="152x152" href="152.png">
        <link rel="apple-touch-icon" sizes="152x152" href="152.png">
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="152.png">
        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css"/>
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css"/>
        <!--[if IE]
        <link href="/stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css"/>
        <![endif]-->

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700%7CCLibre+Baskerville' rel='stylesheet' type='text/css'>

        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <a href="javascript:showletter('letter1');" class="letters" id="intro">
            <div id="logo"></div>
            <h1></h1>
            <div id="continue-here"><em>Click anywhere to continue to site ...</em></div>
        </a>
        <section id="letter-space">
            <h1></h1>
            <?php 
	        for($i=1;$i<47;$i++) {?>
	        <div class="letters" id="letter<?php echo $i; ?>"></div>
            <?php }?>
        </section>
        <nav>
            <h1>Type Anatomy</h1>
            <hr>
            <ul>
	            <?php 
	            $letters = array("Aperature", "Apex", "Arc", "Arm", "Ascender", "Ascender Line", "Ascender height", "Ascent Line", "Axis", "Base Line", "Beak", "Bilateral Serif", "Body width", "Bowl", "Bracket", "Cap Height", "Character width", "Counter(open)", "Counter(closed)", "Cross Stroke", "Crotch", "Descender", "Decent Line", "Diacritic", "Ear", "Eye", "Finial", "Foot", "Hairline", "Head Serif", "Joint", "Leg", "Ligature", "Link/Neck", "Loop", "Overhang","Serif", "Shoulder","Spine", "Spur", "Stem", "Stress", "Tail", "Tittle", "Terminal", "Vertex");
		        $num = 1;
	            foreach ($letters as $letter) : ?>
	                <li><a href="javascript:showletter('letter<?php echo $num++;?>');" class="nav_click"><?php echo $letter; ?></a></li>
	            <?php endforeach;?>
            </ul>
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
