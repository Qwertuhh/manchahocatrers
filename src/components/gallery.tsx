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
    src: "https://placehold.co/400x300/E0F2F7/000000?text=Image+1",
    alt: "Abstract image 1",
  },
  {
    src: "https://placehold.co/400x300/CFE2F3/000000?text=Image+2",
    alt: "Abstract image 2",
  },
  {
    src: "https://placehold.co/400x300/B3D9FF/000000?text=Image+3",
    alt: "Abstract image 3",
  },
  {
    src: "https://placehold.co/400x300/8ECDFC/000000?text=Image+4",
    alt: "Abstract image 4",
  },
  {
    src: "https://placehold.co/400x300/6BB8FF/000000?text=Image+5",
    alt: "Abstract image 5",
  },
  {
    src: "https://placehold.co/400x300/4993E0/000000?text=Image+6",
    alt: "Abstract image 6",
  },
  {
    src: "https://placehold.co/400x300/276DC1/000000?text=Image+7",
    alt: "Abstract image 7",
  },
  {
    src: "https://placehold.co/400x300/0547A1/000000?text=Image+8",
    alt: "Abstract image 8",
  },
];

function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId: number;

    const animateScroll = () => {
      if (container) {
        // Adjust scroll speed here. A slightly slower speed might look better for images.
        container.scrollLeft += 0.5;

        // If we've scrolled past the first set of duplicated images (half the total width)
        // reset to the beginning to create a seamless loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start the scrolling animation when the component mounts
    animationFrameId = requestAnimationFrame(animateScroll);

    // Cleanup function: Cancel the animation when the component unmounts
    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

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

      <div
        ref={scrollRef}
        // Tailwind classes for the scrolling container
        className="relative z-10 flex w-full overflow-x-scroll no-scrollbar whitespace-nowrap space-x-6 md:space-x-8 py-6 cursor-grab active:cursor-grabbing"
        // Applying a linear gradient mask to fade out images at the edges
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {/* Duplicate images to create the infinite loop effect */}
        {[...images, ...images].map((image: GalleryImage, index: number) => (
          <div
            key={index} // Using index as key is acceptable here since the list is static and not reordered
            className="flex-shrink-0 w-[300px] h-[225px] sm:w-[350px] sm:h-[262px] md:w-[400px] md:h-[300px] 
                       rounded-xl shadow-lg border border-gray-200 overflow-hidden 
                       transform hover:scale-[1.03] transition-transform duration-300 ease-out group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              // Optional: Add onerror to handle broken image links gracefully
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/400x300/cccccc/000000?text=Image+Error";
                e.currentTarget.alt = "Image failed to load";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
