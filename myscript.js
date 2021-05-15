//MAJOR DECLARATION
var counter = 0;
// var temp = window.alert;
$(function() {
    $(":checkbox").on("change", function() {
        if ((this.id === "122" || this.id === "123" || this.id === "sci" || this.id === "writing" || this.id === "oral") && this.checked) {
            counter++;
        }
        else if ((this.id === "122" || this.id === "123" || this.id === "sci" || this.id === "writing" || this.id === "oral")  && !this.checked && counter > 0) {
            counter--;
        }
    
        if (counter == 5 && (this.id === "122" || this.id === "123" || this.id === "sci" || this.id === "writing" || this.id === "oral")) {
            // window.alert = temp;
            alert('CONGRATULATIONS!!! YOU CAN NOW DECLARE YOUR MAJOR!!!');
        }
        else if (counter == 5 && (this.id !== "122" || this.id !== "123" || this.id !== "sci" || this.id !== "writing" || this.id !== "oral")) {
            window.alert = function() { };
            alert('this is not shown');
        }
    });
});

//MATH 123 and PHYS 151
$(document).on('click', function () {
    if ($('#122').is(":checked")) {
        $("#123").prop('disabled', false);
        $("#sci").prop('disabled', false);
    }
    else {
        $('#123').prop('checked', false); $("#123").prop('disabled', true);
        $('#sci').prop('checked', false); $("#sci").prop('disabled', true);
    }
});

//CECS 174/225
$(document).on('click', function () {
    if ($('#122').is(":checked") && $('#100').is(":checked")) {
        $("#174").prop('disabled', false);
        $("#225").prop('disabled', false);
    }
    else {
        $('#174').prop('checked', false);$("#174").prop('disabled', true);
        $('#225').prop('checked', false);$("#225").prop('disabled', true);
    }
});

//ENGR 102
$(document).on('click', function () {
    if ($('#101').is(":checked")) {
        $("#102").prop('disabled', false);
    }
    else {
        $('#102').prop('checked', false); $("#102").prop('disabled', true);
    }
});

//CECS 228, 274, 277
$(document).on('click', function () {
    if ($('#174').is(":checked")) {
        $("#228").prop('disabled', false);
        $("#274").prop('disabled', false);
        $("#277").prop('disabled', false);
            
    }
    else {
        $('#228').prop('checked', false); $("#228").prop('disabled', true);
        $('#274').prop('checked', false); $("#274").prop('disabled', true);
        $('#277').prop('checked', false); $("#277").prop('disabled', true);
    }
});

//CECS 229
$(document).on('click', function () {
    if ($('#123').is(":checked") && $('#228').is(":checked")) {
        $("#229").prop('disabled', false);
    }
    else {
        $('#229').prop('checked', false);$("#229").prop('disabled', true);
    } 
});

//CECS 328
$(document).on('click', function () {
    if ($('#228').is(":checked") && $('#274').is(":checked")) {
        $("#328").prop('disabled', false);
    }
    else {
        $('#328').prop('checked', false);$("#328").prop('disabled', true);
    } 
});

//CECS 282
$(document).on('click', function () {
    if ($('#274').is(":checked") && $('#277').is(":checked")) {
        $("#282").prop('disabled', false);
    }
    else {
        $('#282').prop('checked', false);$("#282").prop('disabled', true);
    } 
});

//CECS 341
$(document).on('click', function () {
    if ($('#225').is(":checked")) {
        $("#341").prop('disabled', false);
    }
    else {
        $('#341').prop('checked', false);$("#341").prop('disabled', true);
    } 
});

//EE 381
$(document).on('click', function () {
    if ($('#229').is(":checked")) {
        $("#381").prop('disabled', false);
    }
    else {
        $('#381').prop('checked', false);$("#381").prop('disabled', true);
    } 
});

//CECS 329/342/419/428/451/453/455
$(document).on('click', function () {
    if ($('#328').is(":checked")) {
        $("#329").prop('disabled', false);
        $("#342").prop('disabled', false);
        $("#419").prop('disabled', false);
        $("#428").prop('disabled', false);
        $("#451").prop('disabled', false);
        $("#453").prop('disabled', false);
        $("#455").prop('disabled', false);
    }
    else {
        $('#329').prop('checked', false);$("#329").prop('disabled', true);
        $('#342').prop('checked', false);$("#342").prop('disabled', true);
        $('#419').prop('checked', false);$("#419").prop('disabled', true);
        $('#428').prop('checked', false);$("#428").prop('disabled', true);
        $('#451').prop('checked', false);$("#451").prop('disabled', true);
        $('#453').prop('checked', false);$("#453").prop('disabled', true);
        $('#455').prop('checked', false);$("#455").prop('disabled', true);
    } 
});

//CECS 326
$(document).on('click', function () {
    if ($('#282').is(":checked") && $('#341').is(":checked")) {
        $("#326").prop('disabled', false);
    }
    else {
        $('#326').prop('checked', false);$("#326").prop('disabled', true);
    } 
});

//CECS 378
$(document).on('click', function () {
    if ($('#229').is(":checked") && $('#274').is(":checked")) {
        $("#378").prop('disabled', false);
    }
    else {
        $('#378').prop('checked', false);$("#378").prop('disabled', true);
    } 
});

//CECS 323
$(document).on('click', function () {
    if (($('#277').is(":checked") || $('#282').is(":checked")) && $('#228').is(":checked")) {
        $("#323").prop('disabled', false);
    }
    else {
        $('#323').prop('checked', false);$("#323").prop('disabled', true);
    } 
});

