import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Homepage from "./Pages/Homepage/Homepage"
import Projects from "./Pages/Projects/Projects"
import CV from "./Pages/CV/CV"
import Contact from "./Pages/Contact/Contact"
import Error from "./Pages/Error/Error"
import Footer from "./Components/Footer/Footer"

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
      <Footer />
    </Router>
  </React.StrictMode>
)
