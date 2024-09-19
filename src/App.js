import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import SideBar from "./components/UI/SideBar/SideBar"
import Header from "./components/UI/Header/Header";
import ComponentTaboos from "./components/UI/ComponentTaboos/ComponentTaboos"
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

export default function App() {
    const [isAuth, setIsAuth] = useState('login');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <div className="body_container">
                    <SideBar/>

                    <div>
                        <Header/>
                        <ComponentTaboos/>
                        <Navbar/>
                        <div className="content">
                            <AppRouter/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
