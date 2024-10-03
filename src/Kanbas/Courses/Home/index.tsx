import Modules from "../Modules";
import CourseStatus from "./Status";

function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-lg-block ms-4">
        <CourseStatus />
      </div>
    </div>
  );
}

export default Home;
