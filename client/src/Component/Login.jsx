import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginClick = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    const url = "http://localhost:8000/auth/token/";
    const data = {
      username: username,
      password: password,
      grant_type: "password",
      client_id: "VLsuoeyMUlfS0G5xKKJX28ty63hjeEueSIPDfTbB",
      client_secret:
        "hjUJZPbWz6phZD84nHUG5itJIwaIj1yM6ogeuxbmunNQTZbtSNr91pmbrnAZz6OvRnOXLXZOca1geUaqPW83lt0DdJ4DQSYyxCs5DHFA8T7VkZ1uQvcc5GLK1dTPAo3a",
    };

    axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
      })
      .catch((error) => {
        alert("error");
      });
  };

  const responseFacebook = (response) => {
    console.log(response);
    const headers = {
      "Content-Type": "application/json",
    };
    const url = "http://localhost:8000/auth/convert-token/";
    const data = {
      token: response.accessToken,
      backend: "facebook",
      grant_type: "convert_token",
      client_id: "VLsuoeyMUlfS0G5xKKJX28ty63hjeEueSIPDfTbB",
      client_secret:
        "hjUJZPbWz6phZD84nHUG5itJIwaIj1yM6ogeuxbmunNQTZbtSNr91pmbrnAZz6OvRnOXLXZOca1geUaqPW83lt0DdJ4DQSYyxCs5DHFA8T7VkZ1uQvcc5GLK1dTPAo3a",
    };

    axios
      .post(url, data, {
        headers: headers,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);
      })
      .catch((error) => {
        alert("error");
      });
  };

  const responseGoogle = (response) => {
    console.log('google',response);
  };

  return (
    <div>
      <div className="login_card">
        <h2>Login</h2> <br />
        <Form className="login_form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={loginClick}>
            Submit
          </Button>
        </Form>
        {/* <FacebookLogin
          appId="482981273209948"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        /> */}
        <GoogleLogin
          clientId="478903583629-qfpp2q7f48ami77p9poh5ap6rf8o7nck.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
      </div>
    </div>
  );
};

export default Login;
