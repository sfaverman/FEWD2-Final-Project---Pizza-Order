/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
	var pizzaSize, cheese, sauce, numToppings, total;

/* FUNCTIONS */

/* show 'Other Address Type' input field only if 'Other' selected on a drop-down menu */
function checkAddrTypeValue() {
        var val = $("a-type").value;
        if(val==="O") {
           $('otherOpt').style.display='block';
        }
        else {
           $('otherOpt').style.display='none';
        }
}

function estimateOrder(event) {                                      "use strict";

    event.preventDefault(); //when you refresh, does not take you to the top of the page

    /* Delivery information */
    window.console.log('Dear '+ $("name").value +',');
    window.console.log("You Selected:\n", );
    window.console.log("Pizza will be delivered to you at");
    window.console.log($("street").value + ', ' + $("city").value + ', ' + $("s-state").value + ' ' + $("zip").value);
    var totalEstimate;
    /* radio buttons */
    var crust,
        crustList = $('pizza-form').r_dough;

        for (var i = 0; i < crustList.length; i++) {
            if(crustList[i].checked == true) {
                crust = crustList[i].value;
            }
        };

    /* checkboxes 0 toping */
    var checkedToppings = "", numToppings = 0;
    var toppings = $('pizza-form').toppings;
    for(var i=0; i < toppings.length; i++){
      if(toppings[i].checked){
           checkedToppings += toppings[i].value + ",";
           numToppings++;
           window.console.log(checkedToppings);
          /* break;*/
      }
    }

     window.console.log("You Selected:\n", );
     window.console.log("Pizza crust: " + crust);
     window.console.log("Pizza size: " + $("p-size").value);
     window.console.log("Cheeze option: " + $("o-cheeze").value);
     window.console.log("Toppings: " + checkedToppings);
     window.console.log("Number of Toppings:" + numToppings);

    totalEstimate = Number($("p-size").value) + Number($("o-cheeze").value) + Number($("o-sauce").value) + (numToppings * 0.99);

    $('txt-estimate').value = '$' + totalEstimate.toFixed(2);

    $('results').innerHTML = 'You ordered: Pizza <br>' +
        crust + " crust" + " , " + $("p-size").value + " size " + $("o-cheeze").value;


 } // end function estimateOrder

 /* EVENT LISTENERS */

 $("a-type").addEventListener("change", checkAddrTypeValue, false);
 $("pizza-form").addEventListener("submit", estimateOrder, false);



}); // end "load" event listener


