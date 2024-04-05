"use client";
import React, { useState } from "react";
import { data } from "../data/data.js";
import Slider from "react-slick";
import Image from "next/image";
import fakeImg from "../../../public/image/slick4.png";

const Carousel = () => {
  const [dummyData, setDummyData] = useState(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 m-auto">
      {" "}
      {/* Adjusted padding here */}
      <div className="mt-20 mr-6">
        <Slider {...settings}>
          {dummyData.map((data) => (
            <div
              key={data.id}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className=" w-[100%] h-[50px] border-b-2 flex justify-between items-center">
                <span className=" m-[7px] font-semibold">
                  {data.currentStatus}
                </span>
                <span className=" m-[7px] font-semibold">{data.CurrentId}</span>
              </div>

              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <Image
                  src={fakeImg}
                  alt="Landscape picture"
                  width={600}
                  height={300}
                  className="mt-[170px]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
