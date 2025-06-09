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

  // swiper 可視範圍控制

  const snsListItems = snsList.map((sns, index) => {
    return (
      <li className={isIndex ? "border-b pb-5 sm:flex" : ""}>
        <a
          className="flex items-center mb-2 hover:text-primary sm:mb-0"
          href={sns.link}
          target="_blank"
        >
          <i className={`icon icon-lg ${sns.iconClass} xl:mr-2`}></i>
          <span className={isIndex ? "ml-2" : "hidden"}>
            <span className={`mr-2 ${index % 2 || index === 4 ? 'sm:mr-4': ''}`}>{sns.name}</span>{sns.subtitle}
          </span>
        </a>
        <i className={ isIndex ? "icon icon-arrow-right mt-2 sm:mt-2.5 sm:ml-auto" : "hidden"}></i>
      </li>
    );
  });

  return (
    <footer className="border-t border-secondary">
      <section
        className={`py-16 lg:py-20 lg:mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-1296 ${
          isIndex ? "px-3 lg:px-0" : "hidden justify-between lg:flex"
        }`}
      >
        <h2 className={isIndex ? "mb-6 text-5xl font-bold xl:text-64" : "hidden"}>
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
              isIndex ? "flex-col text-2xl gap-y-6 xl:text-28 xl:gap-y-4" : ""
            }`}
          >
            <li className={isIndex ? "border-b pb-4 mb-1 sm:flex sm:mb-0" : "hidden"}>
              <a
                className=" underline hover:text-primary xl:text-32"
                href="mailto:alysewang@hexschool.com"
              >
                alysewang@hexschool.com
              </a>
              <span className="block my-2 sm:ml-4 sm:my-0">合作洽談</span>
              <i className="icon icon-arrow-right sm:ml-auto sm:mt-2.5"></i>
            </li>
            {snsListItems}
          </ul>
        </nav>
      </section>
      <p className="py-6 border-t border-secondary text-center">
        © 2025 Alyse Wang. All rights reserved.
      </p>
    </footer>
  );
}
