import FeaturedArticle from "@/components/FeaturedArticle";
import Card from "@/components/Card";

export default function Blog() {
  return (
    <>
      <FeaturedArticle />
      <div className="mt-16 sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-1296 sm:mx-auto lg:mt-20">
        <div className="lg:-mx-3">
          <form className="px-3 md:w-1/2 xl:w-1/3">
            <div className="icon icon-search relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-4">
              <input
                type="search"
                placeholder="搜尋你感興趣的文章"
                className="w-full p-4 pl-[50px] border rounded-full text-gray-650"
              />
            </div>
          </form>
          <section className="my-10 md:flex md:flex-wrap lg:my-0">
            <Card />
          </section>
        </div>
      </div>
      <nav className="flex justify-center mb-16 lg:mb-20">
        <ul className="flex items-center py-2 rounded-full text-center text-gray-650 bg-white">
          <li className="pl-5">
            <a href="#">
              <i className="icon icon-page-left"></i>
            </a>
          </li>
          <li>
            <a className="block w-10 py-2 hover:text-primary" href="#">
              1
            </a>
          </li>
          <li>
            <a className="block w-10 py-2 hover:text-primary " href="#">
              2
            </a>
          </li>
          <li>
            <a className="block w-10 py-2 hover:text-primary" href="#">
              3
            </a>
          </li>
          <li>
            <a className="block w-10 py-2 hover:text-primary" href="#">
              4
            </a>
          </li>
          <li>
            <a className="block w-10 py-2 hover:text-primary" href="#">
              5
            </a>
          </li>
          <li>
            <a className="block w-10 py-2 hover:text-primary" href="#">
              ...
            </a>
          </li>
          <li className="pr-5">
            <a href="#">
              <i className="icon icon-page-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
