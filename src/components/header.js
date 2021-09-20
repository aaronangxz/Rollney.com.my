import React, { Component } from "react";

class header extends Component {
  render() {
    return (
      <div className="header">
        <img className="headerbg" src="/images/headerbg.png" alt="" />
        <div className="grid">
          <div className="header-logo-list">
            <a href="/">
              <img
                className="header-logo"
                src="/images/logo.png"
                alt="rollney"
              />
            </a>
            <img
              className="header-finest-logo"
              src="/images/finestlogo.png"
              alt="finestlogo"
            />
          </div>
          <div className="middle">
            <ul>
              <li>
                <a className="title" href="/">
                  HOME
                </a>
              </li>
              <li>
                <a className="title" href="/events">
                  EVENTS
                </a>
              </li>
              <li>
                <a className="title" href="/menu">
                  MENU
                </a>
              </li>
              {/* <li>
                <a className="title" href="/funbox">
                  #ROLLNEYFUNBOX
                </a>
              </li> */}
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a className="title" href="/opportunity">
                  BUSINESS OPPORTUNITY
                </a>
              </li>
              <li>
                <a className="title" href="/about">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className="title" href="/contact">
                  CONTACT US
                </a>
              </li>
              <li>
                <a
                  className="title"
                  href="https://rollneymalaysia.oddle.me/en_MY/"
                >
                  DELIVERY
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-logo-list mobile">
          <a href="/">
            <img className="header-logo" src="/images/logo.png" alt="rollney" />
          </a>
          <img
            className="header-finest-logo"
            src="/images/finestlogo.png"
            alt="finestlogo"
          />
        </div>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navigation-toggle"
          />
          <label htmlFor="navigation-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <nav className="navigation__nav">
            <ul>
              <li>
                <a className="title" href="/">
                  HOME
                </a>
              </li>
              <li>
                <a className="title" href="/about">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className="title" href="/menu">
                  OUR MENU
                </a>
              </li>
              {/* <li>
                <a className="title" href="/funbox">
                  #ROLLNEY FUN BOX
                </a>
              </li> */}
              <li>
                <a className="title" href="/events">
                  EVENTS & PROMOTION
                </a>
              </li>
              <li>
                <a className="title" href="/opportunity">
                  BUSINESS OPPORTUNITY
                </a>
              </li>

              <li>
                <a className="title" href="/contact">
                  CONTACT US
                </a>
              </li>
              <li>
                <a
                  className="title"
                  href="https://rollneymalaysia.oddle.me/en_MY/"
                >
                  DELIVERY
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default header;
