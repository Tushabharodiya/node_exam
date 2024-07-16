import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./redux/atoms/Atoms";
import Dashborad from "./redux/admin/pages/Dashborad";
import Manage from "./redux/admin/pages/Manage";
import Student from "./redux/user/pages/Student";
import Contact from "./redux/user/pages/Contact";
import Sidebar from "./redux/component/Sidebar";

function App() {

  let role = "admin";

  if (role == "admin") {
    return (
      <>
        <Navbar element={role} />
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <Routes>
                <Route path="/dashbord" element={<Dashborad />} />
                <Route path="/manage" element={<Manage />} />
              </Routes>
            </div>
          </div>
        </div>
      </>
    )
  } else if (role == "user") {
    return (
      <>
        <Navbar element={role} />
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    )
  }

}

export default App;