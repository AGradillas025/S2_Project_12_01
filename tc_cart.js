"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Anthony S,A Gradillas
   Date:   2.28.19
   
   Filename: tc_cart.js
	
*/

// Calculate the running total of the cost of the order
var orderTotal = 0;

// This will contain the HTML code for the contents of the shopping cart, which will be displayed as a table
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// The for loop will loop through the entrie in the item array
for (var i = 0; i <= 3; i++) {

    // The item is the current value from the item array
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='item' /></td>";
    // Displays the description, price, and quantity order of the item where the description would be the current value from the itemDescription display
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$price</td> <td>quantity</td>";
    // A variable named itemCost would be declared equal to the price value multiplied by the quantity value
    var itemCost = $price * quantity;
    // Displays the cost for the item(s) ordered, completing the table row
    cartHTML += "<td>" + itemCost[i] + "</td></tr>";
    // This will keep arunning total of the total cost of the customer order
    orderTotal = orderTotal + itemCost;

}

document.getElementById("cart").innerHTML = cartHTML;