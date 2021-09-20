import React, { Component } from "react";
import Slider from "react-slick";

class sliderOne extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };
    return (
      <section className="section-list-one">
        <Slider {...settings}>
          <div>
            <img src="/images/home/carousel1.jpg" alt="slide one" />
          </div>
          <div>
            <img src="/images/home/carousel2.jpg" alt="slide two" />
          </div>
          <div>
            <img src="/images/home/carousel3.jpg" alt="slide three" />
          </div>
        </Slider>
        {/* <p className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea obcaecati,
          rem expedita illo deserunt eius minus mollitia harum iste dolore
          alias! Delectus obcaecati ipsum reprehenderit provident, molestias
          natus quam consectetur Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempora delectus doloremque quasi nemo. Soluta
          rerum, eum, dolores inventore modi id mollitia magni similique
          accusantium, repudiandae dolore ratione blanditiis distinctio porro!
        </p> */}
      </section>
    );
  }
}

export default sliderOne;
