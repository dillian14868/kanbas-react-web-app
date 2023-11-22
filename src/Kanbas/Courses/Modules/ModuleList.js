import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  addModule, deleteModule, updateModule, setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };




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
              onClick={handleAddModule}>
              Add
            </button>
            <button class="btn btn-success active ms-2"
              onClick={() => dispatch(handleUpdateModule)}>
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
                   onClick={() => handleDeleteModule(module._id)}>
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