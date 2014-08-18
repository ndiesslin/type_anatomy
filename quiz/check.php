<?php 
/*
	if ($R1==$odg){ 
	   echo "Correct"; 
	} 
	else { 
	  echo "Incorrect"; 
	}; 
	$score = 0; 
	if ($R1==$odg) { 
	$score++;
	}; 
*/

	if ("R1"=="odg"){ 
	   echo "Correct"; 
	} 
	else { 
	  echo "Incorrect"; 
	}; 
	$score = 0; 
	if ("R1"=="odg") { 
	$score++;
	};
	echo "<div id='results'>$score / 5 correct</div>";

?>
