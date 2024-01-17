import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/Carousel-1.jpg";
import img2 from "../../assets/Carousel-2.webp";
import img3 from "../../assets/Carousel-3.jpeg";
import img4 from "../../assets/Carousel-4.jpeg"
import img5 from "../../assets/Carousel-5.jpeg"

const BoxPart = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const topMovies = [
    { id: 1, image: img1, title: "Top Movie 1" },
    { id: 2, image: img2, title: "Top Movie 2" },
    { id: 3, image: img3, title: "Top Movie 3" },
    { id: 4, image: img4, title: "Top Movie 3" },
    { id: 5, image: img5, title: "Top Movie 3" },
  ];

  return (
    <Slider {...settings}>
      {topMovies.map((movie) => (
        <div key={movie.id}>
          <div style={{ height: "550px", width: "80%", margin: "0 auto" }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BoxPart;