import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);




  // if (role == "admin") {
  //   return (
  //     <>
  //       <Navbar element={role} />
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-lg-2">
  //             <Sidebar />
  //           </div>
  //           <div className="col-lg-10">
  //             <Routes>
  //               <Route path="/dashbord" element={<Dashborad />} />
  //               <Route path="/manage" element={<Manage />} />
  //             </Routes>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
  // } else if (role == "user") {
  //   return (
  //     <>
  //       <Navbar element={role} />
  //       <Routes>
  //         <Route path="/" element={<Student />} />
  //         <Route path="/contact" element={<Contact />} />
  //       </Routes>
  //     </>
  //   )
  // }
