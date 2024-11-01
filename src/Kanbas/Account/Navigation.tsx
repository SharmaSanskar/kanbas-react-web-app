import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${
            pathname.includes(link) ? "active" : "text-danger"
          } active border border-0 mb-3`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default AccountNavigation;
