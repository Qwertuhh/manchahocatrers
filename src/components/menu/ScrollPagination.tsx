import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface ScrollPaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  children: React.ReactNode;
  threshold?: number; // Distance from top to show/hide pagination (in pixels)
}

function ScrollPagination({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  children,
  threshold = 100,
}: ScrollPaginationProps) {
  const [showPagination, setShowPagination] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!childrenRef.current) return;

      const rect = childrenRef.current.getBoundingClientRect();

      // Show pagination when children's top is almost at the top of screen
      const isNearTop = rect.top <= threshold;

      // Hide pagination when children's bottom is at the top of screen
      const isBottomAtTop = rect.bottom <= threshold;

      // Show pagination when scrolling through the content
      setShowPagination(isNearTop && !isBottomAtTop);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Add resize listener
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [threshold]);

  if (totalPages <= 1) return null;

  return (
    <>
      {/* Children container */}
      <div ref={childrenRef}>{children}</div>

      {/* Fixed pagination that shows/hides based on scroll */}
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300",
          "md:bottom-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2",
          showPagination
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center bg-white shadow-lg border-t border-neutral-200 px-4 py-3 gap-4 md:bg-white md:rounded-lg md:border md:border-neutral-200 md:px-4 md:py-3">
          <button
            onClick={onPreviousPage}
            disabled={currentPage === 0}
            className={clsx(
              "ibm-plex-mono-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm md:px-4",
              currentPage === 0
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
            )}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden md:inline">Previous</span>
          </button>

          <div className="text-center">
            <span className="ibm-plex-mono-bold text-neutral-600 text-sm md:text-base">
              {currentPage + 1} of {totalPages}
            </span>
          </div>

          <button
            onClick={onNextPage}
            disabled={currentPage >= totalPages - 1}
            className={clsx(
              "ibm-plex-mono-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm md:px-4",
              currentPage >= totalPages - 1
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
            )}
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export { ScrollPagination };
