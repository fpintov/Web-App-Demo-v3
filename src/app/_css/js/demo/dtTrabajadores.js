
(function(){
  //alert("Pasé por aquí");
  actualizaDataTableTrabajadores();
})();

async function actualizaDataTableTrabajadores(){
  const requestTrabajadores = await fetch('api/trabajadores', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const trabajadores = await requestTrabajadores.json();

  console.log(trabajadores);

  let tblHtml = "";

  for (let trabajador of trabajadores){

    let botonEliminar = `<a href="#" class="btn btn-danger btn-circle btn-sm" onclick="eliminarTrabajador(${trabajador.rut})">
                                    <i class="fas fa-trash"></i></a>`;

   let filasTabla =  `<tr>
                                        <td>${trabajador.rut}</td>
                                        <td>${trabajador.nombre} ${trabajador.apellido}</td>
                                        <td>${trabajador["cargosIdCargo"].nombreCargo}</td>
                                        <td>${trabajador.fechIng}</td>
                                        <td>${trabajador["estadosIdEstado"].estado}</td>
                                        <td>
                                            ${botonEliminar}
                                        </td>
                        </tr>`;
    tblHtml += filasTabla;
  }
  document.querySelector('#dtTrabajadores tbody').outerHTML=tblHtml;
}


async function eliminarTrabajador(rut){

  if(!confirm('¿Está seguro que desea elimniar el usuario?')){
    return;
  }
  const requestTrabajadores = await fetch('api/trabajadores/' + rut, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  location.reload();
}


