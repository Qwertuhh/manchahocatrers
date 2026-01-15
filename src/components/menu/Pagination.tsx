import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  totalItems,
  onPreviousPage,
  onNextPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between items-center mt-6">
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
        <span className="text-neutral-600 font-mono">
          Page {currentPage + 1} of {totalPages}
        </span>
        <span className="text-neutral-500 text-sm ml-2">
          ({totalItems} items total)
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
  );
}

export { Pagination };