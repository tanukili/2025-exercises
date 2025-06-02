import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/BlogDetail";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:articleId" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
