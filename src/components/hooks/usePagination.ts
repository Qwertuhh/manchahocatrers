import { useState, useMemo, useEffect, useCallback } from "react";
import type { MenuItemWithId } from "@/types";

interface UsePaginationProps {
  items: MenuItemWithId[];
  itemsPerPage: number;
  dependencies?: unknown[];
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  currentItems: MenuItemWithId[];
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (page: number) => void;
}

function usePagination({
  items,
  itemsPerPage,
  dependencies = [],
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate pagination values
  const paginationValues = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const safeTotalPages = Math.max(totalPages, 0);

    // Ensure currentPage is always in range [0, safeTotalPages - 1]
    const normalizedPage = safeTotalPages
      ? ((currentPage % safeTotalPages) + safeTotalPages) % safeTotalPages
      : 0;

    const startIndex = normalizedPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      totalPages: safeTotalPages,
      currentItems,
      startIndex,
      endIndex,
      normalizedPage,
    };
  }, [items, currentPage, itemsPerPage]);

  // Reset to first page when items change
  useEffect(() => {
    setCurrentPage(0);
  }, [items, dependencies]);

  // Navigation functions (looped / wrap-around)
  const goToNextPage = useCallback(() => {
    const total = paginationValues.totalPages;
    if (!total) return;

    setCurrentPage((prev) => (((prev + 1) % total) + total) % total);
  }, [paginationValues.totalPages]);

  const goToPreviousPage = useCallback(() => {
    const total = paginationValues.totalPages;
    if (!total) return;

    setCurrentPage((prev) => (((prev - 1) % total) + total) % total);
  }, [paginationValues.totalPages]);

  const goToPage = useCallback(
    (page: number) => {
      const total = paginationValues.totalPages;
      if (!total) return;

      // Wrap any page index into the valid range using modulo
      const target = ((page % total) + total) % total;
      setCurrentPage(target);
    },
    [paginationValues.totalPages]
  );

  return {
    currentPage: paginationValues.normalizedPage,
    totalPages: paginationValues.totalPages,
    currentItems: paginationValues.currentItems,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
}

export { usePagination };
