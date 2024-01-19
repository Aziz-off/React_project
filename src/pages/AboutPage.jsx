import React from "react";
import device from "../assets/device-pile.jpeg";

const AboutPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Смотрите на телевизоре
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Смотрите на Smart TV, PlayStation, Xbox, Chromecast, Apple TV, плеерах
          Blu-ray и других устройствах
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: "700px",
          overflow: "hidden",
        }}
      >
        <img
          src={device}
          alt="Device"
          style={{
            width: "50%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxt4rDHWKI1LjtGRqu5G49nrU5XYN4THRGXw&usqp=CAU"
          alt=""
          style={{
            width: "50%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <div
        style={{
          color: "white",
          textAlign: "center",
          margin: "20px",
        }}
      >
        <p>
          Наш веб-портал щедро предоставляет привилегию беспрепятственного
          наслаждения произведениями кинематографа и телевизионными сериалами в
          абсолютно бесплатном формате. Этот амбициозный интернет-ресурс был
          воплощением творческого гения группы изысканных и перспективных
          программистов, обретших свое виртуозное воплощение в 2012 году. С тех
          пор наш веб-сайт продолжает поддерживать ваше виртуозное погружение в
          мир киноискусства, обеспечивая исключительно бесплатный доступ к
          насыщенному медиа-контенту. Благодаря изысканной программной
          инженерии, наша команда дарит вам возможность наслаждаться богатством
          кинематографического и телевизионного наследия с непрерывной радостью.
          За годы своего существования наш виртуальный артефакт сохраняет свою
          оригинальность, предоставляя вам легальное и увлекательное погружение
          в захватывающий мир развлечений. Под надежным эгидой технологического
          волшебства, наш веб-портал остается надежным проводником в
          исключительном пространстве разнообразных кинематографических шедевров
          и захватывающих сериальных повестей. Всегда на шаг впереди, мы
          продолжаем совершенствоваться, расширяя горизонты вашего культурного
          опыта.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
