function lenghtConverter(valNum) { 
    //Distance and Height
    document.getElementById("outputMeters").innerHTML = valNum / 100;
    document.getElementById("outputKm").innerHTML = parseFloat(valNum / 100000).toFixed(4);
    document.getElementById("outputInches").innerHTML = parseFloat(valNum / 2.54).toFixed(2) || parseFloat(valNum * 0.39370).toFixed(2);
    document.getElementById("outputYard").innerHTML = parseFloat(valNum / 91.44).toFixed(2) || parseFloat(valNum * 0.010936).toFixed(2);
    document.getElementById("outputMile").innerHTML = parseFloat(valNum * 0.0000062137).toFixed(5) || parseFloat(valNum / 160900).toFixed(5);
    document.getElementById("outputFoot").innerHTML = parseFloat(valNum * 0.032808).toFixed(2) || parseFloat(valNum / 30.48).toFixed(2); 
}

function weightConverter(valNum) {
    document.getElementById("outputGr").innerHTML = parseFloat(valNum * 1000).toFixed(2);
    document.getElementById("outputOunces").innerHTML = parseFloat(valNum * 35.274).toFixed(2);
    document.getElementById("outputPound").innerHTML = parseFloat(valNum * 2.205).toFixed(2);
    document.getElementById("outputMetrTon").innerHTML = parseFloat(valNum / 1000).toFixed(3);
    document.getElementById("outputTons").innerHTML = parseFloat(valNum / 907.2).toFixed(3);
}

function liquidConverter(valNum) {
    document.getElementById("outputMl").innerHTML = parseFloat(valNum * 1000).toFixed(2);
    document.getElementById("outputFluidOunc").innerHTML = parseFloat(valNum * 33.814).toFixed(2);
    document.getElementById("outputTbsp").innerHTML = parseFloat(valNum * 67.628).toFixed(3);
    document.getElementById("outputCups").innerHTML = parseFloat(valNum * 4.167).toFixed(2);
    document.getElementById("outputPint").innerHTML = parseFloat(valNum * 2.113).toFixed(2);
    document.getElementById("outputQuart").innerHTML = parseFloat(valNum * 1.057).toFixed(2);
    document.getElementById("outputGallon").innerHTML = parseFloat(valNum / 3.785).toFixed(2);

}

function temperatureConverter(valNum) {
    document.getElementById("outputFah").innerHTML = parseFloat((valNum * 9/5) + 32).toFixed(2);
    document.getElementById("outputKel").innerHTML = parseFloat(valNum) + parseFloat(273.15);
    parseFloat(document.getElementById("outputKel").innerHTML = parseFloat(valNum) + 273.15).toFixed(2);
}

function changeFont() {
    var fon = document.getElementById("main-body");
    if (fon.className == "arial") {
        fon.className = 'open-dyslexic';
    } else {
        fon.className = 'arial';
    }
}

