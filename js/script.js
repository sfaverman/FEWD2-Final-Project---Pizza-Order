/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
	var pizzaSize, cheese, sauce, numToppings, total;

/* FUNCTIONS */
/* validate input values */
function validate(){

/* validate name */
var name = $('name').value;
var nameRGEX = /^([a-zA-Z ]){2,30}$/;
var nameResult = nameRGEX.test(name);

if (nameResult == false) {
        window.console.log('invalid name');
        $('nameVal').innerHTML = 'Please enter a valid name';
        $('name').focus();
        return false;
} else {
        $('nameVal').innerHTML = "";
       /* return true;*/
}

/* validate street */

var street = $('street').value;
var streetRGEX = /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St|Way)\.?/ ;
var streetResult = streetRGEX.test(street);

if (streetResult == false) {
        window.console.log('invalid street name');
        $('streetVal').innerHTML = 'Please enter a valid street name';
        $('street').focus();
        return false;
} else {
        $('streetVal').innerHTML = "";
       /* return true;*/
}

/* validate city */

var city = $('city').value;
var cityRGEX = /^[a-zA-Z',.\s-]{1,25}$/;
var cityResult = cityRGEX.test(city);

if (cityResult == false) {
        window.console.log('invalid city name');
        $('cityVal').innerHTML = 'Please enter a valid city name';
        $('city').focus();
        return false;
} else {
        $('cityVal').innerHTML = "";
        return true;
}


/* validate zipCode */
var zipcode = $('zip').value;
var zipcodeRGEX = /^[0-9]{5}(?:-[0-9]{4})?$/;
var zipcodeResult = zipcodeRGEX.test(zipcode);

if (zipcodeResult == false) {
        window.console.log('invalid zipcode');
        $('zipVal').innerHTML = 'Please enter a valid zipcode';
        $('zip').focus();
        return false;
} else {
        $('zipVal').innerHTML = "";
       /* return true;*/
}

/* validate phone; */
var phone = $('phone').value;
var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
var phoneResult = phoneRGEX.test(phone);

if (phoneResult == false) {
        window.console.log('invalid phone');
        $('phoneVal').innerHTML = 'Please enter a valid phone';
        $('phone').focus();
        return false;
} else {
        $('phoneVal').innerHTML = "";
        /*return true;*/
}
    $('txt-estimate').focus();
    return true;

}  // End validate()

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

    validate();

    /* Delivery information */
    window.console.log('Dear '+ $("name").value +',');
    window.console.log("You Selected:\n");
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

     window.console.log("You Selected:\n");
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


