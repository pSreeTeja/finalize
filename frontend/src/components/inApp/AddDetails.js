import React, { Component } from "react";
import "../../stylesheets/inApp/addDetails.css";
import validator from "validator";
class AddDetails extends React.Component {
  state = {
    email: "",
    projectTitle: "",
    abstract: "",
    teamMem1: "",
    teamMem2: "",
    teamMem3: "",
    teamMem4: "",
    projectLink: "",
    didAdd: true,
    isApproved: false,
    completed: false,
  };
  getUserDetails = async () => {
    try {
      const res = await fetch("/data", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      // console.log("CURRENT USER DETAILS");
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  addEachStudentProject = async () => {
    this.getUserDetails()
      .then((res) => {
        this.setState({
          email: res.email,
        });
      })
      .then(async () => {
        console.log("EMAIL FETCHED IS" + this.state.email);
        if (this.props.myTeamDetails.didAdd) {
          const p = await fetch("/updatestudentproject", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              _id: this.props.groupData._id, //because to add into that particular group
              email: this.state.email,
              projectTitle: this.state.projectTitle,
              abstract: this.state.abstract,
              teamMem1: this.state.teamMem1,
              teamMem2: this.state.teamMem2,
              teamMem3: this.state.teamMem3,
              teamMem4: this.state.teamMem4,
              projectLink: this.state.projectLink,
              didAdd: true,
              isApproved: false,
              completed: false,
            }),
          }).then(window.open("http://localhost:3000/dashboard", "_top"));
        } else {
          const p = await fetch("/addstudentproject", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              _id: this.props.groupData._id, //because to add into that particular group
              email: this.state.email,
              projectTitle: this.state.projectTitle,
              abstract: this.state.abstract,
              teamMem1: this.state.teamMem1,
              teamMem2: this.state.teamMem2,
              teamMem3: this.state.teamMem3,
              teamMem4: this.state.teamMem4,
              projectLink: this.state.projectLink,
              didAdd: true,
              isApproved: false,
              completed: false,
            }),
          }).then(window.open("http://localhost:3000/dashboard", "_top"));
        }
      });
  };
  checkForSubmission = () => {
    if (!validator.isURL(this.state.projectLink)) {
      alert("Please provide a valid Project Link");
      return;
    }
  };

  render() {
    return (
      <div className="addMainDiv">
        <div className="addprojectTitleDv">
          <span className="addProjectNameText">Project Name: </span>
          <input
            className="aboutProjectField"
            defaultValue={this.props.myTeamDetails.projectTitle}
            onChange={(e) => {
              this.setState({ projectTitle: e.target.value });
            }}
          ></input>
        </div>

        <div className="addAbstractProjectDiv">
          <span className="addAbstractText">Abstract :</span>
          <textarea
            columns="10"
            rows="10"
            className="abstractField"
            onChange={(e) => {
              this.setState({ abstract: e.target.value });
            }}
            defaultValue={this.props.myTeamDetails.abstract}
          ></textarea>
        </div>
        <div className="addTeamMembersDiv">
          <span className="addTeamMembers">Team Members: </span>
          <input
            className="membersField1"
            onChange={(e) => {
              this.setState({ teamMem1: e.target.value });
            }}
            defaultValue={this.props.myTeamDetails.teamMem1}
          ></input>
          <input
            className="membersField2"
            onChange={(e) => {
              this.setState({ teamMem2: e.target.value });
            }}
            defaultValue={this.props.myTeamDetails.teamMem2}
          ></input>
          <input
            className="membersField3"
            onChange={(e) => {
              this.setState({ teamMem3: e.target.value });
            }}
            defaultValue={this.props.myTeamDetails.teamMem3}
          ></input>
          <input
            className="membersField4"
            onChange={(e) => {
              this.setState({ teamMem4: e.target.value });
            }}
            defaultValue={this.props.myTeamDetails.teamMem4}
          ></input>
        </div>

        <div className="addLinkProjectDiv">
          <span className="addLink">Link: </span>
          <input
            className="addLinkField"
            placeholder="Your Project Link"
            onChange={(e) => {
              this.setState({ projectLink: e.target.value });
            }}
            defaultValue={this.props.myTeamDetails.projectLink}
          ></input>
        </div>
        <div className="buttonsDiv">
          <button
            className="saveButton"
            onClick={() => this.addEachStudentProject()}
          >
            Save
          </button>
          <button
            className="submitButton"
            onClick={() => this.checkForSubmission()}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddDetails;