import { Link} from "react-router-dom"
import { Context } from "../../context/Context"
import './login.css'
import axios from 'axios'
import { useRef } from "react"


function Login() {
    const userRef = useRef()
    const senhaRef = useRef()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post("/auth/login",{
                username: userRef.current.value,
                senha: senhaRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"})
        }
    }

    return (
        <div>
            <div className="loginContainer">
            <h1>LOGIN</h1>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                        type="email"
                        className="loginInput"
                        placeholder="Escreva seu nome de usúario"
                        ref={useRef}
                        />
                    <label>Senha</label>
                    <input type="password" className="loginInput" placeholder="Escreva sua senha" ref={senhaRef}/>
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                </form>
                <Link className="link" to="/registrar">Registrar</Link>
            </div>
            
        </div>
    )
}

export default Login
