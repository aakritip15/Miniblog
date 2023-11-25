import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title,handleDelete}) => {

    return ( 
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                    <div className="blogs-preview">
                        <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        </Link>
                    </div>
            ))}
        </div>
     );
}
 
export default BlogList;