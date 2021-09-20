import React, { Component } from "react";

class intro extends Component {
  render() {
    return (
      <section className="section-intro">
        <img src="/images/doodle01.png" alt="doodle01" />
        <img className="l-size" src="/images/doodle02.png" alt="doodle02" />
        <img className="zoom-size" src="/images/doodle03.png" alt="doodle03" />
        <p className="title">
          MALAYSIA NO.1
          <br />
          ORIGINAL CHIMNEY CAKE
        </p>
      </section>
    );
  }
}

export default intro;
