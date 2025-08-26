import { Link } from "react-router-dom";
import PickupCardsSwiper from "@/components/PickupCardsSwiper";

export default function Destinations() {
  const categoryList = [
    { title: "交通優惠", coverUrl: "location/category-1.svg", num: 20 },
    { title: "一日遊", coverUrl: "location/category-2.svg", num: 50 },
    { title: "景點門票", coverUrl: "location/category-3.svg", num: 70 },
    { title: "美食餐廳", coverUrl: "location/category-4.svg", num: 80 },
  ];

  const guideList = [
    {
      title: "空堀商店街的散步節奏",
      coverUrl: "location/guide-1.png",
      tags: ["大阪", "老街巡禮"],
      description:
        "離開熱鬧難波，走進空堀這座時間凍結的老街，每家店都像一段回憶：木造喫茶、手工小物、安靜的巷弄轉角。這裡沒有觀光氣氛，只有城市最真實的日常樣貌...",
    },
    {
      title: "深夜的章魚燒與便利商店啤酒",
      coverUrl: "location/guide-2.png",
      tags: ["大阪", "庶民美食"],
      description:
        "難波站邊的小巷，有開到凌晨的章魚燒老店。坐在路邊配一罐便利商店啤酒，看路人談天、喝醉、笑鬧，這種庶民感才是我最懷念的大阪味道。",
    },
    {
      title: "一個人在中之島圖書館待一整天",
      coverUrl: "location/guide-3.png",
      tags: ["大阪", "靜態旅行"],
      description:
        "陰天的中之島很安靜，我選擇在百年圖書館裡消磨一整天。閱讀、打盹、寫明信片，從高聳書架與拱形窗邊找到片刻的呼吸空間。不趕行程的日子，才最像我想要的旅途。",
    },
    {
      title: "跟著在地人玩「新世界」",
      coverUrl: "location/guide-4.png",
      tags: ["大阪", "在地文化"],
      description:
        "走進「新世界」，才發現大阪有多狂、有多生活。串炸店裡全是吆喝聲、立吞店排滿上班族，還有拍不完的霓虹與搞笑招牌。這一區又亂又熱鬧，但真實又迷人。",
    },
  ];

  const CategoryCards = () => {
    return categoryList.map(({ title, coverUrl, num }) => {
      return (
        <div className="col-6 col-lg-3" key={title}>
          <div className="card rounded-lg-6">
            <div className="card-img-top bg-tint py-5 text-center  rounded-top-lg-6">
              <picture>
                <source
                  srcSet={coverUrl}
                  width={150}
                  media="(min-width: 992px)"
                />
                <img
                  className="d-inline-block"
                  width={64}
                  src={coverUrl}
                  alt={title}
                />
              </picture>
            </div>
            <div className="card-body p-lg-6">
              <h3 className="card-title fs-7 lh-base fs-lg-6 lh-lg-sm">
                {title}
              </h3>
              <p className="card-text fs-8 fs-lg-7">{num}+ 種選擇</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const GuideCards = () => {
    const TagBadges = (tags) => {
      return tags.map((tag) => {
        return (
          <span className="badge bg-tint text-primary lh-base py-2 px-4 me-2 fs-lg-7">
            #{tag}
          </span>
        );
      });
    };

    return guideList.map(({ title, coverUrl, tags, description }, index) => {
      return (
        <div
          className={`card border-0 rounded-lg-8 ${index !== guideList.length - 1 ? "mb-6" : ""}`}
          key={title}
        >
          <div className="row gx-3">
            <div className="col-md-5">
              <div className="px-4 pt-4 p-lg-8 pe-lg-5">
                <img
                  className="rounded-4 object-cover"
                  src={coverUrl}
                  alt={title}
                  height={232}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="card-body p-lg-8 ps-lg-0">
                <div className="mb-6">{TagBadges(tags)}</div>
                <h3 className="card-title fs-4 fs-lg-2">{title}</h3>
                <p className="mb-10 fs-8 fs-lg-7">{description}</p>
                <Link
                  to="/tour-detail"
                  className="fw-bold d-flex justify-content-lg-end"
                >
                  查看文章
                  <span className="material-symbols-outlined ms-2">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <main className="mt-10 mt-lg-20">
      <nav className="container pt-3" aria-label="breadcrumb">
        <ol className="breadcrumb d-none d-lg-flex">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">日本</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">關西</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            大阪
          </li>
        </ol>
      </nav>
      <section className="container mb-20 mb-lg-40">
        <h2 className="text-black fs-3 mb-2 fs-lg-1">大阪</h2>
        <p className="fs-8 mb-6 fs-lg-7">
          大阪，一座融合傳統與現代的城市，擁有豐富的歷史文化、熱鬧的購物街區與世界知名的美食天堂。從氣派的大阪城到霓虹閃爍的道頓堀，每一處都充滿驚喜。無論是第一次造訪，還是再次回味，大阪總能用它的熱情與魅力，讓你留下難忘回憶。
        </p>
        <div className=" position-relative">
          <div className="destination-album row gx-2">
            <div className="col">
              <img
                className="h-100  rounded-4 rounded-start-lg-6 rounded-end-lg-0"
                src="location/osaka-1.png"
                alt="大阪景點01"
              />
            </div>
            <div className="col-6 d-none d-md-block">
              <div className="row g-2">
                <div className="col-6">
                  <img src="location/osaka-2.png" alt="大阪景點02" />
                </div>
                <div className="col-6">
                  <img src="location/osaka-3.png" alt="大阪景點03" />
                </div>
                <div className="col-6">
                  <img src="location/osaka-4.png" alt="大阪景點04" />
                </div>
                <div className="col-6">
                  <img src="location/osaka-5.png" alt="大阪景點05" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="position-absolute bottom-3 end-3 btn btn-lg btn-white"
            type="button"
          >
            查看更多
          </button>
        </div>
      </section>
      <section className="container mb-20 mb-lg-40">
        <h2 className="fs-3 mb-5 fs-lg-1 mb-lg-10">
          想怎麼玩大阪？
          <br className="d-lg-none" />
          熱門分類快速選！
        </h2>
        <div className="row g-4 gx-lg-6">
          <CategoryCards />
        </div>
      </section>
      <section className="container mb-20 mb-lg-40">
        <h2 className="fs-3 mb-5 fs-lg-1 mb-lg-10">大阪 TOP 10!</h2>
        <PickupCardsSwiper />
      </section>
      <section className="container mb-10 mb-lg-20">
        <h2 className="fs-3 mb-5 fs-lg-1 mb-lg-10">來自 ZOBAA 的大阪推薦</h2>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              觀光行程
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              景點門票
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              交通優惠
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              美食餐廳
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              本月優惠
            </a>
          </li>
        </ul>
        <PickupCardsSwiper />
      </section>
      <section className="bg-tint">
        <div className="container py-10 py-lg-30">
          <div className="d-lg-flex mb-5 mb-lg-20 align-items-center">
            <h2 className="fs-3 d-flex flex-column mb-2 fs-lg-1 mb-lg-0">
              <span className="mb-2">旅人攻略</span>
              <span>看看大家怎麼玩！</span>
            </h2>
            <div className="fw-bold text-primary ms-lg-auto fs-lg-6 lh-lg-sm">
              <p className="mb-2">
                這裡不只是遊記，更是來自旅人親身經歷的風格指南與靈感筆記。
              </p>
              <p>跟著他們的腳步走，找到屬於你的旅行意義。</p>
            </div>
          </div>
          <GuideCards />
        </div>
      </section>
    </main>
  );
}
