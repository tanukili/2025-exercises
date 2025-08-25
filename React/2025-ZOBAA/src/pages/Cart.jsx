export default function Destinations() {
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
                <h3 className="card-title">{title}</h3>
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

  const cartList = [
    {
      title: "海闊天空展望台門票 HARUKAS 300",
      coverUrl: "site/site-2.png",
      description: "阿倍野展望台門票 HARUKAS 300｜附章魚燒兌換劵",
      price: 830,
    },
    {
      title: "泰式按摩過猛求生體驗",
      coverUrl: "site/harukas-3.png",
      description: "限量脫骨套餐｜師傅強度隨緣，靈魂有機會先離開",
      price: 1230,
    },
    {
      title: "海闊天空展望台門票 HARUKAS 300",
      coverUrl: "site/harukas-2.png",
      description: "阿倍野展望台門票",
      price: 410,
    },
  ];

  const CartItems = () => {
    return cartList.map(({ title, coverUrl, description, price }) => {
      return (
        <li className="card">
          <div className="card-body">
            <div>
              <input type="checkbox" name="cartItems" id={title} />
            </div>
            <label htmlFor={title}>
              <img src={coverUrl} alt={title} />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>兌換期內皆適用</p>
              </div>
            </label>
          </div>
          <div className="card-footer">
            <div>
              <a className="link" href="#">
                編輯
              </a>
              <a className="link" href="#">
                刪除
              </a>
            </div>
            <p>NT$ {price}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <main className="container position-relative">
        <section className="row">
          <div className="col-md-8">
            <div className="bg-white">
              <input type="checkbox" name="cartItems" id="clearAll" />
              <label htmlFor="clearAll">全選</label>
              <button className="btn btn-outline-primary" type="button">
                刪除選中活動
              </button>
            </div>
            <ul>
              <CartItems />
            </ul>
          </div>
          <div className="col-md-4">
            <div className="bg-white p-6">
              <h3 className="d-none d-md-block">費用明細</h3>
              <ul className="d-none d-md-block">
                <li>
                  商品小計 <span>NT$ 3600</span>
                </li>
                <li>
                  優惠折抵 <span>- 100</span>
                </li>
              </ul>
              <p className="d-none d-md-block">
                總計<span>NT$ 3,600 </span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>
            <span className="icon icon-logo me-2">其他旅人也買了</span>
          </h2>
          <div className="row">
            <PickupCards />
          </div>
        </section>
        {/* offcanvas */}
        <div className="d-flex d-md-none bg-white position-sticky bottom-0">
          <div className="">
            <p
              data-bs-toggle="offcanvas"
              data-bs-target="#feeDetial"
              aria-controls="feeDetial"
            >
              展開明細
              <span class="material-symbols-outlined">keyboard_arrow_up</span>
            </p>
            <p>NT$ 3,600</p>
          </div>
          <button className="btn btn-primary" type="button">
            前往結帳
          </button>
        </div>
        <div
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="feeDetial"
          aria-labelledby="feeDetialLabel"
        >
          <div className="offcanvas-header">
            <h3 className="offcanvas-title" id="offcanvasBottomLabel">
              費用明細
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small">
            <ul>
              <li>
                商品小計 <span>NT$ 3600</span>
              </li>
              <li>
                優惠折抵 <span>- 100</span>
              </li>
            </ul>
            <p>
              總計<span>NT$ 3,600 </span>
            </p>
          </div>
        </div>
      </main>
      ;
    </>
  );
}
