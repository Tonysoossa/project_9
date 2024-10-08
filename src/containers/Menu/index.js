/* eslint-disable no-return-assign */

// NOTE LINK THREW SECTIONS CHANGED

import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

// NOTE Modif des redirection vers les sections lié

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        <a href="#ServicesContainer">Nos services</a>
      </li>
      <li>
        <a href="#EventsContainer">Nos réalisations</a>
      </li>
      <li>
        <a href="#PeoplesContainer">Notre équipe</a>
      </li>
    </ul>
    <Button
      title="contact"
      onClick={() => (window.document.location.hash = "#contact")}
    >
      Contact
    </Button>
  </nav>
);

export default Menu;
