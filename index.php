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
        <!--
        <link rel="stylesheet" href="css/main.css">
        -->
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
            /*
                $somearray = array(
                            'Aperture', 'other', 'thing'
                    );
                $i=1;
                foreach ($somearray as $k=>$v){
                    echo '<li><a id="div'.$i.'">'. $v .'<a></li>';
                    $i++;
                }
                */
            ?>
            <div class="letters" id="letter1">
            </div>
            <div class="letters" id="letter2">
            </div>
            <div class="letters" id="letter3">
            </div>
        </section>
        <nav>
            <!--
            <button onclick="myFunction()">Try it</button>

            <p id="demo"></p>
            -->
            <script>
            /*
            function myFunction() {
                var text = "";
                var i;
                for (i = 0; i < 5; i++) {
                    text += "<a>" + "The number is " + i + "</a>" + "<br>";
                }
                document.getElementById("demo").innerHTML = text;
            }
            */
            </script> 

            <h1>Type Anatomy</h1>
            <hr>
            <ul>

                <?php 
                /*
                $x=1;
                $terms = array("foo", "bar", "hello", "world");
                while($x<=5) {
                   echo "<li><a>$terms $x </a></li>";
                   $x++;
                } 
                */

                $somearray = array(
                        'Aperture', 'other', 'thing'
                );
                $i=1;
                foreach ($somearray as $k=>$v){
                    echo '<li><a id="div'.$i.'">'. $v .'<a></li>';
                    $i++;
                }
                ?>

                <li><a href="javascript:showletter('letter1');">Aperture</a>
                </li>
                <li><a href="javascript:showletter('letter2');">Apex</a>
                </li>
                <li><a href="javascript:showletter('letter3');">Arc</a>
                </li>
                <li><a href="javascript:showletter('letter4');">Arm</a>
                </li>
                <li><a href="javascript:showletter('letter5');">Ascender</a>
                </li>
                <li><a href="javascript:showletter('letter6');">Ascender Line</a>
                </li>
                <li><a href="javascript:showletter('letter7');">Ascent Line</a>
                </li>
                <li><a href="javascript:showletter('letter8');">Axis</a>
                </li>
                <li><a href="javascript:showletter('letter9');">Base Line</a>
                </li>
                <li><a href="javascript:showletter('letter10');">Beak</a>
                </li>
                <li><a href="javascript:showletter('letter11');">Bilateral Serif</a>
                </li>
                <li><a href="javascript:showletter('letter12');">Bracket</a>
                </li>
                <li><a href="javascript:showletter('letter13');">Cap Height</a>
                </li>
                <li><a href="javascript:showletter('letter14');">Counter(open)</a>
                </li>
                <li><a href="javascript:showletter('letter15');">Counter(closed)</a>
                </li>
                <li><a href="javascript:showletter('letter16');">Cross Stroke</a>
                </li>
                <li><a href="javascript:showletter('letter17');">Crotch</a>
                </li>
                <li><a href="javascript:showletter('letter18');">Descender</a>
                </li>
                <li><a href="javascript:showletter('letter19');">Decent Line</a>
                </li>
                <li><a href="javascript:showletter('letter20');">Diacritic</a>
                </li>
                <li><a href="javascript:showletter('letter21');">Ear</a>
                </li>
                <li><a href="javascript:showletter('letter22');">Finial</a>
                </li>
                <li><a href="javascript:showletter('letter23');">Foot</a>
                </li>
                <li><a href="javascript:showletter('letter24');">Hairline</a>
                </li>
                <li><a href="javascript:showletter('letter25');">Head Serif</a>
                </li>
                <li><a href="javascript:showletter('letter26');">Joint</a>
                </li>
                <li><a href="javascript:showletter('letter27');">Head Serif</a>
                </li>
                <li><a href="javascript:showletter('letter28');">Leg</a>
                </li>
                <li><a href="javascript:showletter('letter29');">Ligature</a>
                </li>
                <li><a href="javascript:showletter('letter30');">Link/Neck</a>
                </li>
                <li><a href="javascript:showletter('letter31');">Loop</a>
                </li>
                <li><a href="javascript:showletter('letter32');">Overhang</a>
                </li>
                <li><a href="javascript:showletter('letter33');">Serif</a>
                </li>
                <li><a href="javascript:showletter('letter34');">Shoulder</a>
                </li>
                <li><a href="javascript:showletter('letter35');">Spine</a>
                </li>
                <li><a href="javascript:showletter('letter36');">Spur</a>
                </li>
                <li><a href="javascript:showletter('letter37');">Stem</a>
                </li>
                <li><a href="javascript:showletter('letter38');">Stress</a>
                </li>
                <li><a href="javascript:showletter('letter39');">Tail</a>
                </li>
                <li><a href="javascript:showletter('letter40');">Tittle</a>
                </li>
                <li><a href="javascript:showletter('letter41');">Terminal</a>
                </li>
                <li><a href="javascript:showletter('letter42');">Vertex</a>
                </li>
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
