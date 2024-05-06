import Header from "../helpers/Header";
import "./user.css"
function User(){
    return(
        <>
        <Header/>
        <div className="infoUser">
            <li>
                <ul><img src="" alt="Foto usuario" /></ul>
                <ul>Empresa: CESDE</ul>
                <ul>Contratacion: 06/05/2024</ul>
                <ul>Salario: 1000000</ul>
                <ul>Nombre: David Alejandro Zapata</ul>
                <ul>Correo: mail@mail.com</ul>
            </li>

        </div>
        </>
    )
}
export default User