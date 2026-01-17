import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={onPreviousPage}
        className={clsx(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
          "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
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
        className={clsx(
          "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
          "bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer"
        )}
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export { Pagination };
