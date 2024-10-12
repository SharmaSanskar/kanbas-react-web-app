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
      {/* <Link
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        className="list-group-item active border border-0"
      >
        Home
      </Link>
      <br />
      <Link
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        className="list-group-item text-danger border border-0"
      >
        Modules
      </Link>
      <br />
      <Link
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        className="list-group-item text-danger border border-0"
      >
        Piazza
      </Link>
      <br />
      <Link
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        className="list-group-item text-danger border border-0"
      >
        Zoom
      </Link>
      <br />
      <Link
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Assignments"
        className="list-group-item text-danger border border-0"
      >
        Assignments
      </Link>
      <br />
      <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className="list-group-item text-danger border border-0"
      >
        Quizzes
      </Link>
      <br />
      <Link
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        className="list-group-item text-danger border border-0"
      >
        Grades
      </Link>
      <br />
      <Link
        id="wd-course-people-link"
        to="/Kanbas/Courses/1234/People"
        className="list-group-item text-danger border border-0"
      >
        People
      </Link>
      <br /> */}
    </div>
  );
}

export default CoursesNavigation;
