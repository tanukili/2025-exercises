import { Outlet, NavLink } from "react-router-dom";

export default function MemberIndex() {
  return (
    <div>
      <h1>我是會員主頁</h1>
      <nav>
        <li>
          <NavLink to="">profile</NavLink>
        </li>
        <li>
          <NavLink to="booking-history">booking-history</NavLink>
        </li>
        <li>
          <NavLink to="career-planning">career-planning</NavLink>
        </li>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
