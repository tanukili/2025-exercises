import { Outlet, NavLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>我是登入註冊 layout</h1>
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <NavLink
            to="/member/fakeId"
            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
            aria-current="page"
          >
            登入
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink
            to="sign-up"
            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
          >
            註冊
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
