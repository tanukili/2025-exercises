import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-top-linear text-center bg-natural-95 py-6 fs-8 fs-md-7">
      <div className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item mb-2">
            <Link
              to="plans"
              className="nav-link link-primary"
              aria-current="page"
            >
              服務方案
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="about" className="nav-link link-primary">
              關於職旅
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="contact" className="nav-link link-primary">
              聯絡我們
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="privacy-policy" className="nav-link link-primary">
              隱私權政策
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="terms-of-service" className="nav-link link-primary">
              用戶條款
            </Link>
          </li>
        </ul>
        <p className="text-natural-50 mb-0">
          Copyright © 2025 職旅 workway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
