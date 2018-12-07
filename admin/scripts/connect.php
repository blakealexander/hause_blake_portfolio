<?php
$db_dsn = array(
    //  Update to blakehause.ca
    'host'=>'localhost',
    'dbname'=>'portfolio_img',
    'charset'=>'utf8',
    'port'=>'8889'
);

$dsn ='mysql:'.http_build_query($db_dsn,'',';');

//DataBase credentials
//  Create a new user under priviledges on host papa and enter info here
$db_user = 'blake';
$db_pass = 'root';

//tri-catch to show connection error
try{
    $pdo = new PDO($dsn,$db_user,$db_pass);
    // var_dump($pdo);
}catch(PDOException $exception){
    echo 'connect error' . $exception->getMessage();
    exit();
}

?>
