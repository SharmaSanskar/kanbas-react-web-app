import { Link } from "react-router-dom";

function TOC() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Labs">Labs</Link>
        </li>
        <li>
          <Link to="/Labs/Lab1">Lab 1</Link>
        </li>
        <li>
          <Link to="/Labs/Lab2">Lab 2</Link>
        </li>
        <li>
          <Link to="/Labs/Lab3">Lab 3</Link>
        </li>
        <li>
          <Link to="/Kanbas">Kanbas</Link>
        </li>
        <li>
          <a
            id="wd-github"
            href="https://github.com/SharmaSanskar/kanbas-react-web-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TOC;
