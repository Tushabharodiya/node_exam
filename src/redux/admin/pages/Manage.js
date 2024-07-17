import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_STUDENT_PENDING, GET_STUDENT_PENDING, POST_STUDENT_PENDING, UPDATE_STUDENT_PENDING } from '../action'

const Manage = () => {

    let name = useRef();
    let roll_no = useRef();
    let standerd = useRef();
    const [view, setview] = useState({ name: '', roll_no: '', standerd: '' })
    const [model, setmodel] = useState("none")

    let student = useSelector((state) => state.adminReducer)

    let dispatch = useDispatch()

   

    //add new student

    let addStudent = () => {
        let students = {
            name: name.current.value,
            roll_no: roll_no.current.value,
            standerd: standerd.current.value,
        }

        dispatch({ type: POST_STUDENT_PENDING, payload: students })
    }


    //remove student

    let remove = (student) => {
        console.log(student);
        dispatch({ type: DELETE_STUDENT_PENDING, payload: student })
    }

    //update

    let viewData = (val) => {
        setview(val)
        setmodel("block")
    }

    let closee = () => {
        setmodel("none")
    }

    let handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }
    let save = (e) => {
        // e.preventDefault();
        setmodel("none")
        dispatch({ type: UPDATE_STUDENT_PENDING, payload: view })
    }


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
                                        <label>name : <input type="text" className="form-control" name='name' ref={name} /></label>
                                        <label>Roll number : <input type="number" className="form-control" name='roll_no' ref={roll_no} /></label>
                                        <label>standerd : <input type="number" className="form-control" name='standerd' ref={standerd} /></label>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="button" onClick={addStudent}>add student</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="update_model" style={{ display: `${model}` }}>
                        {/* <form onSubmit={save}> */}
                        <div className="close-btn d-flex justify-content-end ">
                            <button className='bg-white border-0' onClick={closee}><i className="fa-regular fa-circle-xmark"></i></button>
                        </div>
                        <label>Name: <input type="text" name='name' className="form-control" value={view.name} onChange={handle} /></label>
                        <label>Roll No : <input type="number" name='roll_no' className="form-control" value={view.roll_no} onChange={handle} /> </label>
                        <label>standerd : <input type="number" name='standerd' className="form-control" value={view.standerd} onChange={handle} /> </label>
                        <div className="view-btn d-flex justify-content-center mt-3">
                            <button className='button' onClick={save}>save</button>
                        </div>
                        {/* </form> */}
                    </div>


                    <div className="student-list text-center">
                        <table className='w-100 mt-3' cellPadding="10px">
                            <thead>
                                <tr>
                                    <th>no</th>
                                    <th>name</th>
                                    <th>roll no</th>
                                    <th>standerd</th>
                                    <th>delete</th>
                                    <th>update</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    student.student?.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <tr>
                                                <td>{ind + 1}</td>
                                                <td>{val.name}</td>
                                                <td>{val.roll_no}</td>
                                                <td>{val.standerd}</td>
                                                <td><button className='trash' onClick={() => remove(val.id)}><i className="fa-solid fa-trash"></i></button></td>
                                                <td><button className='trash' onClick={() => viewData(val)} ><i className="fa-regular fa-pen-to-square"></i></button></td>
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
