// function Navbar(){
//     return(
//         <nav className="navbar">
//             <a className="brand-name" href="#home">
//                 {brandName}
//             </a>
//             <div className="nav-links">
//                 <a href="#home">Home</a>
//                 <a href="#events">Events</a>
//                 <a href="#categories">Categories</a>
//                 <a href="#about">About</a>
//             </div>
//         </nav>
//     );
// }
// export default Navbar;

// 
import { NavLink } from "react-router";

function Navbar() {
  function getNavLinkClass({ isActive }) {
    return isActive ? "nav-link active-link" : "nav-link";
  }

  return (
    <nav className="navbar">
      <NavLink className="brand-name" to="/">
        Campus Connect
      </NavLink>

      <div className="nav-links">
        <NavLink className={getNavLinkClass} to="/">
          Home
        </NavLink>

        <NavLink className={getNavLinkClass} to="/events">
          Events
        </NavLink>

        <NavLink className={getNavLinkClass} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;