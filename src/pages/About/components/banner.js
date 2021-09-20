import React, { Component } from "react";

class banner extends Component {
  render() {
    return (
      <section className="section-banner">
        <img
          className="about-us-banner-img"
          src="/images/about/banner.png"
          alt="about us banner"
        />
        <p className="title">ABOUT US</p>
      </section>
    );
  }
}

export default banner;
