export function CarouselSlide({ item }) {
  const { image, imageAlt, title, description, slug, id } = item;
  return (
    <div className="relative h-full w-full">
      <a href={slug} key={id}>
        {image ? (
          <img
            src={image.src}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        ) : null}
        <div className="text-center text-4xl rounded-lg absolute ml-2 mr-2 mb-20 sm:ml-20 sm:mb-32 bottom-0 p-4 left-0 w-auto grid bg-black/30">
          {title}
          {description ? (
            <>
              <br />
              <br />
              <div className="text-lg text-start">{description}</div>
            </>
          ) : null}
        </div>
        <div className="text-center rounded-md absolute ml-20 mb-32 bottom-0 left-0 w-auto grid bg-black/50"></div>
      </a>
    </div>
  );
}
