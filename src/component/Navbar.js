import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    const navigate = useNavigate();
    const onclick = (e) => {
        if (e.target.name === 'btn-signin') {
            navigate("/Signin")
        } else if (e.target.name === 'btn-signup') {
            console.log("in signup")
            navigate("/Signup")
        }
    }
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        myRetail
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <button name="btn-signin" onClick={onclick}>Sign-In</button>
                    <button name="btn-signup" onClick={onclick}>Sign-Up</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;