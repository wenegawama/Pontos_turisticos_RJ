import './header.css'

export default function Header() {
    return (
        <div className="header">
             <div className="headertitulo">
                <span className="headerTituloSm" >Pontos Turisticos</span>
                <span className="headerTituloLg" >RIO DE JANEIRO</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/161212/rio-de-janeiro-olympics-2016-niteroi-brazil-161212.jpeg?cs=srgb&dl=pexels-pixabay-161212.jpg&fm=jpg" alt="Imagem banner do Rio de Janeiro" />
        </div>
    )
}


