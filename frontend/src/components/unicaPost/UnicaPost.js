import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './unicaPost.css'

function UnicaPost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post,setPost] = useState({})

    useEffect(() => {
      const getPost = async () => {
          const res = await axios.get("/post/"+ path)
          setPost(res.data)
      }
    getPost()
    }, [path])
    return (
        <div className="unicaPost">
            <div className="unicaPostContainer">
            {post.foto && (
                <img src={post.foto} alt="" className="unicaPostImg" />
            )}
                <h1 className="uniquePostTitulo" >
                {post.titulo}
                <div className="editarUniquePost" >
                    <i className="uniquePostIcon far fa-edit"></i>
                    <i className="uniquePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="infoUniquePost">
                <span  className="autorUniquePost">De:
                <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>                
                </Link>
                </span>
                <span  className="tempoUniquePost">{new Date(post.createdAt).toDateString} </span>
            </div>
            <p className="descriptionUniquePost">
            {post.description}        
            </p>
            </div>
        </div>
    )
}

export default UnicaPost
