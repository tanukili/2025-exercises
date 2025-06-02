import { useState } from "react";

export default function Index() {
  const serves = [
    {
      imgUrl: "",
      imgUrlLg: "",
      title: "履歷健檢",
      describe:
        "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
    },
    {
      imgUrl: "",
      imgUrlLg: "",
      title: "線上諮詢",
      describe:
        "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
    },
    {
      imgUrl: "",
      imgUrlLg: "",
      title: "網頁開發",
      describe:
        "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
    },
    {
      imgUrl: "",
      imgUrlLg: "",
      title: "企業內訓",
      describe:
        "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
    },
  ];
  const articles = [
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1728576000000,
      tags: ["React", "入門基礎"],
      isPopular: false,
      title: "React 入門不再迷惘：三步驟帶你上手核心概念",
      description:
        "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1725638400000,
      tags: ["作品集", "求職攻略"],
      isPopular: false,
      title: "前端作品集打造指南：讓你的專案成為履歷亮點",
      description:
        "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1725292800000,
      tags: ["CSS設計", "視覺體驗"],
      isPopular: false,
      title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
      description:
        "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1720454400000,
      tags: ["轉職工程師", "學習心法"],
      isPopular: false,
      title: "前端轉職必讀：從自學者到工程師的心路歷程",
      description:
        "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1720368000000,
      tags: ["面試準備", "工程師求職"],
      isPopular: true,
      title: "前端面試不再慌：破解常見提問的三大策略",
      description:
        "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1719590400000,
      tags: ["Vue3", "框架學習"],
      isPopular: false,
      title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
      description:
        "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1714752000000,
      tags: ["Git", "協作流程"],
      isPopular: false,
      title: "Git 與版本控制：前端協作的必修課",
      description:
        "當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1714492800000,
      tags: ["SEO", "網頁曝光"],
      isPopular: false,
      title: "SEO 與前端最佳實踐：讓搜尋引擎看見你的網站",
      description:
        "即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1708099200000,
      tags: ["專案維護", "自動化測試"],
      isPopular: false,
      title: "穩定前端環境的祕訣：依賴管理與自動化流程",
      description:
        "前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1708099200000,
      tags: ["TypeScript", "程式設計"],
      isPopular: false,
      title: "TypeScript 快速上手：強化前端程式碼的安全與可讀性",
      description:
        "許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。",
    },
    {
      coverUrl: "",
      coverUrlLg: "",
      timestamp: 1707235200000,
      tags: ["測試框架", "品質保證"],
      isPopular: false,
      title: "掌握前端測試：從單元測試到端對端測試的完整攻略",
      description:
        "寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。",
    },
  ];
  const consultingCases = [
    {
      avatarUrl: "",
      title: "無經驗到前端工程師 Offer",
      highlights: ["打造前端專案與履歷亮點", "深度強化面試表現"],
    },
    {
      avatarUrl: "",
      title: "轉職迷茫到明確學習規劃",
      highlights: ["制訂階段性目標與時間安排", "鼓勵參與前端社群或活動"],
    },
    {
      avatarUrl: "",
      title: "面試緊張到從容應對",
      highlights: [
        "透過面試模擬找出常犯的邏輯漏洞",
        "討論遇到不熟悉議題時的回應方式",
      ],
    },
    {
      avatarUrl: "",
      title: "面試緊張到從容應對",
      highlights: ["擬定進階框架或技術研究目標", "培養跨團隊溝通與簡報能力"],
    },
  ];

  return (
    <>
        <section>
          <h2>專業服務與方案</h2>
          <ul>
            <li>
              <img src="" alt="" />
              <div>
                <h3></h3>
                <p></p>
              </div>
            </li>
          </ul>
          <a href="">
            聯繫我，取得更多資訊！
            <i></i>
          </a>
        </section>
        <section>
          <h2>部落格精選</h2>
        </section>
        <section>
          <h2>職涯諮詢成功案例</h2>
          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet="" sizes="" />
              <img src="" alt="職業諮詢情境" />
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
                <button type="button">立即預約諮詢</button>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <img src="" alt="頭像" />
              <h3></h3>
              <ul>
                <li></li>
                <li></li>
              </ul>
              <a href="https://podcasters.apple.com/zh-tw/">前往聆聽 podcast</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>訂閱電子報</h2>
          <p>
            立即訂閱，搶先掌握<span>前端 x 職涯</span>的獨家資訊！
          </p>
          <form action="#">
            <input type="text" placeholder="請輸入您的大名" />
            <input type="text" placeholder="請輸入您的電子信箱" />
            <button type="submit">啟動訂閱</button>
          </form>
        </section>
    </>
  );
};