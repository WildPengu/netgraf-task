import React from "react";
import "../styles/Baner.css";
import banerPhoto from "../images/baner1.png";

const Baner = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banerPhoto} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="baner-header">Twój nowy sklep</h2>
              <h2 className="baner-header">Sellingo.pl</h2>
              <p className="baner-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                repellat maxime dolorem saepe quis itaque dignissimos nulla
                tempore! Vel et error reprehenderit aut quos, fugiat deserunt
                laboriosam nobis aliquam minima expedita id magnam tempora
                excepturi perferendis! Cumque vitae recusandae inventore
                officiis enim impedit mollitia fuga!.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banerPhoto} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="baner-header">Twój nowy sklep</h2>
              <h2 className="baner-header">Sellingo.pl</h2>
              <p className="baner-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, non. Facere ducimus nihil veniam quisquam! Ut quisquam
                voluptas aperiam exercitationem dolorum possimus dolorem labore
                in?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banerPhoto} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="baner-header">Twój nowy sklep</h2>
              <h2 className="baner-header">Sellingo.pl</h2>
              <p className="baner-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore libero quod quae vero! Praesentium ipsum, ullam
                quibusdam laudantium ducimus doloremque et molestiae, animi a
                officia ex, itaque nam nisi iusto!
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Baner;
