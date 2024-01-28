import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import { Navbar } from "bootstrap-4-react";
import { Nav } from "bootstrap-4-react";
import { Collapse } from "bootstrap-4-react/lib/components";
import { BDiv } from "bootstrap-4-react/lib/components/dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import UserDetails from "./UserDetails";

function HeaderUnloggedUser() {
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
                <nav class="nav nav-pills nav-justified">
                  <a className="nav-link" href="/register">
                    Create Account
                  </a>
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </nav>
              </div>
            </div>
          </Navbar>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default HeaderUnloggedUser;
