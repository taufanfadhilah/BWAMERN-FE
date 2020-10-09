import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elemets/Button";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import numberFormat from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto padding pr-5" style={{ width: 550 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Take your great holiday and keep feel Homie
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "167%" }}
            >
              We provide anything you needs for your holidays, make it easy as
              you are at home.
              <br />
              Yay !!!
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Get Me
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src="/images/icons/ic_cities.svg"
                  alt={`${props.data.travelers} Travelers`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src="/images/icons/ic_bags.svg"
                  alt={`${props.data.treasures} Treasures`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  src="/images/icons/ic_destiny.svg"
                  alt={`${props.data.cities} cities`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                className="img-fluid position-absolute"
                alt="Room with couches"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                className="img-fluid position-absolute"
                alt="Room with couches frame"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
