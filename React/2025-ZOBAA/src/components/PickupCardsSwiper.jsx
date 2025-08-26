import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default function PickupCardsSwiper() {
  const locationList = [
    {
      title: "環球影城超值一日遊｜哈利波特園區＋快速通關體驗",
      coverUrl: "location/top-1.png",
      tags: ["即買即用", "5 天前可免費取消"],
      price: "5,480",
      originPrice: "6,200",
      rating: 4.8,
      ratingNum: 1029,
      bookingNum: 1000,
    },
    {
      title: "奈良梅花鹿餵食體驗＋和服散策｜日式風情輕旅行",
      coverUrl: "location/top-2.png",
      tags: ["中文導覽", "5 天前可免費取消"],
      price: "2,250",
      originPrice: "2,800",
      rating: 4.7,
      ratingNum: 880,
      bookingNum: 900,
    },
    {
      title: "黑門市場美食巡禮｜在地職人帶路吃遍大阪經典小吃",
      coverUrl: "location/top-3.png",
      tags: ["專業導覽", "5 天前可免費取消"],
      price: "1,580",
      originPrice: "2,500",
      rating: 4.6,
      ratingNum: 540,
      bookingNum: 700,
    },
    {
      title: "大阪夜景直升機體驗｜空中俯瞰梅田摩天輪＋海遊館",
      coverUrl: "location/top-4.png",
      tags: ["即買即用", "7 天前可免費取消"],
      price: "6,890",
      originPrice: "8,890",
      rating: 4.7,
      ratingNum: 319,
      bookingNum: 600,
    },
    {
      title: "環球影城超值一日遊｜哈利波特園區＋快速通關體驗",
      coverUrl: "location/top-1.png",
      tags: ["即買即用", "5 天前可免費取消"],
      price: "5,480",
      originPrice: "6,200",
      rating: 4.8,
      ratingNum: 1029,
      bookingNum: 1000,
    },
    {
      title: "奈良梅花鹿餵食體驗＋和服散策｜日式風情輕旅行",
      coverUrl: "location/top-2.png",
      tags: ["中文導覽", "5 天前可免費取消"],
      price: "2,250",
      originPrice: "2,800",
      rating: 4.7,
      ratingNum: 880,
      bookingNum: 900,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const PickupCards = () => {
    const TagBadges = (tags) => {
      return tags.map((tag) => {
        return (
          <span
            className="badge bg-tint text-primary fw-normal lh-base py-1 px-2 me-2"
            key={tag}
          >
            {tag}
          </span>
        );
      });
    };

    return locationList.map(
      (
        {
          title,
          coverUrl,
          tags,
          originPrice,
          price,
          rating,
          ratingNum,
          bookingNum,
        },
        index
      ) => {
        return (
          <SwiperSlide style={{ width: 306 }} key={`${title}${index}`}>
            <div className="card bg-transparent border-0">
              <figure className="position-relative">
                <img src={coverUrl} className="rounded-5" alt={title} />
                <span className="badge-favorite material-symbols-outlined p-4 text-white bg-black">
                  favorite
                </span>
              </figure>
              <div className="card-body px-0 pt-0">
                <h3 className="card-title fs-7 lh-base">{title}</h3>
                <div className="mb-2">{TagBadges(tags)}</div>
                <div className="d-flex fs-8">
                  <p className="d-flex align-items-center pe-3 me-3 border-end">
                    <span className="material-symbols-outlined symbols-fill fs-9 me-1">
                      star
                    </span>
                    <span className="me-1">{rating}</span>
                    <span className="text-neutral-60">({ratingNum})</span>
                  </p>
                  <p className="card-text">{bookingNum}+ 個已訂購</p>
                </div>
              </div>
              <div className="card-footer bg-transparent p-0 pt-4">
                <p className="fs-6 lh-sm fw-bold text-primary">NT$ {price}</p>
                <p className="text-decoration-line-through text-neutral-70 fs-8">
                  NT$ {originPrice}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      }
    );
  };

  return (
    <div className="position-relative">
      <button
        ref={prevRef}
        className="swiper-btn-prev position-absolute translate-middle top-50 z-2 btn btn-white d-none d-lg-flex p-3 p-xxl-4 shadow-sm"
      >
        <span className="material-symbols-outlined fs-6 fs-xxl-5">
          arrow_back
        </span>
      </button>
      <button
        ref={nextRef}
        className="swiper-btn-next position-absolute translate-middle top-50 z-2 btn btn-white d-none d-lg-flex p-3 p-xxl-4 shadow-sm"
      >
        <span className="material-symbols-outlined fs-6 fs-xxl-5">
          arrow_forward
        </span>
      </button>
      <Swiper
        spaceBetween={24}
        slidesPerView={"auto"}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {PickupCards()}
      </Swiper>
    </div>
  );
}
