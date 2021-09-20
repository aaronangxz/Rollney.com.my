import React, { Component } from "react";
class menu extends Component {
  render() {
    return (
      <section className="section-menu">
        <div className="rollney-wrapper">
          <p className="title">Our Menu</p>
          <a href="/menu">
            <div className="image-list">
              <div className="list">
                <div className="list-img">
                  <img
                    className="s-size"
                    src="/images/menu-03.png"
                    alt="menu-03"
                  />
                </div>
                <div className="details-wrapper">
                  <div className="details">
                    <img
                      className="doodle-size zoom-size"
                      src="/images/doodle03.png"
                      alt="doodle-03"
                    />
                    <p className="d-title">KURTOS SERIES</p>
                    <p className="d-content">
                      FRESHLY BAKED KURTOS TO SERVE YOU DAILY
                    </p>
                  </div>
                </div>
              </div>
              <div className="list">
                <div className="list-img">
                  <img
                    className="l-size"
                    src="/images/menu-02.png"
                    alt="menu-02"
                  />
                </div>
                <div className="details-wrapper">
                  <div className="details">
                    <img
                      className="doodle-size"
                      src="/images/doodle02.png"
                      alt="doodle-02"
                    />
                    <p className="d-title">ICE-CREAM SERIES</p>
                    <p className="d-content">
                      KURTOS TOPPED WITH VANILLA SOFT SERVE
                    </p>
                  </div>
                </div>
              </div>
              <div className="list">
                <div className="list-img">
                  <img
                    className="m-size"
                    src="/images/menu-01.png"
                    alt="menu-01"
                  />
                </div>
                <div className="details-wrapper">
                  <div className="details">
                    <img
                      className="doodle-size"
                      src="/images/doodle01.png"
                      alt="doodle-01"
                    />
                    <p className="d-title">SAVOURY SERIES</p>
                    <p className="d-content">
                      MORE THAN JUST A NORMAL ICE CREAM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default menu;
