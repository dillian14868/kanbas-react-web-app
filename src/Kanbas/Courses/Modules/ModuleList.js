import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item form">
        <div class="row">
          <div class="col-8">
            <input class="form-control"
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            <textarea class="form-control"
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
          </div>
          <div class="col-1">

          </div>
          <div class="col">
            <button class="btn btn-primary active"
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button class="btn btn-success active ms-2"
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
            </div>
        </div>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div class="row">
              <div class="col-9">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                <p>{module._id}</p>
              </div>
              <div class="col">
                <button class="btn btn-warning active"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button class="btn btn-danger active ms-2"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;