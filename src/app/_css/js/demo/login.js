async function iniciarSesion() {

    let datos = {};
    datos.email = document.getElementById('txtMail').value;
    datos.password = document.getElementById('txtPassword').value;

    const datosLogin = await fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    const respuesta = await datosLogin.text();
    let msgError = document.getElementById('msgErrorLogin')
    if(respuesta==="Ok"){
        window.location.href='index.html';
    }else{
        msgError.classList.remove("d-none");
        msgError.classList.add("text-info");
        msgError.innerHTML='<p style=" color: #cc0101; text-align: center">El usuario y/o contraseña no coinciden</p>';
    }
}
