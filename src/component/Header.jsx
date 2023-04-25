import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-purple-500 text-neutral-content rounded-t-lg">
      <a className="btn btn-ghost normal-case text-xl">Auth inro</a>
      <Link className="ms-3" to="/">
        Home
      </Link>
      <Link className="ms-3" to="/login">
        Login
      </Link>
      <Link className="ms-3" to="/orders">
        Orders
      </Link>
      <Link className="ms-3" to="/register">
        Register
      </Link>
      {user && (
        <Link className="ms-3" to="/profile">
          Profile
        </Link>
      )}
      <Link className="ms-3">
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs ms-1">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </Link>
    </div>
  );
};

export default Header;
