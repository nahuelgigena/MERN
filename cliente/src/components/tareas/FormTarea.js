import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion del context de tareas
    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas , actualizarTarea, limpiarTarea } = tareasContext;

    //effect que detecta si hay una tarea seleccionada 
    useEffect(() => {
      if(tareaseleccionada !== null) {
        guardarTarea(tareaseleccionada)
      } else {
        guardarTarea({
          nombre: ''
        })
      }
    }, [tareaseleccionada]);
 

    // State del formulario
    const [tarea, guardarTarea] = useState ({
      nombre: ''
    })

    //extraer el nombre del proyecto
    const { nombre } = tarea;

    //si no hay proyecto creado aun
    if(!proyecto) return null;

    //array destucturing para extraer el proyecto
    const [proyectoActual] = proyecto;

    //Leer valores del formulario 
    const handleChange = e => {
      guardarTarea({
        ...tarea,
        [e.target.name] : e.target.value
      })
    }

    const onSubmit = e => {
      e.preventDefault();

      //Validar                           trim= elimina los espacios
      if(nombre.trim() === ''){
        validarTarea();
        return;
      }
       
      //si es edicion o si es nueva tarea
      if (tareaseleccionada === null) {
         //Agregar la nueva tarea al state de tarea
         tarea.proyectoId = proyectoActual.id;
         tarea.estado = false;
         agregarTarea(tarea);
        
      } else {
        //actualizar tarea exitente
        actualizarTarea(tarea);

        // elimina tarea seleccionada del state
        limpiarTarea();
      }

      // obtener tareas y filtras tareas del prouecto
      obtenerTareas(proyectoActual.id);

      //reiniciar el form
      guardarTarea({
        nombre:''
      })

    }


    return (
       <div className="formulario">
        <form
        onSubmit={onSubmit}
        >
           <div className="contenedor-input">
             <input
               type="text"
               className="input-text"
               placeholder="Nombre Tarea..."
               name="nombre"
               value= {nombre}
               onChange={handleChange}

             />
           </div>
           <div className="contenedor-input">
               <input 
                 type="submit"
                 className="btn btn-primario btn-submit btn-block"
                 value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                />
           </div>

        </form>

        {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
       </div>

    );
}

export default FormTarea;
