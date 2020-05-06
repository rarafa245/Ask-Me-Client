import React, { useState } from 'react'
import {
    Collapse,
    NavbarToggler,
  } from 'reactstrap';
import { Link } from 'react-router-dom'

class NavBar extends React.Component{
    /* Creating a General Navegation Bar Component.
        :parram - home: Boolean indicating if the Navegation Bar 
                        is for Home Page or Logging Page
    */

    constructor(){
        super()
        this.state = {
            login: {
                links: ['Create a New Account', 'Contact Me!', 'About'],
                route: ['/register', '#', '#']
            }
        }
    }

    navBarLinks(){

        const tagLinks = this.state.login.links.map(
            (element, index) => <NavBarContent key={index} 
                                                content={element} 
                                                route={this.state.login.route[index]}/>
            )
        return tagLinks
    }

    render(){

        const tagLinks = this.navBarLinks()


        return(
            <DefaultNavBar iconLink={'/'}>
                {tagLinks}
            </DefaultNavBar>
        )
    }
}


function DefaultNavBar(props){
    /* Creating the Basic Template for the Navegation Bar 
        :parram - Children Component: Place reserved for adding links <li> 
        :return - Navegation Bar template
    */
   
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-steel">
                <Link className="navbar-brand text-white" to={props.iconLink}>Ask Me!</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>   
                    <ul className="navbar-nav ml-auto">
                        {props.children}
                    </ul>
                </Collapse>
            </nav>
        </div>
        
    )
}

function NavBarContent(props){
    /* Generating HTML Navegation Bar links
        :parram: content - Name of the new Link
        :return: Navegation Bar link
    */


    return(
        <li className="nav-item active">
            <Link className="nav-link text-white" to={props.route}>{props.content}<span className="sr-only">(current)</span></Link>
        </li>
    )
}


export default NavBar