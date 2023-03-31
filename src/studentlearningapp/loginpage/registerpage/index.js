import "./reg.css";

import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
  let Nativeroute=useNavigate()
  const [login, setlogin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
  });
  console.log("login", login);
  const [errorfirstname, seterrorfirstname] = useState({});
  console.log("errorfirstname", errorfirstname);
  const [errorlastname, seterrorlastname] = useState({});
  const [errorpassword, seterrorpassword] = useState({});
  const [erroremail, seterroremail] = useState({});
  const [errorcontact, seterrorcontact] = useState({});


  let handleChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    let validfirstname = validatefirstname(login.firstname);
    let validPassword = validatePassword(login.password);
    let validlastname = validatelastname(login.lastname);
    let validemail = validateemail(login.email);
    let validcontact = validatecontact(login.contact);
    if (
      validfirstname &&
      validPassword &&
      validlastname &&
      validemail &&
      validcontact
    ) {
      setlogin({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        password: "",
      });
      Nativeroute("/")
    }
  }
  

  let CANCEL = () => {
    setlogin({
      firstname: "",
      lastname: "",
      password: "",
      contact: "",
    });
    seterrorfirstname({ firstname: "" });
    seterrorlastname({ lastname: "" });
    seterroremail({ email: "" });
    seterrorpassword({ Password: "" });
    seterrorcontact({ contact: "" });
  };

  function validatefirstname(firstname) {
    if (firstname) {
      if (firstname.search(/[^a-zA-Z]+/) === -1) {
        seterrorfirstname({
          ...errorfirstname,
          firstname: "",
        });
        return true;
      } else {
        seterrorfirstname({
          ...errorfirstname,
          firstname: "Firstname is not valid",
        });
      }
    } else {
      seterrorfirstname({
        ...errorfirstname,
        firstname: "Firstname is required",
      });
      return false;
    }
  }
  function validatelastname(lastname) {
    if (lastname) {
      if (lastname.search(/[^a-zA-Z]+/) === -1) {
        seterrorlastname({
          ...errorlastname,
          lastname: "",
        });
        return true;
      } else {
        seterrorlastname({
          ...errorlastname,
          lastname: "Lastname  is not valid",
        });
      }
    } else {
      seterrorlastname({
        ...errorlastname,
        lastname: "Lastname is required",
      });
      return false;
    }
  }
  function validateemail(email)
 {
    if (email)
 {
      if (
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          email
        )
      ) {
        seterroremail({
          ...erroremail,
          email: "",
        });
        return true;
      } else {
        seterroremail({
          ...erroremail,
          email: "Email  is not valid",
        });
      }
    } else {
      seterroremail({
        ...erroremail,
        email: "Email is required",
      });
      return false;
    }
  }
  function validatecontact(contact) {
    if (contact) {
      if (
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
          contact
        )
      ) {
        seterrorcontact({
          ...errorcontact,
          contact: "",
        });
        return true;
      } else {
        seterrorcontact({
          ...errorcontact,
          contact: "contact  is not valid",
        });
      }
    } else {
      seterrorcontact({
        ...errorcontact,
        contact: "contact is required",
      });
      return false;
    }
  }

  function validatePassword(password) {
    if (password) {
      let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (regex.test(password)) {
        seterrorpassword({
          ...errorpassword,
          password: "",
        });
        return true;
      } else {
        seterrorpassword({
          ...errorpassword,
          password: "Password is not valid",
        });
      }
    } else {
      seterrorpassword({
        ...errorpassword,
        password: "Password is required",
      });
      return false;
    }
  }
  const navigateToOtp = () => {
    alert("mano");
     Nativeroute("/")
  };

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CardContent
          sx={{
            height:"100x",
            backgroundColor: "#000000A2",
            paddingBlock: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="bimg">
            <h1 className="logtext">Register</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="emp">
                <label>firstname</label>
                <input
                  className="inputbox"
                  name="firstname"
                  type="text"
                  value={login.firstname}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="text-danger">{errorfirstname.firstname}</span>
              </div>
              <div className="emp">
                <label>lastname</label>
                <input
                  className="inputbox"
                  name="lastname"
                  type="text"
                  value={login.lastname}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="text-danger">{errorlastname.lastname}</span>
              </div>
              <div className="emp">
                <label>E mail</label>
                <input
                  className="inputbox"
                  name="email"
                  type="text"
                  value={login.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="text-danger">{erroremail.email}</span>
              </div>
              <div className="emp">
                <label>contact</label>
                <input
                  className="inputbox"
                  name="contact"
                  type="text"
                  value={login.contact}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="text-danger">{errorcontact.contact}</span>
              </div>
              <div className="pass">
                <label>Password</label>
                <input
                  className="inputbox"
                  name="password"
                  type="password"
                  value={login.password}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="text-danger">{errorpassword.password}</span>
              </div>
            </form>
            <div className="Div_continar">
              <Typography>Already have account</Typography>
              <Typography
                className="Div_continar_tag"
                onClick={() => {
                  navigateToOtp();
                }}
                sx={{ textDecoration: "none" }}
              >
                Login
                 </Typography>
            </div>
            <div className="loginbutton">
              <button
                type="submit"
                className="loginBtn"
                onClick={() => handleSubmit()}
              >
                Register
              </button>
              <button
                type="reset"
                className="cancelBtn"
                onClick={() => CANCEL()}
              >
                CANCEL
              </button>
            </div>
          </div>
          <Typography></Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default Register;