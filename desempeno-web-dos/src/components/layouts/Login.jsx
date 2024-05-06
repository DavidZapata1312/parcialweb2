import { useEffect,useState } from "react"
import { usuarios } from "../database/DataBase"
import { useNavigate } from "react-router-dom"
import "./Login.css"



const  Login= () =>{
    const [getUsuario, setUsuario] = useState("");
    const [getContrasena, setContrasena] = useState("");
    
    const redireccion = useNavigate();

    function validarInicioSesion() {
        if (buscarUsuario()) {
          console.log("Inicio de sesión correcta");
          redireccion("/home");
        } else {
          console.log("Error de credenciales");
        }
      }
 

    function buscarUsuario() {
        return usuarios.some(
          (usuario) =>
            usuario.user === getUsuario && usuario.contrasena === getContrasena
        );
      }
    return (
        
      <div className="conteiner ">
        <form className="login-form">
      <h2>Inicio de sesión</h2>
            <div class="inputs">
                <label for="username">Usuario</label>
                <input type="text" id="username" name="username" required
                   onChange={(e) => {
                    setUsuario(e.target.value);
                  }}/>
             
            </div>
            <div class="inputs">
                <label for="password">Contraseña</label>
                <input type="text" id="password" name="password" required
                   onChange={(e) => {
                    setContrasena(e.target.value);
                  }}/>
            </div>
            <section>
               
                <button onClick={validarInicioSesion} type="button" className="btn">
            Iniciar Sesión
          </button>
                
            </section>
            </form>
      </div>
            
        
    )
}

export default Login