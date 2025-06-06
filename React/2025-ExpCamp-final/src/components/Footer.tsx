import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname: nowPath } = useLocation();
  const [isIndex, setIsIndex] = useState(false);

  useEffect(() => {
    if (nowPath === "/") {
      setIsIndex(true);
    } else {
      setIsIndex(false);
    }
  }, [nowPath]);

  return (
    <footer className="border-t border-secondary">
      <section className="hidden justify-between py-20 lg:flex lg:mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-1296">
        <h2 className={isIndex ? "" : "hidden"}>與我聯繫</h2>
        <a
          className={`text-32 hover:text-primary ${isIndex ? "hidden" : ""}`}
          href="mailto:alysewang@hexschool.com"
        >
          alysewang@hexschool.com
        </a>
        <nav>
          <ul className="flex gap-x-1">
            <li className={isIndex ? "" : "hidden"}>
              <a
                className="text-32 hover:text-primary"
                href="mailto:alysewang@hexschool.com"
              >
                alysewang@hexschool.com
              </a>
              合作洽談
              <i className="icon icon-arrow-right"></i>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <i className="icon icon-lg icon-yt"></i>
                <span className={isIndex ? "" : "hidden"}>
                  Youtube職涯諮詢室
                  <i className="icon icon-arrow-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://podcasters.apple.com/zh-tw" target="_blank">
                <i className="icon icon-lg icon-podcast"></i>
                <span className={isIndex ? "" : "hidden"}>
                  podcast職涯諮詢室
                  <i className="icon icon-arrow-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="icon icon-lg icon-fb"></i>
                <span className={isIndex ? "" : "hidden"}>
                  Facebook前端社群
                  <i className="icon icon-arrow-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="icon icon-lg icon-linkedin"></i>
                <span className={isIndex ? "" : "hidden"}>
                  linkedin職涯交流
                  <i className="icon icon-arrow-right"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="icon icon-lg icon-ig"></i>
                <span className={isIndex ? "" : "hidden"}>
                  Instagram日常分享
                  <i className="icon icon-arrow-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <p className="py-6 text-center">
        © 2025 Alyse Wang. All rights reserved.
      </p>
    </footer>
  );
}
