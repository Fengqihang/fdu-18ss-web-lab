<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        //TODO
        echo"<td> <img src='images/books/tinysquare/$file'></td>
             <td>$title</td>
             <td>$quantity</td>
             <td>$";
        echo number_format($price,2);
        echo"</td><td>$";
        echo  number_format($quantity*$price,2);
        echo"</td>";
        echo "</tr>";
    }
?>