import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Header from "./common/Header";
import ErrorBoundary from "./common/ErrorBoundary";
import Footer from "./common/Footer";

function App() {
  return (
    <div className=" h-screen flex flex-col justify-between">
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
