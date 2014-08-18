<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Type Anatomy Quiz</title>
	<link rel="stylesheet" type="text/css" href="css/style.css" />
</head>
<body>
	<section id="quiz">  
		<?php

			$question = array("Who is nicholas?","Who is david?","Who is theresa?"); 

			$a = array("a1","a2","a3");
			$b = array("b1","b2","b3");
			$c = array("c1","c2","c3");
			$o = array("a","b","c","d","e"); 

			$random_questions = mt_rand(0,2); 
			echo "<p>$question[$random_questions]</p>"; 
			print "<form method=\"get\"action=\"check.php\"> 
			    <p><input type=\"radio\"value=\"a\"name=\"R1\">$a[$random_questions]</p> 
			    <p><input type=\"radio\"value=\"b\"name=\"R1\">$b[$random_questions]</p> 
			    <p><input type=\"radio\"value=\"c\"name=\"R1\">$c[$random_questions]</p> 
			    <p><input type=\"submit\"value=\"Submit Answer\"name=\"B1\"></p> 
			    <input type=\"hidden\"name=\"odg\"value=\"$o[$random_questions]\"> 
			</form>\n";

		?>  
	</section>
</body>
</html>
