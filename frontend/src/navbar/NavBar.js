import './navBar.css'

export default function NavBar() {
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
                <li className="navlistitem">HOME</li>
                <li className="navlistitem">SOBRE</li>
                <li className="navlistitem">POSTAR</li>
                <li className="navlistitem">LOGOUT</li>
              </ul>
            </div>
            <div className="navright">
              <img className="menuImg" src="https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?w=704" />
              <i className="menuSearchIcon fas fa-search"></i>
            </div>        
    </div>
  );
}
