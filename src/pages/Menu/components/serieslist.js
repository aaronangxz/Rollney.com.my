import React, { Component } from "react";

class serieslist extends Component {
  render() {
    return (
      <section className="section-list">
        <div className="list">
          <img className="doodle" src="/images/doodle02.png" alt="ice cream" />
          <div className="sub-container">
            <p className="sub-head">ICE-CREAM SERIES</p>
            <p className="sub-content">Kurtos topped with vanilla soft serve</p>
          </div>

          <div className="two-item">
            <div className="left">
              <div>
                <img src="/images/menu/lh.png" alt="lotus-heaven" />
                <p className="sub-title">Lotus Heaven Cone</p>
              </div>
            </div>
            <div className="right-list">
              <div className="mobile-2">
                {/* <div className="inline-b">
                  <img src="/images/menu/icematcha.png" alt="ice-matcha" />
                  <span className="sub-span">Matcha Crunch Cone</span>
                </div> */}
                <div className="inline-b">
                  <img src="/images/menu/iceog.png" alt="ice-oreo" />
                  <span className="sub-span">OG Cone</span>
                </div>
                <div className="inline-b">
                  <img src="/images/menu/icehoney.png" alt="ice-honey" />
                  <span className="sub-span">Honey Pretz Cone</span>
                </div>
              </div>

              <div className="mobile-2">
                <div className="inline-b">
                  <img src="/images/menu/iceoreo.png" alt="ice-coconut" />
                  <span className="sub-span">Cookies & Cream Cone</span>
                </div>
                {/* <div className="inline-b">
                  <img src="/images/menu/icecoconut.png" alt="ice-coconut" />
                  <span className="sub-span">Coconut Cone</span>
                </div> */}
                <div className="inline-b">
                  <img
                    src="/images/menu/chocolategold.png"
                    alt="24k gold vanilla"
                  />
                  <span className="sub-span">24K Gold Vanilla</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <img
            className="doodle"
            src="/images/doodle02.png"
            alt="chocalate series"
          />
          <div className="sub-container">
            <p className="sub-head">CHOCOLATE SERIES</p>
            <p className="sub-content">More Than Just Ice Cream</p>
          </div>
          <div className="two-item">
            <div className="left">
              <div>
                <img
                  src="/images/menu/chocolateroyal.png"
                  alt="signature royal"
                />
                <p className="sub-title">Signature Royal Chocolate Cone</p>
              </div>
            </div>
            <div className="right-list">
              <div className="mobile-2">
                <div className="inline-b">
                  <img
                    src="/images/menu/chocolatealmond.png"
                    alt="almond cone"
                  />
                  <span className="sub-span">Chocolate Almond Cone</span>
                </div>

                <div className="inline-b">
                  <img
                    src="/images/menu/chocolate24k.png"
                    alt="24k gold royal"
                  />
                  <span className="sub-span">24k Gold Royal Chocolate</span>
                </div>
              </div>

              <div className="mobile-2">
                <div className="inline-b">
                  <img
                    src="/images/menu/chocolatebanana.png"
                    alt="chocolare banana cone"
                  />
                  <span className="sub-span">Chocolate Banana Cone</span>
                </div>
                <div className="inline-b">
                  <img
                    src="/images/menu/chocolatepeanut.png"
                    alt="chocolat peanut cone"
                  />
                  <span className="sub-span">Chocolate Peanut Cone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <img
            className="doodle zoom-size"
            src="/images/doodle03.png"
            alt="kurtos"
          />
          <div className="sub-container">
            <p className="sub-head">KURTOS SERIES</p>
            <p className="sub-content">
              Freshly baked kurtos to serve you daily
            </p>
          </div>
          <div className="two-item">
            <div className="left">
              <div>
                <img
                  className="cinamon-menu"
                  src="/images/menu/kurtoscinamon.png"
                  alt="kurtos cinamon"
                />
                <p className="sub-title">Original Cinnamon Kurtos</p>
              </div>
            </div>
            <div className="right-list">
              <div className="mobile-2">
                <div className="inline-b">
                  <img
                    src="/images/menu/kurtospeasand.png"
                    alt="kurtos peasand"
                  />
                  <span className="sub-span">Peanut Kurtos</span>
                </div>
                <div className="inline-b">
                  <img
                    src="/images/menu/kurtoscoconut.png"
                    alt="kurtos coconut"
                  />
                  <span className="sub-span">Coconut Kurtos</span>
                </div>
              </div>
              <div className="mobile-2">
                <div className="inline-b">
                  <img
                    src="/images/menu/kurtosmatcha.png"
                    alt="kurtos matcha"
                  />
                  <span className="sub-span">Matcha Kurtos</span>
                </div>
                <div className="inline-b">
                  <img
                    src="/images/menu/kurtosnutella.png"
                    alt="kurtos nutella"
                  />
                  <span className="sub-span">Nutella Almond Kurtos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <img className="doodle" src="/images/doodle01.png" alt="savoury" />
          <div className="sub-container">
            <p className="sub-head">SAVOURY SERIES</p>
            <p className="sub-content"></p>
          </div>
          <div className="two-item">
            <div className="left">
              <div>
                <img
                  src="/images/menu/chickencheese.png"
                  alt="chicken cheese"
                />
                <p className="sub-title">Chicken Slice & Cheese</p>
              </div>
            </div>
            <div className="right-list">
              {/* <div className="inline-b">
                <img
                  src="/images/menu/chickencheese.png"
                  alt="chicken cheese"
                />
                <p className="sub-title">Chicken Slice & Cheese</p>
              </div> */}
              <div className="inline-b">
                <img src="/images/menu/chickencurry.png" alt="chicken curry" />
                <span className="sub-span">Signature Honey Curry</span>
              </div>
              <div className="inline-b">
                <img src="/images/menu/chickenmayo.png" alt="chicken mayo" />
                <span className="sub-span">Black Pepper Mayo Chicken</span>
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          {/* <img
            className="doodle zoom-size"
            src="/images/doodle03.png"
            alt="kurtos"
          /> */}
          <div className="sub-container">
            <p className="sub-head">FRAPPE SERIES</p>
            <p className="sub-content">
            More Than Just Ice Cream
            </p>
          </div>
          <div className="two-item">
            <div className="left">
              <div>
                <img
                  className="frappe-menu"
                  src="/images/menu/ChocolatePeanutFrappe.png"
                  alt="chocolate peanut frappe"
                />
                <p className="sub-title">Chocolate Peanut Frappe</p>
              </div>
            </div>
            <div className="right-list">
              <div className="mobile-2">
                <div className="inline-b">
                  <img
                    src="/images/menu/CookiesCreamFrappe.png"
                    alt="cookies cream frappe"
                  />
                  <span className="sub-span">Cookies Cream Frappe</span>
                </div>
                <div className="inline-b">
                  <img
                    src="/images/menu/LotusHeavenFrappe.png"
                    alt="lotus heaven frappe"
                  />
                  <span className="sub-span">Lotus Heaven Frappe</span>
                </div>
              </div>
              <div className="mobile-2">
                <div className="inline-b">
                  <img
                    src="/images/menu/RoyalChocolateFrappe.png"
                    alt="royal chocolate frappe"
                  />
                  <span className="sub-span">Royal Chocolate Frappe</span>
                </div>
                <div className="inline-b">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default serieslist;
