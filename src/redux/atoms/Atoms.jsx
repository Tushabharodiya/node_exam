import React, { useState } from "react"
import { adminNavbar, userNavbar } from "./data"
import { useNavigate } from "react-router-dom"

let Navbar = ({ element }) => {

    let navigate = useNavigate()

    const [data, setdata] = useState(element === "user" ? userNavbar : adminNavbar)


    let logout = () => {
        localStorage.removeItem("loggedin")
        navigate("/login")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://htmldemo.net/kidschool/kidschool/images/logo/logo.png" alt="logo image" /></a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="head-info flex-grow-1 ">
                            <ul className="navbar-nav  justify-content-center align-items-center">
                                {
                                    data.map((val, ind) => {
                                        return (
                                            <React.Fragment key={ind}>
                                                <li className="nav-item">
                                                    <a className="nav-link" href={val.path}>{val.name}</a>
                                                </li>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="user">
                        <span><i className="fa-regular fa-circle-user pe-4"></i></span>
                        <button className="button" onClick={logout}>logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}


export { Navbar }