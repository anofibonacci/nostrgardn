<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <meta name="Author" content="leonardo 'fibonacci' de pisa">
  <meta name="Keywords" content="bless you, earthling">
  <meta name="Description" content="">
  <title>pv my peep, my kith and kin</title>
  <style>
	body {
	  background-image: url("img/bkgd_roblox_sunny_room.jpg");
	  background-repeat: no-repeat;
	  background-position: center top;
	  font-family: Helvetica, Verdana, sans-serif; font-size: 14pt;
	}
	h1 {
	  font-size: 36pt;
	  color: #000927;
	  background-color: #ffffdd;
	  opacity: 0.18;
	  margin: 27px;
	  padding: 50px 150px;
	}
	h3 {
	  font-size: 18pt;
	  background-color: #ffffdd;
	  opacity: 0.3;
	  margin: 27px;
	  padding: 50px 150px;
	}
	p {
	  font-size: 18pt;
	  padding: 27px;
	}
	.und {text-decoration: underline;}
	hr {color:#000066; width: 100%}
	.small {font-size: 10pt;}
	
	div.calendar {
	  border: 1px solid black;
	  margin: 180px 9% 72px 63%;
	  background-color: #f0f0ff;
	  opacity: 0.9;
	  padding: 36px 3%;
	}


	No persistence, just injecting a <style> tag from the console:

	// http://mempool.space CSS magic.
	.blockchain-wrapper,
	.bitcoin-block,
	.mempool-block .block-body  {
	  transform: scale(-1, 1);
	  transition: 2s;
	}
	.mempool-block {
	  transform: scale(1);
	}

	const s = document.createElement(‘style’);
	s.appendChild(document.createTextNode(‘ <css here> ’));
	document.head.appendChild(s);

  </style>
 </head>
 <body>
  <h1>Bless you, earthling</h1>
  <div class="calendar" align="center">
   <p>It is <strong><?php echo date('l'); ?></strong>,
   <br>the <?php echo date('jS'); ?> day of <?php echo date('F'); ?>
   <br><?php echo date('Y'); ?></p>
   <p><strong><?php echo date('g:i a'); ?></strong></p>
  </div>
  <hr>
  <p align="center">What is up, my dude?
<?php #phpinfo(); ?>
</body></html>
