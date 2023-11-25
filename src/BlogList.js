const BlogList = ({blogs,title,handleDelete}) => {
    
    return ( 
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                    <div className="blogs-preview">
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        
                    </div>
            ))}
        </div>
     );
}
 
export default BlogList;