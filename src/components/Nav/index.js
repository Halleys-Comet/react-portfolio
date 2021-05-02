
import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Projects', 'Contact', 'Resume'];
    const {
        contactSelected,
        setContactSelected
      } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row navContainer">
      <nav>
        <ul className="flex-row">

          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>

          <li className={"mx-2"}>
          <a data-testid="portfolio" href="#portfolio" onClick={() => handleClick("Portfolio")}>
              Portfolio
            </a>
          </li>

          <li className={"mx-2"}>
          <a data-testid="contact" href="#contact" onClick={() => setContactSelected(true)}>
              Contact
            </a>
          </li>

          <li className={"mx-2"}>
          <a data-testid="resume" href="#resume" onClick={() => handleClick("Resume")}>
              Resume
            </a>
          </li>
          


        </ul>
      </nav>
    </header>
  );
}

export default Nav;