import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollPaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onGoToPage: (page: number) => void;
  children: React.ReactNode;
}

function ScrollPagination({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  onGoToPage,
  children,
}: ScrollPaginationProps) {
  // Debugging: log pagination state
  console.log(
    "[ScrollPagination] currentPage, totalPages",
    currentPage,
    totalPages
  );

  return (
    <div>
      {/* Always render children */}
      <div>{children}</div>

      {/* Simple pagination controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={onPreviousPage}
            className="ibm-plex-mono-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden md:inline">Previous</span>
          </button>

          <div className="flex items-center gap-2 text-sm">
            <span className="ibm-plex-mono-regular text-neutral-700">Page</span>
            <select
              value={currentPage}
              onChange={(e) => onGoToPage(Number(e.target.value))}
              aria-label="Select page"
              className="ibm-plex-mono-regular px-2 py-1 rounded-md border border-neutral-300 bg-white text-xs text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
            >
              {Array.from({ length: totalPages }).map((_, index) => (
                <option key={index} value={index}>
                  {index + 1}
                </option>
              ))}
            </select>
            <span className="ibm-plex-mono-regular text-neutral-700">
              of {totalPages}
            </span>
          </div>

          <button
            onClick={onNextPage}
            className="ibm-plex-mono-bold flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
          >
            <span className="hidden md:inline">Next</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export { ScrollPagination };
