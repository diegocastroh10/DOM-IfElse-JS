//Elementos DOM
function verificar(){
    let input1 = parseInt(document.getElementById("input1").value) || 0;
    let input2 = parseInt(document.getElementById("input2").value) || 0;
    let input3 = parseInt(document.getElementById("input3").value) || 0;

    let suma = input1 + input2 + input3;

    if (suma > 10) {
        document.getElementById("mensaje").textContent = "Llevas demasiados stickers";
    }
    else if (suma < 1) {
        document.getElementById("mensaje").textContent = "Los valores no pueden negativos";
    }
    else {
        document.getElementById("mensaje").textContent = "Llevas "+suma+" stickers";
    };

};