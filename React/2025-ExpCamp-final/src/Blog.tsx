function Blog() {
  
  return (
    <>
      <div>nav 元件</div>
      <div>banner</div>
      <main>
        <section>
          <picture>
            <source media="(min-width: 768px)" srcSet="" />
            <img src="" alt="精選文章封面" />
          </picture>
          <div>
            <time dateTime=""></time>
            <div>
              <h3>前端開發 x 職涯成長</h3>
              <span>最新文章</span>
            </div>
            <h2>自學前端不用怕：從零開始的三大關鍵</h2>
            <p>嗨，我是 Alyse，一名前端工程師兼職涯諮詢師。一直以來，我都很喜歡在部落格分享學習與工作心得，也常有讀者問：「我想轉職/自學前端，該從哪裡開始？」 其實自學的過程既自由又具挑戰性。我整理了三大關鍵，幫助你在短期內建立紮實基礎，並快速累積實戰經驗。希望能替你的前端之路帶來一些啟發與動力！</p>
            <button type="button">閱讀內文</button>
          </div>
        </section>
      <section>
        <input type="text" name="" id="" placeholder="搜尋你感興趣的文章" />
        <div>卡片元件跑迴圈</div>
        <nav>
          <ul>
            <li><a href="#"><i></i></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">...</a></li>
            <li><a href="#"><i></i></a></li>
          </ul>
        </nav>
      </section>
      </main>
      <footer>表尾元件</footer>
    </>
  )
}

export default Blog;