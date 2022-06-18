
async function registrarTrabajador() {
    let datos = {};
        datos.rut = document.getElementById('txtRut').value;
        datos.rut = datos.rut.replace("-","");
        datos.nombre = document.getElementById('txtNombre').value;
        datos.apellido = document.getElementById('txtApellidos').value;
        datos.email = document.getElementById('txtMail').value;
        datos.telefono = document.getElementById('txtTelefono').value;
        datos.password = document.getElementById('txtPassword').value;
        datos.fechNac = document.getElementById('dpFechNac').value;
        datos.fechIng = document.getElementById('dpFechIng').value;
        datos.turnoIdTurno = document.getElementById('selectTurno').value;
        datos.cargoIdCargo = document.getElementById('selectCargo').value;
        datos.estadoIdEstado = document.getElementById('selectEstado').value;

        console.log('turnoIdTurno: ' + document.getElementById('selectTurno').value);
        console.log('cargoIdCargo: ' + document.getElementById('selectCargo').value);
        console.log('estadoIdEstado: ' + document.getElementById('selectEstado').value);


    const respuesta = await fetch('api/trabajadores', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
}
