import Card from "@/components/Card";

const serves = [
  {
    imgUrl: "./mobile/index/photo1.png",
    imgUrlLg: "./desktop/index/photo.png",
    title: "履歷健檢",
    describe:
      "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
  },
  {
    imgUrl: "./mobile/index/photo2.png",
    imgUrlLg: "./desktop/index/photo2.png",
    title: "線上諮詢",
    describe:
      "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
  },
  {
    imgUrl: "./mobile/index/photo3.png",
    imgUrlLg: "./desktop/index/photo3.png",
    title: "網頁開發",
    describe:
      "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
  },
  {
    imgUrl: "./mobile/index/photo4.png",
    imgUrlLg: "./desktop/index/photo4.png",
    title: "企業內訓",
    describe:
      "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
  },
];
const consultations = [
  {
    avatarUrl: "./mobile/index/people1.png",
    title: "無經驗到前端工程師 Offer",
    completions: ["打造前端專案與履歷亮點", "深度強化面試表現"],
  },
  {
    avatarUrl: "./mobile/index/people2.png",
    title: "轉職迷茫到明確學習規劃",
    completions: ["制訂階段性目標與時間安排", "鼓勵參與前端社群或活動"],
  },
  {
    avatarUrl: "./mobile/index/people3.png",
    title: "面試緊張到從容應對",
    completions: [
      "透過面試模擬找出常犯的邏輯漏洞",
      "討論遇到不熟悉議題時的回應方式",
    ],
  },
  {
    avatarUrl: "./mobile/index/people4.png",
    title: "面試緊張到從容應對",
    completions: ["擬定進階框架或技術研究目標", "培養跨團隊溝通與簡報能力"],
  },
];
export default function Index() {
  const servesCard = serves.map((serve, index) => {
    return (
      <li className="mb-8 items-center justify-center lg:-mx-3 md:flex lg:not-last:mb-16 lg:last even:flex-row-reverse">
        <picture className="xl:w-1/2 lg:px-3">
          <source media="(min-width: 640px)" srcSet={serve.imgUrlLg} />
          <img
            className="w-full h-full object-cover object-center"
            src={serve.imgUrl}
            alt={serve.title}
          />
        </picture>
          <div className={`p-6 bg-white relative md:w-120 xl:w-120 ${index % 2 ? "md:-mr-16 md:-mr-16" : "md:-ml-20 xl:-ml-16"}`}>
            <i className="icon icon-lg icon-dash"></i>
            <h3 className="mb-2 text-28 font-bold">{serve.title}</h3>
            <p className="text-gray-650">{serve.describe}</p>
          </div>
      </li>
    );
  });

  const consultationsCard = consultations.map((consultation) => {
    const { completions } = consultation;
    const completionList = completions.map((completion) => (
      <li className="flex items-center mb-2">
        <i className="icon icon-sm icon-checked mr-2"></i>
        {completion}
      </li>
    ));

    return (
      <li className="p-3 md:w-1/2 md:px-6 xl:w-1/4 xl:p-2 2xl:p-3">
        <img
          src={consultation.avatarUrl}
          alt={`個案頭像：${consultation.title}`}
        />
        <h3 className="mt-4 mb-2 text-2xl xl:line-clamp-1">{consultation.title}</h3>
        <ul className="pb-2 mb-4 border-b border-gray-650 font-medium">
          {completionList}
        </ul>
        <a
          className="btn-outline inline-block font-medium text-gray-650"
          href="https://podcasters.apple.com/zh-tw/"
        >
          前往聆聽 podcast
        </a>
      </li>
    );
  });

  return (
    <>
      <section className="pb-16 mt-16 border-b-2 border-secondary xl:pb-20">
        <div className="px-3 xl:px-0 lg:mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-324">
          <h2 className="mb-8 text-5xl font-bold xl:text-64">專業服務與方案</h2>
          <ul>{servesCard}</ul>
          <div className="flex flex-col items-end justify-end text-28 font-bold xl:flex-row">
            <a
              className="hover:text-primary"
              href="mailto: alysewang@hexschool.com"
            >
              聯繫我，取得更多資訊！
            </a>
            <i className="icon icon-arrow-right  btn-outline p-2 mt-2"></i>
          </div>
        </div>
      </section>
      <section className="px-3 pb-16 mt-16 border-b-2 border-secondary xl:px-0 xl:pb-20 xl:mt-20">
        <h2 className="mb-6 text-5xl font-bold xl:text-64 xl:mx-auto lg:mx-auto lg:max-w-214 xl:max-w-6xl 2xl:max-w-324">
          部落格精選
        </h2>
        <div className="grid grid-cols-[44px_1fr_44px] grid-rows-[1fr_44px] lg:grid-rows-1 lg:-mx-auto lg:grid-cols-[1fr_auto_1fr]">
          <div className="col-span-3 max-w-88 mx-auto overflow-hidden lg:col-span-1 md:max-w-182 xl:max-w-214 2xl:max-w-324">
            <ul className="w-[4125px] grid grid-cols-11 -mx-3 xl:w-[4840px]">
              <Card />
            </ul>
          </div>
          <button
            className="col-start-2 ml-auto mr-6 lg:-order-1 lg:col-start-auto"
            type="button"
            disabled
          >
            <i className="icon icon-lg icon-swiper-arrow"></i>
          </button>
          <button className="lg:ml-6" type="button">
            <i className="icon icon-lg icon-swiper-arrow"></i>
          </button>
        </div>
      </section>
      <section className="px-3 my-16 font-bold xl:my-20 lg:mx-auto lg:max-w-214 xl:max-w-6xl 2xl:max-w-1296">
        <div className="xl:-mx-3">
          <h2 className="mb-6 text-5xl xl:text-64">
            職涯諮詢
            <br className="sm:hidden" />
            成功案例
          </h2>
          <div className="mb-10 xl:-mx-3 lg:flex grow">
            <div className="lg:w-1/2 xl:px-3">
              <picture className="flex p-6 bg-gray-150 max-h-200 lg:h-full">
                <source
                  media="(min-width: 640px)"
                  srcSet={`${import.meta.env.BASE_URL}desktop/index/photo8.png`}
                />
                <img
                  src={`${import.meta.env.BASE_URL}mobile/index/photo8.png`}
                  className="w-full mx-auto object-cover objext-center"
                  alt="職業諮詢情境"
                />
              </picture>
            </div>
            <div className="flex-col justify-center -mt-34 lg:mt-0 lg:px-3 lg:w-1/2 xl:w-5/12 lg:flex">
              <div className="relative px-6 py-10 bg-white lg:-ml-30 lg:mr-30 xl:px-10 xl:py-20 xl:-ml-[219px] xl:mr-[219px]">
                <i className="icon icon-dash before:w-10 before:h-10"></i>
                <p className="mt-6">
                  在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
                  <span className="text-primary">突破原有的舒適圈</span>。
                </p>
              </div>
              <div className="px-6 py-10 bg-gray-50 lg:-mt-5 xl:px-10 xl:py-20 xl:-mt-10">
                <i className="icon icon-dash before:w-10 before:h-10"></i>
                <p className="my-6">
                  期待在下一個新機會中，我能與你一起攜手邁向更高峰！
                </p>
                <button
                  className="btn-outline btn-outline-primary bg-white"
                  type="button"
                >
                  立即預約諮詢
                </button>
              </div>
            </div>
          </div>
          <ul className="p-3 bg-gray-50 flex-wrap md:flex">
            {consultationsCard}
          </ul>
        </div>
      </section>
      <section className="md:flex">
        <picture className="md:w-1/2">
          <source
            media="(min-width: 460px)"
            srcSet={`${import.meta.env.BASE_URL}desktop/index/photo9.png`}
          />
          <img
            src={`${import.meta.env.BASE_URL}mobile/index/photo9.png`}
            className="w-full h-full object-cover object-center"
            alt="笑容滿面的個人畫像"
          />
        </picture>
        <div className="p-3 bg-[url(/mobile/index/Hero%20Section2.png)] bg-cover bg-center md:w-1/2 lg:px-20 lg:grid lg:place-items-center">
          <div className="px-6 py-10 bg-white xl:w-full xl:p-20">
            <h2 className="mb-4 text-5xl font-bold xl:text-64">訂閱電子報</h2>
            <p className="mb-6 text-xl">
              立即訂閱，搶先掌握
              <span className="text-primary">前端 x 職涯</span>的獨家資訊！
            </p>
            <form action="#">
              <input
                className="w-full mb-2 px-4 py-2 text-gray-650 bg-gray-75"
                type="text"
                placeholder="請輸入您的大名"
              />
              <input
                className="w-full mb-6 px-4 py-2 text-gray-650 bg-gray-75"
                type="text"
                placeholder="請輸入您的電子信箱"
              />
              <button className="btn-outline btn-outline-primary" type="submit">
                啟動訂閱
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
