import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter(props) {

    const context = useContext(AuthContext)
    const currentUser = context.currentUser
    return (
        <React.Fragment>
            {
                currentUser ? <Outlet/> : <Navigate to={'/Login'}/>
            }
        </React.Fragment>
    )
}

export default PrivateRouter

/* main, div, section, article, header, footer, aside -HTML Block element
    React fragment => virtual react block element
*/

