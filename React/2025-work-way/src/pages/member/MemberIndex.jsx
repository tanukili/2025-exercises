import { Outlet, NavLink } from 'react-router-dom'

export default function MemberIndex() {
    return (
        <div className="bg-natural-95 py-9 py-md-12">
            <div className="container">
                <ul className="nav nav-pills justify-content-center mb-4 mb-md-6">
                    <li className="nav-item">
                        <NavLink
                            to="profile"
                            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center fs-md-7 px-md-5"
                            aria-current="page"
                        >
                            <span className="material-symbols-outlined fs-5 me-md-1">face</span>
                            個人資料
                        </NavLink>
                    </li>
                    <li className="nav-item mx-4 mx-md-6">
                        <NavLink
                            to="booking-history"
                            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center fs-md-7 px-md-5"
                        >
                            <span className="material-symbols-outlined fs-5 me-md-1">pending_actions</span>
                            預約紀錄
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="career-planning"
                            className="btn btn-sm btn-outline-primary p-3 d-flex align-items-center fs-md-7 px-md-5"
                        >
                            <span className="material-symbols-outlined fs-5 me-md-1">list_alt</span>
                            職旅計劃
                        </NavLink>
                    </li>
                </ul>
                <div className="row justify-content-center">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
