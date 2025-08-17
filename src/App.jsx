import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Ticket from "./pages/Ticket";
import Payment from "./pages/Payment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-details/:slug" element={<Details />} />
        <Route path="/movies-details/:slug/ticket/:id" element={<Ticket />} />
        <Route
          path="/movies-details/:slug/ticket/:id/payment"
          element={<Payment />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
