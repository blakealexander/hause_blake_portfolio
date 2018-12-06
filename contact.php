<?php
var_dump($_POST);
$fields = array(
    'name'=>array(
        'type'=>'text',
        'label'=>'Name'
    ),
    'email'=>array(
       'type'=>'email',
       'label'=>'Email'
    ),
    'phone'=>array(
       'type'=>'tel',
       'label'=>'Phone'
    ),
    'message'=>array(
       'type'=>'textarea',
       'label'=>'Message'
    )
);


?>

<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8" />
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>Email PHP</title>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
   <link rel="stylesheet" href="css/foundation.min.css">
   <link rel="stylesheet" href="css/main.css">
   <script src="main.js"></script>
</head>
<body>
<?php if(isset($_GET['status']) && $_GET['status']==='successful'):?>
    <div class="alert alert-success"> The Form submitted succesfully!</div>
<?php endif; ?>

<?php if(isset($_GET['status']) && $_GET['status']==='error'):?>
    <div class="alert alert-success"> The Form is missing some required fields</div>
<?php endif; ?>
<!-- pull in your styles to make this a seperate page. -->
<nav class="nav">
      <div class="bg-cover" class="none"></div>
      <div class="prompt"></div>
      <a class="hamburger-shell">
      <div class="hamb top"></div>
      <div class="hamb middle"></div>
      <div class="menu-name">MENU</div>
      <ul id="menu">
          <a href="#"> <li>Home</li></a>
          <a href="#"> <li>About</li></a>
          <a href="#"> <li>Skills</li></a>
          <a href="#"> <li>Portfolio</li></a>
          <a href="#"> <li>Contact</li></a>
      </ul>
      </a>
    </nav>
    

</body>
</html>