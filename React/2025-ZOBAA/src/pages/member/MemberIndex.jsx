import { Outlet, NavLink } from "react-router-dom";

export default function MemberIndex() {
  return (
    <>
      <h1>我是會員 layout</h1>
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <NavLink
            to="account"
            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
            aria-current="page"
          >
            我的帳號
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink
            to="orders"
            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
          >
            訂單管理
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink
            to="favorites"
            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
          >
            我的收藏
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
