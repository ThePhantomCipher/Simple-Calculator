const display = document.getElementById("display");
let removed = "";

function appendToDisplay(input){  
    if(input === `x`){
        display.value += `x`;
    }
    else if(input === `÷`){
        display.value += `÷`;
    }
    else{
        display.value += input;
    }
}

function remove(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        let expression = document.getElementById("display").value.replace(`x`, `*`).replace(`÷`, `/`);
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        display.value = "Invalid Input!";
        
    }
}