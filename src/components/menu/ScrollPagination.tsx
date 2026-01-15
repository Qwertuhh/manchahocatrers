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
          "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
          showPagination
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center bg-white rounded-lg shadow-lg border border-neutral-200 px-4 py-3 gap-4">
          <button
            onClick={onPreviousPage}
            disabled={currentPage === 0}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
              currentPage === 0
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-center">
            <span className="ibm-plex-mono-bold text-neutral-600">
              {currentPage + 1} of {totalPages}
            </span>
          </div>

          <button
            onClick={onNextPage}
            disabled={currentPage >= totalPages - 1}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
              currentPage >= totalPages - 1
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
            )}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export { ScrollPagination };
