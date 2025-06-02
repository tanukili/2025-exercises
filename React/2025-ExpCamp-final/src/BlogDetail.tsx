function BlogDetail() {
  return (
    <>
      <nav>導覽列</nav>
      <header>
        <picture>
          <source media="(min-width: 768px)" srcSet="" />
          <img src="" alt="文章封面" />
        </picture>
        <div>
          <time dateTime="">2024/10/21</time>
          <div>
            <h2>前端開發 x 職涯成長</h2>
            <span>最新文章</span>
          </div>
          <h1>自學前端不用怕：從零開始的三大關鍵</h1>
        </div>
      </header>
      <main>
        <article>
          <section>
            <h2>前言</h2>
            <p>
              嗨，我是
              Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」
              <br />
              其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！
            </p>
          </section>
          <section>
            <picture>
              <source media="(min-width: 768px)" srcSet="" />
              <img src="" alt="打好基礎：HTML、CSS、JavaScript" />
            </picture>
            <h2>打好基礎：HTML、CSS、JavaScript</h2>
            <div>
              <h3>HTML 與語意化</h3>
              <p>
                為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main,
                footer 等）能讓網頁更具可維護性與 SEO 效益。
              </p>
              <p>建議做法：</p>
              <ol>
                <li>
                  學習常見標籤的用途與屬性，如
                  &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
                </li>
                <li>善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。</li>
              </ol>
            </div>
            <div>
              <h3>HTML 與語意化</h3>
              <p>
                為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main,
                footer 等）能讓網頁更具可維護性與 SEO 效益。
              </p>
              <p>建議做法：</p>
              <ol>
                <li>
                  學習常見標籤的用途與屬性，如
                  &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
                </li>
                <li>善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。</li>
              </ol>
            </div>
            <div>
              <h3>HTML 與語意化</h3>
              <p>
                為何重要：HTML 是網頁結構的根基，語意化寫法（如 header, main,
                footer 等）能讓網頁更具可維護性與 SEO 效益。
              </p>
              <p>建議做法：</p>
              <ol>
                <li>
                  學習常見標籤的用途與屬性，如
                  &lt;section&gt;、&lt;article&gt;、&lt;nav&gt;。
                </li>
                <li>善用 MDN、W3Schools 等官方文件，找尋範例程式碼並練習。</li>
              </ol>
            </div>
          </section>
          <section></section>
          <section></section>
          <section></section>
          <section></section>
        </article>
      </main>
      <footer>表尾元件</footer>
    </>
  );
}

export default BlogDetail;
