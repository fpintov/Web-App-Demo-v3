(function(){

})();

function validaDatosTrabajador(){
    validaRuts();
    validaNombre();
    validaApellidos();
    validaMail();
    validaTelefono();
    validaPasswords();

    if (rutValido === false || nombreValido === false ) {
        return;
    }else{
        registrarTrabajador();
    }

}

function validaRuts(){
    //Validación del RUT
    let msgError = document.getElementById("msgErrorRut");
    let txtRut = document.getElementById("txtRut");
    var rutValido = false;
    let mensajeError = "El rut ingresado es válido.";

    if (Fn.validaRut( txtRut.value )){
        rutValido = true;
    }
    modificaObjSegunValidacion(rutValido, msgError, txtRut, mensajeError);
}
//Función Valida RUT
var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
        rutCompleto = rutCompleto.replace("‐","-");
        if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp 	= rutCompleto.split('-');
        var digv	= tmp[1];
        var rut 	= tmp[0];
        if ( digv == 'K' ) digv = 'k' ;

        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}

function validaNombre(){
    let msgError = document.getElementById("msgErrorNombre");
    let txtNombre = document.getElementById("txtNombre");
    let nombreValido = true;
    let mensajeError = "Debe ingresar un nombre (campo obligatorio).";

    if (txtNombre.value === ""){
        nombreValido=false;
    }
    modificaObjSegunValidacion(nombreValido, msgError, txtNombre, mensajeError);
}

function validaApellidos(){
    let msgError = document.getElementById("msgErrorApellidos");
    let txtApellidos = document.getElementById("txtApellidos");
    let apellidosValido = true;
    let mensajeError = "Debe ingresar los apellidos (campo obligatorio).";

    if (txtApellidos.value ===""){
        apellidosValido=false;
    }
    modificaObjSegunValidacion(apellidosValido, msgError, txtApellidos, mensajeError);
}
function validaMail(){
    let msgError = document.getElementById("msgErrorEmail");
    let txtMail = document.getElementById("txtMail");
    let emailValido = true;
    let mensajeError = "Debe ingresar un e-mail válido (campo obligatorio).";

    if (txtMail.validity.typeMismatch === true || txtMail.value ==="") {
        emailValido = false;
    }
    modificaObjSegunValidacion(emailValido, msgError, txtMail, mensajeError);
}

function validaTelefono(){
    let msgError = document.getElementById("msgErrorTelefono");
    let txtTelefono = document.getElementById("txtTelefono");
    let telefonolValido = true;
    let mensajeError = "Debe ingresar un telefono válido de 9 dígitos (sin +56, campo obligatorio).";

    if (txtTelefono.validity.typeMismatch === true || txtTelefono.value ==="" || txtTelefono.value.toString().length < 9) {
        telefonolValido = false;
    }
    modificaObjSegunValidacion(telefonolValido, msgError, txtTelefono, mensajeError);
}

function validaPasswords(){
    let msgError1 = document.getElementById("msgErrorContr");
    let msgError2 = document.getElementById("msgErrorRptContr");
    let txtPassword = document.getElementById("txtPassword");
    let txtRptPassword = document.getElementById("txtRptPassword");
    let passwordValido = true;
    let repPassValido = true;
    let matchPasswords = true;
    let mensajeError = "";

    if (txtPassword.value ==="" || txtPassword.value.toString().length < 6) {
        passwordValido = false;
        mensajeError = "Debe ingresar una contraseña de al menos 6 dígitos.";
        modificaObjSegunValidacion(passwordValido, msgError1, txtPassword, mensajeError);
        return;
    }else{
        modificaObjSegunValidacion(passwordValido, msgError1, txtPassword, mensajeError);
    }

    if (txtRptPassword.value ==="" || txtRptPassword.value.toString().length < 6) {
        repPassValido = false;
        mensajeError = "Debe reingresar la misma contraseña.";
        modificaObjSegunValidacion(repPassValido, msgError2, txtRptPassword, mensajeError);
        return;
    }else{
        modificaObjSegunValidacion(repPassValido, msgError2, txtRptPassword, mensajeError);
    }

    if (txtPassword.value !== "" && txtRptPassword.value !== "") {
        if(txtPassword.value !== txtRptPassword.value) {
            matchPasswords = false;
            mensajeError = "Las contraseñas ingresadas no coinciden.";
            modificaObjSegunValidacion(matchPasswords, msgError2, txtRptPassword, mensajeError);
        }else{
            modificaObjSegunValidacion(matchPasswords, msgError2, txtRptPassword, mensajeError);
        }
    }
}

function validaFechNac(){

    let msgError = document.getElementById("msgErrorFechNac");
    let dpFechNac = document.getElementById("dpFechNac");
    let edadlValido = true;
    let mensajeError = "Debe ingresar una fecha (campo obligatorio), el trabajador no puede ser mayor de 80 años ni menor que 18 años.";

    if (dpFechNac === null || dpFechNac.validity.rangeOverflow || dpFechNac.validity.rangeUnderflow) {
        edadlValido = false;
    }

    if (edadlValido===true){
        msgError.classList.remove("text-info");
        msgError.classList.add("d-none");
        dpFechNac.style.color = "#124c05";
    } else {
        msgError.classList.remove("d-none");
        msgError.classList.add("text-info");
        dpFechNac.style.color = "#F92305";
        msgError.innerHTML='<p style=" color: #FE9371"><small>' + mensajeError + '</small></p>';
    }
}

function modificaObjSegunValidacion(esValido, xObjMsgError, xObjeto, xMensajeError) {

    console.log(esValido);
    if (esValido===true){
        xObjMsgError.classList.remove("text-info");
        xObjMsgError.classList.add("d-none");
        xObjeto.style.backgroundColor = "#B7FF65";
    } else {
        xObjMsgError.classList.remove("d-none");
        xObjMsgError.classList.add("text-info");
        xObjeto.style.backgroundColor = "#FFCEBE";
        xObjMsgError.innerHTML='<p style=" color: #FE9371"><small>' + xMensajeError + '</small></p>';
    }
}






