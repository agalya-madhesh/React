import React from "react";
import { BiCalendarCheck } from "react-icons/bi";
import AssignmentHeader from "./AssignmentHeader";
import "../Styles/Assignment.css";

const upcomingAssignments = [
  {
    id: 1,
    subject: "Redux Integration",
    description: "Implement Redux into an existing React application",
    deadline: "May 10, 2024",
  },
  {
    id: 2,
    subject: "React Router",
    description: "Integrate React Router to enable navigation ",
    deadline: "May 15, 2024",
  },
  {
    id: 3,
    subject: "API Integration ",
    description: "Fetch data from an external API using Axios ",
    deadline: "May 20, 2024",
  },
  {
    id: 4,
    subject: "Styled Components",
    description: "Utilize styled-components library to style ",
    deadline: "May 25, 2024",
  },
  {
    id: 5,
    subject: "React Hooks",
    description: "Convert class-based components to functional components ",
    deadline: "May 30, 2024",
  },
  {
    id: 6,
    subject: "Authentication",
    description: "Implement user authentication using Firebase ",
    deadline: "June 5, 2024",
  }
];


function AssignmentPage() {
  return (
    <div>
      <AssignmentHeader />
      <div className="upcoming-assignments">
        <div className="assignment-container">
          {upcomingAssignments.map((assignment) => (
            <div className="cards" key={assignment.id}>
              <div className="cards-covers">
                <BiCalendarCheck className="card-icon" />
              </div>
              <div className="cards-title">
                <h3>{assignment.subject}</h3>
                <p>{assignment.description}</p>
                <h5>Deadline : {assignment.deadline}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentPage;
