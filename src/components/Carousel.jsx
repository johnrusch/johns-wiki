// for local development
// import { Carousel } from "@material-tailwind/react";

// for vercel deployment
import pkg from "@material-tailwind/react";
const { Carousel } = pkg;

import { CarouselSlide } from "./CarouselSlide";
export function CarouselDefault({items, ...props}) {

  const renderSlides = (items) => {
    if (!items) return null;
    return items.map((item) => {
      return (
        <CarouselSlide
          item={{
            image: item.data.image,
            imageAlt: item.data.imageAlt,
            title: item.data.title,
            description: item.data.description,
            slug: item.slug,
            link: item.data.link,
          }}
          key={item.slug}
        />
      );
    });
  }

  return (
    <Carousel autoplay={true} loop={true} className="rounded-lg sm:h-65vh">
      {renderSlides(items)}
    </Carousel>
  );
}