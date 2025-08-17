import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
          >
            職旅 WorkWay
          </Link>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="headerNavbar"
            aria-labelledby="headerNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/plans"
                    className="nav-link"
                    aria-current="page"
                  >
                    服務方案
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link"
                  >
                    關於職旅
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link"
                  >
                    聯絡我們
                  </Link>
                </li>
              </ul>
              <Link
                to="/member/fakeId"
                className="d-lg-none btn btn-outline-secondary"              >
                登入/註冊
              </Link>
              <Link className='d-none d-lg-block' to="/member/123">
                <img src="avatar_default.png" alt="會員頭像" width={44}  />
                Mokumaru
              </Link>
            </div>
          </div>
          <Link
                to="/member/fakeId"

            className="btn btn-outline-secondary"
          >
            登入/註冊
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#headerNavbar"
            aria-controls="headerNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  )
}
