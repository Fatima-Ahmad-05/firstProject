
import {Link} from "react-router-dom";
import "../css/NavBar.css";
import movieicon from "../../assets/movieicon.jpg";

function NavBar(){
    return(

<nav>

<div className="navBar-brand">
    <img src= {movieicon} alt="logo"/>
    <Link to="/" > MovieApp</Link>
</div>
<div className="navBar-links">

<Link to="/" className="nav-link">Home </Link>
<Link to="/favourites" className="nav-link"> Favourites</Link>
<Link to="/pixar" className="nav-link">Pixar </Link>
<Link to="/disney" className="nav-link">Disney </Link>
<Link to="/dreamworks" className="nav-link">Dreamworks </Link>
</div>
</nav>

    );
}



export default NavBar;