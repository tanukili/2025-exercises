import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-top border-linear text-center bg-natural-95 py-6 fs-8 py-xl-9">
      <div className="container d-xl-flex">
        <ul className="nav justify-content-center fs-md-7">
          <li className="nav-item mb-2 mb-xl-0">
            <Link
              to="plans"
              className="nav-link link-primary px-md-6"
              aria-current="page"
            >
              服務方案
            </Link>
          </li>
          <li className="nav-item mb-2 mb-xl-0">
            <Link to="about" className="nav-link link-primary px-md-6">
              關於職旅
            </Link>
          </li>
          <li className="nav-item mb-2 mb-xl-0">
            <Link to="contact" className="nav-link link-primary px-md-6">
              聯絡我們
            </Link>
          </li>
          <li className="nav-item mb-2 mb-xl-0">
            <Link to="privacy-policy" className="nav-link link-primary px-md-6">
              隱私權政策
            </Link>
          </li>
          <li className="nav-item mb-2 mb-xl-0">
            <Link
              to="terms-of-service"
              className="nav-link link-primary px-md-6"
            >
              用戶條款
            </Link>
          </li>
        </ul>
        <p
          className="text-natural-50 mb-0 ms-lg-auto"
          style={{ lineHeight: "40px" }}
        >
          Copyright © 2025 職旅 workway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
