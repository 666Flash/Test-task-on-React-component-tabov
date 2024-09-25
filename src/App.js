import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {tabs} from "./data"
import {BrowserRouter} from "react-router-dom";
import SideBar from "./components/UI/SideBar/SideBar"
import Header from "./components/UI/Header/Header";
import ComponentTaboos from "./components/UI/ComponentTaboos/ComponentTaboos"
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

export default function App() {
    const [isAuth, setIsAuth] = useState(tabs[0].router);
    const [isLoading, setLoading] = useState(true);
    const [isTabs, setTabs] = useState(tabs);

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
            isLoading,
            isTabs,
            setTabs
        }}>
            <BrowserRouter>
                <div className="body_container">
                    <SideBar/>

                    <div>
                        <Header/>
                        <ComponentTaboos/>
                        <div className="content">
                            <AppRouter/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
