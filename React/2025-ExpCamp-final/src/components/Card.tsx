// 模擬遠端資料
const articles = [
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo10.png",
    coverUrlLg: "./src/assets/desktop/blog/photo11.png",
    timestamp: 1728576000000,
    tags: ["React", "入門基礎"],
    isPopular: false,
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    description:
      "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo1.png",
    coverUrlLg: "./src/assets/desktop/blog/photo1.png",
    timestamp: 1725638400000,
    tags: ["作品集", "求職攻略"],
    isPopular: false,
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    description:
      "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo2.png",
    coverUrlLg: "./src/assets/desktop/blog/photo2.png",
    timestamp: 1725292800000,
    tags: ["CSS設計", "視覺體驗"],
    isPopular: false,
    title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
    description:
      "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo3.png",
    coverUrlLg: "./src/assets/desktop/blog/photo6.png",
    timestamp: 1720454400000,
    tags: ["轉職工程師", "學習心法"],
    isPopular: false,
    title: "前端轉職必讀：從自學者到工程師的心路歷程",
    description:
      "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo4.png",
    coverUrlLg: "./src/assets/desktop/blog/photo3.png",
    timestamp: 1720368000000,
    tags: ["面試準備", "工程師求職"],
    isPopular: true,
    title: "前端面試不再慌：破解常見提問的三大策略",
    description:
      "面試前端工程師時，你或許擔心被問到各種刁鑽的技術題目，或是擔憂無法在短時間內展現實力。其實，許多面試官關注的重點並不僅是程式碼本身，更包含問題解決的流程與溝通能力。這篇文章將分享我在面試過程中常見的三大難題，以及如何以更具條理的方式回應，讓你在面試場合中脫穎而出。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo5.png",
    coverUrlLg: "./src/assets/desktop/blog/photo5.png",
    timestamp: 1719590400000,
    tags: ["Vue3", "框架學習"],
    isPopular: false,
    title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
    description:
      "許多前端開發者對 Vue 一直情有獨鍾，因為它易上手又靈活。隨著 Vue 3 上線，Composition API 的導入更是大幅提升可讀性與維護性。這篇文章將帶你快速瞭解 Vue 3 的獨特魅力，並透過簡單範例幫助你更順利地切換到新版本的思維模式。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo6.png",
    coverUrlLg: "./src/assets/desktop/blog/photo9.png",
    timestamp: 1714752000000,
    tags: ["Git", "協作流程"],
    isPopular: false,
    title: "Git 與版本控制：前端協作的必修課",
    description:
      "當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo7.png",
    coverUrlLg: "./src/assets/desktop/blog/photo7.png",
    timestamp: 1714492800000,
    tags: ["SEO", "網頁曝光"],
    isPopular: false,
    title: "SEO 與前端最佳實踐：讓搜尋引擎看見你的網站",
    description:
      "即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo8.png",
    coverUrlLg: "./src/assets/desktop/blog/photo8.png",
    timestamp: 1708099200000,
    tags: ["專案維護", "自動化測試"],
    isPopular: false,
    title: "穩定前端環境的祕訣：依賴管理與自動化流程",
    description:
      "前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo9.png",
    coverUrlLg: "./src/assets/desktop/blog/photo11.png",
    timestamp: 1708099200000,
    tags: ["TypeScript", "程式設計"],
    isPopular: false,
    title: "TypeScript 快速上手：強化前端程式碼的安全與可讀性",
    description:
      "許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。",
  },
  {
    id: "",
    coverUrl: "./src/assets/mobile/blog/photo11.png",
    coverUrlLg: "./src/assets/desktop/blog/photo10.png",
    timestamp: 1707235200000,
    tags: ["測試框架", "品質保證"],
    isPopular: false,
    title: "掌握前端測試：從單元測試到端對端測試的完整攻略",
    description:
      "寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。",
  },
];

// composable
const formatDate = (timestamp: number) => {
  const date: string = new Date(timestamp).toLocaleDateString("en-CA");
  return date.replaceAll("-", "/");
};

export default function Card() {
  const cardItems = articles.map((article) => {
    const tagsItems = article.tags.map((tag) => (
      <a className="text-2xl text-primary mr-2" href="#">
        #{tag}
      </a>
    ));

    return (
      <div className="flex flex-col items-start px-3 mb-8 md:w-1/2 xl:w-1/3 lg:my-10">
        <picture className="block w-full mb-4">
          <source media="(min-width: 992px)" srcSet={article.coverUrlLg} />
          <img className="max-h-[200px] w-full object-cover object-center" src={article.coverUrl} alt={article.title} />
        </picture>
        <time className="block text-black mb-1">
          {formatDate(article.timestamp)}
        </time>
        <div className="flex items-center">
          {tagsItems}
          {article.isPopular && (
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary text-white ">
              人氣文章
            </span>
          )}
        </div>
        <h3 className="grow text-28 font-bold mb-2">{article.title}</h3>
        <p className="text-slate-750 mb-4 line-clamp-2">
          {article.description}
        </p>
        <button className="btn-outline text-slate-750" type="button">
          閱讀內文
        </button>
      </div>
    );
  });

  return cardItems;
}
