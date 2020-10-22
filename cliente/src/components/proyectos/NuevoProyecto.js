import React, { Fragment, useContext, useState } from "react";
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
     //obtener el estate del formulario 
     const proyectosContext = useContext(proyectoContext);
     const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //state para Poyecto
    const [proyecto, guardarProyecto] = useState({
      nombre:'' 
    });
    const { nombre } = proyecto;
    //lee el contenido del input
    const onChangeProyecto = e => {
      guardarProyecto({
        ...proyecto,
        [e.target.name] : e.target.value
      })
    }
    // Cuando el usuario envia un proyecto 
    const onSubmitProyecto = e => {
      e.preventDefault();

      // Validar proyecto
      if(nombre === '') {
        mostrarError();
        return;
      }

      // Validar state
      agregarProyecto(proyecto)

      //Reiniciar el form
      guardarProyecto({
        nombre: ''
      })
    }



    return ( 
        <Fragment>
        <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() =>mostrarFormulario()}
        >Nuevo Proyecto</button>

        {
          formulario ? 
          (
            <form className="formulario-nuevo-proyecto"
                  onSubmit={onSubmitProyecto}>
           <input
                  type="text"
                  className="input-text"
                  placeholder="Nuevo Proyecto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeProyecto}
           />
           <input 
                 type="submit"
                 className="btn btn-primario btn-block"
                 value="Agregar Proyecto"
            />
           </form>
          ) : null }
          {errorformulario 
          ? <p className="mensaje error">El Nombre del Proyecto es Obligatorio</p> 
          : null}
        </Fragment>
    );

}

export default NuevoProyecto;

