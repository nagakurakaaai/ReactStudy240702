
function Header () {
    return(
        <>
            <header className="header">
                <div className="header__logo">
                    <a href=".">WDC</a>
                </div>
                <div className="header__nav">
                    <nav className="gnav">
                    <ul className="gnav__list">
                        <li className="gnav__item"><a className="gnav__link gnav__link--active" href="#about">about</a></li>
                        <li className="gnav__item"><a className="gnav__link" href="#speaker">speaker</a></li>
                        <li className="gnav__item"><a className="gnav__link" href="#session">session</a></li>
                    </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header