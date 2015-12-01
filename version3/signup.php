<?php 
	//Index.php will be the first landing page to show login box for Lead and HR
  include("config/config.php");
	
	//Add CSS
	$AddCSS	=	array("style","login");
	
	//Add JS
	$AddJS	=	array("common");
	  
	//View HTML
	include(VIEW_PATH."/signup.html");
	
?>
