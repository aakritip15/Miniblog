import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, settitle] = useState('');
    const [body,setbody] = useState('');
    const [author, setauthor] = useState('aakriti');
    const [isPending, setisPending]= useState(false);
    const history = useHistory();

    const handlesubmit =(e) =>{
        e.preventDefault();
        setisPending(true);
        const blog = {title,body,author};
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog added")
            setisPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=> settitle(e.target.value)}
                /> 

                <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setbody(e.target.value)}
                />

                <label >Blog Author</label>
                <select
                value={author}
                onChange={(e)=> setauthor(e.target.value)}
                >
                    <option value="aakriti">aakriti</option>
                    <option value="bikriti">bikriti</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled> Adding Blog..</button>}
            </form>
        </div>
      );
}
 
export default Create;