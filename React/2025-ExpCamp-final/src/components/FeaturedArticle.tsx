import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import coverUrl from "/mobile/blog/About Section.png";
import coverUrlLg from "/desktop/blog/About Section.png";

export default function FeaturedArticle() {
  const { pathname: nowPath } = useLocation();
  const [isBlog, setIsBlog] = useState(false);

  useEffect(() => {
    if (nowPath === "/blog") {
      setIsBlog(true);
    } else {
      setIsBlog(false);
    }
  }, [nowPath]);

  // 模擬遠端資料
  const featuredArticle = {
    id: "mw4kt3dy",
    coverUrl,
    coverUrlLg,
    timestamp: 1729440000000,
    tags: ["轉職工程師", "學習心法"],
    isPopular: false,
    title: "自學前端不用怕：從零開始的三大關鍵",
    subtitle: "前端開發 x 職涯成長",
    description:
      "嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！",
  };

  // composable
  const formatDate = (timestamp: number) => {
    const date: string = new Date(timestamp).toLocaleDateString("en-CA");
    return date.replaceAll("-", "/");
  };

  return (
    <section className="sm:flex lg:h-[640px]">
      <picture className="block sm:w-1/2 md:pr-3 md:-mr-3">
        <source
          media="(min-width: 992px)"
          srcSet={featuredArticle.coverUrlLg}
        />
        <img
          className="w-full h-full object-cover object-center"
          src={featuredArticle.coverUrl}
          alt={featuredArticle.title}
        />
      </picture>
      <div className="border-b-2 border-secondary md:grow md:grid">
        <div className="px-3 py-12 md:place-self-center sm:max-w-sm lg:ml-3 lg:pr-0 lg:max-w-md xl:max-w-648 sm:mr-auto">
          <time className="block text-black mb-1">
            {formatDate(featuredArticle.timestamp)}
          </time>
          <div className="flex items-center mb-2">
            <h3 className="text-2xl text-primary">
              {featuredArticle.subtitle}
            </h3>
            <span className="inline-block px-3 py-1.5 rounded-full ml-2 font-bold bg-primary text-white">
              最新文章
            </span>
          </div>
          <h2 className="text-28 font-bold">{featuredArticle.title}</h2>
          {isBlog && (
            <>
              <p className="mt-2 mb-4 line-clamp-2">
                {featuredArticle.description}
              </p>
              <Link
                to={`/blog/${featuredArticle.id}`}
                className="btn-outline inline-block text-slate-750 lg:mr-auto"
                type="button"
              >
                閱讀內文
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
