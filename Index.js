function add() {
    let input1 = +document.getElementById('number1').value;
    let input2 = +document.getElementById('number2').value;
    let result = input1 + input2;
    document.getElementById("result").innerHTML='Result:' +result;
}

function sub() {
    let input1 = +document.getElementById('number1').value;
    let input2 = +document.getElementById('number2').value;
    let result = input1 - input2;
    document.getElementById("result").innerHTML='Result:' +result;
}

function mul() {
    let input1 = +document.getElementById('number1').value;
    let input2 = +document.getElementById('number2').value;
    let result = input1 * input2;
    document.getElementById("result").innerHTML='Result:' +result;
}

function div() {
    let input1 = +document.getElementById('number1').value;
    let input2 = +document.getElementById('number2').value;
    let result = input1 / input2;
    document.getElementById("result").innerHTML='Result:' +result;
}