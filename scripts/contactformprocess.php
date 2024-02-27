<?php




/* Subject and Email Variables */



	$emailSubject = 'Reservation request';

	$webMaster = 'info@tastytours.com';

	

	

/* Gathering Data Variable */	

	$nameField = $_POST['name'];

	$emailField = $_POST['email'];

	$emailverField = $_POST['emailver'];

	$phoneField = $_POST['phone'];

	$detailsField = $_POST['details'];

	

	$body = <<<EOD

<br><hr><br>

Name: $nameField <br>

Email: $emailField <br>

Email Verified: $emailverField <br>

Phone: $phoneField <br>

Details: $detailsField <br>

EOD;



	$headers .= "From: $emailField\r\n";

	$headers .= "Content-type: text/html\r\n";

	$success = mail($webMaster, $emailSubject, $body,

$headers);

	

/* Results rendered as HTML */



	$theResults = <<<EOD

<html>

<head>

<meta https-EQUIV="Refresh" CONTENT="2; URL=https://tastytours.com">



    <title>Thank you for your request</title>



   

    <style type="text/css">

<!--

.style1 {

	color: #666666

}

-->

    </style>

	

<script language="JavaScript" type="text/JavaScript">

<!--

function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_validateForm() { //v4.0

  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;

  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);

    if (val) { nm=val.name; if ((val=val.value)!="") {

      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');

        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';

      } else if (test!='R') { num = parseFloat(val);

        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';

        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');

          min=test.substring(8,p); max=test.substring(p+1);

          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';

    } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' is required.\n'; }

  } if (errors) alert('The following error(s) occurred:\n'+errors);

  document.MM_returnValue = (errors == '');

}

//-->

</script>



</head>



<body>

 



<!--=== Header ===-->

<div class="header">               

    <div class="container"> 

        <!-- Logo -->       

        <div align="center" >                                             

            <a href="https://tastytours.com"><img loading="lazy" id="logo-header" src="../img/logo_sticky.png" alt="Tasty Tours Logo"></a>

        </div><!-- /logo -->        

                                    

                       

    </div><!-- /container -->               

</div><!--/header -->      

<!--=== End Header ===-->

<br><br>



<!--=== Breadcrumbs ===-->

<div class="breadcrumbs margin-bottom-40">

	<div class="container">

        <h1 align="center" class="style1" >Thank you for your request. We will get back to you shortly.</h1>

        </ul>

  </div><!--/container-->

</div><!--/breadcrumbs-->



</div><!--/copyright-->	

<!--=== End Copyright ===-->











<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129566673-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-129566673-1');
</script>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1365407963556488';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<script type="text/javascript">                                                                                                                                                                                                                                                                                                                                                                                                                                        </body>

</SCRIPT>



</html> 

EOD;

echo "$theResults";





?>