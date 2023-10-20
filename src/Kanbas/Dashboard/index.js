import { Link } from "react-router-dom";
import db from "../Database";
import img0 from "./amethyst.jpeg";
import img1 from "./azure.jpeg";
import img2 from "./crimson.jpeg";
import "./index.css";
import React from 'react';


function Dashboard() {
  const courses = db.courses;
  const photos = [img0, img1, img2];
  return (
    <div>
      <h1>Dashboard</h1>
      <hr></hr>
      <h1 class="ms-3">Published Courses</h1>
      <hr class="ms-3"></hr>
      
      <div class="m-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {courses.map((course, index) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            <div class="col mb-4">
              <div class="card h-100 ">
              <img src={photos[index]} class="card-img-top" />
                  <div class="card-body ">
                      
                      <p class="card-title bg-color-blue text-primary">{course.name}</p>
                      <h6 class="text-secondary">{course.number}.{course._id}</h6>
                      <p class="card-text text-muted">From {course.startDate} to {course.endDate}</p>
                    <i class="fa-regular fa-pen-to-square text-muted"></i>
                  </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;