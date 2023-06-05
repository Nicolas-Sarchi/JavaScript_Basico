
function agregarTarea (){
    const nombre = document.getElementById('nombre').value,
    descripcion = document.getElementById('descripcion').value;

    const areaTareas = document.getElementById('areaTarjetas');

    const nuevaTarea = document.createElement('div');
    nuevaTarea.classList.add('card');
    nuevaTarea.innerHTML=`
    <div class="card-body">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="completada">
      <label class="form-check-label" for="completada">Completada</label>
    </div>
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">${descripcion}</p>
    <button class="btn btn-danger" id ="btn-eliminar">Eliminar</button>
  </div>
    `
    areaTareas.appendChild(nuevaTarea);

    document.querySelector("#nombre").value = "";
    document.querySelector("#descripcion").value = "";

    const checkbox = nuevaTarea.querySelector('#completada');

    checkbox.addEventListener('change', function(event) {

      const tarea = event.target.parentNode.parentNode;
      const tareaTexto = tarea.querySelectorAll('.card-text, .card-title');

      for (let i = 0; i < tareaTexto.length; i++) {
        if (event.target.checked) {
          tareaTexto[i].classList.add('subrayado');
        } else {
          tareaTexto[i].classList.remove('subrayado');
        }
      }
      if (event.target.checked) {
        tarea.classList.add('completada');
      } else {
        tarea.classList.remove('completada');
      }
    });

    const btnEliminar = nuevaTarea.querySelector('#btn-eliminar');
    btnEliminar.addEventListener('click', eliminarTarea);
}

function eliminarTarea (event){
    const tarea = event.target.parentNode.parentNode;
      tarea.remove();
}



const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    agregarTarea();
});