//CECS 327
$(document).on('click', function () {
    if ($('#326').is(":checked") && $('#341').is(":checked")) {
        $("#327").prop('disabled', false);
    }
    else {
        $('#327').prop('checked', false);$("#327").prop('disabled', true);
    } 
});

//CECS 343
$(document).on('click', function () {
    if ($('#277').is(":checked") || $('#282').is(":checked")) {
        $("#343").prop('disabled', false);
    }
    else {
        $('#343').prop('checked', false);$("#343").prop('disabled', true);
    } 
});

//CECS 429
$(document).on('click', function () {
    if ($('#323').is(":checked") && ($('#328').is(":checked") || $('#380').is(":checked") || $('#381').is(":checked"))) {
        $("#429").prop('disabled', false);
    }
    else {
        $('#429').prop('checked', false);$("#429").prop('disabled', true);
    } 
});

//CECS 444
$(document).on('click', function () {
    if ($('#328').is(":checked") && $('#341').is(":checked")) {
        $("#444").prop('disabled', false);
    }
    else {
        $('#444').prop('checked', false);$("#444").prop('disabled', true);
    } 
});

//CECS 445/448/450/475
$(document).on('click', function () {
    if ($('#343').is(":checked")) {
        $("#445").prop('disabled', false);
        $("#448").prop('disabled', false);
        $("#450").prop('disabled', false);
        $("#475").prop('disabled', false);
    }
    else {
        $('#445').prop('checked', false);$("#445").prop('disabled', true);
        $('#448').prop('checked', false);$("#448").prop('disabled', true);
        $('#450').prop('checked', false);$("#450").prop('disabled', true);
        $('#475').prop('checked', false);$("#475").prop('disabled', true);
    } 
});

//CECS 449
$(document).on('click', function () {
    if ($('#328').is(":checked") && ($('#229').is(":checked") || $('#247').is(":checked"))) {
        $("#449").prop('disabled', false);
    }
    else {
        $('#449').prop('checked', false);$("449").prop('disabled', true);
    } 
});

//CECS 456
$(document).on('click', function () {
    if ($('#381').is(":checked") || $('#m381').is(":checked")) {
        $("#456").prop('disabled', false);
    }
    else {
        $('#456').prop('checked', false);$("456").prop('disabled', true);
    } 
});

//CECS 474/476
$(document).on('click', function () {
    if ($('#326').is(":checked")) {
        $("#474").prop('disabled', false);
        $("#476").prop('disabled', false);
    }
    else {
        $('#474').prop('checked', false);$("474").prop('disabled', true);
        $('#476').prop('checked', false);$("476").prop('disabled', true);
    } 
});

//CECS 478
$(document).on('click', function () {
    if ($('#328').is(":checked") || $('#346').is(":checked")) {
        $("#478").prop('disabled', false);
    }
    else {
        $('#478').prop('checked', false);$("478").prop('disabled', true);
    } 
});

//CECS 495
$(document).on('click', function () {
    if ($('#381').is(":checked")) {
        $("#495").prop('disabled', false);
    }
    else {
        $('#495').prop('checked', false);$("495").prop('disabled', true);
    } 
});

//MATH 323
$(document).on('click', function () {
    if ($('#224').is(":checked")) {
        $("#m323").prop('disabled', false);
    }
    else {
        $('#m323').prop('checked', false);$("m323").prop('disabled', true);
    } 
});

//303
$(document).on('click', function () {
    if ($('#278').is(":checked") || $('#378').is(":checked")) {
        $("#303").prop('disabled', false);
    }
    else {
        $('#303').prop('checked', false);$("303").prop('disabled', true);
    } 
});

//470
$(document).on('click', function () {
    if ($('#323').is(":checked") || $('#343').is(":checked")) {
        $("#470").prop('disabled', false);
    }
    else {
        $('#470').prop('checked', false);$("470").prop('disabled', true);
    } 
});

//461
$(document).on('click', function () {
    if ($('#341').is(":checked") || $('#440').is(":checked")) {
        $("#461").prop('disabled', false);
    }
    else {
        $('#461').prop('checked', false);$("461").prop('disabled', true);
    } 
});

//CECS 491A
$(document).on('click', function () {
    if ($('#350').is(":checked") && ($('#277').is(":checked") || $('#282').is(":checked"))) {
        $("#491A").prop('disabled', false);
    }
    else {
        $('#491A').prop('checked', false);$("#491A").prop('disabled', true);
    } 
});

//CECS 491B
$(document).on('click', function () {
    if ($('#491A').is(":checked")) {
        $("#491B").prop('disabled', false);
    }
    else {
        $('#491B').prop('checked', false);$("#491B").prop('disabled', true);
    } 
});

//MATH 224
$(document).on('click', function () {
    if ($('#123').is(":checked")) {
        $("#224").prop('disabled', false);
    }
    else {
        $('#224').prop('checked', false);$("#224").prop('disabled', true);
    } 
});

//Group 1 Elec
$(document).on('click', function () {
    var checkboxes = $('input.group1:checkbox:checked').length;
    if (checkboxes == 1 ) {
        $("#g1").prop('disabled', false);
        $("#g12").prop('disabled', true);
    }
    else if (checkboxes == 2){
        $("#g12").prop('disabled', false);
    }
    else if (checkboxes == 0){
        $('#g1').prop('checked', false);$("#g1").prop('disabled', true);
        $('#g12').prop('checked', false);$("#g12").prop('disabled', true);
    }
});