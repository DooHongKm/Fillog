import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"
import "./index.css"

// 초기 테마 설정
const savedTheme = localStorage.getItem("theme") || "blue"
document.documentElement.setAttribute("data-theme", savedTheme)

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
