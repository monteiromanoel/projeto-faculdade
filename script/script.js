function lenghtConverter(valNum) { 
    document.getElementById("outputMeters").innerHTML = valNum / 100;
    document.getElementById("outputKm").innerHTML = parseFloat(valNum / 100000).toFixed(4);
    document.getElementById("outputInches").innerHTML = parseFloat(valNum / 2.54).toFixed(2) || parseFloat(valNum * 0.39370).toFixed(2);
    document.getElementById("outputYard").innerHTML = parseFloat(valNum / 91.44).toFixed(2) || parseFloat(valNum * 0.010936).toFixed(2);
    document.getElementById("outputMile").innerHTML = valNum * 0.0000062137 || valNum / 160900;
    document.getElementById("outputFoot").innerHTML = valNum * 0.032808 || valNum / 30.48; 
    //document.getElementsByClassName('class-outputMeters').innerHTML = valNum / 100;

    document.getElementById("outputMeters").innerHTML = parseFloat(valNum / 100).toFixed(2);
}

function changeFont() {
    var fon = document.getElementById("main-body");
    if (fon.className == "arial") {
        fon.className = 'open-dyslexic';
    } else {
        fon.className = 'arial';
    }
}