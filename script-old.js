var presentNumber = 0
var result = 0;
var display = true
var inputEquals = false;

function showPresentNumber(keyData) {
    if (display || $('#display').text() == "0") { 
        $('#display').text(keyData); 
        inputEquals ? $('#calculation').text(keyData): $('#calculation').append(keyData);
        inputEquals = false;
        display = false;
    } else if ($('#display').text().length < 13) { 
        $('#display').append(keyData);
        $('#calculation').append(keyData);
    }
}

function decimalButton() {
    if (!$('#display').text().includes(".")) { 
        display = false;
        $('#display').append(".");
        $('#calculation').append(".");
    }
}

function selectOperator(currentOperator) {
    $('#display').text(currentOperator);
    $('#calculation').append(currentOperator); 
    display = true; 
    inputEquals = false; 
    $('#calculation').text($('#calculation').text().replace(/(\D)\1/, currentOperator)) 
    $('#calculation').text($('#calculation').text().replace(/\D{3}/, currentOperator))
}

function equalButton() {
    if ($('#calculation').text() != "") {
        result = eval($('#calculation').text()); 
        $('#display').text(result); 
        $('#calculation').text(result); 
    }
    inputEquals = true;  
    display = true;
}

function clearButton() {
    display = true;
    $('#display').text(0);
    $('#calculation').text("");
}