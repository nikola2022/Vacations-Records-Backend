import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Collapse } from "bootstrap-4-react/lib/components";
import { BDiv } from "bootstrap-4-react/lib/components/dom";
import { BH5 } from "bootstrap-4-react/lib/components/dom/h";
import { BSpan } from "bootstrap-4-react/lib/components/dom";
import { Navbar } from "bootstrap-4-react";
import { Nav } from "bootstrap-4-react";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserDetails from "./components/UserDetails";
import HeaderLoggedUser from "./components/HeaderLoggedUser";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderUnloggedUser from "./components/HeaderUnloggedUser";

function App() {
  let [loggedIn, setLoggedIn] = useState(0);
  sessionStorage.setItem("isLoggedIn", false);

  useEffect(() => {
    try {
      axios.get("/api/employee/user").then(function (res) {
        console.log("dataaaa");
        console.log(res.data);
        if (res.data.length == 0) {
          console.log("NEULOGOVAN");
          console.log(loggedIn);
        } else {
          console.log("ULOGOVAN");
          setLoggedIn(true);
          console.log(loggedIn);
        }
      });
    } catch (err) {
      console.log(err.toJSON());
    }
  }, []);

  if (loggedIn == false) {
    return (
      <div>
        <HeaderUnloggedUser />
      </div>
    );
  } else {
    return (
      <div>
        <HeaderLoggedUser />
      </div>
    );
  }
}

export default App;
