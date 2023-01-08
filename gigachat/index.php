<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="description" content="Chatting website for a school project.">
	<meta property="og:image" content="img/gigachad.jpg">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="img/gigachad.jpg">
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
	<script src="js/refresh_entries.js"></script>
	<script src="js/form_add.js"></script>

	<link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>

	<title>gigachat.</title>
</head>

<body class="preload">

	<!-- start of loader -->
	<?php require("loader.php"); ?>
	<!-- end of loader -->

	<!-- start of header -->
	<?php require("header.php"); ?>
	<!-- start of header -->

	<!-- start of the form section-->
	<section id="form">
		<?php require("form.php"); ?>
	</section>
	<!-- end of the form section-->

	<!-- start of the entries section-->
	<section id="entries">
		<?php require("entries.php"); ?>
	</section>
	<!-- end of the entries section-->

	<!-- start of footer -->
	<?php require("footer.php"); ?>
	<!-- end of footer -->

	<!-- start of links to own scripts -->
	<script src="js/loader.js"></script>
	<script src="js/length_check.js"></script>
	<script src="js/animated_title.js"></script>
	<!-- end of links to own scripts -->

</body>

</html>