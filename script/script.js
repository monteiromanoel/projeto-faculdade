function lenghtConverter(valNum) { 
    document.getElementById("outputMeters").innerHTML = valNum / 100;
    document.getElementById("outputKm").innerHTML = valNum / 100000;
    document.getElementById("outputInches").innerHTML = valNum / 2.54 || valNum * 0.39370;
    document.getElementById("outputYard").innerHTML = valNum / 91.44 || valNum * 0.010936;
    document.getElementById("outputMile").innerHTML = valNum * 0.0000062137 || valNum / 160900;
    document.getElementById("outputFoot").innerHTML = valNum * 0.032808 || valNum / 30.48; 
    //document.getElementsByClassName('class-outputMeters').innerHTML = valNum / 100;
    
}

function changeFont() {
    var fon = document.getElementById("main-body");
    if (fon.className == "arial") {
        fon.className = 'open-dyslexic';
    } else {
        fon.className = 'arial';
    }
}