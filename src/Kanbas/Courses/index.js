import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <div class="row ps-4">
                    <nav class = "text-danger pt-2" style={{"--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"}} aria-label="breadcrumb">
                        <ol class="breadcrumb">
                          <i class="fa-solid fa-grip-lines text-danger pe-2 pt-1"></i>
                          <li class="breadcrumb-item"><a class ="text-danger" href="home.html">CS4550.12631.202410</a></li>
                          <li class="breadcrumb-item active text-danger" aria-current="page">Assignments</li>
                          <li class="breadcrumb-item active text-black" aria-current="page">A1 - ENV + HTML</li>
                        </ol>
                      </nav>
    
                        
                </div>
      <h1>Course {course.name}</h1>
      <CourseNavigation />
      <div className="d-flex modules">
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}/>
        
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;