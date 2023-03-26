import "./styles.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Favorites } from "./Favorites";
import { Basket } from "./Basket";
export default function App() {
  return (
    <BrowserRouter>
      <div></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}
