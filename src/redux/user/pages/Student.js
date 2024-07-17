import React from 'react'
import Studentlist from '../../component/Studentlist'
import { useSelector } from 'react-redux'
import { Navbar } from '../../atoms/Atoms';

const Student = () => {
  const user = JSON.parse(localStorage.getItem("admin"));
  let student = useSelector((state) => state.adminReducer)
  return (
    <>
      <Navbar element={user.role} />
      <div>
        <div className="banner  d-flex align-items-center  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-list ">
                  <div className="banner-data">
                    <h3>KIDSCHOOL </h3>
                    <h2>PERFECT START</h2>
                    <h3>FOR YOUR CHILD</h3>
                    <button className='button bg-white'>learn more</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-img">
                  <img src="https://htmldemo.net/kidschool/kidschool/images/slider/1.png" alt="banner image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="container">
            <div className="row">
              {
                student.student?.map((val, ind) => {
                  return (
                    <>
                      <div className="col-lg-4">
                        <Studentlist name={val.name} roll_no={val.roll_no} standerd={val.standerd} />
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student
