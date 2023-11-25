import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    const obj = {color: "white", backgroundColor: '#f1356d', borderRadius: '8px'};
    return ( 
        <div className="navbar">
            <h1>The Mini Blog</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/create" style={obj}> New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;