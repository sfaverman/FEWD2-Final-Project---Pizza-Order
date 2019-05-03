/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
	var pizzaSize, cheese, sauce, numToppings, total;

     $("btn-estimate").addEventListener("click", function() {
        "use strict";


     function getRadioBtnValue(radio_name) {
        var radio = document.forms[0].elements[radio_name];
        for(var i = 0; i < radio.length; i++) {
            if(radio[i].checked) {
               return radio[i].value;
            }
        };
        return '';
     };

        window.console.log("You Selected:\n", );

     }); // end btn-estimate event listener
}); // end "load" event listener


