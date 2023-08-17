
import React from 'react';
import Slider from 'react-slick';

const Card = ({ images, title, name, rating, price }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="card">
     <div>
     <img src={images} alt={title} />
       {/* <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="images" />
          </div>
        ))}
      </Slider> */}
     <h2>{title}</h2>
      <p>{name}</p>
      <p>price: {price}</p>
      <p>Rating: {rating}</p>
     </div>
    </div>
  );
};

export default Card;
