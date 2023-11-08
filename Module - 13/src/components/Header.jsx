import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header d-flex align-items-center justify-content-between bg-body-secondary p-3">
        <NavLink to="/">
          <h1>LOGO</h1>
        </NavLink>
        <ul className="nav gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
