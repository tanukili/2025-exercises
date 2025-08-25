import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container py-20 py-lg-25">
        <div className="row align-items-center">
          <div className="col-lg">
            <h2 className="mb-10 mb-lg-8">
              <Link className="logo logo-light" to="/">
                ZOBAA 旅遊網站
              </Link>
            </h2>
            <ul className="nav flex-column align-items-start mb-10 flex-lg-row mb-lg-0">
              <li className="nav-item mb-4 mb-lg-0 me-lg-8">
                <Link
                  to="/"
                  className="nav-link text-white p-0"
                  aria-current="page"
                >
                  常見問題
                </Link>
              </li>
              <li className="nav-item mb-4 mb-lg-0 me-lg-8">
                <Link to="/" className="nav-link text-white p-0">
                  關於我們
                </Link>
              </li>
              <li className="nav-item mb-4 mb-lg-0 me-lg-8">
                <Link to="/" className="nav-link text-white p-0">
                  隱私權政策
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-white p-0">
                  使用者條款
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <ul className="list-unstyled d-flex justify-content-lg-end">
              <li>
                <a href="https://www.line.me/tw/">
                  <span className="icon icon-lg icon-line"></span>
                </a>
              </li>
              <li className="mx-4">
                <a href="https://www.youtube.com">
                  <span className="icon icon-lg icon-yt"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <span className="icon icon-lg icon-fb"></span>
                </a>
              </li>
            </ul>
            <p className="text-neutral-d4 fs-8 text-lg-end">
              copyright © 2025 ZOBAA 旅遊網站 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
