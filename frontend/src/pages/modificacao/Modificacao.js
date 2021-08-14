import './modificacao.css'
import Sidebar from '../../components/sidebar/Sidebar'

function Modificacao() {
    return (
        <div className="modificacao">
            <div className="modificacaoContainer">
                <div className="modificacaoTitulo">
                    <span  className="alterarTitulo">Alterar sua conta</span>
                    <span  className="deletarTitulo">Deletar sua conta</span>
                </div>
            
            <form className="modificacaFormulario">
                <label>Foto de perfil</label>
                <div className="modificacaoFotoPerfil">
                    <img src="https://images.pexels.com/photos/3512847/pexels-photo-3512847.jpeg?cs=srgb&dl=pexels-angelo-duranti-3512847.jpg&fm=jpg" alt="Foto de perfil"/>               
                    <label htmlFor="fileInput">
                        <i className="modificacaoFotoPerfilIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Usuário</label>
                <input type="text" placeholder="Nome do usuário"/>
                <label>Email</label>
                <input type="email" placeholder="usuario@gmail.com"/>
                <label>Senha</label>
                <input type="text" type="password"/>
                <button className="btn btn-primary" type="submit">Atualizar</button>   
            </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Modificacao
