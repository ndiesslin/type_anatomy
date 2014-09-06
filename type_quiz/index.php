<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Type Quiz</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
	<h1 id="title">Type Quiz</h1>
	<div class="flexslider" id="flexcontainer">
		<ul id="letter-space" class="slides">
	    		<li class="letters" id="letter1"></li>
	    		<li class="letters" id="letter2"></li>
	    		<li class="letters" id="letter3"></li>
	    		<li class="letters" id="letter4"></li>
	    		<li class="letters" id="letter5"></li>
	    		<li class="letters" id="letter6"></li>
	    		<li class="letters" id="letter7"></li>
	    		<li class="letters" id="letter8"></li>
	    		<li class="letters" id="letter9"></li>
	    		<li class="letters" id="letter10"></li>
		</ul>
	</div>
        <nav>
            <h1>Type Quiz</h1>
            <div id="mobile-logo"></div>
            <hr>
        <form action="grade.php" method="post" id="quiz">    
		    <div class="flexslider2" id="flexcontainer2">
			    <ul id="quiz-questions" class="slides">
				    <li>
			            <div class="radio">
			                <input type="radio" name="question-1-answers" id="question-1-answers-A" value="A" />
			                <label for="question-1-answers-A">A) Computer Styled Sections </label>
			            </div>
			            <div class="radio">
			                <input type="radio" name="question-1-answers" id="question-1-answers-B" value="B" />
			                <label for="question-1-answers-B">B) Cascading Style Sheets</label>
			            </div>
			            <div class="radio">
			                <input type="radio" name="question-1-answers" id="question-1-answers-C" value="C" />
			                <label for="question-1-answers-C">C) Crazy Solid Shapes</label>
			            </div>
			            <div class="radio">
			                <input type="radio" name="question-1-answers" id="question-1-answers-D" value="D" />
			                <label for="question-1-answers-D">D) None of the above</label>
			            </div>
			        </li>
			        
			        <li>
			            <div>
			                <input type="radio" name="question-2-answers" id="question-2-answers-A" value="A" />
			                <label for="question-2-answers-A">A) 2001</label>
			            </div>
			            <div>
			                <input type="radio" name="question-2-answers" id="question-2-answers-B" value="B" />
			                <label for="question-2-answers-B">B) 1998</label>
			            </div>
			            <div>
			                <input type="radio" name="question-2-answers" id="question-2-answers-C" value="C" />
			                <label for="question-2-answers-C">C) 2006</label>
			            </div>
			            <div>
			                <input type="radio" name="question-2-answers" id="question-2-answers-D" value="D" />
			                <label for="question-2-answers-D">D) 2003</label>
			            </div>
			        </li>
			        
			        <li>
			            <div>
			                <input type="radio" name="question-3-answers" value="A" />
			                <label for="question-3-answers-A">A) Secret Enterprise Organizations</label>
			            </div>
			            <div>
			                <input type="radio" name="question-3-answers" value="B" />
			                <label for="question-3-answers-B">B) Special Endowment Opportunity</label>
			            </div>
			            <div>
			                <input type="radio" name="question-3-answers" value="C" />
			                <label for="question-3-answers-C">C) Search Engine Optimization</label>
			            </div>
			            <div>
			                <input type="radio" name="question-3-answers" value="D" />
			                <label for="question-3-answers-D">D) Seals End Olives</label>
			            </div>
			        </li>
			        
			        <li>
			            <div>
			                <input type="radio" name="question-4-answers" value="A" />
			                <label for="question-4-answers-A">A) is an HTTP Status Code meaning Page Not Found</label>
			            </div>
			            <div>
			                <input type="radio" name="question-4-answers" value="B" />
			                <label for="question-4-answers-B">B) is a good excuse for a clever design</label>
			            </div>
			            <div>
			                <input type="radio" name="question-4-answers" value="C" />
			                <label for="question-4-answers-C">C) should be monitored for in web analytics</label>
			            </div>
			            <div>
			                <input type="radio" name="question-4-answers" value="D" />
			                <label for="question-4-answers-D">D) All of the above</label>
			            </div>
			        </li>
			        
			        <li>
			            <div>
			                <input type="radio" name="question-5-answers" value="A" />
			                <label for="question-5-answers-A">A) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="B" />
			                <label for="question-5-answers-B">B) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="C" />
			                <label for="question-5-answers-C">C) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="D" />
			                <label for="question-5-answers-D">D) CSS-Tricks</label>
			            </div>
			        </li>

			        <li>
			            <div>
			                <input type="radio" name="question-6-answers" value="A" />
			                <label for="question-5-answers-A">A) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-6-answers" value="B" />
			                <label for="question-5-answers-B">B) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-6-answers" value="C" />
			                <label for="question-5-answers-C">C) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-6-answers" value="D" />
			                <label for="question-5-answers-D">D) CSS-Tricks</label>
			            </div>
			        </li>

			        <li>
			            <div>
			                <input type="radio" name="question-5-answers" value="A" />
			                <label for="question-5-answers-A">A) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="B" />
			                <label for="question-5-answers-B">B) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="C" />
			                <label for="question-5-answers-C">C) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="D" />
			                <label for="question-5-answers-D">D) CSS-Tricks</label>
			            </div>
			        </li>

			        <li>
			            <div>
			                <input type="radio" name="question-5-answers" value="A" />
			                <label for="question-5-answers-A">A) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="B" />
			                <label for="question-5-answers-B">B) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="C" />
			                <label for="question-5-answers-C">C) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="D" />
			                <label for="question-5-answers-D">D) CSS-Tricks</label>
			            </div>
			        </li>

			        <li>
			            <div>
			                <input type="radio" name="question-5-answers" value="A" />
			                <label for="question-5-answers-A">A) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="B" />
			                <label for="question-5-answers-B">B) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="C" />
			                <label for="question-5-answers-C">C) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="D" />
			                <label for="question-5-answers-D">D) CSS-Tricks</label>
			            </div>
			        </li>

			        <li>
			            <div>
			                <input type="radio" name="question-5-answers" value="A" />
			                <label for="question-5-answers-A">A) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="B" />
			                <label for="question-5-answers-B">B) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="C" />
			                <label for="question-5-answers-C">C) CSS-Tricks</label>
			            </div>
			            <div>
			                <input type="radio" name="question-5-answers" value="D" />
			                <label for="question-5-answers-D">D) CSS-Tricks</label>
			            </div>
			            <input type="submit" value="Submit Quiz" />
			        </li>

			    </ul>
			</div>
		</form>
	    <div class="flex1-next flex2-next" id="next-button" href="">Next Question</div>
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
