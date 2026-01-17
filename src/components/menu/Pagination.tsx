/**
 * Copyright (c) 2026 Manchao Catrers, Kumar Jain
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
