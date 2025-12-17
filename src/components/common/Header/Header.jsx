import { useState, useEffect } from "react"

import "./Header.css"
import logoBlue from "@/assets/images/logoBlue.png"
import logoPink from "@/assets/images/logoPink.png"
import logoGreen from "@/assets/images/logoGreen.png"
import logoWhite from "@/assets/images/logoWhite.png"
import logoViolet from "@/assets/images/logoViolet.png"
import logoYellow from "@/assets/images/logoYellow.png"
import myPageIcon from "@/assets/images/mypageIcon.png"
import searchWhite from "@/assets/images/searchWhite.png"
import searchBlack from "@/assets/images/searchBlack.png"

const Header = () => {

  const themes = {
    blue: { color: "rgb(147, 191, 213)", logo: logoBlue, search: searchWhite },
    pink: { color: "rgb(216, 172, 165)", logo: logoPink, search: searchWhite },
    green: { color: "rgb(142, 206, 170)", logo: logoGreen, search: searchWhite },
    violet: { color: "rgb(191, 165, 216)", logo: logoViolet, search: searchWhite },
    yellow: { color: "rgb(227, 226, 158)", logo: logoYellow, search: searchWhite },
    dark: { color: "rgb(0, 0, 0)", logo: logoWhite, search: searchBlack }
  }


  // 검색
  const [searchValue, setSearchValue] = useState("")
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  // 테마 설정
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme") || "blue"
    return savedTheme
  })
  const [isOpenThemeSelector, setIsOpenThemeSelector] = useState(false)

  // 테마 변경
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
    localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <header className="headerContainer">
      {/* 로고 */}
      <button className="headerLogoIcon">
        <img src={themes[currentTheme].logo} alt="Logo" className="headerLogo" />
      </button>
      <div className="emptyBox" />
      <div className="headerIconBox">
        {/* 검색 아이콘 */}
        <button className="headerIcon">
          <img src={themes[currentTheme].search} alt="Sch" className="headerIconImage" />
        </button>
        {/* 목록 아이콘 */}
        <button className="headerIcon">
          <img src={themes[currentTheme].search} alt="Lst" className="headerIconImage" />
        </button>
        {/* 테마 선택 아이콘 */}
        <div className="headerThemeIconWrapper">
          <button className="headerThemeIcon" onClick={() => setIsOpenThemeSelector(!isOpenThemeSelector)} />
          {/* 테마 선택 드롭다운 */}
          {isOpenThemeSelector && (
            <div className="themeSelector">
              {Object.entries(themes).map(([themeName, theme]) => (
                <button
                  key={themeName}
                  className="themeSelectorOption"
                  onClick={() => {
                    setCurrentTheme(themeName)
                    setIsOpenThemeSelector(false)
                  }}
                >
                  <div className="themeSelectorOptionColor" style={{ backgroundColor: theme.color }} />
                </button>
              ))}
            </div>
          )}
        </div>
        {/* 마이페이지 아이콘 */}
        <button className="headerIcon">
          <img src={myPageIcon} alt="My" className="headerIconImage" />
        </button>
      </div>
    </header>
  )
}

export default Header
