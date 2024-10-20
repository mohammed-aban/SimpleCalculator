const result = document.getElementById("result");
const calculation = document.querySelector(".calculation")

function restrictInput(input) {
    // Allow only digits 1-9 and operators +-*%/.
    const validChars = /[^1234567890\.\/\+\-\*\%]/g;
    input.value = input.value.replace(validChars, '');
}
document.addEventListener('keydown', function(event) {
    if (event.key === '=' || event.key === 'Enter'){
        calculation.value = result.value;
        result.value = eval(result.value);
    }
});

function not_equals() {
    const equals_logo = document.getElementById("hidden");
    equals_logo.classList.add("hidden_class");
}

function if_equals(){
    const equals_logo = document.getElementById("hidden");
    equals_logo.classList.remove("hidden_class");
}

function add(input) {
    result.value += input;
    not_equals();
}

function backspace() {
    result.value = result.value.toString().slice(0, -1);
    not_equals();
    if (result.value == "") {
        calculation.value = "";
    }
}

function final_result(){
    calculation.value = result.value;
    if_equals()
    result.value = eval(result.value);
}

function delete_everything(){
    not_equals();
    result.value = "";
    calculation.value = "";
}
