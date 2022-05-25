import { Routes, Route } from "react-router-dom";

import "./bootstrap.css";
import "./styles.css";

import { Home } from "./Home";
import { Input } from "./Input";
import { Login } from "./Login";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { SignUp } from "./SignUp";
import { Recommend } from "./Recommend";

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
					<Route path="/signup" element={<SignUp />} />
					<Route path="/recommend" element={<Recommend />} />
				</Routes>
			</div>

			<Footer></Footer>
		</div>
	);
}
