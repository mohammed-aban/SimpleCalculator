const result = document.querySelector('.result');
const calculation = document.querySelector('.calculation');
const button = document.querySelectorAll('.button');

function restrictInput(input) {
    // Allow only digits 1-9 and operators +-*%/.
    const validChars = /[^1234567890\.\/\+\-\*\%]/g;
    input.value = input.value.replace(validChars, '');
}

function notEquals() {
    const equalsLogo = document.querySelector('#hidden');
    equalsLogo.classList.add('hidden-class');
}

function ifEquals(){
    const equalsLogo = document.querySelector('#hidden');
    equalsLogo.classList.remove('hidden-class');
}
1
function add(input) {
    result.value += input;
    notEquals();
}

function backspace() {
    result.value = result.value.toString().slice(0, -1);
    notEquals();
    if (result.value == '') {
        calculation.value = '';
    }
}

function finalResult(){
    ifEquals();
    calculation.value = result.value;
    result.value = eval(result.value);
}

function allClear(){
    notEquals();
    result.value = '';
    calculation.value = '';
}

button.forEach((eachButton) => {
    eachButton.addEventListener('click', () => {
        checkValue(eachButton.value);
    })
});

document.addEventListener('keydown', (event) => {
    checkValue(event.key);
    console.log(event.key);
})

function checkValue(input) {
    switch (input) {
        case '1':
            add('1');
            break
        1
        case '2':
            add('2');
            break;

        case '3':
            add('3');
            break;

        case '4':
            add('4');
            break;

        case '5':
            add('5');
            break;
        
        case '6':
            add('6');
            break;
        
        case '7':
            add('7');
            break;

        case '8':
            add('8');
            break;

        case '9':
            add('9');
            break;

        case '0':
            add('0');

        case '+':
            add('+');
            break;

        case '-':
            add('-');
            break;

        case '*':
            add('*');
            break;

        case '/':
            add('/');
            break;

        case '%':
            add('%');
            break;

        case '.':
            add('.');
            break;

        case 'backspace':
            backspace();
            break;

        case 'C':
            allClear();
            break;

        case 'equals':
            finalResult();
            break;
        
        // Checking for keys input
        case 'Enter':
            finalResult();
            break;
        

        case 'Backspace':
            backspace();
            break;

        case 'Escape':
            allClear();
            break;
        
        default:
            return;
    }
}