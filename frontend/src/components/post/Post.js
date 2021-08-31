import './post.css'

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
