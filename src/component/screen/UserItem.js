import React from "react";
import { NavLink } from "react-router-dom";

function UserItem(props) {
    return (
        <div className="col-md-4 col-lg-4 col-sm-12 mt-2 mb-2">
            <div className="card">
                <img src={ props.image ? props.image : "#" } alt="no image" className="card-img-top" />
                <div className="card-header">
                    <h4 className="display-4 text-primary">{props.firstName} {props.lastName}</h4>
                </div>
                <div className="card-body">
                    <p>
                        <strong>Email</strong>
                        <span className="float-end text-primary"> {props.email}</span>
                    </p>
                    <p>
                        <strong>Phone</strong>
                        <span className="float-end text-primary"> {props.phone}</span>
                    </p>
                    <p>
                        <strong>Age</strong>
                        <span className="float-end text-primary"> {props.age} years. </span>
                </p>
                </div>
                <div className="card-footer">
                    <NavLink to={`/details/${props.id}`} className="btn btn-dark float-end">Details</NavLink>
                </div>
            </div>
        </div>
    )
}

export default UserItem 