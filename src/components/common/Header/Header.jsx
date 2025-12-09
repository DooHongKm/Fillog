import { useState, useEffect, useRef } from "react"

import "./Header.css"
import logoBlue from "@/assets/images/logoBlue.png"
import logoPink from "@/assets/images/logoPink.png"
import logoGreen from "@/assets/images/logoGreen.png"
import logoWhite from "@/assets/images/logoWhite.png"
import logoViolet from "@/assets/images/logoViolet.png"
import logoYellow from "@/assets/images/logoYellow.png"
import myPageIcon from "@/assets/images/myPageIcon.png"
import searchIcon from "@/assets/images/searchIcon.png"

const Header = () => {

  const themes = [
    { name: "blue", color: "rgb(147, 191, 213)", logo: "logoBlue" },
    { name: "pink", color: "rgb(216, 172, 165)", logo: "logoPink" },
    { name: "green", color: "rgb(142, 206, 170)", logo: "logoGreen" },
    { name: "violet", color: "rgb(191, 165, 216)", logo: "logoViolet" },
    { name: "yellow", color: "rgb(227, 226, 158)", logo: "logoYellow" },
    { name: "white", color: "rgb(255, 255, 255)", logo: "logoWhite" }
  ]

  const [currentTheme, setCurrentTheme] = useState("blue")
  const [isOpenThemeSelector, setIsOpenThemeSelector] = useState(false)



  return (
    <header className="headerContainer">
      {/* 로고 */}
      <button className="headerLogoIcon">
        <img src={logo} alt="logo" className="headerLogo" />
      </button>
      <div className="emptyBox" />
      <div className="headerIconBox">
        {/* 검색 아이콘 */}
        <button className="headerIcon">
          <img src={searchIcon} alt="Sch" className="headerIconImage" />
        </button>
        {/* 목록 아이콘 */}
        <button className="headerIcon">
          <img src={searchIcon} alt="Lst" className="headerIconImage" />
        </button>
        {/* 테마 선택 아이콘 */}
        <button className="headerIcon">
          <img src={searchIcon} alt="Thm" className="headerIconImage" />
        </button>
        {/* 마이페이지 아이콘 */}
        <button className="headerIcon" onClick={() => setIsOpenThemeSelector(true)}>
          <img src={myPageIcon} alt="My" className="headerIconImage" />
        </button>
        {/* 테마 선택 드롭다운 */}
        {isOpenThemeSelector && (
          <div className="themeSelector">
            {themes.map((theme) => (
              <button
                key={theme.name}
                className="themeSelectorOption"
                onClick={() => setCurrentTheme(theme.name)}
              >
                <div className="themeSelectorOptionColor" style={{ backgroundColor: theme.color }} />
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
