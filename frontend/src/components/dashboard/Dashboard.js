import React, { Component } from "react";
import baseUrl from "../../config.js";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  LinearProgress,
  DialogTitle,
  DialogContent,
  TableBody,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import swal from "sweetalert";
const axios = require("axios");
function myMatch(origin, search) {
  for (let i = 0; i < origin.length; i++) {
    let flag = true;
    for (let j = 0; j < search.length; j++) {
      if (i + j >= origin.length || origin[i + j] !== search[j]) {
        flag = false;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
}
export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      usr_id: "",
      token: "",
      openProductModal: false,
      openProductEditModal: false,
      id: "",
      name: "",
      file: "",
      fileName: "",
      page: 1,
      search: "",
      courses: [],
      pages: 0,
      loading: false,
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    let usr_id = localStorage.getItem("usr_id");
    if (!token) {
      this.props.history.push("/login");
    } else {
      this.setState({ usr_id: usr_id, token: token }, () => {
        this.getCourses();
      });
    }
  };
  handleCourseDelete = (course) => {
    axios
      .post(
        baseUrl + "dashboard/delete",
        {
          usr_id: this.state.usr_id,
          course: course,
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: this.state.token,
          },
        }
      )
      .then((res) => {
        swal({
          text: res.data.title,
          icon: "success",
          type: "success",
        });
      })
      .catch((err) => {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error",
        });
      });
  };

  getCourses = () => {
    this.setState({ loading: true });
    const url = baseUrl + "dashboard";
    axios
      .get(url, {
        headers: {
          token: this.state.token,
        },
      })
      .then((res) => {
        const data = [];
        const Search = this.state.search.toLowerCase();
        res.data.courses.map((course) => {
          if (
            myMatch(course.name.toLowerCase(), Search) ||
            myMatch(String(course.ID).toLowerCase(), Search) ||
            Search === "" ||
            myMatch(String(course.registrationNumber), Search) ||
            myMatch(String(course.instructors).toLowerCase(), Search)
          ) {
            data.push(course);
          }
        });

        this.setState({ loading: false, courses: data, pages: res.data.pages });
      })
      .catch((err) => {
        swal({
          text: err.response.data.errorMessage,
          icon: "error",
          type: "error",
        });
        this.setState({ loading: false, products: [], pages: 0 }, () => {});
      });
  };

  pageChange = (e, page) => {
    this.setState({ page: page }, () => {
      this.getCourses();
    });
  };

  logOut = () => {
    localStorage.setItem("token", null);
    this.props.history.push("/");
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
    if (e.target.name === "search") {
      this.setState({ page: 1 }, () => {
        this.getCourses();
      });
    }
  };

  changeToShop = () => {
    this.props.history.push("/shop/school");
  };
  handleProductOpen = () => {
    this.setState({
      openProductModal: true,
      id: "",
      name: "",
      desc: "",
      price: "",
      discount: "",
      fileName: "",
    });
  };
  render() {
    return (
      <div>
        {this.state.loading && <LinearProgress size={40} />}
        <div>
          <h2>Dashboard</h2>
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            onClick={this.changeToShop}
          >
            Enroll
          </Button>
          <Button
            className="button_style"
            variant="contained"
            size="small"
            onClick={this.logOut}
          >
            Log Out
          </Button>
        </div>

        {/* Edit Product */}
        <Dialog
          open={this.state.openProductEditModal}
          onClose={this.handleProductClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Add to Dashboard</DialogTitle>
          <DialogContent>
            <TextField
              id="school_code_dashboard"
              type="text"
              autoComplete="off"
              name="name"
              value={this.state.scho}
              onChange={this.onChange}
              placeholder="School Code"
              required
            />
            <br />
            <TextField
              id="course_code_dashboard"
              type="text"
              autoComplete="off"
              name="desc"
              value={this.state.cour}
              onChange={this.onChange}
              placeholder="Course Code"
              required
            />
            <br />
            <form>
              <TextField
                id="search_subject_dashboard"
                type="text"
                autoComplete="off"
                name="search"
                value={this.state.search}
                onChange={this.onChange}
                placeholder="Search by subject"
                required
              />
            </form>
            <br />
            <TextField
              id="discount"
              type="number"
              autoComplete="off"
              name="discount"
              value={this.state.discount}
              onChange={this.onChange}
              placeholder="Discount"
              required
            />
            <br />
            <br />
          </DialogContent>
        </Dialog>

        {/* Add Product */}
        <Dialog
          open={this.state.openProductModal}
          onClose={this.handleProductClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Add Course</DialogTitle>
          <DialogContent>
            <TextField
              id="product_name"
              type="text"
              autoComplete="off"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Product Name"
              required
            />
            <br />
            <TextField
              id="product_desc"
              type="text"
              autoComplete="off"
              name="desc"
              value={this.state.desc}
              onChange={this.onChange}
              placeholder="Description"
              required
            />
            <br />
            <TextField
              id="product_price"
              type="number"
              autoComplete="off"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
              placeholder="Price"
              required
            />
            <br />
            <TextField
              id="product_discount"
              type="number"
              autoComplete="off"
              name="discount"
              value={this.state.discount}
              onChange={this.onChange}
              placeholder="Discount"
              required
            />
            <br />
            <br />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleProductClose} color="primary">
              Cancel
            </Button>
            <Button
              disabled={
                this.state.name === "" ||
                this.state.desc === "" ||
                this.state.discount === "" ||
                this.state.price === "" ||
                this.state.file === null
              }
              onClick={() => this.addProduct()}
              color="primary"
              autoFocus
            >
              Add Product
            </Button>
          </DialogActions>
        </Dialog>

        <br />

        <TableContainer>
          <TextField
            id="search_by_course_dashboard"
            type="search"
            autoComplete="off"
            name="search"
            value={this.state.search}
            onChange={this.onChange}
            placeholder="Search by course name"
            required
          />
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Course Name</TableCell>
                <TableCell align="center">Registration Code</TableCell>
                <TableCell align="center">Instructors</TableCell>
                <TableCell align="center">Unit</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.courses.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" component="th" scope="row">
                    {row.ID}: {row.name}
                  </TableCell>
                  <TableCell align="center">{row.registrationNumber}</TableCell>
                  <TableCell align="center">{row.instructors}</TableCell>
                  <TableCell align="center">{row.maxUnits}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.time}</TableCell>
                  <TableCell align="center">
                    <Button
                      className="button_style"
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() => this.handleCourseDelete(row)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Pagination
            count={this.state.pages}
            page={this.state.page}
            onChange={this.pageChange}
            color="primary"
          />
        </TableContainer>
      </div>
    );
  }
}
