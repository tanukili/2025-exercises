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

  // 社群平台資料抽離
  const snsList = [
    {
      name: "Youtube",
      subtitle: "職涯諮詢室",
      iconClass: "icon-yt",
      link: "https://www.youtube.com",
    },
    {
      name: "podcast",
      subtitle: "職涯諮詢室",
      iconClass: "icon-podcast",
      link: "https://podcasters.apple.com/zh-tw",
    },
    {
      name: "Facebook",
      subtitle: "前端社群",
      iconClass: "icon-fb",
      link: "https://www.facebook.com/",
    },
    {
      name: "linkedin",
      subtitle: "職涯交流",
      iconClass: "icon-linkedin",
      link: "https://www.linkedin.com/",
    },
    {
      name: "Instagram",
      subtitle: "日常分享",
      iconClass: "icon-ig",
      link: "https://www.instagram.com/",
    },
  ];

  const snsListItems = snsList.map((sns) => {
    return (
      <li className={isIndex ? "border-b pb-5" : ""}>
        <a
          className="flex items-center mb-2"
          href={sns.link}
          target="_blank"
        >
          <i className={`icon icon-lg ${sns.iconClass}`}></i>
          <span className={isIndex ? "ml-2" : "hidden"}>
            <span className="mr-2">{sns.name}</span>{sns.subtitle}
          </span>
        </a>
        <i className={ isIndex ? "icon icon-arrow-right mt-2" : "hidden"}></i>
      </li>
    );
  });

  return (
    <footer className="border-t border-secondary">
      <section
        className={`justify-between py-16 lg:py-20 lg:flex lg:mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-1296 ${
          isIndex ? "px-3 border-b border-secondary" : "hidden"
        }`}
      >
        <h2 className={isIndex ? "mb-6 text-5xl font-bold" : "hidden"}>
          與我聯繫
        </h2>
        <a
          className={`text-32 hover:text-primary ${isIndex ? "hidden" : ""}`}
          href="mailto:alysewang@hexschool.com"
        >
          alysewang@hexschool.com
        </a>
        <nav>
          <ul
            className={`flex gap-x-1  ${
              isIndex ? "flex-col text-2xl gap-y-6" : ""
            }`}
          >
            <li className={isIndex ? "border-b pb-4 mb-1" : "hidden"}>
              <a
                className={`hover:text-primary ${isIndex ? "underline" : ""}`}
                href="mailto:alysewang@hexschool.com"
              >
                alysewang@hexschool.com
              </a>
              <span className="block my-2">合作洽談</span>
              <i className="icon icon-arrow-right"></i>
            </li>
            {snsListItems}
          </ul>
        </nav>
      </section>
      <p className="py-6 text-center">
        © 2025 Alyse Wang. All rights reserved.
      </p>
    </footer>
  );
}
