import React, { Component } from "react";

class outlets extends Component {
  render() {
    return (
      <section className="section-outlets">
        <div className="rollney-wrapper">
          <p className="title">Our Outlets</p>
          <div className="two-item">
            <img src="/images/map.png" alt="map" />
            <div>
              <ul>
                <li className="subtitle">SELANGOR</li>
                <li>
                  SUNWAY PYRAMID, PETALING JAYA
                  <br />
                  LG2-08
                </li>
                <li>
                  MY TOWN SHOPPING CENTRE, KUALA LUMPUR
                  <br />
                  B1-043A
                </li>
                <li>
                  CENTRAL I-CITY, SHAH ALAM
                  <br />
                  LG-K11
                </li>
                <li>
                  IOI CITY MALL, PUTRAJAYA
                  <br />
                  F-K11 (LEVEL 1)
                </li>
                <li>
                  MID VALLEY MEGAMALL, KUALA LUMPUR
                  <br />
                  LG-092!
                </li>
                <li>
                  1 UTAMA SHOPPING CENTRE, PETALING JAYA
                  <br />
                  LGK105
                </li>
                <li>
                  ANSA WALK, BUKIT BINTANG
                  <br />
                  LOT-S.2
                </li>
                <li>
                  SETIA CITY MALL, SHAH ALAM
                  <br />
                  LG-K03
                </li>

                <br />
                <br />

                {/* <li className="subtitle">KEDAH</li>
              <li>
                AMAN CENTRAL, ALOR SETAR
                <br />
                4-KO3A-B
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default outlets;
