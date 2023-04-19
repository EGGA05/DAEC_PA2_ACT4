function age(){
    var edad = document.getElementById("edad").value;
    window.alert((edad>=1 && edad<=120) ? (edad>18) ? "si tiene permiso de acceso" : "no tiene permiso de acceso" : "no tiene permiso de acceso");
}