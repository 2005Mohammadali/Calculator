// JavaScript is not working !!!

//let input = document.getElementById('inputBox')
let string = "";    
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }

    })
}) 











/*if (e.target.innerHTML == '=') {
    string = eval(string);
    document.querySelectorAll('.input').value = string
    input.value = string;
}
else if (e.target.innerHTML == 'AC') {
    string = "";
    document.querySelectorAll('.input').value = string
    input.value = string;
}
else {
    console.log(e.target);
    string += e.target.innerHTML;
    document.querySelectorAll('.input').value = string
    input.value = string;
}*/