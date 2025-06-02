import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { articleId } = useParams();
  return (
    <h1>部落格文章詳細 文章ID：{articleId}</h1>
  )
}