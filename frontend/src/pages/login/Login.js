import { Link} from "react-router-dom"
import './login.css'


function Login() {
    return (
        <div>
            <div className="loginContainer">
            <h1>LOGIN</h1>
                <form className="loginForm">
                    <label>E-mail</label>
                    <input type="email" className="loginInput" placeholder="Escreva seu E-mail"/>
                    <label>Senha</label>
                    <input type="password" className="loginInput" placeholder="Escreva sua senha"/>
                    <button className="loginButton">Login</button>
                </form>
                <Link className="link" to="/registrar">Registrar</Link>
            </div>
            
        </div>
    )
}

export default Login
