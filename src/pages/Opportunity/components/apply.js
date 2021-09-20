import React, { Component } from "react";

class apply extends Component {
  render() {
    return (
      <section className="section-apply">
        <div className="title-container">
          <p className="title">BE A PART OF THE MALAYSIA</p>
          <p className="title">NO.1 CHIMNEY CAKE STORE</p>
        </div>
        <div className="subtitle-container">
          <p className="subtitle">
            We are open for local and overseas franchise opportunity, <br />
            contact us if you are ready to start the next big trend.
          </p>
        </div>

        <div className="contact-container">
          <p>
            We look forward to <span>ROLL</span> our Chim<span>NEY</span> Cake
            with you.
          </p>
          <p>Contact us to find out.</p>
          <p>Email: rollney.leasing@gmail.com</p>
          <p>Contact: 010-8884420 (Jaymond)</p>
        </div>

        {/* <button className="rollney-button">
          <a
            href="mailto:rollneymalaysia@gmail.com?Subject=Hi%20Rollney"
            target="_top"
          >
            APPLY NOW
          </a>
        </button> */}
      </section>
    );
  }
}

export default apply;
