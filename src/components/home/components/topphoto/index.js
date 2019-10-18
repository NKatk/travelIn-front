import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './topPhoto.css'

class TopPhoto extends React.Component {
    render() {
        const settings = {
            centerMode: true,
            centerPadding: '10%',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000
        };
        return (
            <div className='sliderTP'>
                <h3 className='sliderTitleTP'>Top photo</h3>
                <div className='sliderBlockTP'>
                    <Slider {...settings}>
                        {
                            this.props.photo.map((item, i)=>(
                                <div  key={i}>
                                    <img className='imageSliderTP' src={item.image} alt=""/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}

export {TopPhoto};