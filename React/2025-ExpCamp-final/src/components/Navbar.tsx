import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex justify-center text-28 py-1">
        <li>
          <Link to="/" className="block py-5 px-4 mx-1 font-bold">
            首頁
          </Link>
        </li>
        <li>
          <Link to="/blog" className="block py-5 px-4 mx-1 font-bold">
            部落格
          </Link>
        </li>
      </ul>
    </nav>
  );
}
