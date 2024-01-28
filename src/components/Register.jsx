import { useState } from "react";
import axios from "axios";
import { Button } from "bootstrap-4-react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post(
        "/api/employee/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        {
          headers: {
            // "Authorization": token,
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": "*",
          },
        }
      );
      console.log("Register succes");
      navigate("/login");
    } catch (err) {
      console.log(err.toJSON());
    }
  }

  return (
    <div>
      <div class="container mt-4 w-50">
        <div class="card">
          <form>
            <div className="p-5">
              <h1 className="text-left">Registration</h1>
              <hr />
              <div class="form-group">
                <label>First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <label>Password</label>
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
              <Button primary className="mt-4 mb-4 float-right" onClick={save}>
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
