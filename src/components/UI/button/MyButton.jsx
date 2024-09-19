import React from 'react';
import classes from './MyButton.module.css';
import {Fragment} from 'react'

const MyButton = ({children, ...props}) => {
    return (
        <>
            <div className={classes.line}></div>
            <button {...props} className={classes.myBtn}>
                {children}
            </button>
        </>
    );
};

export default MyButton;
