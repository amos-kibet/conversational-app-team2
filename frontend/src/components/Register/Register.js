import React from "react";
import baseUrl from "../../config.js";
import swal from "sweetalert";
import "../../config";
import { Button, TextField, Link } from "@material-ui/core";
import axios from "axios";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = () => {
    axios
      .post(baseUrl + "/user/register", {
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        // console.log("[REGISTER] res_payload keys: " + Object.keys(res)[0]);
        // console.log("\n");
        console.log(
          "[REGISTER] res_payload values: " + Object.keys(Object.values(res)[0])
        );
        swal({
          text: res.data.mssg,
          icon: "success",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        // console.log("[REGISTER] err: " + Object.keys(err.response));
        swal({
          text: err.response.data.mssg,
          icon: "error",
        });
      });
  };

  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <div>
          <h2>Register</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Name"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="text"
            autoComplete="off"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            placeholder="User Name"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="email"
            autoComplete="off"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Email"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required
          />
          <br />
          <br />
          <TextField
            id="standard-basic"
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={this.state.confirm_password}
            onChange={this.onChange}
            placeholder="Confirm Password"
            required
          />
          <br />
          <br />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.username === "" && this.state.password === ""}
            onClick={this.register}
          >
            Register
          </Button>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/">Login</Link>
        </div>
      </div>
    );
  }
}
