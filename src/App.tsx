import { HashRouter, Route, Routes } from "react-router-dom";

//test
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:id" element={<ShopItem />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
