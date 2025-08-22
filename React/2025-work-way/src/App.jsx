import { Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "@/pages";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Plans from "@/pages/Plans";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import MemberIndex from "@/pages/member/MemberIndex";
import MemberProfile from "@/pages/member/MemberProfile";
import BookingHistory from "@/pages/member/BookingHistory";
import CareerPlanning from "@/pages/member/CareerPlanning";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/:memberId" element={<MemberIndex />}>
          <Route path="profile" element={<MemberProfile />} />
          <Route path="booking-history" element={<BookingHistory />} />
          <Route path="career-planning" element={<CareerPlanning />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
