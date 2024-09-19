import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import fiRsList from '../../../pictures/icon/fi-rs-list.png'
import fiRsCube from '../../../pictures/icon/fi-rs-cube.png'
import fiRsBookAlt from '../../../pictures/icon/fi-rs-book-alt.png'
import fiRsSettings from '../../../pictures/icon/fi-rs-settings.png'
import {AuthContext} from "../../../context";
import {useHistory} from 'react-router-dom';
import "./ComponentTaboos.css"

export default function ComponentTaboos() {
    const router = useHistory()
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth('posts');
        localStorage.removeItem('auth')
    }

    function closing(id) {
        console.log('id', id)
    }

    return (
        <div className="component_taboos">
            <MyButton onClick={() => router.push(`/auswahllisten`)}>
                <div className="button_container">
                    <img src={fiRsList}/>
                    <div className="text">
                        auswahllisten
                    </div>
                    <button className="button_closing" onClick={closing(1)}/>
                </div>
            </MyButton>
            <MyButton onClick={() => router.push(`/warenbestand`)}>
                <div className="button_container">
                    <img src={fiRsCube}/>
                    <div className="text">
                        warenbestand
                    </div>
                </div>
            </MyButton>
            <MyButton onClick={() => router.push(`/help`)}>
                <div className="button_container">
                    <img src={fiRsBookAlt}/>
                    <div className="text">
                        help
                    </div>
                </div>
            </MyButton>
            <MyButton onClick={() => router.push(`/administration`)}>
                <div className="button_container">
                    <img src={fiRsSettings}/>
                    <div className="text">
                        administration
                    </div>
                </div>
            </MyButton>

            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    );
};
