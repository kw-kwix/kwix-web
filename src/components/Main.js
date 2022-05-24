import { Routes, Route } from "react-router-dom";

import "./bootstrap.css";
import "./styles.css";
import "./fontawesome-all.css";

import { Home } from "./Home";
import { Input } from "./Input";
import { Login } from "./Login";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Main() {
  return (
    <div data-spy="scroll" data-target=".fixed-top">
      <Nav></Nav>
      <Header></Header>

      <div id="services" className="basic-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}
