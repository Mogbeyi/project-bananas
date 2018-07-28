<?php

require_once('./functions.php');

if (isset($_POST['calculateBananas'])){
    $bananas = $_POST['bananas'];
    $distance = $_POST['distance'];
    $camels = $_POST['camels'];
    $consumption = $_POST['consumption'];
    echo calculateBananasLeft($bananas, $consumption, $camels, $distance);
}