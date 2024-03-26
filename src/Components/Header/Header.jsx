import '../Header/Header.scss';
import Logo from "../../assets/Logo/Logo.png"
import {Link} from "react-router-dom";
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
              <Link to='/' className="logo" onClick={handleLogoClick}>
                    <img src={Logo} alt="" />
              </Link>
            </div>

            <a aria-label="mobile menu" className="nav-toggle" onClick={handleNavToggleClick}>
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul className="menu-left">
              <li>
                <Link to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li>
              <Link to="/about" onClick={handleMenuItemClick}>
                  About
                </Link>
              </li>
              <li>
              <Link to="/contact" onClick={handleMenuItemClick}>
                  Contact
                </Link>
              </li>
              <li>
              <Link to="/location" onClick={handleMenuItemClick}>
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
