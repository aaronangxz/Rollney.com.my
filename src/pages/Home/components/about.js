import React, { Component } from "react";

class about extends Component {
  render() {
    return (
      <section className="section-about">
        <div className="rollney-wrapper">
          <div className="two-item">
            <div>
              <a href="/about">
                <p className="title">About</p>
                <p className="title2 txt-center">Rollney</p>
                <p className="details txt-center">
                  Rollney is more than just a dessert.
                </p>
              </a>
            </div>
            <div className="pt-18">
              <a href="/about">
                <p className="title txt-right">Whats a</p>
                <p className="title2 txt-center">Chimney</p>
                <p className="details txt-left">
                  Known as Kürtőskalács in Hungarian or Trdelník in Czech.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default about;
