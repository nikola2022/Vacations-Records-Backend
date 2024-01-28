import axios from "axios";
import { useEffect, useState } from "react";

function UserDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      axios.get("/api/employee/user").then(function (res) {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
      });
    } catch (err) {
      console.log(err.toJSON());
    }
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex user-info-container">
        <div className="img-user w-25">
          <img
            className="border border-ligth w-75"
            src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_998315.jpg"
            alt=""
          />
        </div>
        <div className="user-info border border-light w-75">
          <h3 className="pl-4 p-2 bg-light">Informations</h3>
          <p className="pl-4 pt-2 w-100 d-flex border-bottom">
            First name: <p className="font-weight-bold pl-3">{firstName}</p>
          </p>
          <p className="pl-4 pt-2 w-100 d-flex border-bottom">
            Last name: <p className="font-weight-bold pl-3">{lastName}</p>
          </p>
          <p className="pl-4 pt-2 w-100 d-flex border-bottom">
            E-Mail: <p className="font-weight-bold pl-3">{email}</p>
          </p>
        </div>
      </div>
      <div className="my-requests-container mt-4">
        <h3 className="pl-4 p-2 bg-light">My Requests</h3>
      </div>
    </div>
  );
}

export default UserDetails;
