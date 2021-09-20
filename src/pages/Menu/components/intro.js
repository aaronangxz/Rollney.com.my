import React, { Component } from "react";

class intro extends Component {
  render() {
    return (
      <div className="section-wrapper desktop">
        <section className="section-intro">
          <div className="two-item">
            <div className="intro">
              <p className="title">
                Our <br /> Menu
              </p>
              <p className="details">
                Ice Cream Series,
                <br /> Savoury Series,
                <br /> Kurtos Series
              </p>
            </div>
            <div className="image-list">
              <img
                className="image-left"
                src="/images/menu/three.png"
                alt="combined images"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default intro;
