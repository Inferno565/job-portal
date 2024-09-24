import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RegCard from "./regCard";
// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md">
    <ChevronLeft className="h-6 w-6 text-gray-600" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md">
    <ChevronRight className="h-6 w-6 text-gray-600" />
  </button>
);

export default function CardFlow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cardData = [
    { title: "Google", path: "src/assets/Google.jpg" },
    { title: "Apple", path: "src/assets/Apple.png" },
    { title: "Accenture", path: "src/assets/accent.png" },
    { title: "Capegemini", path: "src/assets/cap.png" },
    { title: "HP", path: "src/assets/hp.png" },
    { title: "Ferrari", path: "src/assets/ferrari.png" },
    { title: "Airbus", path: "src/assets/Airbus.png" },
  ];

  return (
    <div className="relative md:p-10">
      <Card className="shadow-none border-0 bg-secondary ">
        <CardHeader>
          <CardTitle className=" text-3xl md:text-5xl text-center">
            Best Work Environments
          </CardTitle>
          <CardDescription className=" text-lg md:text-2xl text-center">
            Featured companies actively hiring{" "}
          </CardDescription>
        </CardHeader>
      </Card>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <RegCard
              className=""
              title={card.title}
              value={card.value}
              path={card.path}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
