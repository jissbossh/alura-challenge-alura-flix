import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Home from "./pages/Home";
import ErrorPage from "./pages/error-page";
import VerVideo from "./pages/VerVideo";
import AddFormulario from "./pages/AddVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayVideo from "./pages/PlayVideo";
import NewCategory from "./pages/AddCategory";
import Footer from './components/Footer';

function App() {
  return (
		<Router>
			<Header />
      <Footer />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/videos/:id" element={<VerVideo />} />
				<Route path="/play/:id" element={<PlayVideo/>} />
				<Route path="/add-video" element={<AddFormulario/>} />
				<Route path="/add-category" element={<NewCategory/>} />
				<Route path="*" element={<ErrorPage/>} />
			</Routes>
		</Router>
	);
}

export default App


