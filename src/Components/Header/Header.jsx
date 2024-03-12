import '../Header/Header.scss';
import Logo from "../../assets/Logo/Logo.png"
function Header() {

  function handleLogoClick(e) {
    e.preventDefault();
    document.querySelector('.nav-toggle')?.classList.remove('open');
    document.querySelector('.menu-left')?.classList.remove('collapse');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleNavToggleClick() {
    document.querySelector('.nav-toggle')?.classList.toggle('open');
    document.querySelector('.menu-left')?.classList.toggle('collapse');
  }

  function handleMenuItemClick() {
    document.querySelector('.nav-toggle')?.classList.remove('open');
    document.querySelector('.menu-left')?.classList.remove('collapse');
  }

  return (
    <div>
      <header>
        <div className="headercontainer">
          <nav id="navigation">
            <div className="Logocontainer">
              <a to='/' className="logo" onClick={handleLogoClick}>
                    <img src={Logo} alt="" />
              </a>
            </div>

            <a aria-label="mobile menu" className="nav-toggle" onClick={handleNavToggleClick}>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul className="menu-left">
              <li>
                <a to="/" onClick={handleMenuItemClick}>
                  Home
                </a>
              </li>
              <li>
              <a to="/about" onClick={handleMenuItemClick}>
                  About
                </a>
              </li>
              <li>
              <a to="/project" onClick={handleMenuItemClick}>
                  Projects
                </a>
              </li>
              {/* <li>
              <a to="/contact" onClick={handleMenuItemClick}>
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      {/* Your remaining JSX content */}
    </div>
  );
}

export default Header;