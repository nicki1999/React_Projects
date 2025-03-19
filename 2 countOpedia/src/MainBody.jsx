import Student from "./Components/Students/Student";
import StudentReview from "./Components/Students/StudentReview";
export default function MainBody() {
  const whatWeWillLearn = "React JS";
  const totalLectureNumber = "3";

  return (
    <div
      style={{ color: "grey", backgroundColor: "black" }}
      className="px-3 py-3"
    >
      <div style={{}}>
        <p>
          In this course we will learn {whatWeWillLearn} by building TaskOPedia
        </p>
        <p>Total Lecture - {totalLectureNumber}</p>
        <li>Basic foundation</li>
        <li>Functional and Class Components</li>
        <div>
          Enter Task:{" "}
          <input maxLength={5} readOnly={false} placeholder="Niki"></input>
        </div>
      </div>
      <div className="row">Students Enrolled</div>
      <Student
        name="Kris Walley"
        experience={2}
        headshot="https://api.lorem.space/image/face?w=150&h=180"
      >
        <StudentReview />
      </Student>
      <Student
        name="Angel Patrice"
        experience={5}
        headshot="https://api.lorem.space/image/face?w=150&h=180"
      >
        <StudentReview />
      </Student>
      <Student
        name="Rene Parker"
        experience={7}
        headshot="https://api.lorem.space/image/face?w=150&h=180"
      />
    </div>
  );
}
