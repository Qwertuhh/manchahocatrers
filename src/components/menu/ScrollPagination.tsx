import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface ScrollPaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  /** Category dropdown props */
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: Array<{ id: string; name: string }>;
  children: React.ReactNode;
  /** Distance from top to trigger pagination visibility */
  threshold?: number;
}

function ScrollPagination({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  selectedCategory,
  onCategoryChange,
  categories,
  children,
  threshold = 120,
}: ScrollPaginationProps) {
  const [showPagination, setShowPagination] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!childrenRef.current) return;

      const rect = childrenRef.current.getBoundingClientRect();

      const isNearTop = rect.top <= threshold;
      const isBottomAtTop = rect.bottom <= threshold;

      setShowPagination(isNearTop && !isBottomAtTop);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [threshold]);

  // Debugging: log pagination state
  console.log(
    "[ScrollPagination] currentPage, totalPages",
    currentPage,
    totalPages
  );

  const hasMultiplePages = totalPages > 1;

  return (
    <>
      {/* Always render children */}
      <div ref={childrenRef}>{children}</div>

      {/* Fixed pagination at the bottom that appears when content top reaches near top */}
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-50 transition-all duration-300",
          "md:bottom-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2",
          showPagination
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center bg-white shadow-lg border-t border-neutral-200 px-4 py-3 gap-4 md:bg-white md:rounded-lg md:border md:border-neutral-200 md:px-4 md:py-3">
          {hasMultiplePages ? (
            <button
              onClick={onPreviousPage}
              className="ibm-plex-mono-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden md:inline">Previous</span>
            </button>
          ) : (
            <div className="w-[96px]" />
          )}

          {/* Category dropdown in the center */}
          <div className="flex items-center gap-2 w-full text-xs md:text-sm">
            <span className="ibm-plex-mono-regular text-neutral-700 hidden md:inline">
              Category
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              aria-label="Select category"
              className="ibm-plex-mono-regular px-2 py-1 rounded-md border border-neutral-300 bg-white text-xs md:text-sm text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent max-w-[180px] truncate"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <span className="ibm-plex-mono-regular w-[40px] text-neutral-700">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          {hasMultiplePages ? (
            <button
              onClick={onNextPage}
              className="ibm-plex-mono-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          ) : (
            <div className="w-[96px]" />
          )}
        </div>
      </div>
    </>
  );
}

export { ScrollPagination };
