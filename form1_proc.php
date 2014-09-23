<?php

$vmName = htmlspecialchars($_REQUEST['vmName']);
$prordp = htmlspecialchars($_REQUEST['prordp']);
$fullscreen = htmlspecialchars($_REQUEST['fullscreen']);
$res=htmlspecialchars($_REQUEST['res']);
$bits=htmlspecialchars($_REQUEST['bits']);
#$file = $_FILES['file']['name'];
#$cls= htmlspecialchars($_REQUEST['cls']);

echo <<<INFO
{
'vmName':'$vmName',
'prordp':'$prordp',
'fullscreen':'$fullscreen',
'res':'$res',
'bits':'$bits'
}
INFO;

?>
