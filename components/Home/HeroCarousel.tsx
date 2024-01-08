import React from "react";
import Image from "next/legacy/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroImages = [
  { imgUrl: "/hero.png", alt: "hero" },
  { imgUrl: "/hero1.png", alt: "hero1" },
  { imgUrl: "/hero2.png", alt: "hero2" },
  { imgUrl: "/hero3.png", alt: "hero3" },
  { imgUrl: "/hero4.png", alt: "hero4" },
  { imgUrl: "/hero5.png", alt: "hero5" },
];

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={3000}
      showArrows={false}
      showStatus={false}
    >
      {HeroImages.map((image) => (
        <Image
          src={image.imgUrl}
          alt={image.alt}
          key={image.alt}
          width={300}
          height={300}
          // layout="responsive" // Use "layout" attribute instead of "layout" property
          className="object-contain"
          priority
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
