import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_STUDENT_PENDING } from '../action'

const Manage = () => {

    
    let student = useSelector((state) => state.adminReducer)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: GET_STUDENT_PENDING })
    }, [])

    return (
        <div>
            <div className="student">
                <div className="container">
                    <div className="model-btn d-flex justify-content-end">
                        <button className="button" data-bs-toggle="modal" data-bs-target="#model">add +</button>
                    </div>

                    <div className="modal fade" id="model">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Student Details</h1>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                      <label>name : <input type="text" className="form-control" /></label>
                                      <label>Roll number : <input type="number" className="form-control" /></label>
                                      <label>Class : <input type="number" className="form-control" /></label>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="button">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="student-list text-center">
                        <table className='w-100 mt-3' cellPadding="10px">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>roll no</th>
                                    <th>class</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    student.student?.map((val,ind) => (
                                        <React.Fragment key={ind}>
                                            <tr>
                                                <td>{val.name}</td>
                                                <td>{val.roll_number}</td>
                                                <td>{val.class}</td>
                                            </tr>
                                        </React.Fragment>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage
