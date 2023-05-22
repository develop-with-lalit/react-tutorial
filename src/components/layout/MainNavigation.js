import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

const MainNavigation = () => {
  const favContext = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups </Link>
          </li>
          <li>
            <Link to="/new-meetup"> Add Meetup </Link>
          </li>
          <li>
            <Link to="/favourites">
              {" "}
              My Favourite
              <span className={classes.badge}>
                {favContext.totalFavourites}
              </span>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
