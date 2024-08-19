const screen = document.querySelector(".screen");
function restrictInput(input) {
    // Allow only digits 1-9 and operators +-*%
    const validChars = /[^123456789\.\/\+\-\*\%]/g;
    input.value = input.value.replace(validChars, '');
}
document.addEventListener('keydown', function(event) {
    if (event.key === '=' || event.key === 'Enter'){
        screen.value = eval(screen.value);
    }
});