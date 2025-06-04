import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";

function App() {
  const [ needHeader, setNeedHeader ] = useState(true);
  const { pathname:nowPath } = useLocation();
  
  useEffect(() => {
    if ( nowPath === '/' || nowPath === '/blog') {
      setNeedHeader(true);
    } else {
      setNeedHeader(false);
    }
  }, [nowPath])


  return (
    <>
      <Navbar />
      { needHeader && <Header /> }
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
