import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "/Users/dillianpica/2023/fall/webdev/kanbas-react-web-app/src/Kanbas/index.css"


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group module start-start ">
      {
       modules
       .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-secondary" id="no-border"
           style={{paddingbottom: 100}}>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;