import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); // Call closeMenu function instead of just referencing it
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu(); // Call closeMenu function instead of just referencing it
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="data:image/png;base64,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"  />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;