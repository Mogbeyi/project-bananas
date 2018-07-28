<?php
    /**
     * WHERE
     * required input
     * @param camel consumption ($k)
     * @param number of bananas ($x)
     * @param number of camels ($z)
     * @param distance to market ($y)
     * 
     */
    function calculateDistances($x){
        $t = floor($x / 1000);
        $totalDistanceCovered = 0;
        for ($i = 1; $i <= $t; $i++){
            $totalDistanceCovered += floor((1000 / ((2*$i)-1)));
        }
        return $totalDistanceCovered;
    }

    function calculateExcess($x){
        $t = floor($x / 1000);
        return floor((($x % 1000) / (2*$t + 1))); 
    }

    function calculateBananasLeft($x, $k, $z, $y){
        return ((calculateDistances($x) - $y + calculateExcess($x))/($z * $k));
    }

    // echo calculateBananasLeft(5000, 1, 1, 1000);
?>