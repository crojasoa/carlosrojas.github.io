<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="css/estilos.css">
	<link rel="stylesheet" href="../bootstrap/bootstrap.min.css">
	<title>RamSolutions</title>
	<script src="https://kit.fontawesome.com/31c64c925d.js" crossorigin="anonymous"></script>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Sarabun:wght@500&family=Yusei+Magic&display=swap" rel="stylesheet">
	<link  rel="icon"   href="../img/favicon.ico" />
</head>
<body>
	<section class="body">
	<!--
		Comienzo del header
	-->
	<header id="header" class="header">
		<div id="navbar" class="row">
			<nav class="navbar navbar-expand-lg navbar-light">
  				<div class="container-fluid d-flex justify-content-between">
  					<a class="borde col-1 p-1 bg-white rounded" href="index.html">
  						<img class="logo img-fluid" src="img/logo2.png" alt="">		
      				<!--<p class="ram">Ramesptop <br/> <span class="web">Web</span><span class="des"> Design</span></p>-->
    				</a>
     					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      					<span class="navbar-toggler-icon"></span>
    					</button>
    				<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      					<div class="navbar-nav d-flex justify-content-between">
        					<a class=" nav-link text-white font-weight-bold active text-center" aria-current="page" href="../index.html"><span class="p-2 h5">Inicio</span> <i class="fas fa-house-user"></i></a>
    	    				<a class=" nav-link text-white font-weight-bold text-center" aria-current="page" href="index.php"><span class="p-2 h5">Contacto</span> <i class="fas fa-address-book"></i></a>
    	    				<a class=" nav-link text-white font-weight-bold text-center" aria-current="page" href="../pportafolio/index.html"dashboard/><span class="p-2 h5">Portfolio</span> <i class="fas fa-suitcase"></i></a>
    	    				<!--<a class=" nav-link text-white font-weight-bold text-center" aria-current="page" href="../ptecnologias/index.html"><span class="p-2 h5">Tecnologias</span> <i class="fas fa-microchip"></i></a>-->
    	    				<a class=" nav-link text-white font-weight-bold text-center" aria-current="page" target="_BLANK" href="https://blog.ramesptop.com"><span class="p-2 h5">Blog</span> <i class="fas fa-blog"></i></a>
 		     			</div>
   		 			</div>
 		 		</div>
			</nav>
		</div>
	</header>
	<!-- 

	Comienzo seccion1
	
	 -->
		<div class="row p-5 seccion1 d-flex justify-content-center flex-wrap flex-row align-content-center">
			<div class=" d-none d-sm-flex col-12 col-sm-4"></div>
			<div class="d-flex justify-content-center contTitulo rounded p-2 col-12 col-sm-4 mb-5">	
				<p class="text-justify-center h3 m-auto">Información y enlaces de contacto</p>
			</div>
			<div class=" d-none d-sm-flex col-12 col-sm-4"></div>
			
			<div class="m-2 col-12 col-sm-2 contactoT contactoT2 rounded d-flex justify-content-around flex-wrap flex-row ">
					<a class="" href="https://t.me/ramesptop" target="_BLANK">
						<i class="logoT p-1 contactoI fab fa-telegram"></i>
						<p cllass="clickT" >Iniciar conversación en telegram</p>	
					</a>
					<!--<a class="d-none d-sm-flex flex-column flex-wrap" href="https://t.me/ramesptop" target="_BLANK">
						<i class="logoT logoForm p-1 contactoI fas fa-file-alt"></i>
						<p cllass="clickT">Solicitar pagina / formulario de servicio</p>
					</a>-->
			</div>

				<div class="d-none d-sm-flex col-12 col-sm-2">
					
				</div>
			
				<div class="m-1 p-1 m-sm-2 p-sm-2 inside col-12 col-md-4 rounded d-flex justify-content-between flex-wrap flex-column ">
					<div class="contactoC d-flex justify-content-center">
						<p class="contacto text-dark p-2">Email: rene@ramesptop.com <br/> ramesptop@protonmail.com</p>
						<i class="pt-4 correo contactoI fas fa-envelope"></i>
					</div>
					<div class="contactoC d-flex justify-content-center">
						<p class="contacto text-dark p-2">Telefono: +51 941-339-689</p>
						<i class="p-2 telefono contactoI fas fa-phone-square"></i>
					</div>
					<div class="contactoC d-flex justify-content-center">
						<p class="contacto text-dark p-2">Telegram: @RamEsptop</p>
						<i class="p-2 telegram contactoI fab fa-telegram"></i>
					</div>
					<div class="contactoC d-flex justify-content-center">
						<p class="contacto text-dark p-2">Signal: +51 941-339-689</p>
						<i class="p-2 signal contactoI far fa-comment"></i>
					</div>	
				</div>	
		</div>
		<div class="seccion2 row d-flex justify-content-center">
			<div class="inside col-12 col-sm-7 rounded p-5 m-4">
				<form class="formulario" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
					<div id="Contacto" class="contactanosA col-12 d-flex justify-content-center">
						<h2 class="tituloContactanos text-align-center">Email directo</h2>
					</div>
					<div class="form-group">
						<input type="text" placeholder="Nombre" name="nombre" class="mt-4 form-control" value="<?php if(!$enviado && isset($nombre)) echo $nombre ?>" id="nombre">
						<input type="email" placeholder="Correo" name="correo" class="mt-4 form-control" value="<?php if(!$enviado && isset($correo)) ?>" id="correo">
						<textarea name="mensaje" type="text" placeholder="Mensaje" class=" mt-4 form-control" value="<?php if(!$enviado && isset($mensaje)) echo $mensaje ?>"></textarea>
							<?php if(!empty($errores)): ?>
						<div class="alert error">
							<?php echo $errores; ?>
						</div>
							<?php elseif ($enviado): ?>
							
						<script language="javascript">alert("Mensaje enviado correctamente"); </script>
				
							<?php endif?>
				
						<input type="submit" name="submit" value="Enviar" class="btn btn-success mt-4 w-25 float-right p-2" >
					</div>
				</form>
			</div>
		</div>

	<!--
		Comienzo del footer
	-->
	<footer class="footer d-flex justify-content-center align-content-end ">
		<div class="d-flex justify-content-between flex-column ">
			<!--<div class="logof m-auto col-4 bg-white p-1 d-flex rounded ">
				<img class="logoF img-fluid" src="img/logo1.png" alt="">		
			</div>	-->
      		<p class="text-light mt-4 h6 mr-3">Diseñado y Desarrollado por RamSolutions Web Design - 2021</p>		
		</div>
	</footer>
	
	</section>
	<script src="../js/jquery-3.5.1.min.js"></script>
	<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>

	<script src="../js/bootstrap.min.js"></script>
</body>
</html>