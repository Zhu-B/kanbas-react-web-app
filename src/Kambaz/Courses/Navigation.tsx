import { Link, useParams, useLocation } from "react-router-dom";
export default function CourseNavigation() {

  const { cid } = useParams<{ cid: string }>();
  const location = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  
  return (
    <div id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0"
      style={{ width: "200px", minWidth: "200px" }}>

      {links.map((name) => {

        const path = `/Kambaz/Courses/${cid}/${name}`;
        const isActive = location.pathname === path;

        return (
          <Link
            key={name}
            to={path}
            id={`wd-course-${name.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${
              isActive ? "active" : "text-danger"}`}>
            {name}
          </Link>
        );

      })}
    </div>
  );}
