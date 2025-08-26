import PickupCardsSwiper from "@/components/PickupCardsSwiper";

export default function Cart() {
  const cartList = [
    {
      title: "海闊天空展望台門票 HARUKAS 300",
      coverUrl: "site/site-2.png",
      description: "阿倍野展望台門票 HARUKAS 300｜附章魚燒兌換劵",
      price: "830",
    },
    {
      title: "泰式按摩過猛求生體驗",
      coverUrl: "site/harukas-3.png",
      description: "限量脫骨套餐｜師傅強度隨緣，靈魂有機會先離開",
      price: "1,230",
    },
    {
      title: "海闊天空展望台門票 HARUKAS 300",
      coverUrl: "site/harukas-2.png",
      description: "阿倍野展望台門票",
      price: "410",
    },
  ];

  const CartItems = () => {
    return cartList.map(({ title, coverUrl, description, price }, index) => {
      return (
        <li
          className={`card border-0 ${index !== cartList.length - 1 ? "mb-4" : ""}`}
          key={title}
        >
          <div className="d-lg-flex">
            <div className="card-header py-4 px-6 border-bottom-0">
              <div className="form-check d-flex flex-column">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="cartItems"
                  id={title}
                />
              </div>
            </div>
            <div className="card-body d-lg-flex">
              <label className="d-lg-flex me-lg-6" htmlFor={title}>
                <img
                  className="rounded-4 object-cover mb-3"
                  src={coverUrl}
                  alt={title}
                  style={{ width: 132, height: 132 }}
                />
                <div className="text-neutral-80 mb-6 ms-lg-3">
                  <h2 className="card-title fs-6">{title}</h2>
                  <p className=" mb-2">{description}</p>
                  <p className="">兌換期內皆適用</p>
                </div>
              </label>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-primary py-4 rounded-circle"
                  type="button"
                >
                  <span className="material-symbols-outlined d-block">add</span>
                </button>
                <p
                  className="text-center fs-6 fw-bold lh-sm mx-4"
                  style={{ width: 40 }}
                >
                  2
                </p>
                <button
                  className="btn btn-outline-primary py-4 rounded-circle"
                  type="button"
                >
                  <span className="material-symbols-outlined d-block">
                    remove
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer py-4 d-flex align-items-center">
            <div className="d-flex ms-lg-10">
              <a
                className="link link-neutral-80 text-decoration-underline py-2 me-6"
                href="#"
              >
                編輯
              </a>
              <a
                className="link link-neutral-80 text-decoration-underline py-2"
                href="#"
              >
                刪除
              </a>
            </div>
            <p className="fs-5 lh-sm fw-bold ms-auto">NT$ {price}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <main className="bg-neutral-15 position-relative">
        <div className="container pt-10 pt-lg-20">
          <section className="row mb-20">
            <div className="col-md-8">
              <div className="d-flex align-items-center bg-white py-4 px-6 rounded-4 mb-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="cartItems"
                    id="clearAll"
                  />
                  <label className="form-check-label" htmlFor="clearAll">
                    全選
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-outline-primary ms-auto"
                  type="button"
                >
                  刪除選中活動
                </button>
              </div>
              <ul className="list-unstyled mb-0">
                <CartItems />
              </ul>
            </div>
            <div className="col-4 d-none d-lg-block">
              <div className="bg-white p-6 rounded-5 shadow">
                <h3 className="fs-5 mb-8">費用明細</h3>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between mb-3">
                    商品小計 <span className="fw-bold">NT$ 3600</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    優惠折抵
                    <span className="text-primary-60 fw-bold">- 100</span>
                  </li>
                </ul>
                <p className="d-flex justify-content-between border-top pt-4 mb-8">
                  總計<span className="fs-3 fw-bold">NT$ 3,600 </span>
                </p>
                <button
                  className="w-100 btn btn-lg btn-primary ms-auto"
                  type="button"
                >
                  前往結帳
                </button>
              </div>
            </div>
          </section>
          <section className="pb-10 py-lg-30">
            <h2 className="d-flex align-items-center fs-3 mb-10">
              <span className="icon icon-logo-sm me-2"></span>其他旅人也買了
            </h2>
            <PickupCardsSwiper />
          </section>
        </div>
        {/* offcanvas */}
        <div className="d-flex align-items-center d-lg-none bg-white position-sticky z-2 bottom-0 py-3 px-4">
          <div>
            <p
              className="fs-9 d-flex align-items-center mb-1"
              data-bs-toggle="offcanvas"
              data-bs-target="#feeDetial"
              aria-controls="feeDetial"
            >
              展開明細
              <span class="material-symbols-outlined fs-8 ms-1">
                keyboard_arrow_up
              </span>
            </p>
            <p className="fs-6 lh-sm fw-bold">NT$ 3,600</p>
          </div>
          <button className="btn btn-lg btn-primary ms-auto" type="button">
            前往結帳
          </button>
        </div>
        <div
          className="offcanvas offcanvas-bottom  rounded-top rounded-3"
          tabindex="-1"
          id="feeDetial"
          aria-labelledby="feeDetialLabel"
        >
          <div className="offcanvas-header p-4 border-bottom">
            <h3 className="offcanvas-title fs-8" id="offcanvasBottomLabel">
              費用明細
            </h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small pt-4">
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between mb-3">
                商品小計 <span className="fw-bold">NT$ 3600</span>
              </li>
              <li className="d-flex justify-content-between">
                優惠折抵 <span className="text-primary-60 fw-bold">- 100</span>
              </li>
            </ul>
            <p className="d-flex justify-content-between border-top pt-4">
              總計<span className="fs-6 fw-semibold">NT$ 3,600 </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
