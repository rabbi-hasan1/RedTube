import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Videos from "./pages/Videos";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Videos />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
