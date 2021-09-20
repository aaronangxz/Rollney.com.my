import React, { Component } from "react";

class getintouch extends Component {
  render() {
    return (
      <section className="section-getintouch">
        <div className="wrapper">
          <p className="title">GET IN TOUCH WITH US</p>

          <div className="two-item">
            <div>
              <input
                className="input"
                placeholder="YOUR NAME (REQUIRED)"
                type="text"
                id="name"
                name="name"
                required
                minlength="3"
                maxlength="30"
                size="10"
              />
              {/* <span className="underline"></span> */}
            </div>

            <div>
              <input
                className="input"
                placeholder="YOUR EMAIL (REQUIRED)"
                type="text"
                id="email"
                name="email"
                required
                minlength="4"
                maxlength="30"
                size="10"
              />
              {/* <span className="underline"></span> */}
            </div>
          </div>

          <div>
            <input
              className="input"
              placeholder="YOUR FEEDBACK"
              type="text"
              id="feedback"
              name="feedback"
              minlength="4"
              maxlength="100"
              size="10"
            />
            {/* <span className="underline"></span> */}
          </div>
          <button className="rollney-button">GET IN TOUCH</button>
        </div>
      </section>
    );
  }
}

export default getintouch;
