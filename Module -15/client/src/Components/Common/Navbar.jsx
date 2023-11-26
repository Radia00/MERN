import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar py-6 bg-indigo-950">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold w-full">
              <NavLink to="/" className="navbar-brand text-white">
                Admission CRUD PROJECT
              </NavLink>
            </h1>
            <ul className="flex items-center justify-between w-full">
              <li>
                <NavLink className="text-white" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="text-white" to="/create">Create</NavLink>
              </li>
              {/* <li>
                <NavLink className="text-white" to="/update">Update</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
