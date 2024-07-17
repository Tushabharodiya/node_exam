import React from 'react'
import { useSelector } from 'react-redux'

const Studentlist = ({ name, roll_no, standerd }) => {
    // let student = useSelector((state) => state.adminReducer)

    // console.log(student);

    return (
        <>
            <div className="list-card">
                <div className="card-data">
                    <div className="card-img">
                        <img src="https://htmldemo.net/kidschool/kidschool/images/fun/2.png" alt="logo image" />
                        <h2>{name}</h2>
                        <span>Roll number : {roll_no} </span>
                        <p>Standerd : {standerd}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studentlist
