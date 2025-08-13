import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
