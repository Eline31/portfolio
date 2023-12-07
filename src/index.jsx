import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Homepage from "./pages/homepage/Homepage"
import Projects from "./pages/projects/Projects"
import CV from "./pages/cv/CV"
import Contact from "./pages/contact/Contact"
import Error from "./pages/error/Error"
import Footer from "./components/footer/Footer"
import ToTop from "./components/to-top-button/To-Top-Button"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/curriculumvitae" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToTop />
      <Footer />
    </Router>
  </React.StrictMode>
)
