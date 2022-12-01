import React, { } from "react";


function Nav() {
  

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> </span> Thomas Luna
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={'mx-2'} >
          <span onClick={() => handleClick()}>
              Portfolio
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Resume
            </span>
          </li>
          {
           
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;