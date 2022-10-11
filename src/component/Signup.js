import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.scss'

function Signup(props) {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "", name: "", lname: "" })
    
    // On submit form fetching api for registration and get the registered user data if user and get all the user's data if admin
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/user/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: data.email, name: data.name, lname: data.lname, password: data.password, role: e.target.role.value })
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
                // After getting data move to the dashboard with data
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
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                                    <input type="email" name="email" value={data.email} placeholder="Email" onChange={onChange} required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="password" value={data.password} placeholder="Password" onChange={onChange} required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                    <input type="password" name="cpassword" placeholder="Re-type Password" required />
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="name" value={data.name} placeholder="First Name" onChange={onChange} required />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                            <input type="text" name="lname" value={data.lname} placeholder="Last Name" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div className="col_half">
                                        <div className="input_field">
                                            {/* If isAdmin props come with the route set the value for isAdmin value */}
                                            <input type="hidden" name="role" value={props.isAdmin ? 1 : 0} />
                                        </div>
                                    </div>
                                </div>
                                <input className="button" type="submit" value="Register" />
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

export default Signup;