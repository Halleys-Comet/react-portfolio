import React from 'react';
import github from '../../assets/images/github.svg';
import linkedin from '../../assets/images/linkedin.svg';


function Footer() {

    return (
        <footer className="footer">
            <a
                href="https://github.com/Halleys-Comet"
                target="_blank"
                rel="noreferrer"
            >
                <img className="logo" alt="github logo" src={github} />
            </a>

            <a
                href="https://www.linkedin.com/in/john-halley-7a0305a0/"
                target="_blank"
                rel="noreferrer"
            >
                <img className="logo" alt="linked in logo" src={linkedin} />
            </a>

        </footer>
    );
}

export default Footer;