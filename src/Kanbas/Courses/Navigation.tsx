import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          id={`wd-course-${link.toLowerCase()}-link`}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item ${
            pathname.includes(link) ? "active" : "text-danger"
          } border border-0 mb-4`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CoursesNavigation;
