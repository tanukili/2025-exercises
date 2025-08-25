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
      coverUrl: "location/top-1.svg",
      tags: ["即買即用", "5 天前可免費取消"],
      price: 5480,
      star: 4.8,
      commentNum: 1029,
      bookingNum: 1000,
    },
    {
      title: "奈良梅花鹿餵食體驗＋和服散策｜日式風情輕旅行",
      coverUrl: "location/top-2.svg",
      tags: ["中文導覽", "5 天前可免費取消"],
      price: 2250,
      star: 4.7,
      commentNum: 880,
      bookingNum: 900,
    },
    {
      title: "黑門市場美食巡禮｜在地職人帶路吃遍大阪經典小吃",
      coverUrl: "location/top-3.svg",
      tags: ["專業導覽", "5 天前可免費取消"],
      price: 1580,
      star: 4.6,
      commentNum: 540,
      bookingNum: 700,
    },
    {
      title: "大阪夜景直升機體驗｜空中俯瞰梅田摩天輪＋海遊館",
      coverUrl: "location/top-4.svg",
      tags: ["即買即用", "7 天前可免費取消"],
      price: 6890,
      star: 4.7,
      commentNum: 319,
      bookingNum: 600,
    },
  ];

  const CategoryCards = () => {
    return categoryList.map(({ title, coverUrl, num }) => {
      return (
        <div className="col-6 col-lg-3">
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
    return;
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
      <section>
        <h2>大阪 TOP 10!</h2>
        <div className="row"></div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
