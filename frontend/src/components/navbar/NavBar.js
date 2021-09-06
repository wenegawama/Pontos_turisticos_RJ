import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import './navBar.css'


export default function NavBar() {
  const { user, dispatch } = useContext(Context) 

  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className="navbar">
        {/*<div className="logo">
            <img src="../imagens/img1.jpg" alt="Imagem do logo"/></div>*/}

            <div className="navleft">
                <i className="menuIcon fab fa-facebook-f"></i>
                <i className="menuIcon fab fa-twitter-square"></i>
                <i className="menuIcon fab fa-instagram-square"></i>
            </div>
            
            <div className="navcenter">
              <ul className="navlist">
                <li className="navlistitem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="navlistitem"><Link to="/postar">POSTAR</Link></li>
                <li className="navlistitem" onclick={handleLogout}>{user && "LOGOUT"}</li>
              </ul>
            </div>
            <div className="navright">
              {
                user ? (<img className="menuImg" src={user.fotoDePerfil} alt="Foto do perfil do úsuario" />) : (
                  <ul className="navlist">
                    <li className="navlistitem">
                      <Link className="link" to="/login">LOGIN</Link>
                      <Link className="link" to="/login">REGISTRAR</Link>
</li>
                  </ul>
                )
              }
              
              <i className="menuSearchIcon fas fa-search"></i>
            </div>        
    </div>
  );
}
