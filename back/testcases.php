<?php
error_reporting(0);
require_once ('./calc.php');

echo (assert (calculateBananasLeft(1000, 3000) == 553) == 1 ? "Spot on<br />" : "Failed <br />");
echo (assert (calculateBananasLeft(1000, 3300) == 575) == 1 ? "Spot on<br />" : "Failed<br />");
echo (assert (calculateBananasLeft(1000, 2500) == 433) == 1 ? "Spot on<br />" : "Failed<br />");
echo (assert (calculateBananasLeft(1000, 5000) == 785) == 1 ? "Spot on<br />" : "Failed<br />");
echo (assert (calculateBananasLeft(1000, 4500) == 533) == 1 ? "Spot on<br />" : "Failed<br />");