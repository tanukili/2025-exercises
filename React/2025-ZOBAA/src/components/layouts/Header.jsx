import { Link, useMatch } from "react-router-dom";
import avartUrl from "/user/avatar-1.png";
import profileIcon from "/icon/ic_profile.svg";

export default function Header() {
  const isLogin = !!useMatch("member/:memberId/*");

  const loginTemplate = () => {
    if (isLogin) {
      return (
        <Link
          className="d-flex align-items-center fw-medium fs-8 lh-sm tracking-normal fs-md-7"
          to="fakeId/account"
        >
          <img
            className="rounded-circle me-2"
            src={avartUrl}
            alt="會員頭像"
            width={44}
          />
          Jessica
        </Link>
      );
    }
    return (
      <Link to="auth/login" className="btn btn-sm btn-outline-primary fs-md-7">
        登入/註冊
      </Link>
    );
  };

  const OffcanvasAvart = () => {
    return (
      <div className="d-flex align-items-center fw-medium fs-8 lh-sm tracking-normal fs-md-7">
        <img
          className="rounded-circle me-2"
          src={isLogin ? avartUrl : profileIcon}
          alt="會員頭像"
          width={isLogin ? 32 : 24}
        />
        <span>
          <p>{isLogin ? "Jessica" : "訪客"}</p>
          <p>{isLogin ? "jessica.yen@gamil.com" : "未登入"}</p>
        </span>
      </div>
    );
  };

  return (
    <header className="bg-white">
      <nav className="navbar navbar-expand-lg container py-md-3">
        <div className="container-fluid">
          <Link className="logo" to="/">
            ZOBAA 旅遊網站
          </Link>
          <form className="d-none d-lg-block" role="search">
            <div>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
          <button className="btn d-lg-none" type="button">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
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
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="headerNavbar"
            aria-labelledby="headerNavbarLabel"
          >
            <div className="offcanvas-header pb-4">
              <OffcanvasAvart />
              <button
                type="button"
                className="btn btn-outline-primary border-0 p-13 ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <span className="material-symbols-outlined d-block">close</span>
              </button>
            </div>
            <div className="offcanvas-body d-lg-none">
              {!isLogin || (
                <ul className="navbar-nav flex-grow-1 fs-8 fs-md-7 justify-content-md-center">
                  <li className="fakeId/orders">
                    <Link
                      to="/plans"
                      className="nav-link link-primary py-4 py-md-2 px-md-6"
                      aria-current="page"
                    >
                      <span className="material-symbols-outlined">article</span>
                      訂單管理
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="fakeId/favorites"
                      className="nav-link link-primary py-4 py-md-2 px-md-6"
                    >
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                      我的收藏
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="fakeId/account"
                      className="nav-link link-primary py-4 py-md-2 px-md-6"
                    >
                      <span className="icon icon-setting"></span>
                      帳號設定
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link link-primary py-4 py-md-2 px-md-6"
                    >
                      <span className="icon icon-logout"></span>
                      登出
                    </Link>
                  </li>
                </ul>
              )}
              {isLogin || (
                <>
                  <h3>歡迎來到 ZOBAA</h3>
                  <p>加入會員即可立即訂購、收藏行程，並享相關優惠好禮。</p>
                  <Link
                    to="auth/login"
                    className="btn btn-sm btn-secondary fs-5 fw-bold lh-sm"
                  >
                    登入/註冊
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="ms-auto me-3 d-none d-lg-block">
            {loginTemplate()}
          </div>
        </div>
      </nav>
    </header>
  );
}
