import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-purple-500 text-neutral-content rounded-t-lg">
        <a className="btn btn-ghost normal-case text-xl">Auth inro</a>
        <Link className="ms-3" to='/'>Home</Link>
        <Link className="ms-3" to='/login'>Login</Link>
        <Link className="ms-3" to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Header;
