import { Link} from "react-router-dom"
import './registrar.css'


function Registrar() {
    return (
        <div>
            <div className="registrarContainer">
            <h1>REGISTRAR</h1>
                <form className="registrarForm">
                    <label>Nome do Usuário</label>
                    <input type="text" className="registrarInput" placeholder="Escreva seu nome de usuário"/>
                    <label>E-mail</label>
                    <input type="email" className="registrarInput" placeholder="Escreva seu E-mail"/>
                    <label>Senha</label>
                    <input type="password" className="registrarInput" placeholder="Escreva sua senha"/>
                    <button className="registrarButton">Registrar</button>
                </form>
                <Link to="/login">Login</Link>
            </div>
            
        </div>
    )
}

export default Registrar
