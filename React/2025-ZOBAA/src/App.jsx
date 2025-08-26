import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Index from "@/pages";
import Destinations from "@/pages/Destinations";
import TourDetail from "@/pages/TourDetail";
import Cart from "@/pages/Cart";
import AuthIndex from "@/pages/auth/AuthIndex";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import MemberIndex from "@/pages/member/MemberIndex";
import Account from "@/pages/member/Account";
import Orders from "@/pages/member/Orders";
import Favorites from "@/pages/member/Orders";

import AOS from "aos";

function App() {
  // 註冊 AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      anchorPlacement: "center-bottom",
    });
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tour-detail" element={<TourDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<AuthIndex />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="/member/:memberId" element={<MemberIndex />}>
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
