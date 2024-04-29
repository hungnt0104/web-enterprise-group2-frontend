// import React, { Component, useState } from "react";
// import axios from 'axios';

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(email, password);
// axios.post('/users/login', {
//   email,
//   password,
// })
//   .then((response) => {
//     const data = response.data;
//     console.log(data, 'userRegister');
//     if (data.status === 'okee') {
//       alert('Login successful');
//       window.localStorage.setItem('token', data.data.token);
//       window.localStorage.setItem('loggedIn', true);
//       window.localStorage.setItem('userId', data.data.userId);
//       window.localStorage.setItem('role', data.data.role);
//       window.localStorage.setItem('email', data.data.email);
//       window.localStorage.setItem('name', data.data.name);
//       window.localStorage.setItem('department', data.data.department);
//       window.location.href = '/';
//     }
//   })
//   .catch((error) => {
//     alert('Wrong email or password')
//     console.error('Error:', error);
//   });
//   }

//   return (
//     <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-xl-10">
//             <div className="card rounded-3 text-black">
//               <div className="row g-0">
//                 <div className="col-lg-6">
//                   <div className="card-body p-md-5 mx-md-4">
//                     <div className="text-center">
            
//                         <img src="assets/img/logo/logo.png" alt="" />
//                       <h4 className="mt-1 mb-5 pb-1">Welcome to the website</h4>
//                     </div>

//                     <form  onSubmit={handleSubmit}>
//                       <p>Please login to your account</p>

//                       <div className="form-outline mb-4">
//                         <label className="form-label" htmlFor="form2Example11">Email</label>
//                         <input type="email" id="form2Example11" className="form-control"
//                           placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        
//                       </div>

//                       <div className="form-outline mb-4">
//                         <label className="form-label" htmlFor="form2Example22">Password</label>
//                         <input type="password" id="form2Example22" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                        
//                       </div>

//                       <div className="text-center pt-1 mb-5 pb-1">
//                         <button className="btn btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
//                           in</button>
//                           <br />
//                         <a className="text-muted" href="#!">Forgot password?</a>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-center pb-4">
//                         <p className="mb-0 me-2">Don't have an account?</p>
//                         <a className="btn btn-outline-danger" href="signup">Create new</a>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 d-flex align-items-center gradient-custom-2 login-bg">
//                   {/* <img src="../assets/img/background-img/everest.jpg" alt="" /> */}
//                   <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                     {/* <h4 className="mb-4">Create your idea now</h4>
//                     <p className="small mb-0">Share your ideas to other people</p> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', { email, password });
      const data = response.data;
      if (data.status === 'okee') {
        alert('Login successful');
        const { token, userId, role, email, name, department } = data.data;
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('loggedIn', true);
        window.localStorage.setItem('userId', userId);
        window.localStorage.setItem('role', role);
        window.localStorage.setItem('email', email);
        window.localStorage.setItem('name', name);
        window.localStorage.setItem('department', department);
        if (role === 'Admin'){
          window.location.href = '/statistics';
        }
        else if (role === 'Coordinator'){
          window.location.href = '/menu';
        }
        else{
          window.location.href = '/';
        }
      }
    } catch (error) {
      alert('Wrong email or password');
      console.error('Error:', error);
    }
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src="assets/img/logo/logo.png" alt="" />
                      <h4 className="mt-1 mb-5 pb-1">Welcome to the website</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">Email</label>
                        <input type="email" id="form2Example11" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                        <input type="password" id="form2Example22" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                        <br />
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <a className="btn btn-outline-danger" href="signup">Create new</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 login-bg">                
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
