import axios from 'axios'
import {useState,useEffect} from 'react'
import './sidebar.css'
import { Link} from "react-router-dom"

function Sidebar() {
    const [cats,setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span  className="sidebarTitulo" >SOBRE NÓS</span>
                <img src="https://images.pexels.com/photos/3512847/pexels-photo-3512847.jpeg?cs=srgb&dl=pexels-angelo-duranti-3512847.jpg&fm=jpg" alt="Imagem sobre nós" width="40" />
                <p>Vem descobrir a nossa bela Cidade </p>
            </div>
            <div className="sidebarItem" >
                <span  className="sidebarTitulo" >CATEGORIAS</span>
                <ul className="sidebarList" >
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem" >{c.name}</li>
                        
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
            <span  className="sidebarTitulo" >NÓS SEGUIR </span>
            
            <div className="redesSociasIcon" >
                <i className="sidebarIcon fab fa-facebook-f"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
