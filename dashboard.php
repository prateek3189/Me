<?php 
	//Index.php will be the first landing page to show login box for Lead and HR
	include_once("config/config.php");
	//Add CSS
	$AddCSS	=	array("style","dashboard","listing");
	
	//Add JS
	$AddJS	=	array("jquery-lib","common","ajax","validator","forms");
	
	//User Login Flag
	$_SESSION['login'] = 1;	
	  
	//View HTML
	include_once(VIEW_PATH."/dashboard.html");
	
?>
