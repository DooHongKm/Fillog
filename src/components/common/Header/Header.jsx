import { useState, useEffect, useRef } from "react"
import "./Header.css"
import logo from "@/assets/images/logoBlue2.png"

const Header = () => {
  const [currentTheme, setCurrentTheme] = useState("light")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const themes = [
    { name: "일반", value: "light", color: "#3b82f6" },
    { name: "다크", value: "dark", color: "#ffffff" },
    { name: "그린", value: "pastel-green", color: "#22c55e" },
    { name: "핑크", value: "pastel-pink", color: "#ec4899" },
    { name: "노랑", value: "pastel-yellow", color: "#f59e0b" },
    { name: "바이올렛", value: "pastel-violet", color: "#8b5cf6" }
  ]

  useEffect(() => {
    // 초기 테마 설정 (localStorage에서 불러오기)
    const savedTheme = localStorage.getItem("theme") || "light"
    changeTheme(savedTheme)
  }, [])

  useEffect(() => {
    // 외부 클릭 시 드롭다운 닫기
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme)
    setCurrentTheme(theme)
    localStorage.setItem("theme", theme)
    setIsDropdownOpen(false)
  }

  const currentThemeData =
    themes.find((t) => t.value === currentTheme) || themes[0]

  return (
    <header className="Header">
      {/* <div className="Header-logo">
        <img src={logo} alt="logo" />
        Header
      </div>
      <div className="Header-theme-selector" ref={dropdownRef}>
        <button
          className="Header-theme-icon-btn"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-label="테마 선택"
        >
          <span
            className="Header-theme-icon"
            style={{ backgroundColor: currentThemeData.color }}
          />
        </button>
        {isDropdownOpen && (
          <div className="Header-theme-dropdown">
            {themes.map((theme) => (
              <button
                key={theme.value}
                className={`Header-theme-option ${
                  currentTheme === theme.value ? "active" : ""
                }`}
                onClick={() => changeTheme(theme.value)}
                aria-label={`${theme.name} 테마로 변경`}
              >
                <span
                  className="Header-theme-option-color"
                  style={{ backgroundColor: theme.color }}
                />
                <span className="Header-theme-option-name">{theme.name}</span>
              </button>
            ))}
          </div>
        )}
      </div> */}
    </header>
  )
}

export default Header
