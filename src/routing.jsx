import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/curriculumvitae" element={<CV />} />
        <Route path="/" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    <App />
  </React.StrictMode>
)
