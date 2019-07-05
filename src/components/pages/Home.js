import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import style from "./assets/Home.module.scss";

import Content from "./../layout/Content";

import SongsContext from "../../context/songs/songsContext";

const Home = () => {
    const songsContext = useContext(SongsContext);
    const {clearCurrentSong} = songsContext;

    return (
        <Content>
            <div className={style.intro}>
                <div className={style.intro_logo}>
                    <h1>FUJBand</h1>
                    <span>Zpěvník</span>
                </div>
                <div className={style.intro_subtitle}>
                    <h2>Nejoblíbenější písničky <br /> vždy po ruce</h2>
                </div>
                <div className={style.intro_actions}>
                    <Link 
                        to="/songs"
                        onClick={() => clearCurrentSong()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M14.33333,28.66667v100.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h44.98763c2.48159,4.26871 7.04992,7.16667 12.3457,7.16667c5.29578,0 9.86411,-2.89796 12.3457,-7.16667h44.98763c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-100.33333h-57.33333c-5.53267,0 -10.52067,2.15213 -14.33333,5.58496c-3.81267,-3.43283 -8.80067,-5.58496 -14.33333,-5.58496zM28.66667,43h43c3.94883,0 7.16667,3.21783 7.16667,7.16667v78.83333h-50.16667zM100.33333,43h43v86h-50.16667v-78.83333c0,-3.94883 3.21783,-7.16667 7.16667,-7.16667z"></path></svg>
                        Zobrazit všechny
                    </Link>
                    <span>nebo</span>
                    <Link 
                        to="/songs/search"
                        onClick={() => clearCurrentSong()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" fill="#ffffff"><path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l43,43l14.33333,-14.33333l-43,-43h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path></svg>
                        Vyhledat konkrétní
                    </Link>
                </div>
            </div>
            --to be done
        </Content>
    )
};

export default Home;
