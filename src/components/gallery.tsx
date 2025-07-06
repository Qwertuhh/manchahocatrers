import { useEffect, useRef } from "react";

// Define a type for your image data (just the URL in this case)
interface GalleryImage {
  src: string;
  alt: string; // Always good practice to include alt text for accessibility
}

// Array of image locations (URLs)
// Using placeholder images for demonstration.
// Replace these with your actual image URLs.
const images: GalleryImage[] = [
  {
    src: "gallery/IMG-20250621-WA0021.webp",
    alt: "IMG-20250621-WA0021",
  },
  {
    src: "gallery/IMG-20250621-WA0022.webp",
    alt: "IMG-20250621-WA0022",
  },
  {
    src: "gallery/IMG-20250621-WA0023.webp",
    alt: "IMG-20250621-WA0023",
  },
  {
    src: "gallery/IMG-20250621-WA0024.webp",
    alt: "IMG-20250621-WA0024",
  },
  {
    src: "gallery/IMG-20250621-WA0025.webp",
    alt: "IMG-20250621-WA0025",
  },
  {
    src: "gallery/IMG-20250621-WA0026.webp",
    alt: "IMG-20250621-WA0026",
  },
  {
    src: "gallery/IMG-20250621-WA0027.webp",
    alt: "IMG-20250621-WA0027",
  },
  {
    src: "gallery/IMG-20250621-WA0028.webp",
    alt: "IMG-20250621-WA0028",
  },
  {
    src: "gallery/IMG-20250621-WA0029.webp",
    alt: "IMG-20250621-WA0029",
  },
  {
    src: "gallery/IMG-20250621-WA0030.webp",
    alt: "IMG-20250621-WA0030",
  },
  {
    src: "gallery/IMG-20250621-WA0031.webp",
    alt: "IMG-20250621-WA0031",
  },
  {
    src: "gallery/IMG-20250621-WA0032.webp",
    alt: "IMG-20250621-WA0032",
  },
  {
    src: "gallery/IMG-20250621-WA0033.webp",
    alt: "IMG-20250621-WA0033",
  },
  {
    src: "gallery/IMG-20250621-WA0034.webp",
    alt: "IMG-20250621-WA0034",
  },
  {
    src: "gallery/IMG-20250621-WA0035.webp",
    alt: "IMG-20250621-WA0035",
  },
  {
    src: "gallery/IMG-20250621-WA0036.webp",
    alt: "IMG-20250621-WA0036",
  },
  {
    src: "gallery/IMG-20250621-WA0037.webp",
    alt: "IMG-20250621-WA0037",
  },
  {
    src: "gallery/IMG-20250621-WA0038.webp",
    alt: "IMG-20250621-WA0038",
  },
  {
    src: "gallery/IMG-20250621-WA0039.webp",
    alt: "IMG-20250621-WA0039",
  },
  {
    src: "gallery/IMG-20250621-WA0040.webp",
    alt: "IMG-20250621-WA0040",
  },
  {
    src: "gallery/IMG-20250621-WA0041.webp",
    alt: "IMG-20250621-WA0041",
  },
  {
    src: "gallery/IMG-20250621-WA0043.webp",
    alt: "IMG-20250621-WA0043",
  },
  {
    src: "gallery/IMG_20250623_204409.webp",
    alt: "IMG_20250623_204409",
  },
  {
    src: "gallery/IMG_20250623_204501.webp",
    alt: "IMG_20250623_204501",
  },
  {
    src: "gallery/IMG_20250623_204555.webp",
    alt: "IMG_20250623_204555",
  },
  {
    src: "gallery/IMG_20250623_204647.webp",
    alt: "IMG_20250623_204647",
  },
  {
    src: "gallery/Screenshot_20250623_204242.webp",
    alt: "Screenshot_20250623_204242",
  },
]

function Gallery() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Effect for the first scrolling row
  useEffect(() => {
    const container = scrollRef1.current;
    if (!container) return; // Exit if ref is not set

    let animationFrameId: number;

    const animateScroll = () => {
      container.scrollLeft += 0.5; // Scroll right
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Effect for the second scrolling row
  useEffect(() => {
    const container = scrollRef2.current;
    if (!container) return; // Exit if ref is not set

    let animationFrameId: number;

    const animateScroll = () => {
      container.scrollLeft -= 0.7; // Scroll left (slightly faster for variety)
      // If we've scrolled past the beginning of the duplicated images (which is 0 initially)
      // reset to the middle (where the duplication starts)
      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Initialize scroll position for the second row to start from the middle
    // so it can scroll left effectively from the duplicate section.
    // Use a setTimeout to ensure layout is calculated before setting scrollLeft
    const initialScrollTimeout = setTimeout(() => {
      if (container) {
        container.scrollLeft = container.scrollWidth / 2;
      }
    }, 50); // A small delay to ensure DOM is rendered

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(initialScrollTimeout); // Clear the timeout as well
    };
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-white overflow-hidden relative isolate">
      {/* Optional: Subtle background pattern for visual interest on white */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#00000011 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-stone-800 mb-12 drop-shadow-sm tracking-tight">
        Our <span className="text-stone-600">Gallery</span>
      </h2>

      {/* Gallery Rows Container */}
      <div className="flex flex-col gap-8">
        {" "}
        {/* Added gap between rows */}
        {/* First Scrolling Row */}
        <div
          ref={scrollRef1}
          className="relative z-10 flex w-full overflow-x-scroll no-scrollbar whitespace-nowrap space-x-6 md:space-x-8 py-6 cursor-grab active:cursor-grabbing"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Duplicate images for the infinite loop effect.
              Splitting the `images` array for clarity,
              but you could use `[...images, ...images]` for both if you prefer identical content.
          */}
          {[...images, ...images]
            .slice(0, (images.length / 2) * 2)
            .map((image: GalleryImage, index: number) => (
              <div
                key={`row1-${index}`} // Unique key for each item in this row
                className="flex-shrink-0 w-[300px] h-[225px] sm:w-[350px] sm:h-[262px] md:w-[400px] md:h-[300px] 
                         rounded-xl shadow-lg border border-gray-200 overflow-hidden 
                         transform hover:scale-[1.03] transition-transform duration-300 ease-out group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300 "
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x300/cccccc/000000?text=Image+Error";
                    e.currentTarget.alt = "Image failed to load";
                  }}
                />
              </div>
            ))}
        </div>
        {/* Second Scrolling Row */}
        <div
          ref={scrollRef2}
          className="relative z-10 flex w-full overflow-x-scroll no-scrollbar whitespace-nowrap space-x-6 md:space-x-8 py-6 cursor-grab active:cursor-grabbing"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Duplicate images for the infinite loop effect.
              Using the same `images` array but perhaps a different slice or order
              if you want different images in each row.
              For simplicity, I'm just duplicating the full array here too.
          */}
          {[...images, ...images].map((image: GalleryImage, index: number) => (
            <div
              key={`row2-${index}`} // Unique key for each item in this row
              className="flex-shrink-0 w-[300px] h-[225px] sm:w-[350px] sm:h-[262px] md:w-[400px] md:h-[300px] 
                         rounded-xl shadow-lg border border-gray-200 overflow-hidden 
                         transform hover:scale-[1.03] transition-transform duration-300 ease-out group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x300/cccccc/000000?text=Image+Error";
                  e.currentTarget.alt = "Image failed to load";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

