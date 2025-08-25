import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="contaner">
        <div className="row">
          <div className="col-lg">
            <h2>
              <Link className="logo" to="/">
                ZOBAA 旅遊網站
              </Link>
            </h2>
            <ul className="nav justify-content-center fs-md-7">
              <li className="nav-item mb-2 mb-xl-0">
                <Link
                  to="/"
                  className="nav-link link-primary px-md-6"
                  aria-current="page"
                >
                  常見問題
                </Link>
              </li>
              <li className="nav-item mb-2 mb-xl-0">
                <Link to="/" className="nav-link link-primary px-md-6">
                  關於我們
                </Link>
              </li>
              <li className="nav-item mb-2 mb-xl-0">
                <Link to="/" className="nav-link link-primary px-md-6">
                  隱私權政策
                </Link>
              </li>
              <li className="nav-item mb-2 mb-xl-0">
                <Link to="/" className="nav-link link-primary px-md-6">
                  使用者條款
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <ul>
              <li>
                <a href="https://www.line.me/tw/ ">
                  <span className="icon icon-line"></span>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <span className="icon icon-yt"></span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <span className="icon icon-fb"></span>
                </a>
              </li>
            </ul>
            <p className="text-white">
              copyright © 2025 ZOBAA 旅遊網站 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
