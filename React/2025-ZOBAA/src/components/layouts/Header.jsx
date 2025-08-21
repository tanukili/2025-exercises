import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <ul className="nav nav-pills justify-content-center mb-4">
      <li className="nav-item">
        <NavLink
          to="/"
          className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
          aria-current="page"
        >
          首頁
        </NavLink>
      </li>
      <li className="nav-item mx-4">
        <NavLink
          to="/destinations"
          className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
        >
          地點搜尋
        </NavLink>
      </li>
      <li className="nav-item mx-4">
        <NavLink
          to="/tour-detail"
          className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
        >
          商片介紹
        </NavLink>
      </li>
      <li className="nav-item mx-4">
        <NavLink
          to="/auth/login"
          className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
        >
          登入與註冊
        </NavLink>
      </li>
      <li className="nav-item mx-4">
        <NavLink
          to="/fakeId/account"
          className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center"
        >
          會員登入
        </NavLink>
      </li>
    </ul>
  );
}
