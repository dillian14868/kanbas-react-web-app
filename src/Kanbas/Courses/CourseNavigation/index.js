import { Link, useParams, useLocation } from "react-router-dom";
import "/Users/dillianpica/2023/fall/webdev/kanbas-react-web-app/src/Kanbas/index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
  <ul className="wd-course-navigation list-group" style={{paddingLeft: 20, width: 150 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        ))}
      </ul>
  );
}


export default CourseNavigation;

