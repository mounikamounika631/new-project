// import image1 from "../image/image1.png";
// import image2 from "../image/image2.png";
// import image3 from "../image/image3.png";
// import Loginimage from "../Molecules/Loginimage";
import "./Login.css"

import { Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Loginpage() {
  let Nativeroute=useNavigate()
const [login, setlogin] = useState({
  empID: "",
  password: "",
});
const [empid, setempid] = useState({});
const [errorpassword, seterrorpassword] = useState({});

let handleChange = (e) => {
  setlogin({ 
      ...login,
       [e.target.name]: e.target.value 
      });
};

function handleSubmit(e) {
  let validEmpid = validateEmpId(login.empID);
  let validPassword = validatePassword(login.password);
  if (validEmpid && validPassword) {
    setlogin({
      empID: "",
      password: "",
    });
    Nativeroute("/step3")
  }
}

let resetFun = () => {
  setlogin({
    empID: "",
    password: "",
  });
  setempid({ EmpID: "" });
  seterrorpassword({ Password: "" });
};

function validateEmpId(empID) {
  if (empID) {
    if (empID.search(/[^a-zA-Z]+/) === -1) {
      setempid({
        ...empid,
        empID: "",
      });
      return true;
    } else {
      setempid({
        ...empid,
        empID: "Employee Id is not valid",
      });
    }
  } else {
    setempid({
      ...empid,
      empID: "Employee Id is required",
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
      
      <CardContent  className="bimg1"
        sx={{
          backgroundColor: "#000000A2",
          paddingBlock: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 className="logtext1">Login</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="emp1">
              <label>Email ID</label>
              <input
                name="empID"
                type="text"
                value={login.empID}
                onChange={(e)=>{handleChange(e)}}
              />
               <span className="text-danger">{empid.empID}</span>
            </div>
            <div className="pass1">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={login.password}
                onChange={(e)=>{handleChange(e)}}
              />
              <span className="text-danger">{errorpassword.password}</span>
            </div>
          </form>
          <div>
            <div className="div_Container1">
          <Typography >Don't have account   </Typography>
              <Typography
                 className="Div_continar_tag1"
                onClick={() => {
                  Nativeroute("/Step2");
                }}
                sx={{ textDecoration: "none" }}
              >
                Register
                 </Typography>
                 </div>
          </div>
          <div className="loginbutton_contianer1">
            <button type="submit" className="loginBtn"  onClick={() => handleSubmit()}>
              LOGIN
            </button>
            <button type="reset" className="cancelBtn1"
            onClick={() => resetFun()}>
              CANCEL
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
}

export default Loginpage