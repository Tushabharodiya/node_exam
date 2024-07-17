import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let name = useRef();
    let password = useRef();
    let role = useRef();

    let navigate = useNavigate()


    let login = (e) => {
        e.preventDefault();
        let data = {
            name: name.current.value,
            password: password.current.value,
            role: role.current.value,
        };
        console.log(data);

        localStorage.setItem("admin", JSON.stringify(data));
        localStorage.setItem("loggedin", true)
        if (data.role === "admin") {
            navigate("/dashbord");
        } else {
            navigate("/");
        }
    };


    return (
        <div className="login-info">
            <div className="login  ">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login-logo  d-flex align-items-center ">
                            <h2>welcome</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login-form  d-flex align-items-center justify-content-center ">
                            <div className="card ">
                                <div className="card-body">
                                    <h3 className="card-title text-center">Login</h3>
                                    <form onSubmit={login}>
                                        <label>name : <input type="name" className="form-control" placeholder="Enter email" ref={name} /></label>
                                        <label >Password: <input type="password" className="form-control" placeholder="Password" ref={password} /></label>
                                        <label >Role: <input type="text" className="form-control" placeholder="role" ref={role} /></label>
                                        <div className="login-btn d-flex justify-content-center ">
                                            <button type="submit" className="btn btn-primary btn-block w-100 my-2">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login
