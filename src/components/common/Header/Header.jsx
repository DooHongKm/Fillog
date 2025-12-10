import { useState, useEffect, useRef } from "react"

import "./Header.css"
import logoBlue from "@/assets/images/logoBlue.png"
import logoPink from "@/assets/images/logoPink.png"
import logoGreen from "@/assets/images/logoGreen.png"
import logoWhite from "@/assets/images/logoWhite.png"
import logoViolet from "@/assets/images/logoViolet.png"
import logoYellow from "@/assets/images/logoYellow.png"
import myPageIcon from "@/assets/images/myPageIcon.png"
import searchWhite from "@/assets/images/searchWhite.png"
import searchBlack from "@/assets/images/searchBlack.png"

const Header = () => {

  const themes = {
    blue: { color: "rgb(147, 191, 213)", logo: logoBlue, search: searchWhite },
    pink: { color: "rgb(216, 172, 165)", logo: logoPink, search: searchWhite },
    green: { color: "rgb(142, 206, 170)", logo: logoGreen, search: searchWhite },
    violet: { color: "rgb(191, 165, 216)", logo: logoViolet, search: searchWhite },
    yellow: { color: "rgb(227, 226, 158)", logo: logoYellow, search: searchWhite },
    white: { color: "rgb(255, 255, 255)", logo: logoWhite, search: searchBlack }
  }


  // 검색
  const [searchValue, setSearchValue] = useState("")
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  // 테마 설정
  const [currentTheme, setCurrentTheme] = useState("blue")
  const [isOpenThemeSelector, setIsOpenThemeSelector] = useState(false)


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
        {/* <button className="headerIcon">
          <img src={themes[currentTime].search} alt="Lst" className="headerIconImage" />
        </button> */}
        {/* 테마 선택 아이콘 */}
        {/* <button className="headerIcon" onClick={() => setIsOpenThemeSelector(true)}>
          <img src={themes[currentTime].search} alt="Thm" className="headerIconImage" />
        </button> */}
        {/* 마이페이지 아이콘 */}
        <button className="headerIcon">
          <img src={myPageIcon} alt="My" className="headerIconImage" />
        </button>
        {/* 테마 선택 드롭다운 */}
        {/* {isOpenThemeSelector && (
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
        )} */}
      </div>
    </header>
  )
}

export default Header
