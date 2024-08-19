const result = document.getElementById("result");
const calculation = document.querySelector(".calculation")
function restrictInput(input) {
    // Allow only digits 1-9 and operators +-*%/.
    const validChars = /[^123456789\.\/\+\-\*\%]/g;
    input.value = input.value.replace(validChars, '');
}
document.addEventListener('keydown', function(event) {
    if (event.key === '=' || event.key === 'Enter'){
        calculation.value = result.value;
        result.value = eval(result.value);
    }
});

function final_result() {
    calculation.value = result.value;
    result.value = eval(result.value);
}

function delete_everything(){
    result.value = "";
    calculation.value = "";
}