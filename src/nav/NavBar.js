import React from "react";
import { Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {



    const handleLogout = () => {
      props.clearUser()
    window.location.reload(false);
    }


    return (
      <header>
        <nav>
          <ul className="container">
            <li>
              <Link className="nav-link"  to="/search"> Search </Link>
            </li>
            {props.hasUser
            ? <li>
                <Link className="nav-link" to="/saved"> Saved </Link>
              </li>
            : null}
            {props.hasUser
              ? <li>
                  <span className="nav-link" onClick={handleLogout}>Logout</span>
                </li>
                :<li>
                  <Link className="nav-link" to="/login"> Login </Link>
                </li>
              }
          </ul>
        </nav>
      </header>
    );
  };
  
  export default NavBar;