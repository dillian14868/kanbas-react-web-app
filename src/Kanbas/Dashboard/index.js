import { React} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  
  return (
    <div class="ms-2">
    <div class="row">
    <h1>Dashboard</h1>
      <hr class="ms-3"></hr>
      <h2>Published Course({courses.length})</h2>
      <hr class="ms-3"></hr>
    </div>
    
     <div class="col-5">
      <form class="border border-secondary rounded bg-white">
        <div class="row m-4">
          <div class="col-5">
              <input value={course.name} className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
              <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
              <input value={course.startDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
              <input value={course.endDate} className="form-control" type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          </div>
          <div class="col">
            <button class="btn btn-success active" onClick={addNewCourse} >
              Add
            </button>
            <button class="btn btn-primary active ms-3" onClick={updateCourse} >
              Update
            </button>
          </div>
        </div>
      </form>

      <div className="list-group">
        
        {courses.map((course) => (
          <Link key={course._id}
          to={`/Kanbas/Courses/${course._id}`}
          className="list-group-item">
            <div class="row">
              <div class="col">
                {course.name}
              </div>
              <div class="col">
                  <button class="btn btn-warning active ms-3"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                  Edit
                </button>

                <button class="btn btn-danger active ms-3"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                  Delete
                </button>
              </div>
            </div>
          </Link>
        ))}
        <div>
        </div>
        </div>
      </div>

    </div>
  );
}


export default Dashboard;