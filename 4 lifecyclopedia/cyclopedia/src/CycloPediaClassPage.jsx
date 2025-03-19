import React from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

class CyclopediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }
  componentDidMount = async () => {
    console.log("ComponentDidMount");

    if (JSON.parse(localStorage.getItem("CyclopediaState"))) {
      this.setState(JSON.parse(localStorage.getItem("CyclopediaState")));
    } else {
      const response = await getRandomUser();
      console.log(response);
      this.setState({
        instructor: {
          name: response.data.first_name + " " + response.data.last_name,
          email: response.data.email,
          phone: response.data.phone_number,
        },
      });
    }
  };
  componentDidUpdate = async (previousProps, previousState) => {
    console.log("ComponentDidUpdate");
    localStorage.setItem("CyclopediaState", JSON.stringify(this.state));
    if (this.state.studentCount > previousState.studentCount) {
      const response = await getRandomUser();
      this.setState((prevState) => {
        return {
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    } else if (previousState.studentCount > this.state.studentCount) {
      this.setState((prevState) => {
        return {
          studentList: [],
        };
      });
    }
  };
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };
  handleToggleInstructor = () => {
    this.setState((prevState) => {
      return {
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };
  render() {
    console.log("render");
    return (
      <div>
        {
          <div className="p-3">
            <span className="h4 text-success">Instructor</span>
            <i
              className={`bi ${
                this.state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
              }  btn btn-success btn-sm`}
              onClick={this.handleToggleInstructor}
            ></i>
            {this.state.hideInstructor ? null : (
              <Instructor instructor={this.state.instructor} />
            )}
          </div>
        }
        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <input
            type="text"
            placeholder="Name.."
            value={this.state.inputName}
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          />
          <span>Value: {this.state.inputName}</span>
          <br />
          <textarea
            value={this.state.inputFeedback}
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
            placeholder="Feedback.."
            name=""
            id=""
          ></textarea>
          <span>Value {this.state.inputFeedback}</span>
        </div>
        <div className="p-3">
          <span className="h4 text-success">Students</span> <br />
          <div>Student Count: {this.state.studentCount}</div>
          {this.state.studentList.map((student, index) => {
            return <div key={index}>-{student.name}</div>;
          })}
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudent}
          >
            Remove All Student
          </button>
        </div>
      </div>
    );
  }
}

export default CyclopediaClassPage;
