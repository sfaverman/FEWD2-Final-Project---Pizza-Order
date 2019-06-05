/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var crustObj = {
	list: [
		{
		type: "hand",
		opts: 	[
			['Small($9.99)',9.99],
			['Medium($12.99)',12.99],
			['Large($14.99)',14.99]
			]
		},
		{
		type: "thin",
		opts: [
			['Medium($11.99)',11.99],
			['Large($13.99)',13.99]
			],
		},
		{
		type: "nys",
		opts: [
			['Large($16.99)',16.99],
			['X-Large($19.99)',19.99]
			],
		},
		{
		type: "gluten",
		opts: [
			['Small($10.99)',10.99]
			]
		}
	]
}

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
};


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
        var isCrustChecked = false;
        for (var i = 0; i < crustList.length; i++) {
            if(crustList[i].checked == true) {
                crust = crustList[i].value;
                isCrustChecked = true;
                break;
            }
        };
        if (!isCrustChecked) {
             $('crustVal').innerHTML = 'Please select crust type';
             $('r-dough-hand').focus();
        } else {
			 $('crustVal').innerHTML = "";
		};



    /* checkboxes 0 toping */
    var checkedToppings = "", numToppings = 0;
    var toppings = $('pizza-form').toppings;
    for(var i = 0; i < toppings.length; i++){
      if(toppings[i].checked){
           checkedToppings += toppings[i].value + ",";
           numToppings++;
           window.console.log(checkedToppings);
          /* break;*/
      }
    }

   /*  window.console.log("You Selected:\n");
     window.console.log("Pizza crust: " + crust);
     window.console.log("Pizza size: " + $("p-size").text);
     window.console.log("Cheeze option: " + $("o-cheeze").text);
     window.console.log("Toppings: " + checkedToppings);
     window.console.log("Number of Toppings:" + numToppings);
*/
    totalEstimate = Number($("p-size").value) + Number($("o-cheeze").value) + Number($("o-sauce").value) + (numToppings * 0.99);

    $('txt-estimate').value = '$' + totalEstimate.toFixed(2);

    $('est-results').innerHTML = 'You selected:<br> Pizza: ' +
        crust + ' crust, '
        + $("p-size").options[$("p-size").selectedIndex].text
        + ' size, ' + $("o-cheeze").options[$("o-cheeze").selectedIndex].text + ' cheeze, with ' + numToppings + ' toppings: ' + checkedToppings ;


 } // end function estimateOrder

 function checkAccountNumValue() {
     "use strict";
     window.console.log('You entered account number' + $('acctNum').value);

     /* Remove white spaces */
     var acctNum = $('acctNum').value.replace(/\s+/g, '');
     window.console.log('Your account number is ' + acctNum);

     /* Validate credit card number by length */

     window.console.log('Your account number has ' + acctNum.length + ' digits');
     /* get a value of credit card radio button selected */
     let ccTypeChecked = document.querySelector('input[name="r_card"]:checked');
    if (ccTypeChecked != null) {
         $('ccRadioVal').innerHTML = "";
    }
    else {
         window.console.log('credit card type not selected');
         $('ccRadioVal').innerHTML = 'Please select a credit card type';
         $('r-card-visa').focus();
        return;
    }

     var selCreditCard = document.querySelector('input[name="r_card"]:checked').value;

     window.console.log('You selected ' + selCreditCard + ' credit card');

     if(isNaN(acctNum)){
         window.console.log('credit card not a numeric value : ' + acctNum);
         $('acctNumVal').innerHTML = 'Invalid account number';
         $('acctNum').focus();
         return false;
     } else {
	     switch(selCreditCard) {
               case "ax":
                 if (acctNum.length !== 15 ||   acctNum.substring(0, 2) !== '37') {
                      $('acctNumVal').innerHTML = 'Please enter a valid AX account number';
                      $('acctNum').focus();
                     return false;
                 } else {
                     $('acctNumVal').innerHTML = "";
                 };
                 break;
               case "master":
                  if (acctNum.length !== 16 ||   Number(acctNum.substring(0, 2)) < 51 ||
                  Number(acctNum.substring(0, 2)) > 55) {
                      $('acctNumVal').innerHTML = 'Please enter a valid Master card number';
                      $('acctNum').focus();
                     return false;
                  } else {
                     $('acctNumVal').innerHTML = "";
                 }
                 break;
              case "visa":
                 if ( (acctNum.length !== 13 &&                         acctNum.length !== 16)
                    || acctNum.substring(0, 1) !== '4') {
                   $('acctNumVal').innerHTML = 'Please enter a valid VISA credit card number';
                      $('acctNum').focus();
                     return false;
                 } else {
                     $('acctNumVal').innerHTML = "";
                 };
                 break;
              default:
                 window.console.log('unknown value of selCreditCard: ' + selCreditCard);
         }
     } // end if -else isNan(acctNum)
      window.console.log('Checking Luhn Algorithm!');

     // Validate according to Luhn Algorithm.
 	 var nCheck = 0, nDigit = 0, bEven = false;

 	 for (var n = acctNum.length - 1; n >= 0; n--) {
 	 var cDigit = acctNum.charAt(n),
 			  nDigit = parseInt(cDigit, 10);

 		if (bEven) {
 			if ((nDigit *= 2) > 9) nDigit -= 9;
 		}

 		nCheck += nDigit;
 		bEven = !bEven;
 	 }

 	 if ((nCheck % 10) !== 0) {
         $('acctNumVal').innerHTML = 'Please enter a valid credit card number';
         $('acctNum').focus();
                     return false;
         } else {
             $('acctNumVal').innerHTML = "";
             $('expDate').focus();
         };
 } // end checkAccountNumValue()

 function submitOrder(event) {
	 "use strict";

    event.preventDefault(); //when you refresh, does not take you to the top of the page

	 $('order-results').innerHTML = 'Thank you for your ORDER!<br> Your order will be delivered to you at <br>' +
		$("street").value + ', ' + $("city").value + ', ' + $("s-state").value + ' ' + $("zip").value;
 }

 /* EVENT LISTENERS */

 $("a-type").addEventListener("change", checkAddrTypeValue, false);
 $("pizza-form").addEventListener("submit", estimateOrder, false);

 $("acctNum").addEventListener("change", checkAccountNumValue, false);
 $("billing-form").addEventListener("submit", submitOrder, false);


/* add event listener to choose your crust radio buttons */
  var radioOption = [
      document.getElementsByName('r_dough')[0],
      document.getElementsByName('r_dough')[1],
      document.getElementsByName('r_dough')[2],
      document.getElementsByName('r_dough')[3]
  ];
   //Use forEach
   radioOption.forEach(function(e) {
       e.addEventListener("click", function() {
          /*alert(e.value);*/
          /*window.console.log('You selected ' + e.value + ' crust'); */
		   $("p-size").options.length = 1;
		  var index;
		  for(index in crustObj.list) {
			  // window.console.log(crustObj.list[index].type);
			  if (e.value === crustObj.list[index].type)
				for (var i = 0; i < crustObj.list[index].opts.length; i++) {
			  	$("p-size").options[$("p-size").options.length] = new Option(crustObj.list[index].opts[i][0],crustObj.list[index].opts[i][1]);
			  }
		  }

       });
    });

 /* END EVENT LISTENERS */

}); // end "load" event listener


