import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './views/loginPage'
import Home from './views/homePage'
import Register from './views/register'
import QuestionPage from './views/questionPage'
import LogOut from './views/logout'


function App() {

    return(
        <Router>
            <Switch>
                <Route exact path={'/'} component={Login}/>
                <Route exact path={'/register'} component={Register}/>
                <PrivateRoute exact path={'/home'} component={Home}/>
                <PrivateRoute exact path={'/logout'} component={LogOut}/>
                <Route exact path={'/questions'} component={QuestionPage}/>
            </Switch>
        </Router>
    )
    
}


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} 
        render = { props => (
            (localStorage.getItem('AWT')) ? (<Component {...props} />) : (props.history.push('/'))
        )}
    />
)

function loadPage(){

    axios.get("http://192.168.0.23:5000/refresh", {
        headers: {
            'Authorization': localStorage.getItem('AWT'),
            'UID': localStorage.getItem('UID')
        }
    })
    .then(res => { 
        if (res.data.status){
        localStorage.setItem('AWT', res.data.token)
        }
    })
}


export {
    App,
    loadPage
}