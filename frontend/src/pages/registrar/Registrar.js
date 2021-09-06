import { Link} from "react-router-dom"
import { useState } from "react"
import './registrar.css'
import axios from 'axios'


function Registrar() {
    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
    const [error,setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try{
            const res = await axios.post("/auth/registrar", {
                username,
                email,
                senha
            })
            res.data && window.location.replace("/login")
        } catch(err){
            setError(true)
        }

    }
    return (
        <div>
            <div className="registrarContainer">
            <h1>REGISTRAR</h1>
                <form className="registrarForm" onSubmit={handleSubmit}>
                    <label>Nome do Usuário</label>
                    <input type="text" className="registrarInput" placeholder="Escreva seu nome de usuário"
                    onChange={e => setUsername(e.target.value)}
                    />
                    <label>E-mail</label>
                    <input type="email" className="registrarInput" placeholder="Escreva seu E-mail"
                    onChange={e => setEmail(e.target.value)}
                    />
                    <label>Senha</label>
                    <input type="password" className="registrarInput" placeholder="Escreva sua senha" 
                    onChange={e => setSenha(e.target.value)}
                    />
                    <button className="registrarButton" type="submit">Registrar</button>
                </form>
                <Link className="link" to="/login">
                    Login
                </Link>
                {error &&<span style={{color: "red", marginTop:"10px"}}> Algo deu erro, por favor tente novamente !</span>}
            </div>
            
        </div>
    )
}

export default Registrar
