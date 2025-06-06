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
      <li>
        <picture>
          <source media="(min-width: 992px)" srcSet={serve.imgUrlLg} />
          <img src={serve.imgUrl} alt={serve.title} />
        </picture>
        <div>
          <h3>{serve.title}</h3>
          <p>{serve.describe}</p>
        </div>
      </li>
    );
  });

  const consultationsCard = consultations.map((consultation) => {
    const { completions } = consultation;
    const completionList = completions.map((completion) => (
      <li>{completion}</li>
    ));

    return (
      <li>
        <img
          src={consultation.avatarUrl}
          alt={`個案頭像：${consultation.title}`}
        />
        <h3>{consultation.title}</h3>
        <ul>{completionList}</ul>
        <a className="btn-outline" href="https://podcasters.apple.com/zh-tw/">
          前往聆聽 podcast
        </a>
      </li>
    );
  });

  return (
    <>
      <section>
        <h2>專業服務與方案</h2>
        <ul>{servesCard}</ul>
        <a href="mailto: alysewang@hexschool.com">
          聯繫我，取得更多資訊！
          <i className="icon icon-arrow-right"></i>
        </a>
      </section>
      <section>
        <h2>部落格精選</h2>
        <div>
          <ul>
            <Card />
          </ul>
          <button type="button">
            <i className="icon icon-lg icon-swiper-arrow"></i>
          </button>
          <button type="button">
            <i className="icon icon-lg icon-swiper-arrow"></i>
          </button>
        </div>
      </section>
      <section>
        <h2>職涯諮詢成功案例</h2>
        <div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/desktop/index/photo8.png"
            />
            <img src="/mobile/index/photo8.png" alt="職業諮詢情境" />
          </picture>
          <div>
            <div>
              <p>
                在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
                <span>突破原有的舒適圈</span>。
              </p>
            </div>
            <div>
              <p>期待在下一個新機會中，我能與你一起攜手邁向更高峰！</p>
              <button className="btn-outline btn-outline-primary" type="button">
                立即預約諮詢
              </button>
            </div>
          </div>
        </div>
        <ul>{consultationsCard}</ul>
      </section>
      <section>
        <picture>
          <source media="(min-width: 992px)" srcSet="/desktop/index/photo9.png" />
          <img src="/mobile/index/photo9.png" alt="笑容滿面的個人畫像" />
        </picture>
        <h2>訂閱電子報</h2>
        <p>
          立即訂閱，搶先掌握<span>前端 x 職涯</span>的獨家資訊！
        </p>
        <form action="#">
          <input type="text" placeholder="請輸入您的大名" />
          <input type="text" placeholder="請輸入您的電子信箱" />
          <button className="btn-outline btn-outline-primary" type="submit">啟動訂閱</button>
        </form>
      </section>
    </>
  );
}
