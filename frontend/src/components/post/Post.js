import './post.css'

function Post({post}) {
    return (
        
        <div className="post">
            
                    <img className="postImg" src='https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="" />
            
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">Praias</span>
                    <span className="postCats">Cinemas</span>
                </div>
                <span className="postTitulo">{post.titulo}</span>
                
                    <span className="postDate" >{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDescription">
                {post.description}
            </p>
        </div>
        
    )
}

export default Post
