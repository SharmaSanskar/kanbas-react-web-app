import { BsGripVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { LuFileEdit } from "react-icons/lu";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";

function Assignments() {
  return (
    <div id="wd-assignments" className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group me-2 w-50">
          <span className="input-group-text">
            <BiSearch />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div className="d-flex">
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary me-2"
          >
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            + Assignment
          </button>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between bg-secondary p-3 ps-1 border border-dark">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <h3 id="wd-assignments-title" className="fs-4 m-0">
            ASSIGNMENTS
          </h3>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn btn-secondary rounded-pill border border-dark me-2">
            40% of Total
          </button>
          <button className="border-0 me-2 bg-transparent">
            <FaPlus className="fs-4" />
          </button>
          <button className="border-0 bg-transparent">
            <IoEllipsisVertical className="fs-4" />
          </button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <LuFileEdit className="me-2 fs-3 text-success" />
            <div>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A1 - ENV + HTML
              </a>
              <br />
              Multiple Modules | <b>Not available</b> until May 6 at 12:00am |{" "}
              <b>Due</b> May 13 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
          {/* Complete On Your Own */}
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <LuFileEdit className="me-2 fs-3 text-success" />
            <div>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A2 - CSS + BOOTSTRAP
              </a>
              <br />
              Multiple Modules | <b>Not available</b> until May 13 at 12:00am |{" "}
              <b>Due</b> May 20 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <LuFileEdit className="me-2 fs-3 text-success" />
            <div>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A3 - JAVASCRIPT + REACT
              </a>
              <br />
              Multiple Modules | <b>Not available</b> until May 20 at 12:00am |{" "}
              <b>Due</b> May 27 at 11:59pm | 100 pts
            </div>
          </div>
          <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Assignments;
