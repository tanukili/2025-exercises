import { Link, useMatch } from "react-router-dom";
import avartUrl from "/user/avatar-1.png";
import profileIcon from "/icon/ic_profile.svg";

export default function Header() {
  const isLogin = !!useMatch("member/:memberId/*");

  const loginTemplate = () => {
    if (isLogin) {
      return (
        <Link className="d-flex align-items-center fw-bold" to="fakeId/account">
          <img
            className="rounded-circle me-2"
            src={avartUrl}
            alt="會員頭像"
            width="32"
          />
          Jessica
        </Link>
      );
    }
    return (
      <Link to="auth/login" className="btn btn-primary py-lg-4 px-lg-8">
        登入 / 註冊
      </Link>
    );
  };

  const OffcanvasAvart = () => {
    return (
      <div className="d-flex align-items-center justify-content-start pb-4">
        {isLogin ? (
          <img
            className="rounded-circle"
            src={avartUrl}
            alt="會員頭像"
            width="32"
          />
        ) : (
          <div className=" bg-primary-40 rounded-circle p-1">
            <img src={profileIcon} alt="預設頭像" width="24" />
          </div>
        )}
        <div className="ms-2">
          <p className="fw-bold text-primary">{isLogin ? "Jessica" : "訪客"}</p>
          <p className="">{isLogin ? "jessica.yen@gamil.com" : "未登入"}</p>
        </div>
      </div>
    );
  };

  return (
    <header className="w-100 bg-white">
      <nav className="navbar navbar-expand-lg py-lg-4 text-neutral-80">
        <div className="container-fluid">
          <div className="w-50 d-flex align-items-center">
            <Link className="logo me-auto me-lg-6" to="/">
              ZOBAA 旅遊網站
            </Link>
            <form className="d-none flex-grow-1 me-11 d-lg-block" role="search">
              <div className="position-relative">
                <input
                  className="form-control ps-10"
                  type="search"
                  placeholder="搜尋景點、地點或城市"
                  aria-label="Search"
                  name="search"
                  id="search"
                />
                <span className="material-symbols-outlined position-absolute start-6 top-50 translate-middle text-neutral-60">
                  search
                </span>
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn p-0 d-lg-none" type="button">
              <span className="material-symbols-outlined  m-2">search</span>
            </button>
            <Link className="position-relative lh-1 me-lg-4" to="/cart">
              <span className="material-symbols-outlined my-2 mx-3 text-neutral-80">
                shopping_cart
              </span>
              {isLogin && (
                <span class="badge-circle position-absolute top-1 end-2 bg-danger text-white ">
                  2
                </span>
              )}
            </Link>
            <div className="ms-auto me-3 d-none d-lg-block">
              {loginTemplate()}
            </div>
            <button
              className="navbar-toggler border-0"
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
              <div className="offcanvas-header flex-column pb-0">
                <button
                  type="button"
                  className="btn btn-outline-primary border-0 p-0 ms-auto mb-4"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <span className="material-symbols-outlined d-block">
                    close
                  </span>
                </button>
                <div className="w-100 border-bottom">
                  <OffcanvasAvart />
                </div>
              </div>
              <div
                className={`offcanvas-body d-flex flex-column d-lg-none ${!isLogin || "pt-4"}`}
              >
                {!isLogin || (
                  <ul className="navbar-nav flex-grow-1 justify-content-md-center fs-8">
                    <li className="fakeId/orders">
                      <Link
                        to="/plans"
                        className="nav-link link-primary d-flex align-items-center py-3"
                        aria-current="page"
                      >
                        <span className="icon icon-order me-2"></span>
                        訂單管理
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="fakeId/favorites"
                        className="nav-link link-primary d-flex align-items-center py-3"
                      >
                        <span className="material-symbols-outlined me-2">
                          favorite
                        </span>
                        我的收藏
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="fakeId/account"
                        className="nav-link link-primary d-flex align-items-center py-3"
                      >
                        <span className="icon icon-setting  me-2"></span>
                        帳號設定
                      </Link>
                    </li>
                    <li className="nav-item mt-auto fs-7">
                      <Link
                        to="/"
                        className="nav-link link-primary d-flex align-items-center py-3"
                      >
                        <span className="icon icon-logout me-2"></span>
                        登出
                      </Link>
                    </li>
                  </ul>
                )}
                {isLogin || (
                  <>
                    <h3 className="fs-6">歡迎來到 ZOBAA</h3>
                    <p>加入會員即可立即訂購、收藏行程，並享相關優惠好禮。</p>
                    <Link to="auth/login" className="btn btn-primary mt-auto">
                      登入 / 註冊
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
