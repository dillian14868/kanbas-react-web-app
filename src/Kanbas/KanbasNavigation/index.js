import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";
import logo from "../Northeastern-University-Emblem.png";
import { faCircleUser, faGauge, faBook, faCalendarDays, faEnvelopeOpenText, faClock, 
  faPlay, faCircleArrowRight, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
  import React from 'react';


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", 
  "History", "Studio", "Commons", "Help"];
  const icons = [faCircleUser, faGauge, faBook, faCalendarDays, 
    faEnvelopeOpenText, faClock, faPlay, faCircleArrowRight, faCircleQuestion]
  const { pathname } = useLocation();
  return (
    <div class="row">
            <div class="col-1 border">
    <ul className="kanbas-navagator list-group " style={{ width: 150 }}>
    <li>
     <img src={logo} width="80" alt="img"/>
     </li>
      {links.map((link, index) => (
        <li class="list-group-item.active  pt-4">
        <Link
        
          key={index}
          to={`/Kanbas/${link}`}
          className={` list-group-item.active list-group-item ${pathname.includes(link) && "active"}`}>
            
          <FontAwesomeIcon icon={icons[index] } size="xl" style={{ color: "#d9534f" }}/>
          <br/>
          {link}
        </Link>
        </li>
      ))}
    </ul>
    </div>
    </div>
  );
}
export default KanbasNavigation;
