import React, { useEffect, useState } from "react";
import { getRandomUser } from "./Utility/api";
import Instructor from "./Instructor";

const CyclopediaFuncPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  });

  const [inputName, setInputName] = useState(() => {
    return "";
  });
  const [inputFeedback, setInputFeedback] = useState(() => {
    return "";
  });

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    };
    if (!state.hideInstructor) {
      getUser();
    }
  }, [state.hideInstructor]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getRandomUser();
      console.log(response);
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        };
      });
    };
    if (state.studentList.length < state.studentCount) {
      getUser();
    } else if (state.studentCount < state.studentList.length) {
      setState((prevState) => {
        return { ...prevState, studentList: [] };
      });
    }
  }, [state.studentCount]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     instructor: undefined,
  //     studentList: [],
  //     studentCount: 0,
  //     hideInstructor: false,
  //     inputName: "",
  //     inputFeedback: "",
  //   };
  // }
  // componentDidMount = async () => {
  //   console.log("ComponentDidMount");

  //   if (JSON.parse(localStorage.getItem("CyclopediaState"))) {
  //     this.setState(JSON.parse(localStorage.getItem("CyclopediaState")));
  //   } else {

  // componentDidUpdate = async (previousProps, previousState) => {
  //   console.log("ComponentDidUpdate");
  //   localStorage.setItem("CyclopediaState", JSON.stringify(this.state));
  //   if (this.state.studentCount > previousState.studentCount) {
  //     const response = await getRandomUser();
  //     this.setState((prevState) => {
  //       return {
  //         studentList: [
  //           ...prevState.studentList,
  //           {
  //             name: response.data.first_name + " " + response.data.last_name,
  //           },
  //         ],
  //       };
  //     });
  //   } else if (previousState.studentCount > this.state.studentCount) {
  //     this.setState((prevState) => {
  //       return {
  //         studentList: [],
  //       };
  //     });
  //   }
  // };
  // componentWillUnmount() {
  //   console.log("ComponentWillUnmount");
  // }

  const handleAddStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  const handleRemoveAllStudent = () => {
    setState((prevState) => {
      return {
        ...prevState,
        studentCount: 0,
      };
    });
  };
  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      };
    });
  };

  return (
    <div>
      {
        <div className="p-3">
          <span className="h4 text-success">InstructorFunc</span>
          <i
            className={`bi ${
              state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
            }  btn btn-success btn-sm`}
            onClick={handleToggleInstructor}
          ></i>
          {state.hideInstructor ? null : (
            <Instructor instructor={state.instructor} />
          )}
        </div>
      }
      <div className="p-3">
        <span className="h4 text-success">Feedback</span>
        <input
          type="text"
          placeholder="Name.."
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <span>Value: {inputName}</span>
        <br />
        <textarea
          value={inputFeedback}
          onChange={(e) => {
            setInputFeedback(e.target.value);
          }}
          placeholder="Feedback.."
          name=""
          id=""
        ></textarea>
        <span>Value {inputFeedback}</span>
      </div>
      <div className="p-3">
        <span className="h4 text-success">Students</span> <br />
        <div>Student Count: {state.studentCount}</div>
        {state.studentList.map((student, index) => {
          return <div key={index}>-{student.name}</div>;
        })}
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        &nbsp;
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudent}
        >
          Remove All Student
        </button>
      </div>
    </div>
  );
};

export default CyclopediaFuncPage;
