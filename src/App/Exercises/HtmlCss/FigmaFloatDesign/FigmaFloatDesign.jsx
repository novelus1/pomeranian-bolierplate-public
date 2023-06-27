import React from 'react';
import './styles.css';
import wolf from './wolf.png';

const FigmaFloatDesign = () => {
  return (
    <>
      <div className="figma-float-design-exercise">
        <div className="text-first-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="first-floating-box">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className="text-gap-44" />
        <div className="first-text-wrapper">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </div>
        </div>
        <div className="text-gap-30" />
        <div className="second-text-wrapper">
          <div className="first-text-box">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img src={wolf} id="snow-wolf" />
        </div>
        <span className="second-floating-box">zapisz na poźniej</span>
        <div className="text-gap-47" />
        <p className="text-centered-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
        <div className="text-gap-60" />
        <div className="second-text-box">
          <span className="third-floating-box">zapisz na poźniej</span>
          <div className="text-gap-60" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestie a iaculis at. Dictum varius duis at
            consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
            phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
            etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
            dictum varius duis at consectetur lorem. Massa ultricies mi quis
            hendrerit.
          </p>
          <br />
          <p>
            Leo vel orci porta non pulvinar neque laoreet. In egestas erat
            imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
            sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
            blandit turpis cursus in. Ornare quam viverra orci sagittis eu.
            Metus dictum at tempor commodo ullamcorper a. Vestibulum mattis
            ullamcorper velit sed ullamcorper morbi. Amet massa vitae tortor
            condimentum lacinia quis. Quis enim lobortis scelerisque fermentum
            dui faucibus in ornare. Auctor elit sed vulputate mi.
          </p>
        </div>
        <div className="text-gap-60" />
        <div className="float-square-boxes">
          <div className="float-box-first" />
          <div className="float-box-second" />
          <div className="float-box-third" />
        </div>
      </div>
    </>
  );
};

export default FigmaFloatDesign;
