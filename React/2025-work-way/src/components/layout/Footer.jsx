import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container text-center py-4">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="plans" className="nav-link" aria-current="page">
            服務方案
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link">
            關於職旅
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-link">
            聯絡我們
          </Link>
        </li>
        <li className="nav-item">
          <Link to="privacy-policy" className="nav-link">
            隱私權政策
          </Link>
        </li>
        <li className="nav-item">
          <Link to="terms-of-service" className="nav-link">
            用戶條款
          </Link>
        </li>
      </ul>
      <p className="text-secondary">
        Copyright © 2025 職旅 workway. All rights reserved.
      </p>
    </footer>
  );
}
