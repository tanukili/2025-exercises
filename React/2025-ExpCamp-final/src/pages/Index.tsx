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
  const servesCard = serves.map((serve) => {
    return (
      <li className="mb-8 items-center xl:w-5/6 xl:px-3 xl:mx-auto xl:flex xl:not-last:mb-16 xl:last even:flex-row-reverse">
        <picture>
          <source media="(min-width: 992px)" srcSet={serve.imgUrlLg} />
          <img
            className="w-full object-cover object-center"
            src={serve.imgUrl}
            alt={serve.title}
          />
        </picture>
        <div className="p-6 bg-white xl:w-3/5">
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
      <li className="p-3">
        <img
          src={consultation.avatarUrl}
          alt={`個案頭像：${consultation.title}`}
        />
        <h3 className="mt-4 mb-2 text-2xl">{consultation.title}</h3>
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
      <section className="px-3 pb-16 mt-16 border-b-2 border-secondary xl:pb-20">
        <div className="xl:max-w-324 xl:mx-auto xl:px-0">
          <h2 className="mb-8 text-5xl font-bold xl:text-64">專業服務與方案</h2>
          <ul className="xl:-mx-3">{servesCard}</ul>
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
      <section className="px-3 pb-16 mt-16 border-b-2 border-secondary">
        <h2 className="mb-6 text-5xl font-bold">部落格精選</h2>
        <div className="grid grid-cols-[44px_1fr_44px] grid-rows-[1fr_44px]">
          <div className="col-span-3 w-full  overflow-hidden">
            <ul className="w-[4125px] grid grid-cols-11 -mx-3">
              <Card />
            </ul>
          </div>
          <button className="col-start-2 ml-auto mr-6" type="button" disabled>
            <i className="icon icon-lg icon-swiper-arrow"></i>
          </button>
          <button type="button">
            <i className="icon icon-lg icon-swiper-arrow"></i>
          </button>
        </div>
      </section>
      <section className="px-3 my-16 font-bold xl:my-20 xl:max-w-324 xl:mx-auto">
        <div className="xl:-mx-3">
          <h2 className="mb-6 text-5xl xl:text-64">
            職涯諮詢
            <br className="xl:hidden" />
            成功案例
          </h2>
          <div className="mb-10 xl:-mx-3 xl:flex">
            <div className="xl:w-7/12 xl:px-3">
            <picture className="block w-full p-6 bg-gray-150">
              <source
                media="(min-width: 768px)"
                srcSet={`${import.meta.env.BASE_URL}desktop/index/photo8.png`}
              />
              <img
                src={`${import.meta.env.BASE_URL}mobile/index/photo8.png`}
                className="w-full object-fit objext-center"
                alt="職業諮詢情境"
              />
            </picture>
            </div>
            <div className="xl:w-5/12 xl:px-3">
              <div className="px-6 py-10 xl:px-10 xl:py-20">
                <i className="icon icon-dash before:w-10 before:h-10"></i>
                <p className="mt-6">
                  在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
                  <span className="text-primary">突破原有的舒適圈</span>。
                </p>
              </div>
              <div className="px-6 py-10 bg-gray-50 xl:px-10 xl:py-20">
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
          <ul className="p-3 bg-gray-50 xl:flex xl:gap-x-6 xl:g-6">{consultationsCard}</ul>
        </div>
      </section>
      <section className="xl:flex">
        <picture className="xl:w-1/2">
          <source
            media="(min-width: 992px)"
            srcSet={`${import.meta.env.BASE_URL}desktop/index/photo9.png`}
          />
          <img
            src={`${import.meta.env.BASE_URL}mobile/index/photo9.png`}
            alt="笑容滿面的個人畫像"
          />
        </picture>
        <div className="p-3 bg-[url(/mobile/index/Hero%20Section2.png)] bg-cover bg-center xl:w-1/2 xl:px-20 xl:grid xl:place-items-center">
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
