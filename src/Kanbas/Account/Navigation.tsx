import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) =>
    pathname.includes(path) ? "active" : "text-danger";
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${active(link)} border border-0 mb-3`}
        >
          {link}
        </Link>
      ))}

      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")} border border-0 mb-3`}
        >
          Users
        </Link>
      )}
    </div>
  );
}

export default AccountNavigation;
