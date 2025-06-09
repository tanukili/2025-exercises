import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import imgMdHero from "/mobile/index/Hero Section.png";
import imgLgHero from "/desktop/index/Hero Section.png";

export default function Header() {
  const [title, setTitle] = useState("Alyse Wang");
  const [isIndex, setIsIndex] = useState(false);
  const { pathname: nowPath } = useLocation();

  // 要記得加上依賴陣列
  useEffect(() => {
    if (nowPath !== "/") {
      setTitle("BLOG");
      setIsIndex(false);
    } else {
      setTitle("Alyse Wang");
      setIsIndex(true);
    }
  }, [nowPath]);

  return (
    <header>
      <div className={`lg:h-[834px] ${isIndex ? "md:flex" : "sm:flex"}`}>
        <picture className="sm:w-1/2">
          <source media="(min-width: 992px)" srcSet={imgLgHero} />
          <img
            className="h-[375px] w-full object-cover object-center lg:h-full"
            src={imgMdHero}
            alt="個人照片banner"
          />
        </picture>
        <div
          className={`bg-[url(/mobile/index/Hero%20Section2.png)] bg-cover bg-center p-6 text-primary md:bg-[url(/desktop/index/Hero%20Section2.png)]  sm:grid lg:pr-0 ${
            isIndex ? "pb-40 md:w-1/2 lg:pl-15 2xl:pl-20" : "sm:w-1/2 lg:pl-20"
          }`}
        >
          <h1
            className={`mb-3 text-52 font-black sm:mt-auto ${
              isIndex ? "lg:text-64 xl:text-8xl 2xl:text-120" : "lg:text-120"
            }`}
          >
            {title}
          </h1>
          <h2 className="text-28 font-bold sm:mb-auto">
            前端工程師 & 職涯諮詢師
          </h2>
        </div>
      </div>
      <div
        className={`${
          isIndex
            ? "-mt-30 relative xl:ml-auto xl:mr-20 lg:-mt-40 xl:max-w-324"
            : "hidden"
        }`}
      >
        <div className="flex xl:-mx-3">
          <div className="px-3 mx-auto xl:ml-auto lg:w-5/6">
            <div className="px-6 py-10 bg-white text-2xl font-medium lg:px-10 lg:py-20 lg:text-28">
              <p className="mb-2 xl:flex xl:mb-0">
                嗨，我是<span className="inline-block mx-2">Alyse</span>
                <span className="mb-4">一名深耕前端技術的工程師。</span>
              </p>
              <p className="mb-4">
                擅長 React、Vue
                等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
              </p>
              <nav>
                <ul className="flex gap-x-1">
                  <li>
                    <a href="https://www.youtube.com" target="_blank">
                      <i className="icon icon-lg icon-yt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://podcasters.apple.com/zh-tw"
                      target="_blank"
                    >
                      <i className="icon icon-lg icon-podcast"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="icon icon-lg icon-fb"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="icon icon-lg icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="icon icon-lg icon-ig"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
