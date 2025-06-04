import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import imgMdHero from "@/assets/mobile/index/Hero Section.png";
import imgLgHero from "@/assets/desktop/index/Hero Section.png";


export default function Header() {
  const [title, setTitle] = useState('Alyse Wang');
  const [ isIndex, setIsIndex ] = useState(true);
  const { pathname:nowPath } = useLocation();
  console.log(nowPath);

  useEffect(() => {
    if ( title !== '/' ) {
      setTitle('BLOG');
      setIsIndex(false);
    }
  })


  return (
    <header>
      <div className="sm:flex lg:h-[834px]">
      <picture className="sm:w-1/2">
        <source
          media="(min-width: 992px)"
          srcSet={imgLgHero}
        />
        <img
          className="h-[375px] w-full object-cover object-center lg:h-full"
          src={imgMdHero}
          alt="個人照片banner"
        />
      </picture>
      <div className={`bg-[url(@/assets/mobile/index/Hero%20Section2.png)] bg-cover bg-center p-6 text-primary md:bg-[url(@/assets/desktop/index/Hero%20Section2.png)] sm:w-1/2 sm:grid lg:pl-20 ${isIndex ? 'pb-40' : ''}`}>
        <h1 className="mb-3 text-52 font-black lg:text-120 sm:mt-auto">{title}</h1>
        <h2 className="text-28 font-bold sm:mb-auto">前端工程師 & 職涯諮詢師</h2>
      </div>
      </div>
      <div className={`${isIndex ? 'mx-3 mt-[-120px] px-6 py-10 bg-white text-2xl font-medium' : 'hidden'}`}>
        <p className="mb-2">
          嗨，我是<span className="inline-block ml-2">Alyse</span>
        </p>
        <p className="mb-4">一名深耕前端技術的工程師。</p>
        <p className="mb-4">
          擅長 React、Vue
          等框架，同時熱愛為轉職與新手工程師提供職涯指導。邀請你與我一起，開啟更具潛能的程式與職涯之旅！
        </p>
        <nav>
          <ul className="flex">
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <i className="icon icon-lg icon-yt"></i>
              </a>
            </li>
            <li>
              <a href="https://podcasters.apple.com/zh-tw" target="_blank">
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
    </header>
  );
}