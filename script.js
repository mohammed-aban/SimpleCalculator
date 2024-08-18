let total_running = 0;
let buffer = "0";
let previous_operation;

const screen = document.querySelector(`.screen`);

function button_click(value){
    if (isNaN(value)){
        handleSymbol(value)
    }
    else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

handleSymbol(Symbol){
    switch (Symbol){
        case 'C':
            buffer = '0';
            total_running = '0';
            break;
        
        case '/':
            
    }
}