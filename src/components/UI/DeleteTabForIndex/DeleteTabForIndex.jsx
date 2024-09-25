import "./DeleteTabForIndex.css";
import {useContext} from "react";
import {AuthContext} from "../../../context";

export default function DeleteTabForIndex({id}) {
    const {isTabs, setTabs} = useContext(AuthContext);

    function DeleteIndex() {
        setTabs(isTabs.filter(tab => tab.id !== id))
    }
    return <button onClick={DeleteIndex} className="button_closing"/>
}