import FeaturedArticle from "@/components/FeaturedArticle";
import Card from "@/components/Card";

export default function Blog() {
  return (
    <>
      <FeaturedArticle />
      <form>
        <input
          type="search"
          placeholder="搜尋你感興趣的文章"
          className=""
        />
      </form>
      <section>
        <Card />
      </section>
      <nav>
        <ul>
          <li>
            <a href="#">
              <i className="icon icon-sm icon"></i>
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">...</a>
          </li>
          <li>
            <a href="#">
              <i></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}