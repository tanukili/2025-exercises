import { Link, useMatch } from "react-router-dom";
import avartUrl from "/avatar.png";

export default function Header() {
  const isLogin = !!useMatch("member/:memberId/*");

  const loginTemplate = () => {
    if (isLogin) {
      return (
        <Link
          className="d-flex align-items-center fw-medium fs-8 lh-sm tracking-normal fs-md-7"
          to="member/fakeId/profile"
        >
          <img
            className="rounded-circle me-2"
            src={avartUrl}
            alt="會員頭像"
            width={44}
          />
          Mokumaru
        </Link>
      );
    }
    return (
      <Link
        to="member/fakeId/profile"
        className="btn btn-sm btn-outline-primary fs-md-7"
      >
        登入/註冊
      </Link>
    );
  };

  return (
    <header className="bg-white">
      <nav className="navbar navbar-expand-lg container py-md-3">
        <div className="container-fluid">
          <Link className="logo" to="/">
            職旅 WorkWay
          </Link>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="headerNavbar"
            aria-labelledby="headerNavbarLabel"
          >
            <div className="offcanvas-header pb-4">
              <button
                type="button"
                className="btn btn-outline-primary border-0 p-13 ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <span className="material-symbols-outlined d-block">close</span>
              </button>
            </div>
            <div className="offcanvas-body text-center pt-0 d-flex flex-column justify-content-between">
              <ul className="navbar-nav flex-grow-1 fs-8 fs-md-7 justify-content-md-center">
                <li className="nav-item">
                  <Link
                    to="/plans"
                    className="nav-link link-primary py-4 py-md-2 px-md-6"
                    aria-current="page"
                  >
                    服務方案
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link link-primary py-4 py-md-2 px-md-6"
                  >
                    關於職旅
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link link-primary py-4 py-md-2 px-md-6"
                  >
                    聯絡我們
                  </Link>
                </li>
              </ul>
              {isLogin || (
                <Link
                  to="member/fakeId/profile"
                  className="btn btn-sm btn-secondary fs-5 fw-bold lh-sm d-md-none"
                >
                  登入/註冊
                </Link>
              )}
            </div>
          </div>
          <div className="ms-auto me-3">{loginTemplate()}</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#headerNavbar"
            aria-controls="headerNavbar"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined d-block">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
