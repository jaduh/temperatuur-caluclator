var celciusInput = document.querySelector("#celcius input");


var farhenheitInput = document.querySelector("#fahrenheit input");
var kelvinInput = document.querySelector("#kelvin input");

function rondGetal(nummer) {
return Math.round(nummer*100)/100;
}

function celciusToFAndK() {
    var cTemps = Number(celciusInput.value);
    var fTemps = (cTemps * (9 / 5)) + 32;
    var kTemps = cTemps + 273.15;
    farhenheitInput.value = rondGetal(fTemps);
    kelvinInput.value = rondGetal(kTemps);
}

function fahrenheitToCAndK() {
    var fTemps = Number(farhenheitInput.value);
    var cTemps = (fTemps - 32) * (5 / 9);
    var kTemps = (fTemps + 459.67) * 5 / 9;
    celciusInput.value = rondGetal( cTemps);
    kelvinInput.value = rondGetal(kTemps);
}

function kelvinToCAndF(){
    var kTemps = Number(kelvinInput.value);
    var cTemps = kTemps-273.15;
    var fTemps = 9/5*(kTemps-273) +32;
    celciusInput.value= rondGetal(cTemps);
    farhenheitInput.value = rondGetal(fTemps);
}



function app(){
celciusInput.addEventListener('input', celciusToFAndK);
farhenheitInput.addEventListener('input', fahrenheitToCAndK);
kelvinInput.addEventListener('input', kelvinToCAndF)}


app();