import { Outlet, NavLink } from "react-router-dom";

export default function MemberIndex() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <ul className="nav nav-pills justify-content-center mb-3 ">
          <li className="nav-item">
            <NavLink to="profile" className="nav-link d-flex align-items-center" aria-current="page">
              <span class="material-symbols-outlined">face</span>個人資料
            </NavLink>
          </li>
          <li className="nav-item mx-4">
            <NavLink to="booking-history" className="nav-link d-flex align-items-center">
              <span class="material-symbols-outlined">pending_actions</span>
              預約紀錄
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="career-planning" className="nav-link d-flex align-items-center">
              <span class="material-symbols-outlined">list_alt</span>職旅計劃
            </NavLink>
          </li>
        </ul>
      <div className="row bg-white rounded-4 shadow">
        <Outlet />
      </div>
      </div>
    </div>
  );
}
