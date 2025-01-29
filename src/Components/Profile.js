import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container-fluid bg-dark">
        <div className="container text-center text-white">
          <img src={user.picture} alt={user.name} className="rounded mb-3" />
          <div className="d-flex justify-content-center align-items-center gap-2">
            <h2>Hi!</h2>
            <h2 className="mb-2 text-warning">{user.name}</h2>
          </div>
          <p className="">{user.email}</p>
          <Link to="/logout">
            <button
              className="btn btn-dark"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    )
  );
};

export default Profile;
