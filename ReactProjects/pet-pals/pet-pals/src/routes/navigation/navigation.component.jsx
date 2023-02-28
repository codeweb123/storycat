import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import XIcon from "../../components/info-icon/info-icon.component";
import InfoBox from "../../components/info-box/info-box.component";

import { UserContext } from "../../contexts/user.context";
import { InfoBoxContext } from "../../contexts/info.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isInfoBoxOpen } = useContext(InfoBoxContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src="logo.png" alt="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/">
              Sign In
            </Link>
          )}
          <Link className="nav-link" to="/pet">
            Pick_a_Pet
          </Link>
          <Link className="nav-link" to="/land">
            Pick_a_Land
          </Link>
          <XIcon />
        </div>
        {isInfoBoxOpen && <InfoBox />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;