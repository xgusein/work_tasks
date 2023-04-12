import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Testimontals.css'

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/testi1-184x184.jpg" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum <br />
                dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div>
          <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/testi2-184x184.jpg" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum <br />
                dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div>
          <img src="https://bslthemes.com/ryancv/dark-demo/wp-content/uploads/2022/07/avatar2-184x184.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum <br />
                dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}