import React, { Component } from "react";

class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="wrapper">
          <div className="logo-wrapper">
            <div className="left">
              <div className="top">
                <img className="logo" src="/images/logo.png" alt="rollney" />
                <a href="https://www.facebook.com/rollneymalaysia/">
                  <div className="social-list">
                    <img
                      className="social-image"
                      src="/images/fb.png"
                      alt="rollney facebook"
                    />
                    <p className="social-name">Rollney Malaysia</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/rollneymalaysia/">
                  <div className="social-list">
                    <img
                      className="social-image"
                      src="/images/ig.png"
                      alt="rollney ig"
                    />
                    <p className="social-name">rollneymalaysia</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="right">
              <img className="tv3" src="/images/tv3.png" alt="tv3" />
              <img className="tv2" src="/images/tv2.png" alt="tv2" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="left-text">
              <p className="footer-text">
                COPYRIGHT ROLLNEY MALAYSIA, ALL RIGHTS RESERVED ©2019.
              </p>
            </div>
            <div className="right-text">
              <p className="footer-text">HIGHLY RECOMMENDED BY</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;
