function verificar() {
    let select1 = document.getElementById('digito1').value;
    let select2 = document.getElementById('digito2').value;
    let select3 = document.getElementById('digito3').value;
    let concatenado = select1 + select2 + select3;

    if (concatenado == '911') {
        document.getElementById("mensaje").textContent = "Password 1 correcta";
    } 
    else if (concatenado == 714) {
        document.getElementById("mensaje").textContent = "Password 2 correcta";
    }
    else {
        document.getElementById("mensaje").textContent = "Password incorrecta";
    }
}