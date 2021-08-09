import './navBar.css'

export default function NavBar() {
  return (
    <div className="navbar">
        {/*<div className="logo">
            <img src="../imagens/img1.jpg" alt="Imagem do logo"/></div>*/}

            <div className="navleft">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-instagram-square"></i>
            </div>
            
            <div className="navcenter">2</div>
            <div className="navright">3</div>        
    </div>
  );
}
