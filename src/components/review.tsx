import { useEffect, useRef } from "react";

interface Review {
  name: string;
  content: string;
}

const reviews: Review[] = [
  {
    name: "Arihant",
    content:
      "Amazing food and prompt service! A true delight, every dish was perfectly prepared. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Riya",
    content:
      "Loved the variety and quality of dishes. The presentation was stunning too, making the meal an experience! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Akash",
    content:
      "Delicious food and incredibly quick delivery! My go-to place for a satisfying meal anytime. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Sana",
    content:
      "Every dish was perfection! An unforgettable culinary experience that truly exceeded my expectations. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Priya",
    content:
      "Fantastic ambiance and exceptional service. A must-visit for anyone looking for a memorable dining experience! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Rahul",
    content:
      "The flavors were incredible, a truly gourmet experience that left me wanting more. Highly recommended! Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Meera",
    content:
      "Consistently excellent food and friendly staff. Always a pleasure! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Vikram",
    content:
      "Impressed by the fresh ingredients and unique taste combinations. Superb! Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

function ReviewList() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId: number;

    const animateScroll = () => {
      if (container) {
        container.scrollLeft += 0.75;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-stone-900 overflow-hidden relative isolate">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff22 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center text-white mb-12 drop-shadow-md tracking-tight">
        What Our <span className="text-stone-200">Customers</span> Say
      </h2>

      <div
        ref={scrollRef}
        className="relative z-10 flex w-full overflow-x-scroll no-scrollbar whitespace-nowrap space-x-6 md:space-x-8 py-6 cursor-grab active:cursor-grabbing"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {[...reviews, ...reviews].map((review: Review, index: number) => (
          <div
            key={index}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-full flex flex-col justify-between p-6 bg-white bg-opacity-5 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-md transform hover:scale-[1.02] transition-transform duration-300 ease-out group"
          >
            {/* FIX: Removed 'whitespace-nowrap' and changed text color for readability */}
            {/* Added 'break-words' to ensure long words wrap */}
            <p className="italic text-lg md:text-xl leading-relaxed h-full text-black mb-4 group-hover:text-amber-300 transition-colors duration-300 break-words overflow-hidden text-ellipsis max-h-[7.5rem]">
              "{review.content}"
            </p>
            <p className="text-right text-sm md:text-base font-medium text-gray-400">
              — {review.name || "Anonymous"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewList;
