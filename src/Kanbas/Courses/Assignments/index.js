import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "/Users/dillianpica/2023/fall/webdev/kanbas-react-web-app/src/Kanbas/index.css"
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    <div>
    <div class="float-end">
    <button type="button" class="btn btn-light  btn-sm float-end">
    <FontAwesomeIcon icon={faPlus} size="l" />
        Group</button>
      <button type="button" class="btn btn-r btn-sm">
        <FontAwesomeIcon icon={faPlus} size="l" />
        Assignment</button>
      <button type="button" class="btn btn-light">
      <FontAwesomeIcon icon={faEllipsisVertical} size="l" />
      
      </button>
     
      </div>
      <br></br>
      <hr></hr>

        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary">Assignments</li>
          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item">
              {assignment.title}
            </Link>
          ))}
        </ul>
      </div></>
  );
}
export default Assignments;