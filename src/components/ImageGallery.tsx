import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "./MobileFrame";

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, idx) => (
              <div className="flex-[0_0_100%] min-w-0" key={idx}>
                <img
                  src={src}
                  alt={`${title} - ${idx + 1}`}
                  className="w-full h-72 object-cover cursor-pointer"
                  loading="lazy"
                  onClick={() => setFullScreen(true)}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Prev / Next Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 grid place-items-center rounded-full bg-background/80 backdrop-blur shadow text-foreground/80 hover:text-foreground"
        >
          <Icon name="chevron_left" className="text-[20px]" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 grid place-items-center rounded-full bg-background/80 backdrop-blur shadow text-foreground/80 hover:text-foreground"
        >
          <Icon name="chevron_right" className="text-[20px]" />
        </button>

        {/* Thumbnail Navigation */}
        <div className="absolute bottom-3 left-0 right-0 px-4 flex gap-2 overflow-x-auto hide-scrollbar z-10">
          {images.map((g, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition ${
                i === selectedIndex ? "border-primary" : "border-white/50 hover:border-white/80"
              }`}
            >
              <img src={g} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Full-Screen Preview */}
      {fullScreen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col justify-center">
          <button
            className="absolute top-6 right-6 text-white w-10 h-10 grid place-items-center bg-white/10 rounded-full"
            onClick={() => setFullScreen(false)}
          >
            <Icon name="close" className="text-[24px]" />
          </button>
          <img
            src={images[selectedIndex]}
            alt={title}
            className="w-full max-h-[80vh] object-contain"
          />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 text-white">
            <button
              onClick={() => scrollTo(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)}
              className="w-12 h-12 grid place-items-center bg-white/10 rounded-full"
            >
              <Icon name="chevron_left" className="text-[28px]" />
            </button>
            <button
              onClick={() => scrollTo(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)}
              className="w-12 h-12 grid place-items-center bg-white/10 rounded-full"
            >
              <Icon name="chevron_right" className="text-[28px]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
