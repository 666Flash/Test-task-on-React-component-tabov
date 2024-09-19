import React, {useContext, useEffect, useState} from 'react';
import {tabs} from "../../../data"
import MyButton from "../button/MyButton";
import {useHistory} from 'react-router-dom';
import "./ComponentTaboos.css"

export default function ComponentTaboos() {
    const router = useHistory()

    function closing(id) {
        console.log('id', id)
    }

    return (
        <div className="component_taboos">
            {tabs.map((tab) =>(
                <div className="button_container">
                    <MyButton onClick={() => router.push(tab.router)}>
                        <div className="my_container">
                            <img src={tab.image}/>
                            <div className="text">
                                {tab.title}
                            </div>
                        </div>
                    </MyButton>
                    <button className="button_closing" onClick={closing(tab.id)}/>
                </div>
            ))}
        </div>
    );
};
