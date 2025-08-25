import { Link } from "react-router-dom";

export default function Destinations() {
  const categoryList = [
    { title: "交通優惠", coverUrl: "location/category-1.svg", num: 20 },
    { title: "一日遊", coverUrl: "location/category-2.svg", num: 50 },
    { title: "景點門票", coverUrl: "location/category-3.svg", num: 70 },
    { title: "美食餐廳", coverUrl: "location/category-4.svg", num: 80 },
  ];
  const locationList = [
    {
      title: "環球影城超值一日遊｜哈利波特園區＋快速通關體驗",
      coverUrl: "location/top-1.png",
      tags: ["即買即用", "5 天前可免費取消"],
      price: 5480,
      originPrice: 6200,
      rating: 4.8,
      ratingNum: 1029,
      bookingNum: 1000,
    },
    {
      title: "奈良梅花鹿餵食體驗＋和服散策｜日式風情輕旅行",
      coverUrl: "location/top-2.png",
      tags: ["中文導覽", "5 天前可免費取消"],
      price: 2250,
      originPrice: 2800,
      rating: 4.7,
      ratingNum: 880,
      bookingNum: 900,
    },
    {
      title: "黑門市場美食巡禮｜在地職人帶路吃遍大阪經典小吃",
      coverUrl: "location/top-3.png",
      tags: ["專業導覽", "5 天前可免費取消"],
      price: 1580,
      originPrice: 2500,
      rating: 4.6,
      ratingNum: 540,
      bookingNum: 700,
    },
    {
      title: "大阪夜景直升機體驗｜空中俯瞰梅田摩天輪＋海遊館",
      coverUrl: "location/top-4.png",
      tags: ["即買即用", "7 天前可免費取消"],
      price: 6890,
      originPrice: 8890,
      rating: 4.7,
      ratingNum: 319,
      bookingNum: 600,
    },
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
          <div className="card">
            <img src={coverUrl} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{num}+ 種選擇</p>
            </div>
          </div>
        </div>
      );
    });
  };

  const PickupCards = () => {
    const TagBadges = (tags) => {
      return tags.map((tag) => {
        return <span className="badge bg-primary">{tag}</span>;
      });
    };

    return locationList.map(
      ({
        title,
        coverUrl,
        tags,
        originPrice,
        price,
        rating,
        ratingNum,
        bookingNum,
      }) => {
        return (
          <div className="col-3" key={title}>
            <div className="card">
              <figure className="position-relative">
                <img src={coverUrl} className="card-img-top" alt={title} />
                <span class="material-symbols-outlined position-absolute top-0 end-0">
                  favorite
                </span>
              </figure>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div>{TagBadges(tags)}</div>
                <div className="d-flex">
                  <p>
                    <span class="material-symbols-outlined symbols-fill">
                      star
                    </span>
                    <span>{rating}</span>
                    <span>({ratingNum})</span>
                  </p>
                  <p className="card-text">{bookingNum}+ 個已訂購</p>
                </div>
              </div>
              <div className="card-footer">
                <p>NT$ {price}</p>
                <p className="text-decoration-line-through">
                  NT$ {originPrice}
                </p>
              </div>
            </div>
          </div>
        );
      },
    );
  };

  const GuideCards = () => {
    const TagBadges = (tags) => {
      return tags.map((tag) => {
        return <span className="badge bg-primary">#{tag}</span>;
      });
    };

    return guideList.map(({ title, coverUrl, tags, description }) => {
      return (
        <div className="card">
          <div className="row">
            <div className="col-md-5">
              <img className="rounded-4" src={coverUrl} alt={title} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div>{TagBadges(tags)}</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="/tour-detail">
                  查看文章
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <main>
      <nav className="container" aria-label="breadcrumb">
        <ol className="breadcrumb">
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
      <section className="container">
        <h2>大阪</h2>
        <p>
          大阪，一座融合傳統與現代的城市，擁有豐富的歷史文化、熱鬧的購物街區與世界知名的美食天堂。從氣派的大阪城到霓虹閃爍的道頓堀，每一處都充滿驚喜。無論是第一次造訪，還是再次回味，大阪總能用它的熱情與魅力，讓你留下難忘回憶。
        </p>
        <div>
          <figure className="row">
            <div className="col">
              <img src="location/osaka-1.png" alt="大阪景點01" />
            </div>
            <div className="col d-none d-md-block">
              <div className="row">
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
          </figure>
          <button className="btn btn-white" type="button">
            查看更多
          </button>
        </div>
      </section>
      <section className="container">
        <h2>想怎麼玩大阪？熱門分類快速選！</h2>
        <div className="row">
          <CategoryCards />
        </div>
      </section>
      <section className="container">
        <h2>大阪 TOP 10!</h2>
        <div className="row">
          <PickupCards />
        </div>
      </section>
      <section className="container">
        <h2>來自 ZOBAA 的大阪推薦</h2>
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
        <div className="row">
          <PickupCards />
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container">
          <div className="d-flex">
            <h2>
              <span>旅人攻略</span>
              <span>看看大家怎麼玩！</span>
            </h2>
            <p>跟著他們的腳步走，找到屬於你的旅行意義。</p>
          </div>
          <GuideCards />
        </div>
      </section>
    </main>
  );
}
