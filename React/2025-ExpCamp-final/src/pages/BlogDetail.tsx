import { Link } from "react-router-dom";
import FeaturedArticle from "@/components/FeaturedArticle";

export default function BlogDetail() {
  return (
    <>
      <FeaturedArticle />
      <article className="px-3 mt-16 sm:max-w-md sm:mx-auto lg:px-1.5 lg:mt-20 lg:max-w-162">
        <section className="mb-12">
          <h2 className="article-title mb-6">前言</h2>
          <p>
            嗨，我是
            Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」
            其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
          </p>
        </section>
        <section className="mb-12">
          <picture className="block w-full mb-6">
            <source
              media="(min-width: 992px)"
              srcSet="/desktop/blog-content/content1.png"
            />
            <img
              className="max-h-[320px] w-full object-cover object-center"
              src="/mobile/blog-content/content1.png"
              alt="VScode畫面"
            />
          </picture>
          <h2 className="article-title mb-6">
            打好基礎：HTML、CSS、JavaScript
          </h2>
          <ul>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">HTML 與語意化</h3>
              <p className="mb-2">
                為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main,
                footer 等）能讓網頁更具可維護性與 SEO 效益。
              </p>
              <p>建議做法：</p>
              <ol className="article-list">
                <li>
                  學習常見標籤的用途與屬性，如
                  &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
                </li>
                <li>善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。</li>
              </ol>
            </li>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">CSS 佈局與預處理器</h3>
              <p className="mb-2">
                為何重要：好看的網站來自穩定的排版與佈局，掌握 Flexbox、Grid
                能讓你隨心所欲打造響應式頁面。
              </p>
              <p>建議做法：</p>
              <ol className="article-list">
                <li>
                  先掌握基礎 CSS 後，再學習 SASS 或 LESS
                  這類預處理器，提升樣式開發效率。
                </li>
                <li>
                  <span>
                    善用
                    <a
                      className="article-highline"
                      href="https://css-tricks.com/"
                    >
                      CSS-Tricks
                    </a>
                    等資源，了解常見版型技巧。
                  </span>
                </li>
              </ol>
            </li>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">JavaScript 核心觀念</h3>
              <p className="mb-2">
                為何重要：互動效果、資料處理、前端邏輯都仰賴 JavaScript。
              </p>
              <p>建議做法：</p>
              <ol className="article-list">
                <li>
                  先打穩 ES5 與 ES6 語法基礎，理解閉包 (Closure)、原型鍊
                  (Prototype) 等核心機制。
                </li>
                <li>學會事件監聽、API 資料串接等常見應用，增添網站互動性。</li>
              </ol>
            </li>
          </ul>
          <p className="article-callout">
            小結：在學習基礎語法時，同步進行小專案實作（如 Todo
            List、計算機、切版作品集）會讓你進步更快，也能累積展示用作品。
          </p>
        </section>
        <section className="mb-12">
          <picture className="block w-full mb-6">
            <source
              media="(min-width: 992px)"
              srcSet="/desktop/blog-content/content2.png"
            />
            <img
              className="max-h-[320px] w-full object-cover object-center"
              src="/mobile/blog-content/content2.png"
              alt="coding示意圖"
            />
          </picture>
          <h2 className="article-title mb-6">擅用主流框架與工具</h2>
          <ul>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">React、Vue 先挑一個</h3>
              <ul className="article-list">
                <li>React：生態系豐富、社群支援強，適合喜歡客製化的工程師。</li>
                <li>
                  Vue：上手容易、檔案結構直覺，適合對「漸進式開發」有興趣的開發者。
                </li>
              </ul>
              <p className="article-callout mt-6">
                TIP：可以先看官方文件或跟著基礎教學做出小專案，感受哪個框架更順手。
              </p>
            </li>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">版本控制、協作與建置</h3>
              <ul className="article-list">
                <li>
                  Git 與 GitHub：一定要掌握分支、Pull Request、Code Review
                  等流程，並熟悉 Git Flow 或 Trunk Based Development。
                </li>
                <li>
                  打包工具：了解 Webpack、Vite、Parcel
                  等常見工具的基本原理與設定，對於優化與部署大有幫助。
                </li>
              </ul>
            </li>
            <li>
              <h3 className="article-subtitle mb-3">自動化測試與最佳實踐</h3>
              <ul className="article-list">
                <li>
                  測試框架：Jest、Mocha、Cypress 等，建立單元測試與 E2E
                  測試思維。
                </li>
                <li>
                  程式結構與品質：遵循程式風格
                  (Lint)、維持命名規範、模組化思考，確保專案可維護。
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <picture className="block w-full mb-6">
            <source
              media="(min-width: 992px)"
              srcSet="/desktop/blog-content/content3.png"
            />
            <img
              className="max-h-[320px] w-full object-cover object-center"
              src="/mobile/blog-content/content3.png"
              alt="團隊討論"
            />
          </picture>
          <h2 className="article-title mb-6">持續練習與參與社群</h2>
          <ul>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">
                多參加前端挑戰 / Hackathon
              </h3>
              <ul className="article-list">
                <li>在實作中快速累積經驗，也能認識更多同好。</li>
                <li>
                  <span>
                    像是
                    <a
                      className="article-highline"
                      href="https://www.frontendmentor.io/"
                    >
                      Frontend Mentor
                    </a>
                    提供多種真實設計稿，可練習切版與互動。
                  </span>
                </li>
              </ul>
            </li>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">打造個人作品集網站</h3>
              <ul className="article-list">
                <li>部署在 GitHub Pages 或其他免費/付費主機。</li>
                <li>整合自己做過的小專案，並用文字介紹技術棧與實作細節。</li>
              </ul>
            </li>
            <li className="mb-6">
              <h3 className="article-subtitle mb-3">社群互動、分享心得</h3>
              <ul className="article-list">
                <li>
                  參與線上或線下的技術交流、讀書會、Meetup，與同行討論，能啟發更多想法。
                </li>
                <li>
                  有餘力可將學習過程寫成部落格文章或筆記，進一步強化自己的理解。
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <picture className="block w-full mb-6">
            <source
              media="(min-width: 992px)"
              srcSet="/desktop/blog-content/content4.png"
            />
            <img
              className="max-h-[320px] w-full object-cover object-center"
              src="/mobile/blog-content/content4.png"
              alt="舉白旗"
            />
          </picture>
          <h2 className="article-title mb-6">結語</h2>
          <p className="mb-6">
            自學前端可能遇到卡關、挫折，但同時也具備很高的自主性。只要把
            基礎、框架、實踐
            三大面向做好，就能在前端這條路上穩步前進。若你在學習過程中需要更多建議或想要職涯諮詢，歡迎透過
            <a className="article-link" href="mailto:alysewang@hexschool.com">
              聯絡方式
            </a>
            與我聯繫！<span></span>
          </p>
          <p className="article-callout mb-6">
            「程式替你開路，諮詢替你指路，一起走向更寬廣的未來。」
          </p>
          <p>
            感謝你的閱讀，如果這篇文章對你有幫助，別忘了幫忙分享，或在下方留言告訴我你的想法，也讓更多人一起受益吧！
          </p>
        </section>
        <section className="mb-12">
          <h2 className="article-title mb-6">延伸閱讀</h2>
          <ul className="article-list">
            <li>
              <Link to="/">前端面試不再慌：破解常見提問的三大策略</Link>
            </li>
            <li>
              <Link to="/">掌握前端測試：從單元測試到端對端測試的完整攻略</Link>
            </li>
            <li>
              <Link to="/">SEO 與前端最佳實踐：讓搜尋引擎看見你的網站</Link>
            </li>
          </ul>
        </section>
      </article>
      <div className="flex justify-between px-3 mb-16 sm:max-w-md sm:mx-auto lg:px-1.5 lg:mb-20 lg:max-w-162">
        <Link to="/" className="btn-outline flex">
          <i className="icon icon-page-left mr-1"></i>上一篇
        </Link>
        <Link to="/" className="btn-outline flex">
          下一篇<i className="icon icon-page-right ml-1"></i>
        </Link>
      </div>
    </>
  );
}
