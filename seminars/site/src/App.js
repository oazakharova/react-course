import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";

import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";

function App() {
  const products = [
    {
      id: "1",
      name: "Товар 1",
      description: "Подробное описание товара",
      price: 1000,
    },
    {
      id: "2",
      name: "Товар 2",
      description: "Подробное описание товара",
      price: 1000,
    },
    {
      id: "3",
      name: "Товар 3",
      description: "Подробное описание товара",
      price: 1000,
    },
    {
      id: "4",
      name: "Товар 4",
      description: "Подробное описание товара",
      price: 1000,
    },
    {
      id: "5",
      name: "Товар 5",
      description: "Подробное описание товара",
      price: 1000,
    },
    {
      id: "6",
      name: "Товар 6",
      description: "Подробное описание товара",
      price: 1000,
    },
  ];

  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> */}

          <Route path="/" element={<ListPage products={products} />} />
          <Route
            path="/products/:id"
            element={<DetailPage products={products} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
