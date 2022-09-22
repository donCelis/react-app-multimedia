import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Nav from "../components/Nav";
import Product from "../pages/Product";
import Example from "../pages/Example";

function Text({ content }) {
  return (
    <section className="container">
      <p className="text-light">{content}</p>;
    </section>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Example />} />
        <Route path="/about" element={<Text content="About" />} />
        <Route path="/contact" element={<Text content="Contact" />} />
        <Route path="*" element={<Text content="Page not found" />} />
      </Routes>
    </>
  );
}

export default App;
