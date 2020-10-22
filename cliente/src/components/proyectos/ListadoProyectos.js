import React, {useContext , useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';



const ListadoProyectos = () => {
    //extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;
     
    //Obtener proyectos cuando carga el componente
    useEffect(() =>{
        obtenerProyectos();
        //eslint-disable-next-line
    }, [ ]);

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No Hay Proyectos </p>;
    
    


    return(
        <ul className="listado-proyectos">
           <TransitionGroup>
           {proyectos.map(proyecto => (
              <CSSTransition 
              key={proyecto.id}
              timeout={200}
              className="proyecto"
              >
                   <Proyecto
                      
                      proyecto={proyecto}
                   />
              </CSSTransition>
           ))}
           </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;