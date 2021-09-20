import React, { Component, Fragment } from "react";

class Intro extends Component {
  render() {
    return (
      <Fragment>
        <section className="section-banner">
          <p className="title mt-3">Hello there!</p>
          <p className="content">
            You are about to immerse yourself in joy and happiness!
          </p>
          <p className="title mt-2">READY FOR A ROLLING GOOD TIME?</p>
          <img src="/images/funbox/funbox-amb.jpg" alt="amb" />
          <iframe
            width="966"
            height="543"
            src="https://www.youtube.com/embed/l9kNkeonPxI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="content mt-2">
            Our Rollney Fun Box comes with two cones for you to share with your
            loved ones,
            <br /> or yourself only if you prefer to have double the fun ;)
            What’s more, you get to enjoy the DIY experience!
          </p>
        </section>

        <section className="section-step">
          <p className="title mt-2">THE DIY EXPERIENCE</p>
          <p className="content mt-2">
            Make your own Rollney following the steps below!
          </p>
          <iframe
            width="891"
            height="501"
            src="https://www.youtube.com/embed/lxDzk6eqFmw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="image-container">
            <div>
              <img src="/images/funbox/step1.png" alt="step-1" />
              <p className="content">
                STEP 1 <br /> Pour cornflakes into the chimney cake.
              </p>
            </div>
            <div>
              <img src="/images/funbox/step2.png" alt="step-2" />
              <p className="content">
                STEP 2 <br />
                Cut the pipping bag, <br /> pipe a layer of <br />
                Chantilly cream on top <br /> of the cornflakes
              </p>
            </div>
            <div>
              <img src="/images/funbox/step3.png" alt="step-3" />
              <p className="content">
                STEP 3 <br />
                Pour Oreo / lotus <br /> crumbs on top of the <br /> Chantilly
                cream.
              </p>
            </div>
            <div>
              <img src="/images/funbox/step4.png" alt="step-4" />
              <p className="content">
                STEP 4 <br />
                Pipe more Chantilly cream
              </p>
            </div>
            <div>
              <img src="/images/funbox/step5.png" alt="step-5" />
              <p className="content">
                STEP 5 <br />
                Assemble the topping, <br /> drizzle the sauce. <br /> (Water
                bath the lotus <br /> sauce to make it fluid)
              </p>
            </div>
            <div>
              <img src="/images/funbox/step6.png" alt="step-6" />
              <p className="content">
                STEP 6 <br />
                Sprinkle the crumbs
              </p>
            </div>
            <div>
              <img src="/images/funbox/step7.png" alt="step-7" />
              <p className="content">
                STEP 7 <br />
                Finish off by topping <br /> a biscuit on the <br /> chimney
                cake
              </p>
            </div>
            <div>
              <img src="/images/funbox/step8.png" alt="step-8" />
              <p className="content">Done!</p>
            </div>
          </div>
        </section>

        <section className="section-inside">
          <p className="title mt-2">WHAT’S INSIDE?</p>
          <p className="content mt-2">
            Be spoilt for choice with our Oreo and Cinnamon cone, chocolate and
            vanilla chantilly cream, <br />
            plus 7 different toppings from crumbles to cookies!
          </p>
          <iframe
            width="891"
            height="501"
            src="https://www.youtube.com/embed/sYdnuMz5vXM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <img src="/images/funbox/funbox-box.png" alt="amb" />

          <ol className="inside-list">
            <li>1. Fun Box</li>
            <li>2. Cinnamon Cone</li>
            <li>3. Oreo Cone</li>
            <li>4. Lotus Crumbs</li>
            <li>5. Cornflakes</li>
            <li>6. Oreo Crumbs</li>
            <li>7. Cornflakes</li>
            <li>8. Lotus Sauce</li>
            <li>9. Chocolate Sauce</li>
            <li>10. Lotus Biscuit</li>
            <li>11. Oreo Biscuit</li>
            <li>12. Vanilla Chantilly Cream</li>
            <li>13. Chocolate Chantilly Cream</li>
          </ol>
          <p className="content mt-2">
            What are you waiting for? Go get rolling! <br />
            Don’t be shy, share pictures of your Rolling Good Time with us using
            our hashtag <br /> #RollneyFunBox!
          </p>
          <p className="title mt-2">Enjoy the FUN & share the JOY!</p>
        </section>
      </Fragment>
    );
  }
}

export default Intro;
