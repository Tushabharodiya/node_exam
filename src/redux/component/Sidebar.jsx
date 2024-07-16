import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="side_bar">
                <ul>
                    <li><Link to={"/dashbord"} ><i className="fa-solid fa-house pe-3"></i>home</Link></li>
                    <li><Link to={"/manage"} > <i className="fa-solid fa-people-roof pe-3"></i>student list</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
