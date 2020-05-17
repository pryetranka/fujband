import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import SongsContext from "../../context/songs/songsContext";

import navbarStyle from "./assets/Navbar.module.scss";

const Navbar = () => {
  const songsContext = useContext(SongsContext);
  const {currentSong} = songsContext;

  return (
    <nav className={navbarStyle.navbar}>
      <ul>
        <li>
          <NavLink to="/" exact className={navbarStyle.item} activeClassName={navbarStyle.item_active}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M86,15.0472l-78.83333,70.9528h21.5v64.5h43v-43h28.66667v43h43v-64.5h21.5l-28.66667,-25.7972v-31.53613h-14.33333v18.63053zM86,34.33561l43,38.7028v5.79492v57.33333h-14.33333v-43h-57.33333v43h-14.33333v-63.12826z" />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to={(currentSong && currentSong.slug) ? `/songs/${currentSong.slug}` : "/songs"} exact className={navbarStyle.item} activeClassName={navbarStyle.item_active}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M64.5,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v14.33333v14.33333v44.31576c-2.25089,-0.79962 -4.64132,-1.31576 -7.16667,-1.31576c-11.87517,0 -21.5,9.62483 -21.5,21.5c0,11.87517 9.62483,21.5 21.5,21.5c11.87517,0 21.5,-9.62483 21.5,-21.5v-64.5h64.5v44.31576c-2.25089,-0.79962 -4.64131,-1.31576 -7.16667,-1.31576c-11.87517,0 -21.5,9.62483 -21.5,21.5c0,11.87517 9.62483,21.5 21.5,21.5c11.87517,0 21.5,-9.62483 21.5,-21.5v-64.5v-14.33333v-28.66667zM64.5,35.83333h64.5v14.33333h-64.5zM43,121.83333c3.94883,0 7.16667,3.21783 7.16667,7.16667c0,3.94883 -3.21783,7.16667 -7.16667,7.16667c-3.94883,0 -7.16667,-3.21783 -7.16667,-7.16667c0,-3.94883 3.21783,-7.16667 7.16667,-7.16667zM121.83333,121.83333c3.94883,0 7.16667,3.21783 7.16667,7.16667c0,3.94883 -3.21783,7.16667 -7.16667,7.16667c-3.94883,0 -7.16667,-3.21783 -7.16667,-7.16667c0,-3.94883 3.21783,-7.16667 7.16667,-7.16667z" />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" exact className={navbarStyle.item} activeClassName={navbarStyle.item_active}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M71.66667,14.33333c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v7.16667h-50.16667v14.33333h50.16667v7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-28.66667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667zM100.33333,28.66667v14.33333h57.33333v-14.33333zM107.5,64.5c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v7.16667h-86v14.33333h86v7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-28.66667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667zM136.16667,78.83333v14.33333h21.5v-14.33333zM35.83333,114.66667c-3.956,0 -7.16667,3.21067 -7.16667,7.16667v7.16667h-14.33333v14.33333h14.33333v7.16667c0,3.956 3.21067,7.16667 7.16667,7.16667h7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-28.66667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667zM64.5,129v14.33333h93.16667v-14.33333z" />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact className={navbarStyle.item} activeClassName={navbarStyle.item_active}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff">
              <path d="M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333zM78.83333,50.16667v14.33333h14.33333v-14.33333zM78.83333,78.83333v43h14.33333v-43z" />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
