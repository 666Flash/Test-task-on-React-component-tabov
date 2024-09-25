import React, {Fragment} from 'react';
import classes from './DropdownList.module.css';

export default function DropdownList({children, ...props}) {
    return (
        <div className={classes.menu_item_container}>
            <div className={classes.line}></div>
            <li className={classes.menu_item}>
                <button {...props} className={classes.myDl}>
                    {children}
                </button>
            </li>
        </div>
    );
};
