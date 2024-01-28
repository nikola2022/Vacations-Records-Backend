import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("/api/employee/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            if (res.data.msg == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.isLogged == true) {
              console.log(res.data);
              navigate("/home");
              setLoggedIn(res.data.isLogged);
              console.log(res.data.isLogged);
              console.log(loggedIn);
              sessionStorage.setItem("isLogged", loggedIn);
              window.location.reload();
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div class="container mt-4 w-50">
        <div className="card">
          <div class="p-5">
            <h2>Login</h2>
            <hr />

            <form>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control input-large"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <label>password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary float-right"
                onClick={login}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
