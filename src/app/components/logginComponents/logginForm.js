import React, { useState } from 'react'
import axios from 'axios'


function LogginForm (props) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)
    

    const handleSubmit = (event) => {

        setLoading(true)
        event.preventDefault()
        const logginData = new FormData(event.target)

        axios.post('http://localhost:5000/login', logginData)
            .then(res => {
                if (res.data.status){
                    setLoading(false)
                    setMessage()
                    localStorage.setItem('AWT', res.data.token)
                    localStorage.setItem('UID', res.data.username)
                    props.history.push({
                        pathname: (localStorage.getItem('AWTST') == 'true' ?
                                    localStorage.getItem('LPC') : '/home')
                    })
                } else {
                    setLoading(false)
                    setMessage( <Message type={'alert alert-danger text-center'} 
                                    message='Invalid Email or Password !' />
                    )
                }
            })
            .catch(err => {
                setLoading(false)
                setMessage( <Message type={'alert alert-danger text-center'} 
                                    message='An Error Has Occurred. Try Again !' />
                    )
            })
    }


    return (
        <div className="px-4 col-lg-6">

            <form onSubmit={ handleSubmit} className="mt-4">
                <fieldset className="form-group">
                    <legend className="border-bottom mb-4">Log In</legend>

                        {message}

                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input id="Email"
                                name="email"
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                                type="email" 
                                className="form-control mb-2" 
                                aria-describedby="emailHelp" />
                        
                        <label htmlFor="Pass">Password</label>
                        <input id="Pass"
                                name="pass"
                                value={pass} 
                                onChange= { e => setPass(e.target.value) }
                                type="password" 
                                className="form-control" 
                                aria-describedby="emailHelp" />
                    </div>

                    <button type="submit" 
                        className="btn bg-steel text-white">
                        { loading ? (<div className="spinner-border spinner-border-sm mr-2" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>) : ''
                        }
                        Log In
                    </button>
                </fieldset>
            </form>
            
        </div>
    )
}

function Message(props) {

    return(
        <div className={props.type} role="alert">
            {props.message}
        </div>
    )
}

export default LogginForm
