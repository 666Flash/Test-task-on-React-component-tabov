import React from 'react';
import classes from './MyButton.module.css';
import {Fragment} from 'react'

export default function MyButton({children, ...props}) {
    return (
        <>
            <div className={classes.line}></div>
            <button {...props} className={classes.myBtn}>
                {children}
            </button>
        </>
    );
};
