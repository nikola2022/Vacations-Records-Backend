import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "bootstrap-4-react";
import { Nav } from "bootstrap-4-react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import UserDetails from "./UserDetails";
import Requests from "./Requests";
import axios from "axios";

function HeaderLoggedUser() {
  // const navigate = useNavigate();

  async function logout(event) {
    event.preventDefault();
    try {
      await axios.post("/api/employee/logout").then((res) => {
        console.log(res.data);
        // console.log(token);
        // setToken("localToken", null);
        // console.log(token);
        //navigate("/login");
        window.location.reload();
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div>
        <div>
          <Navbar dark bg="light">
            <div className="container">
              <h1 className="text-dark text-center m-0 pr-3">
                Vacations Records
              </h1>
              <div className="d-flex m-0 p-0">
                <a className="mr-4" href="/home">
                  Home
                </a>
                <a className="mr-4" href="/requests">
                  Requests
                </a>
                <a className="mr-4" href="/my-account">
                  My Account
                </a>
                <a onClick={logout} href="/login">
                  <small>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </small>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </Navbar>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-account" element={<UserDetails />} />
            <Route path="/requests" element={<Requests />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default HeaderLoggedUser;
