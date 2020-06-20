import React, { useState } from 'react'
import { Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom'

function HomeNav(){

    const [linkElements, setLinkElements] = useState(['Questions', 'Contacts', 'Messages' , 'Logout'])
    const [linkRoute, setLinkRoute] = useState(['/questions', '#', '#', '/logout'])
    const [links, setLinks] = useState(() => linkElements.map( (element, index) => <NavBarContent key={index} 
                                                                                            content={element} 
                                                                                            route={linkRoute[index]}/>))
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-steel">
                <Link className="navbar-brand text-white" to='/home'>Ask Me!</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <ul className="navbar-nav ml-auto">
                        {links}
                    </ul>
                </Collapse>
            </nav>
        </div>
        
    )
    
}

const NavBarContent = (props) => {
    return(
        <li className="nav-item active">
            <Link className="nav-link text-white" to={props.route}>{props.content}<span className="sr-only">(current)</span></Link>
        </li>
    )
}


export default HomeNav