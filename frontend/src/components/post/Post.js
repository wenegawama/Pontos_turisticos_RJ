import './post.css'
import {Link} from "react-router-dom"

function Post({post}) {
    return (
        
        <div className="post">
            {post.foto && (
                <img className="postImg" src={post.foto} alt="" />

            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCats">{c.name}</span>
                    ))}                   
                </div>
                <Link to= {`/post/${post._id}`} className="link" >
                    <span className="postTitulo">{post.titulo}</span>
                </Link>
                
                    <span className="postDate" >{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDescription">
                {post.description}
            </p>
        </div>
        
    )
}

export default Post
