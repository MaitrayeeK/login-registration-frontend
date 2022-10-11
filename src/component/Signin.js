import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.scss'

function Signin() {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: ""})

    // On submit form fetching api for login and get the logged in user data if user and get all the user's data if admin
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: data.email, password: data.password})
        })
        const jsonResponse = await response.json()
        if (jsonResponse.result) {
                const response = await fetch("http://localhost:8080/user/getuser", {
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${jsonResponse.data.authtoken}`,
                        'Content-Type': 'application/json'
                    },
                })
                const json = await response.json()
                console.log(json)
                // After logged in move to the dashboard with data
                navigate("/dashboard", { state:{user: json}})
        }
        console.log(jsonResponse)
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return ( 
        <div className='page-body'>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="row clearfix">
                        <div className="login_form">
                            <form onSubmit={handleSubmit}>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" value={data.email} placeholder="Email" onChange={onChange} required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" value={data.password} placeholder="Password" onChange={onChange} required />
                                </div>
                                <input className="button" type="submit" value="Signin" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='signup-image'>
            </div>
        </div>
     );
}

export default Signin;