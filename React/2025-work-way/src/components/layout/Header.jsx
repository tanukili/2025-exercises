import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>我是表頭</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy-policy">PrivacyPolicy</Link>
          </li>
          <li>
            <Link to="/terms-of-service">TermsOfService</Link>
          </li>
          <li>
            <Link to="/member/fakeId">Member</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
