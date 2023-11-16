import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  // console.log(props);
  return (
    <div className="bg-green-200">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                {props.data.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={`/${item}`} className="capitalize text-black">
                        {item}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <NavLink to="/" className="btn btn-ghost normal-case text-xl">
              <img src={props.logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {props.data.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={`/${item}`} className="capitalize text-black text-xl font-medium">
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-4">
              <button className="btn bg-transparent border-green-500 rounded-md text-black">Login</button>
              <button className="btn bg-green-500 border-none rounded-md text-white">Register</button>
            </div>
            {/* <a className="btn">Button</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
