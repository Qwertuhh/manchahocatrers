import { useEffect, useRef } from "react";

interface Review {
  name: string;
  content: string;
}

const reviews: Review[] = [
  {
    name: "Sofia P.",
    content: "I couldn't recommend Manchaho Catrers more highly. The food was delicious and the service was impeccable. They helped make my wedding day truly unforgettable.",
  },
  {
    name: "John D.",
    content: "I hired Manchaho Catrers for my corporate event and they exceeded all of my expectations. The food was amazing and the staff was so friendly and attentive. I would definitely use them again.",
  },
  {
    name: "Emily G.",
    content: "I recently used Manchaho Catrers for my baby shower and they were absolutely fantastic. The food was delicious and the presentation was beautiful. The staff was also very friendly and helpful. I would highly recommend them.",
  },
  {
    name: "Michael T.",
    content: "I was blown away by the quality of the food and service provided by Manchaho Catrers. They truly went above and beyond to make my event special. I would definitely use them again in the future.",
  },
  {
    name: "Sarah K.",
    content: "I recently used Manchaho Catrers for my birthday party and they were amazing. The food was delicious and the staff was so friendly and attentive. The presentation of the food was also beautiful. I would highly recommend them.",
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
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-full flex flex-col justify-between p-6 bg-stone-700 bg-opacity-5 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-md transform hover:scale-[1.02] transition-transform duration-300 ease-out group"
          >
            <p className="italic text-lg md:text-xl leading-relaxed h-full text-white mb-4 group-hover:text-amber-300 transition-colors duration-300 break-words overflow-hidden text-ellipsis max-h-[7.5rem]">
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
