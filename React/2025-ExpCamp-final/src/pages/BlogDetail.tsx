import { useParams } from "react-router-dom";
import FeaturedArticle from "@/components/FeaturedArticle";

export default function BlogDetail() {
  const { articleId } = useParams();
  return (
    <>
      <FeaturedArticle />
      <h1>部落格文章詳細 文章ID：{articleId}</h1>
    </>
  );
}
