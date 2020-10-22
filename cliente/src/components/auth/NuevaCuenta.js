import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const NuevaCuenta= () => {
    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState ({ 
        nombre:'',
        email: '',
        password: '',
        confirmar:''
    });

    //extraer de usuario

    const { nombre, email, password, confirmar} = usuario;

    const onChange = e => {
       guardarUsuario({
           ...usuario,
           [e.target.name] : e.target.value
       })
    }

    //Cuando el usuario quiere iniciar sesion

    const onSubmit = e => {
        e.preventDefault();

        //validar que no haya campos vacios

        //Password minimo 6 caracteres

        //los dos Password sean iguales

       //pasarlo al action
    }

    return (
       <div className = "form-usuario">
           <div className="contenedor-form sombra-dark">
               <h1>Obtener Una Cuenta</h1>
               <form 
               onSubmit={onSubmit}
               > 
                   <div className="campo-form">
                       <label HtmlFor="email">Nombre :</label>
                       <input
                       type="text"
                       id="nombre"
                       name="nombre"
                       placeholder= "Tu Nombre"
                       value={nombre}
                       onChange= {onChange} 
                       />
                   </div>

                   <div className="campo-form">
                       <label HtmlFor="email">Email :</label>
                       <input
                       type="email"
                       id="email"
                       name="email"
                       placeholder= "Tu Email"
                       value={email}
                       onChange= {onChange} 
                       />
                   </div>

                   <div className="campo-form">
                       <label HtmlFor="password">Password :</label>
                       <input
                       type="password"
                       id="password"
                       name="password"
                       placeholder= "Tu Password"
                       value={password}
                       onChange= {onChange} 
                       />
                   </div>
                   <div className="campo-form">
                       <label HtmlFor="confirmar">Confirmar Password :</label>
                       <input
                       type="password"
                       id="confirmar"
                       name="confirmar"
                       placeholder= "Repite Tu Password"
                       value={confirmar}
                       onChange= {onChange} 
                       />
                   </div>
                   <div className="campo-form">
                       <input type="submit" className= "btn btn-primario btn-block" value="Registrarme" />
                   </div>
               </form>
               <Link to= {'/'} className="enlace-cuenta">
                   Volver a Iniciar Sesion
               </Link>
           </div>
       </div>
    );
}


export default NuevaCuenta;