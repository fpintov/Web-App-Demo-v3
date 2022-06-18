
(function(){
    cargaListaCargos();
    cargaListaTurnos();
    cargaListaEstados();
    configuraInputFechas();
})();


async function cargaListaCargos(){
    const requestCargos = await fetch('api/cargos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const cargos = await requestCargos.json();

    console.log(cargos);

    $("#selectCargo option").remove();
    $("#selectCargo").append('<option>Seleccione el cargo del trabajador</option>');

    for (let cargo of cargos){
        $("#selectCargo").append('<option selected value="' +cargo.id +  '">' + cargo.nombreCargo + '</option>');
    }
}

async function cargaListaTurnos(){
    const requestTurnos = await fetch('api/turnos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const turnos = await requestTurnos.json();

    console.log(turnos);

    $("#selectTurno option").remove();
    $("#selectTurno").append('<option>Seleccione el turno del trabajador</option>');

    for (let turno of turnos){
        $("#selectTurno").append('<option selected value="' + turno.id +  '">' + turno.nombreTurno + '</option>');
    }
}


async function cargaListaEstados(){
    const requestEstados = await fetch('api/estados', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const estados = await requestEstados.json();

    console.log(estados);

    $("#selectEstado option").remove();
    $("#selectEstado").append('<option>Seleccione el estado del trabajador</option>');

    for (let estado of estados){
        $("#selectEstado").append('<option selected value="' + estado.id +  '">' + estado.estado + '</option>');
    }
}
function configuraInputFechas(){
    // Estableciendo Valores dinámicos mínimos y máximos para fecha de nacimiento y fecha de ingreso
    // Edad máxima 80 años, edad mínima 18 años.
    let hoy = new Date();
    let birthYearMin = (hoy.getFullYear()-80).toString();
    let birthYearMax = (hoy.getFullYear()-18).toString();
    let actualMonth = (hoy.getMonth()+1).toString();
    if (actualMonth.length<2){
        actualMonth = '0' + actualMonth;
    }
    let yesterday = (hoy.getDate()-1).toString();
    if (yesterday.length<2){
        yesterday = '0' + yesterday;
    }

    let fechMin = birthYearMin + '-' + actualMonth + '-' + yesterday;
    let fechMax = birthYearMax + '-' + actualMonth + '-' + yesterday;
    let inputDpFechaNac = document.getElementById("dpFechNac");
    inputDpFechaNac.setAttribute("min", fechMin);
    inputDpFechaNac.setAttribute("max", fechMax);

    let hiredYearMin = (hoy.getFullYear()-50).toString();
    let hiredYearMax = (hoy.getFullYear()).toString();
    fechMin = hiredYearMin + '-' + actualMonth + '-' + yesterday;
    fechMax = hiredYearMax + '-' + actualMonth + '-' + yesterday;
    let inputDpFechaIng = document.getElementById("dpFechIng");
    inputDpFechaIng.setAttribute("min", fechMin);
    inputDpFechaIng.setAttribute("max", fechMax);
}
