import React from 'react'
import {Link} from 'react-router-dom'

const ContactMenu =  (props) => (
    <ul className="list-group text-center">
        <li className="list-group-item">
            <h6>Manage Your Contacts</h6>
        </li>
        <li className="list-group-item">
            <Link to="#">Your Contacts</Link>
        </li>
        <li className="list-group-item">
            <a href="#">Find Contacts</a>
        </li>
    </ul>
)


export default ContactMenu