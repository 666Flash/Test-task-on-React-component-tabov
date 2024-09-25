import React, {useEffect, useState, Fragment, useContext} from "react";
import MyButton from "../button/MyButton";
import DropdownList from "../DropdownList/DropdownList"
import DeleteTabForIndex from "../DeleteTabForIndex/DeleteTabForIndex";
import {useHistory} from "react-router-dom";
import "./ComponentTaboos.css";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import {AuthContext} from "../../../context";

export default function ComponentTaboos() {
    const {isTabs, setTabs} = useContext(AuthContext);
    const router = useHistory();
    const [isOpen, setOpen] = useState(false);
    let massifChildNodes = null;

    function ComponentTaboosWidth() {
        if (document.getElementsByClassName("component_taboos")[0] !== undefined) {
            let offsetWidth = document.getElementsByClassName("component_taboos")[0].clientWidth;
            let offsetChildNodes = document.getElementsByClassName("component_taboos")[0].childNodes;
            let lengthChildNodes = 0;

            for (let i = 0; i < offsetChildNodes.length; i++) {
                lengthChildNodes += offsetChildNodes[i].clientWidth;
                if (lengthChildNodes > offsetWidth) {
                    massifChildNodes = isTabs.filter(tab => tab.id > i);
                    return massifChildNodes;
                };
            };
        };
        return massifChildNodes;
    };

    return (
        <>
            <div className="component_taboos">
                {isTabs.map((tab) => {
                    return <div key={tab.id} className="button_container">
                                <MyButton onClick={() => router.push(tab.router)}>
                                    <div className="my_container">
                                        <div>{tab.image}</div>
                                        <div className="text">
                                            {tab.title}
                                        </div>
                                    </div>
                                </MyButton>
                                <DeleteTabForIndex {...tab}/>
                            </div>
                })}
            </div>
            {ComponentTaboosWidth() !== null &&
                <>
                    {isOpen && <button className="button_dropdown_list" onClick={() => setOpen(!isOpen)}><FiChevronUp/></button>}
                    {!isOpen && <button className="button_dropdown_list" onClick={() => setOpen(!isOpen)}><FiChevronDown/></button>}
                    {isOpen &&
                        <nav className="menu_dropdown_list">
                            <ul className="menu_list">
                                {massifChildNodes.map((tab) => {
                                    return <div key={tab.id} className="dropdown_list_container">
                                        <DropdownList onClick={() => router.push(tab.router)}>
                                            <div className="my_container">
                                                <div>{tab.image}</div>
                                                <div className="text">
                                                    {tab.title}
                                                </div>
                                            </div>
                                        </DropdownList>
                                        <DeleteTabForIndex {...tab}/>
                                    </div>
                                })}
                            </ul>
                        </nav>
                    }
                </>
            }
        </>
    );
};
