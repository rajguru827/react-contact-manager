import React from "react";
import { Link } from "react-router-dom";

function ViewContacts() {
    return (
        <React.Fragment>
            <h1>My Contacts</h1>
            <Link to="/add-contact">Add Contact</Link>
        </React.Fragment>
    );
}

export default ViewContacts;