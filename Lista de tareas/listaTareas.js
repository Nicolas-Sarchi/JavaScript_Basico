// Variables globales
const formulario = document.getElementById('formulario');
const areaTareas = document.getElementById('areaTarjetas');
const tareas = new Map();

// Evento submit del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  agregarTarea();
});

// Función para agregar una tarea
function agregarTarea() {
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const tarea = { nombre, descripcion };
  
  tareas.set(nombre, tarea);
  mostrarTarea(nombre, tarea);

  // Limpiar campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('descripcion').value = '';
}

// Función para mostrar una tarea en el área de tarjetas
function mostrarTarea(nombre, tarea) {
  const nuevaTarea = document.createElement('div');
  nuevaTarea.classList.add('card');
  nuevaTarea.innerHTML = `
    <div class="card-body">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="completada">
        <label class="form-check-label" for="completada">Completada</label>
      </div>
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${tarea.descripcion}</p>
      <button class="btn btn-danger btn-eliminar">Eliminar</button>
      <button class="btn btn-secondary btn-editar">Editar</button>
    </div>
  `;

  areaTareas.appendChild(nuevaTarea);

  // Evento para marcar como completada una tarea
  const checkbox = nuevaTarea.querySelector('#completada');
  checkbox.addEventListener('change', function(event) {
    const tarea = event.target.parentNode.parentNode;
    const tareaTexto = tarea.querySelectorAll('.card-text, .card-title');

    tareaTexto.forEach((elemento) => {
      elemento.classList.toggle('subrayado');
    });

    tarea.classList.toggle('completada');
  });

  // Evento para eliminar una tarea
  const btnEliminar = nuevaTarea.querySelector('.btn-eliminar');
  btnEliminar.addEventListener('click', function(event) {
    const tarea = event.target.parentNode.parentNode;
    const nombreTarea = tarea.querySelector('.card-title').textContent;

    tareas.delete(nombreTarea);

    tarea.remove();
  });

  // Evento para editar una tarea
  const btnEditar = nuevaTarea.querySelector('.btn-editar');
  btnEditar.addEventListener('click', function(event) {
    const tarea = event.target.parentNode.parentNode;
    const nombreTarea = tarea.querySelector('.card-title').textContent;
    const tareaActual = tareas.get(nombreTarea);

    const nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea:', nombreTarea);
    const nuevaDescripcion = prompt('Ingrese la nueva descripción de la tarea:', tareaActual.descripcion);

    if (nuevoNombre && nuevaDescripcion) {
      tareaActual.nombre = nuevoNombre;
      tareaActual.descripcion = nuevaDescripcion;

      tarea.querySelector('.card-title').textContent = nuevoNombre;
      tarea.querySelector('.card-text').textContent = nuevaDescripcion;
    }
  });
}
