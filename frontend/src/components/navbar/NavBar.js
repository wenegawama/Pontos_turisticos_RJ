import { Link } from 'react-router-dom'
import './navBar.css'


export default function NavBar() {
  const user= false
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
                <li className="navlistitem"><Link to="/">HOME</Link></li>
                <li className="navlistitem"><Link to="/">SOBRE</Link></li>
                <li className="navlistitem"><Link to="/postar">POSTAR</Link></li>
                <li className="navlistitem">{user && "LOGOUT"}</li>
              </ul>
            </div>
            <div className="navright">
              {
                user ? (<img className="menuImg" src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?w=704" />) : (
                  <ul className="navlist">
                    <li>
                      <Link className="link" to="/login">LOGIN</Link>
                      <Link className="link" to="/registrar">REGISTRAR</Link>
                    </li>
                  </ul>
                )
              }
              
              <i className="menuSearchIcon fas fa-search"></i>
            </div>        
    </div>
  );
}
