import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./redux/atoms/Atoms";
import Dashborad from "./redux/admin/pages/Dashborad";
import Manage from "./redux/admin/pages/Manage";
import Student from "./redux/user/pages/Student";
import Contact from "./redux/user/pages/Contact";
import Sidebar from "./redux/component/Sidebar";
import { useDispatch } from "react-redux";
import { GET_STUDENT_PENDING } from "./redux/admin/action";
import { useEffect } from "react";
import Login from "./redux/component/Login";

function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_STUDENT_PENDING })
  }, [])

  let admin = JSON.parse(localStorage.getItem("admin"))
  console.log(admin);

  let user = JSON.parse(localStorage.getItem("user"))



  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin ? (
          admin.role === "admin" ? (
            <Route path="/*" element={<Home />} />
          ) : (
            <Route path="/*" element={<Student />} />
          )
        ) : (
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </>
  )
}
let Home = () => {
  let admin = JSON.parse(localStorage.getItem("admin"))
  return (
    <>
      <Navbar element={admin.role} />
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-10">
            <Routes>
              <Route path="/" element={<Dashborad />} />
              <Route path="/manage" element={<Manage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}



export default App;
